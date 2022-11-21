import type {Enumerable} from '@joookiwi/enumerable/dist/types'

import type {ClassWithEnglishName} from '../../core/ClassWithEnglishName'
import type {ClassWithReference}   from '../../core/ClassWithReference'
import type {Name}                 from '../../lang/name/Name'

/**
 * An application interpreter when using {@link AbstractAppWithInterpreter}
 * to encapsulate a content list.
 */
export interface AppInterpreter<CONTENT extends Content = Content, > {

    /** Get the iterable of the content */
    get iterable(): IterableIterator<CONTENT>

}

//TODO change the ClassWithReference<{nameContainer}> to be ClassHavingReferenceWithName
export type Content = Enumerable<any, any> & ClassWithEnglishName<string> & ClassWithReference<{ get nameContainer(): Name<string> }>
//TODO find a better way to use the enumerable type than the complicated name
export type ValueByApp<APP extends AppInterpreter,> = ReturnType<APP['iterable']['next']>['value']
