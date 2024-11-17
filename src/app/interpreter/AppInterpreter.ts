import type {CollectionHolder} from '@joookiwi/collection'
import type {Enumerable}       from '@joookiwi/enumerable'

import type {ClassWithEnglishName} from 'core/ClassWithEnglishName'
import type {ClassWithReference}   from 'core/ClassWithReference'
import type {Name}                 from 'lang/name/Name'

/**
 * An application interpreter when using a basic content as a {@link CollectionHolder Collection}
 *
 * @see AppInterpreterWithSimpleList
 * @see AppInterpreterWithCardList
 * @see AppInterpreterWithTable
 */
export interface AppInterpreter<out CONTENT extends Content = Content, > {

    /** Get all the content */
    get content(): CollectionHolder<CONTENT>

}

//TODO change the ClassWithReference<{nameContainer}> to be ClassHavingReferenceWithName
export type Content = Enumerable<any, any> & ClassWithEnglishName<string> & ClassWithReference<{ get nameContainer(): Name<string> }>
