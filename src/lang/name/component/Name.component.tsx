import './Name.component.scss';

import {useState} from 'react';

import type {NameProperties} from './Name.properties';

import {StringContainer}    from '../../../util/StringContainer';
import NamePopoverComponent from './NamePopover.component';
import NameListComponent    from './NameList.component';

/**
 * A name component used to render the current language in text format
 * and the other languages (excluding the current one) in a simple list format.
 *
 * @param properties
 * @reactComponent
 * @see Name.toNameMap
 * @see ProjectLanguages.currentLanguage
 * @todo move the name structure into the popover
 */
export default function NameComponent({id, ...otherProperties}: NameProperties,) {
    const [doesDisplayPopover, setDoesDisplayPopover,] = useState(false);
    const {name,} = otherProperties;

    const englishName = name.english;
    const elementId = `${id}-${StringContainer.getInHtml(englishName)}`;
    const listId = `${elementId}-list`;

    return <div key={`${englishName} - container (${id})`} id={`${elementId}-container`} className="name-container">
        <NamePopoverComponent id={elementId} listId={listId} setDoesDisplayPopover={setDoesDisplayPopover} otherProperties={otherProperties}/>
        <NameListComponent name={name} id={elementId} listId={listId} doesDisplayPopover={doesDisplayPopover}/>
    </div>;
}
