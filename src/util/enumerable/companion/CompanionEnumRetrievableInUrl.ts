import type {CompanionEnumDeclaration, EnumerableConstructor} from '@joookiwi/enumerable'
import {CompanionEnum}                                        from '@joookiwi/enumerable'

import type {EnumerableUsedInRoute} from 'util/enumerable/Enumerable.types'

import {getValueInUrl} from 'util/utilitiesMethods'

/**
 * A {@link CompanionEnum} that is in the project url and can be retrievable
 * in it via a {@link RegExp regex} value
 *
 * @see CompanionEnumDualRetrievableInUrl
 */
export abstract class CompanionEnumRetrievableInUrl<const ENUM extends EnumerableUsedInRoute,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR> {

    public abstract URL_REGEX: RegExp
    public readonly PREFIX: NullOrString = null

    /**
     * Get a selected type from an url or null if it doesn't exist
     *
     * @param url The url to find the value
     * @throws {ReferenceError} A fail-safe error on a value that was not found
     */
    public getValueInUrl(url: string,): NullOr<ENUM> {
        return getValueInUrl(url, this,)
    }

}
