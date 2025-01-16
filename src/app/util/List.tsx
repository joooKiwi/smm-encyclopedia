import './List.scss'

import type {CollectionHolder} from '@joookiwi/collection'

import type {ClassWithEnglishName} from 'core/ClassWithEnglishName'
import type {ReactProperties}      from 'util/react/ReactProperties'

import {Empty} from 'util/emptyVariables'
import EMPTY_STRING = Empty.EMPTY_STRING

interface ListProperties<out T extends ClassWithEnglishName<string>, >
    extends ReactProperties {

    /** The partial identifier that is used in the list as well as in the list item */
    readonly 'partial-id': string

    /** The items to loop over and create the list */
    readonly items: CollectionHolder<T>

    /** Have a separator between each item in the list */
    readonly withSeparator?: boolean

    /** A method to create the child content from a value in the {@link items} */
    children(item: T,): NonNullReactElement

}

export default function List<const T extends ClassWithEnglishName<string>, >(properties: ListProperties<T>,) {
    const {items, withSeparator = false, children,} = properties
    const partialId = properties['partial-id']
    return <div className="customList-container bg-dark bg-gradient bg-opacity-10 py-2 px-2 mx-auto rounded">
        <ul id={`${partialId}-list`} className={`customList list-group list-group-flush${withSeparator ? ' withSeparator' : EMPTY_STRING} mb-0`}>{items.map((it, i,) =>
            <li key={`list item #${i}`} id={`${partialId}-${it.englishNameInHtml}-listItem`} className="list-group-item">{children(it,)}</li>,)
        }</ul>
    </div>
}
