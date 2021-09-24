import type {Language, NotApplicableString} from './Language';

import {EMPTY_ARRAY} from '../../../util/emptyVariables';

/**
 * @provider
 */
export class LanguageContainer<S extends | string | never, A extends | readonly string[] | never = never, >
    implements Language<S, A> {

    //region -------------------- Attributes --------------------

    public static readonly NOT_APPLICABLE: NotApplicableString = 'N/A';

    readonly #original;
    readonly #singleValue;
    readonly #arrayValue;

    //endregion -------------------- Attributes --------------------

    public constructor(value: | S | A,) {
        this.#original = value;
        if (value instanceof Array) {
            this.#singleValue = LanguageContainer.NOT_APPLICABLE;
            this.#arrayValue = value;
        } else {
            this.#singleValue = value;
            this.#arrayValue = EMPTY_ARRAY;
        }
    }

    public get original() {
        return this.#original;
    }

    public get(): | S | NotApplicableString
    public get<INDEX extends number = number, >(index: INDEX,): | NonNullable<A[INDEX]> | NotApplicableString
    public get<INDEX extends number = number, >(index?: INDEX,) {
        if (index == null)
            return this.#singleValue;
        return this.#arrayValue[index] ?? LanguageContainer.NOT_APPLICABLE;
    }


    public static newInstance<S extends string, >(value: S,): LanguageContainer<S>
    public static newInstance<A extends readonly string[], >(value: A,): LanguageContainer<never, A>
    public static newInstance<S extends string, A extends readonly string[], >(value: | S | A,): LanguageContainer<S, A>
    public static newInstance<S extends string, A extends readonly string[], >(value: | S | A,) {
        return new LanguageContainer(value);
    }

}
