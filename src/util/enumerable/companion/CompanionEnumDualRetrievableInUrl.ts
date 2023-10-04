import type {CompanionEnumDeclaration, EnumerableConstructor} from '@joookiwi/enumerable'
import {CompanionEnum}                                        from '@joookiwi/enumerable'

import type {EnumerableUsedInRoute} from 'util/enumerable/Enumerable.types'

import {EMPTY_ARRAY, EMPTY_STRING} from 'util/emptyVariables'

/**
 * A {@link CompanionEnum} that is in the project url and can be retrievable
 * in it via a {@link RegExp regex} value by two values
 *
 * @see CompanionEnumRetrievableInUrl
 */
export abstract class CompanionEnumDualRetrievableInUrl<const ENUM extends EnumerableUsedInRoute,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR> {

    public abstract URL_REGEX: RegExp
    public abstract ALL_URL_REGEX: RegExp
    public abstract SINGLE_URL_REGEX: RegExp
    public readonly PREFIX: NullOrString = null

    /**
     * Get a selected type from an url or an {@link EMPTY_ARRAY empty array} if it doesn't exist
     *
     * @param url The url to find the values
     * @throws {ReferenceError} A fail-safe error on a value that was not found
     */
    public getValueInUrl(url: string,): readonly ENUM[] {
        if (!this.URL_REGEX.test(url,))
            return EMPTY_ARRAY

        if (this.ALL_URL_REGEX.test(url,))
            return this.values.toArray()

        const lowerCasedUrl = url.toLowerCase()
        const prefix = this.PREFIX?.toLowerCase() ?? EMPTY_STRING
        if (this.SINGLE_URL_REGEX.test(url,)) {
            const valueFound = this.values.find(it => lowerCasedUrl.includes(`/${prefix}${it.urlValue.toLowerCase()}/`,),)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" was found by the url "${url}".`,)
            return [valueFound,]
        }

        const values = this.values
        for (let enumerable1 of values)
            for (let enumerable2 of values)
                if (lowerCasedUrl.includes(`/${prefix}${enumerable1.urlValue.toLowerCase()},${enumerable2.urlValue.toLowerCase()}`,))
                    return [enumerable1, enumerable2,]

        throw new ReferenceError(`No "${this.instance.name}" was found by the url "${url}".`,)
    }

}
