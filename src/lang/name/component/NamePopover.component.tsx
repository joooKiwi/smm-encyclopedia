import type {Dispatch, SetStateAction} from 'react'
import Popover                         from 'bootstrap/js/dist/popover'
import {Component}                     from 'react'

import type {PopoverOrientation}                                       from 'bootstrap/popover/PopoverInstance.declaration'
import type {Name}                                                     from 'lang/name/Name'
import type {NamePopoverProperties, NamePopoverStates, NameProperties} from 'lang/name/component/Name.properties'
import type {ReactComponent}                                           from 'util/react/ReactComponent'

import TextComponent        from 'app/tools/text/TextComponent'
import TextPopover          from 'bootstrap/popover/TextPopover'
import {ProjectLanguages}   from 'lang/ProjectLanguages'
import {contentTranslation} from 'lang/components/translationMethods'

/**
 * @reactComponent
 */
export default class NamePopoverComponent
    extends Component<NamePopoverProperties, NamePopoverStates>
    implements ReactComponent {

    readonly #currentLanguageTextContent

    constructor(props: NamePopoverProperties,) {
        super(props,)
        this.#currentLanguageTextContent = ProjectLanguages.current.get<string>(this.otherProperties.name)
        this.state = {
            element: <TextComponent key={`${this.id} - temporary`} content={this.#currentLanguageTextContent}/>,
        }
    }

    public get id(): string {
        return this.props.id
    }

    public get listId(): string {
        return this.props.listId
    }

    public get setDoesDisplayPopover(): Dispatch<SetStateAction<boolean>> {
        return this.props.setDoesDisplayPopover
    }

    public get otherProperties(): Omit<NameProperties, 'id'> {
        return this.props.otherProperties
    }

    public get name(): Name<string> {
        return this.otherProperties.name
    }

    public get popoverOrientation(): | PopoverOrientation | undefined {
        return this.otherProperties.popoverOrientation
    }


    public override componentDidMount(): void {
        const id = this.id
        const setDoesDisplayPopover = this.setDoesDisplayPopover

        this.setState({
            element: <TextPopover key={`${id} - span popover`} elementId={id} option={createOption(this.listId, this.popoverOrientation, contentTranslation('In other languages'),)}
                                  {...this.otherProperties} on={({show: () => setDoesDisplayPopover(true), hide: () => setDoesDisplayPopover(false),})}>
                {this.#currentLanguageTextContent}
            </TextPopover>,
        })
    }

    public override render(): NonNullable<ReactElement> {
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
function createOption(elementId: string, popoverOrientation: | PopoverOrientation | undefined, title: string,): Partial<Popover.Options> {
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
