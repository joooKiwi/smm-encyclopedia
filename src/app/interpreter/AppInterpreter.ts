import type {Enumerable} from '@joookiwi/enumerable/dist/types'

import type {ClassWithEnglishName} from 'core/ClassWithEnglishName'
import type {ClassWithReference}   from 'core/ClassWithReference'
import type {Name}                 from 'lang/name/Name'

/**
 * An application interpreter when using {@link AbstractAppWithInterpreter}
 * to encapsulate a content list.
 */
export interface AppInterpreter<out CONTENT extends Content = Content, > {

    /** Get all the content */
    get content(): readonly CONTENT[]

}

//TODO change the ClassWithReference<{nameContainer}> to be ClassHavingReferenceWithName
export type Content = Enumerable<any, any> & ClassWithEnglishName<string> & ClassWithReference<{ get nameContainer(): Name<string> }>
