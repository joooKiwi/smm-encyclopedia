import {useState} from 'react'

import type {NameProperties} from 'lang/name/component/Name.properties'

import NamePopoverComponent from 'lang/name/component/NamePopover.component'
import NameListComponent    from 'lang/name/component/NameList.component'
import {StringContainer}    from 'util/StringContainer'

import getInHtml = StringContainer.getInHtml

/**
 * A name component used to render the current language in text format
 * and the other languages (excluding the current one) in a list format.
 *
 * @param properties
 * @reactComponent
 * @see Name.toNameMap
 * @see CompanionEnum_ProjectLanguages.current
 * @todo move the name structure into the popover
 */
export default function NameComponent({id, ...otherProperties}: NameProperties,) {
    const [doesDisplayPopover, setDoesDisplayPopover,] = useState(false,)
    const {name,} = otherProperties

    const elementId = `${id}-${getInHtml(name.english,)}`
    const listId = `${elementId}-list`

    return <div id={`${elementId}-container`} className="name-container">
        <NamePopoverComponent id={elementId} listId={listId} setDoesDisplayPopover={setDoesDisplayPopover} otherProperties={otherProperties}/>
        <NameListComponent name={name} id={elementId} listId={listId} doesDisplayPopover={doesDisplayPopover}/>
    </div>
}
