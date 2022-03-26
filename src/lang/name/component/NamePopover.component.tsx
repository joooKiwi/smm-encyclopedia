import {Popover}                                       from 'bootstrap';
import {Component, type Dispatch, type SetStateAction} from 'react';

import type {Name}                                                                         from '../Name';
import type {NamePopoverProperties, NamePopoverStates, NameProperties, PopoverOrientation} from './Name.properties';
import type {ReactComponent}                                                               from '../../../util/react/ReactComponent';

import ContentTranslationComponent from '../../components/ContentTranslationComponent';
import {ProjectLanguages}          from '../../ProjectLanguages';
import TextComponent               from '../../../app/tools/text/TextComponent';
import TextPopover                 from '../../../bootstrap/popover/TextPopover';

/**
 * @reactComponent
 */
export default class NamePopoverComponent
    extends Component<NamePopoverProperties, NamePopoverStates>
    implements ReactComponent {

    readonly #currentLanguageTextContent;

    constructor(props: NamePopoverProperties,) {
        super(props,);
        this.#currentLanguageTextContent = ProjectLanguages.currentLanguage.get<string>(this.otherProperties.name);
        this.state = {
            element: <TextComponent key={`${this.id} - temporary`} content={this.#currentLanguageTextContent}/>,
        };
    }

    public get id(): string {
        return this.props.id;
    }

    public get listId(): string {
        return this.props.listId;
    }

    public get setDoesDisplayPopover(): Dispatch<SetStateAction<boolean>> {
        return this.props.setDoesDisplayPopover;
    }

    public get otherProperties(): Omit<NameProperties, 'id'> {
        return this.props.otherProperties;
    }

    public get name(): Name<string> {
        return this.otherProperties.name;
    }

    public get popoverOrientation(): | PopoverOrientation | undefined {
        return this.otherProperties.popoverOrientation;
    }


    public componentDidMount(): void {
        const id = this.id;
        const setDoesDisplayPopover = this.setDoesDisplayPopover;

        this.setState({
            element: <ContentTranslationComponent>{translation =>
                <TextPopover key={`${id} - span popover`} elementId={id} option={createOption(this.listId, this.popoverOrientation, translation('In other languages'),)}
                             {...this.otherProperties} on={({show: () => setDoesDisplayPopover(true), hide: () => setDoesDisplayPopover(false),})}>
                    {this.#currentLanguageTextContent}
                </TextPopover>
            }</ContentTranslationComponent>,
        });
    }

    public render() {
        return this.state.element;
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
    };
    if (popoverOrientation != null)
        option.placement = popoverOrientation;

    return option;
}
