import './List.scss'

import type {CollectionHolder} from '@joookiwi/collection'

import type {ClassWithEnglishName} from 'core/ClassWithEnglishName'
import type {ClassWithReference}   from 'core/ClassWithReference'
import type {Name}                 from 'lang/name/Name'

import {Empty}                     from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

type ElementWithEnglishNameAndReferenceWithName = & ClassWithEnglishName<string> & ClassWithReference<Name<string>>

interface ListProperties<out T extends ElementWithEnglishNameAndReferenceWithName, > {

    /** The partial identifier that is used in the list as well as in the list item */
    readonly partialId: string

    /** The items to loop over and create the list */
    readonly items: CollectionHolder<T>

    /** Have a separator between each item in the list */
    readonly withSeparator?: boolean

    /** The <i>(optional)</i> way to retrieve the {@link String} name*/
    nameRetriever?(item: T,): string

    /** A method to create the child content from a value in the {@link items} */
    children(item: T,): NonNullReactElement

}

const NAME_RETRIEVER_ON_ENGLISH: (reference: ClassWithEnglishName<string>,) => string = it => it.englishName

export default function List<const T extends ElementWithEnglishNameAndReferenceWithName, >
({partialId, items, withSeparator = false, nameRetriever = NAME_RETRIEVER_ON_ENGLISH, children,}: ListProperties<T>,) {
    return <div className="bg-dark bg-gradient bg-opacity-10 w-auto py-2 px-2 mx-auto rounded">
        <ol id={`${partialId}-list`} className={`list ${withSeparator ? 'withSeparator' : EMPTY_STRING} mb-0`}>{items.map(it =>
            <li key={`list item (${nameRetriever(it,)})`} id={`${partialId}-${it.englishNameInHtml}-listItem`} className="listItem">{children(it,)}</li>,)
        }</ol>
    </div>
}
