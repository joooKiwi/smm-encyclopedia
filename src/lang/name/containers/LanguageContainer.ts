import type {Language} from './Language';

import {EMPTY_ARRAY} from '../../../util/emptyVariables';

/**
 * @provider
 */
export class LanguageContainer<S extends | string | never, A extends | readonly string[] | never = never, >
    implements Language<S, A> {

    //region -------------------- Attributes --------------------

    readonly #original;
    readonly #singleValue;
    readonly #arrayValue;

    //endregion -------------------- Attributes --------------------

    public constructor(value: | S | A,) {
        this.#original = value;
        if (value instanceof Array) {
            this.#singleValue = '' as const;//FIXME this is set as an empty string, only temporary
            this.#arrayValue = value;
        } else {
            this.#singleValue = value;
            this.#arrayValue = EMPTY_ARRAY;
        }
    }

    public get original() {
        return this.#original;
    }

    protected get _singleValue(): S | '' {
        return this.#singleValue;
    }

    protected get _arrayValue(): A | readonly [] {
        return this.#arrayValue;
    }

    public get(): S
    public get<INDEX extends number = number, >(index: INDEX,): | NonNullable<A[INDEX]> | S
    public get<INDEX extends number = number, >(index?: INDEX,) {
        if (index == null)
            return this._singleValue;
        return this._arrayValue[index] ?? this._singleValue;
    }

}

export namespace LanguageContainer {

    export function newInstance<S extends string, >(value: S,): Language<S>
    export function newInstance<A extends readonly string[], >(value: A,): Language<never, A>
    export function newInstance<S extends string, A extends readonly string[], >(value: | S | A,): Language<S, A>
    export function newInstance<S extends string, A extends readonly string[], >(value: | S | A,): Language<S, A> {
        return new LanguageContainer<S, A>(value);
    }

}
