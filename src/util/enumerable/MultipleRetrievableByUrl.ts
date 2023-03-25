import type {Enumerable} from '@joookiwi/enumerable'

import type {ClassUsedInRoute}  from 'route/ClassUsedInRoute'
import type {ClassWithUrlRegex} from 'util/enumerable/ClassWithUrlRegex'

/**
 * A simple class implementing a way to retrieve every selected types from an url
 *
 * @see SingleRetrievableByUrl
 */
export interface MultipleRetrievableByUrl<T extends Enumerable & ClassUsedInRoute, >
    extends ClassWithUrlRegex {

    /**
     * Get a every selected type from an url or an {@link EMPTY_ARRAY empty array} if it doesn't exist
     *
     * @param url The url to find the type
     */
    getInUrl(url: string,): readonly T[]

}
