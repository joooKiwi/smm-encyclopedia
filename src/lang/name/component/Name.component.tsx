import './Name.component.scss';

import {Popover}                                 from 'bootstrap';
import {useEffect, useState}                     from 'react';
import type {NameProperties, PopoverOrientation} from './Name.properties';

import ContentTranslationComponent  from '../../components/ContentTranslationComponent';
import {EveryLanguages}             from '../../EveryLanguages';
import LanguageTranslationComponent from '../../components/LanguageTranslationComponent';
import SpanPopover                  from '../../../bootstrap/popover/SpanPopover';
import {StringContainer}            from '../../../entity/StringContainer';

/**
 * A name component used to render the current language in text format
 * and the other languages (excluding the current one) in a simple list format.
 *
 * @param properties
 * @reactComponent
 * @see Name.toNameMap
 * @see EveryLanguages.currentLanguage
 */
export default function NameComponent({popoverOrientation, id, name, ...otherProperties}: NameProperties,) {
    const [doesDisplaySpan, setDoesDisplaySpan,] = useState(false);
    const [doesDisplayPopover, setDoesDisplayPopover,] = useState(false);
    useEffect(() => {
        //FIXME remove this timeout and find a better implementation.
        const timeoutId = setTimeout(() => setDoesDisplaySpan(true), 1,);
        return () => clearTimeout(timeoutId);
    });

    const elementId = `${id}-${StringContainer.getInHtml(name.english)}`;
    const listId = `${elementId}-list`;
    const listElement = document.getElementById(listId)!;
    const languagesToDisplay = name.originalLanguages.filter(language => !language.isCurrentLanguage);
    const currentLanguageTextContent = EveryLanguages.currentLanguage.get(name);

    return <div key={`${elementId} - container`} id={`${elementId}-container`}>
        {doesDisplaySpan
            ? <ContentTranslationComponent>{translation =>
                <SpanPopover key={`${elementId} - span popover`} elementId={elementId} option={createOption(listElement, popoverOrientation, translation('In other languages'),)}
                             {...otherProperties} on={({show: () => setDoesDisplayPopover(true), hide: () => setDoesDisplayPopover(false),})}>
                    {currentLanguageTextContent}
                </SpanPopover>
            }</ContentTranslationComponent>
            : <span key={`${elementId} - temporary`}>{currentLanguageTextContent}</span>}
        <ul key={`${elementId} - list`} id={listId} className={`language-list ${doesDisplayPopover ? '' : 'visually-hidden'}`}>{
            [...name.toNameMap().entries()].filter(([language,],) => languagesToDisplay.includes(language))
                .map(([language, value,],) => {
                    const languageKey = `${EveryLanguages.currentLanguage.englishName} - ${language.englishName}`;

                    return <LanguageTranslationComponent key={`${elementId} - language translation component (${languageKey})`}>{translation =>
                        <li key={`${elementId} - list element (${languageKey})`} style={({'--language': `'${translation(language.englishName)} ${language.unionTrait} '`,})}>{value}</li>
                    }</LanguageTranslationComponent>;
                })
        }</ul>
    </div>;
}

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
