import './Name.component.scss';

import {useEffect, useState} from 'react';

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
 */
export default function NameComponent({id, ...otherProperties}: NameProperties,) {
    const [doesDisplaySpan, setDoesDisplaySpan,] = useState(false);
    const [doesDisplayPopover, setDoesDisplayPopover,] = useState(false);
    useEffect(() => {
        //FIXME remove this timeout and find a better implementation.
        const timeoutId = setTimeout(() => setDoesDisplaySpan(true), 1,);
        return () => clearTimeout(timeoutId);
    });
    const {name,} = otherProperties;

    const elementId = `${id}-${StringContainer.getInHtml(name.english)}`;
    const listId = `${elementId}-list`;

    return <div key={`${elementId} - container`} id={`${elementId}-container`}>
        <NamePopoverComponent id={elementId} listId={listId} doesDisplaySpan={doesDisplaySpan} setDoesDisplayPopover={setDoesDisplayPopover} otherProperties={otherProperties}/>
        <NameListComponent name={name} id={elementId} listId={listId} doesDisplayPopover={doesDisplayPopover}/>
    </div>;
}
