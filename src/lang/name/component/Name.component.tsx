import {useState} from 'react'

import type {NameProperties} from 'lang/name/component/Name.properties'

import NamePopoverComponent from 'lang/name/component/NamePopover.component'
import NameListComponent    from 'lang/name/component/NameList.component'
import {StringContainer}    from 'util/StringContainer'

/**
 * A name component used to render the current language in text format
 * and the other languages (excluding the current one) in a simple list format.
 *
 * @param properties
 * @reactComponent
 * @see Name.toNameMap
 * @see ProjectLanguages.current
 * @todo move the name structure into the popover
 */
export default function NameComponent({id, ...otherProperties}: NameProperties,) {
    const [doesDisplayPopover, setDoesDisplayPopover,] = useState(false)
    const {name,} = otherProperties

    const englishName = name.english
    const elementId = `${id}-${StringContainer.getInHtml(englishName)}`
    const listId = `${elementId}-list`

    return <div key={`${englishName} - container (${id})`} id={`${elementId}-container`} className="name-container">
        <NamePopoverComponent key={`${englishName} - popover (${id})`} id={elementId} listId={listId} setDoesDisplayPopover={setDoesDisplayPopover} otherProperties={otherProperties}/>
        <NameListComponent key={`${englishName} - list (${id})`} name={name} id={elementId} listId={listId} doesDisplayPopover={doesDisplayPopover}/>
    </div>
}
