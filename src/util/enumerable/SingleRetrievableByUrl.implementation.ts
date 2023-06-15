import type {BasicCompanionEnumDeclaration, EnumerableConstructor, Enumerable} from '@joookiwi/enumerable'

import type {ClassUsedInRoute}       from 'route/ClassUsedInRoute'
import type {SingleRetrievableByUrl} from 'util/enumerable/SingleRetrievableByUrl'
import type {NullOr}                 from 'util/types/nullable'

/**
 * A basic implementation of the {@link SingleRetrievableByUrl} with only the regex
 * and a way to retrieve the {@link EnumerableConstructor} to do operations on it
 */
export abstract class SingleRetrievableByUrlImplementation<const T extends Enumerable & ClassUsedInRoute, >
    implements SingleRetrievableByUrl<T> {

    //region -------------------- Fields --------------------

    public abstract readonly URL_REGEX: RegExp
    protected abstract readonly _enumerableConstructor: EnumerableConstructor<T, BasicCompanionEnumDeclaration<T, any>> & Iterable<T>
    protected readonly _prefix: NullOr<string> = null
    #values?: readonly T[]
    #prefix?: string

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    private get __prefix(): string {
        return this.#prefix ??= this._prefix ?? ''
    }

    private get __values(): readonly T[] {
        return this.#values ??= [...this._enumerableConstructor,]
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public getInUrl(url: string,): NullOr<T> {
        if (!this.URL_REGEX.test(url))
            return null

        const lowerCasedUrl = url.toLowerCase(),
            prefix = this.__prefix,
            valueFound = this.__values.find(it => lowerCasedUrl.includes(`/${prefix}${it.urlValue}/`.toLowerCase()))
        if (valueFound == null)
            throw new ReferenceError(`No "${this._enumerableConstructor.name}" was found by the url "${url}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------

}
