import type {Array, EmptyArray, NullOr} from '@joookiwi/type'
import {isArray}                        from '@joookiwi/collection'

import type {Language} from 'lang/name/containers/Language'

import {EMPTY_ARRAY} from 'util/emptyVariables'

export class LanguageContainer<const T,
    const S extends T = T,
    const A extends Array<T> = EmptyArray, >
    implements Language<T, S, A> {

    //region -------------------- Fields --------------------

    readonly #original: | S | A
    readonly #singleValue: NullOr<S>
    readonly #arrayValue: A | EmptyArray

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
