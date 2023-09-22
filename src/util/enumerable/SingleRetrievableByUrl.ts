import type {Enumerable} from '@joookiwi/enumerable/dist/types'

import type {ClassWithUrlRegex} from 'util/enumerable/ClassWithUrlRegex'
import type {ClassUsedInRoute}  from 'route/ClassUsedInRoute'

/**
 * A simple class implementing a way to retrieve a selected type from an url
 *
 * @see MultipleRetrievableByUrl
 */
export interface SingleRetrievableByUrl<T extends Enumerable & ClassUsedInRoute, >
    extends ClassWithUrlRegex {

    /**
     * Get a selected type from an url or null if it doesn't exist
     *
     * @param url The url to find the type
     */
    getInUrl(url: string,): NullOr<T>

}
