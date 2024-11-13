import type {Enumerable} from '@joookiwi/enumerable'
import type {Array}      from '@joookiwi/type'

import type {ClassWithEnglishName} from 'core/ClassWithEnglishName'
import type {ClassWithReference}   from 'core/ClassWithReference'
import type {Name}                 from 'lang/name/Name'

/**
 * An application interpreter when using a basic content as an {@link ReadonlyArray array}
 *
 * @see AppInterpreterWithSimpleList
 * @see AppInterpreterWithCardList
 * @see AppInterpreterWithTable
 */
export interface AppInterpreter<out CONTENT extends Content = Content, > {

    /** Get all the content */
    get content(): Array<CONTENT>

}

//TODO change the ClassWithReference<{nameContainer}> to be ClassHavingReferenceWithName
export type Content = Enumerable<any, any> & ClassWithEnglishName<string> & ClassWithReference<{ get nameContainer(): Name<string> }>
