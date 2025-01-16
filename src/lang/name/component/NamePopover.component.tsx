import type {NullableString}           from '@joookiwi/type'
import type {Dispatch, SetStateAction} from 'react'
import Popover                         from 'bootstrap/js/dist/popover'
import {Component}                     from 'react'

import type {NameProperties}  from 'lang/name/component/Name.properties'
import type {ReactComponent}  from 'util/react/ReactComponent'
import type {ReactProperties} from 'util/react/ReactProperties'
import type {ReactState}      from 'util/react/ReactState'

import TextComponent        from 'app/tools/text/TextComponent'
import TextPopover          from 'bootstrap/popover/TextPopover'
import {ProjectLanguages}   from 'lang/ProjectLanguages'
import {contentTranslation} from 'lang/components/translationMethods'

import Companion = ProjectLanguages.Companion

interface NamePopoverProperties
    extends ReactProperties {

    readonly id: string

    readonly listId: string

    readonly setDoesDisplayPopover: Dispatch<SetStateAction<boolean>>

    readonly otherProperties: Omit<NameProperties, 'id'>

}

interface NamePopoverStates
    extends ReactState {

    readonly element: NonNullReactElement

}

/** @reactComponent */
export default class NamePopoverComponent
    extends Component<NamePopoverProperties, NamePopoverStates>
    implements ReactComponent {

    //region -------------------- Fields --------------------

    readonly #currentLanguageTextContent

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(props: NamePopoverProperties,) {
        super(props,)
        this.#currentLanguageTextContent = Companion.current.get<string>(props.otherProperties.name,)
        this.state = {
            element: <TextComponent key={`${this.props.id} - temporary`} content={this.#currentLanguageTextContent}/>,
        }
    }

    //endregion -------------------- Constructor --------------------

    public override componentDidMount(): void {
        const properties = this.props
        const id = properties.id
        const otherProperties = properties.otherProperties
        const setDoesDisplayPopover = properties.setDoesDisplayPopover

        this.setState({
            element: <TextPopover key={`${id} - span popover`} elementId={id} option={createOption(properties.listId, otherProperties.popoverOrientation, contentTranslation('In other languages',),)}
                                  {...otherProperties} on={({show: () => setDoesDisplayPopover(true), hide: () => setDoesDisplayPopover(false),})}>
                {this.#currentLanguageTextContent}
            </TextPopover>,
        })
    }

    public override render(): NonNullReactElement {
        return this.state.element
    }

}

/**
 * Create the option for the name popover
 *
 * @param elementId the element id
 * @param popoverOrientation the {@link Popover popover} orientation
 * @param title popover title
 */
function createOption(elementId: string, popoverOrientation: NullableString<PossiblePopoverOrientation>, title: string,): Partial<Popover.Options> {
    const option: Partial<Popover.Options> = {
        title: title,
        content: document.getElementById(elementId)!,
        html: true,
        trigger: 'hover focus',
    }
    if (popoverOrientation != null)
        option.placement = popoverOrientation

    return option
}
