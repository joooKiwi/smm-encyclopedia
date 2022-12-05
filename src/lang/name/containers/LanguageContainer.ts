import type {Language}   from 'lang/name/containers/Language'
import type {NullOr}     from 'util/types/nullable'
import type {EmptyArray} from 'util/types/variables'

import {EMPTY_ARRAY} from 'util/emptyVariables'

/**
 * @provider
 */
export class LanguageContainer<T, S extends T = T, A extends readonly T[] = EmptyArray, >
    implements Language<T, S, A> {

    //region -------------------- Fields --------------------

    readonly #original
    readonly #singleValue
    readonly #arrayValue

    //endregion -------------------- Fields --------------------

    public constructor(value: | S | A,) {
        this.#original = value
        if (value instanceof Array) {
            this.#singleValue = null
            this.#arrayValue = value
        } else {
            this.#singleValue = value
            this.#arrayValue = EMPTY_ARRAY
        }
    }

    public get original() {
        return this.#original
    }

    protected get _singleValue(): NullOr<S> {
        return this.#singleValue
    }

    protected get _arrayValue(): | A | EmptyArray {
        return this.#arrayValue
    }

    public get(): S
    public get<INDEX extends number = number, >(index: INDEX,): | NonNullable<A[INDEX]> | S
    public get<INDEX extends number = number, >(index?: INDEX,) {
        if (index == null)
            return this._singleValue ?? this._arrayValue[0]
        return this._arrayValue[index] ?? this._singleValue
    }

}

export namespace LanguageContainer {

    export function newInstance<T, S extends T, >(value: T,): Language<T, S, never>
    export function newInstance<T, A extends readonly T[], >(value: A,): Language<T, never, A>
    export function newInstance<T, S extends T, A extends readonly T[], >(value: | T | A,): Language<T, S, A>
    export function newInstance<T, >(value: | T | readonly T[],): Language<T, T, readonly T[]> {
        return new LanguageContainer<T, T, readonly T[]>(value)
    }

}
