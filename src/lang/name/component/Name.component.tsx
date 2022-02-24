import './Name.component.scss';

import type {Dispatch, SetStateAction} from 'react';
import {useEffect, useState}           from 'react';
import {Popover}                       from 'bootstrap';

import type {Name}                               from '../Name';
import type {NameProperties, PopoverOrientation} from './Name.properties';

import ContentTranslationComponent  from '../../components/ContentTranslationComponent';
import LanguageTranslationComponent from '../../components/LanguageTranslationComponent';
import {ProjectLanguages}           from '../../ProjectLanguages';
import {StringContainer}            from '../../../util/StringContainer';
import TextComponent                from '../../../app/tools/text/TextComponent';
import TextPopover                  from '../../../bootstrap/popover/TextPopover';

/**
 * A name component used to render the current language in text format
 * and the other languages (excluding the current one) in a simple list format.
 *
 * @param properties
 * @reactComponent
 * @see Name.toNameMap
 * @see ProjectLanguages.currentLanguage
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

    return <div key={`${elementId} - container`} id={`${elementId}-container`}>
        {createTextComponent(name, elementId, listId, doesDisplaySpan, setDoesDisplaySpan, setDoesDisplayPopover, popoverOrientation, otherProperties,)}
        {createListComponent(name, elementId, listId, doesDisplayPopover,)}
    </div>;
}

function createTextComponent(name: Name<string>, elementId: string, listId: string, doesDisplaySpan: boolean, setDoesDisplaySpan: Dispatch<SetStateAction<boolean>>, setDoesDisplayPopover: Dispatch<SetStateAction<boolean>>, popoverOrientation: | PopoverOrientation | undefined, otherProperties: Omit<NameProperties, 'popoverOrientation' | 'id' | 'name'>) {
    const listElement = document.getElementById(listId)!;
    const currentLanguageTextContent = ProjectLanguages.currentLanguage.get<string>(name);

    return doesDisplaySpan
        ? <ContentTranslationComponent>{translation =>
            <TextPopover key={`${elementId} - span popover`} elementId={elementId} option={createOption(listElement, popoverOrientation, translation('In other languages'),)}
                         {...otherProperties} on={({show: () => setDoesDisplayPopover(true), hide: () => setDoesDisplayPopover(false),})}>
                {currentLanguageTextContent}
            </TextPopover>
        }</ContentTranslationComponent>
        : <TextComponent key={`${elementId} - temporary`} content={currentLanguageTextContent}/>;
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


function createListComponent(name: Name<string>, elementId: string, listId: string, doesDisplayPopover: boolean,) {
    const languagesToDisplay = name.originalLanguages.filter(language => !language.isCurrentLanguage);

    return <ul key={`${elementId} - list`} id={listId} className={`language-list ${doesDisplayPopover ? '' : 'visually-hidden'}`}>{
        [...name.toNameMap().entries()].filter(([language,],) => languagesToDisplay.includes(language))
            .map(([language, value,],) => {
                const languageKey = `${ProjectLanguages.currentLanguage.englishName} - ${language.englishName}`;

                return <LanguageTranslationComponent key={`${elementId} - language translation component (${languageKey})`}>{translation =>
                    <li key={`${elementId} - list element (${languageKey})`} style={({'--language': `'${translation(language.englishName)} ${language.unionTrait} '`,})}>
                        <TextComponent content={value}/>
                    </li>
                }</LanguageTranslationComponent>;
            })
    }</ul>;
}
