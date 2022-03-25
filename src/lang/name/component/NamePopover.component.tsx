import {Popover} from 'bootstrap';

import type {NamePopoverProperties, PopoverOrientation} from './Name.properties';

import ContentTranslationComponent from '../../components/ContentTranslationComponent';
import {ProjectLanguages}          from '../../ProjectLanguages';
import TextComponent               from '../../../app/tools/text/TextComponent';
import TextPopover                 from '../../../bootstrap/popover/TextPopover';

/**
 * @reactComponent
 */
export default function NamePopoverComponent({id, listId, doesDisplaySpan, setDoesDisplayPopover, otherProperties,}: NamePopoverProperties,) {
    const {name, popoverOrientation,} = otherProperties;
    const listElement = document.getElementById(listId)!;
    const currentLanguageTextContent = ProjectLanguages.currentLanguage.get<string>(name);

    return doesDisplaySpan
        ? <ContentTranslationComponent>{translation =>
            <TextPopover key={`${id} - span popover`} elementId={id} option={createOption(listElement, popoverOrientation, translation('In other languages'),)}
                         {...otherProperties} on={({show: () => setDoesDisplayPopover(true), hide: () => setDoesDisplayPopover(false),})}>
                {currentLanguageTextContent}
            </TextPopover>
        }</ContentTranslationComponent>
        : <TextComponent key={`${id} - temporary`} content={currentLanguageTextContent}/>;
}

/**
 * Create the option for the name popover
 *
 * @param element the element
 * @param popoverOrientation the {@link Popover popover} orientation
 * @param title popover title
 */
function createOption(element: HTMLElement, popoverOrientation: | PopoverOrientation | undefined, title: string,): Partial<Popover.Options> {
    const option: Partial<Popover.Options> = {
        title: title,
        content: element,
        html: true,
        trigger: 'hover focus',
    };
    if (popoverOrientation != null)
        option.placement = popoverOrientation;

    return option;
}
