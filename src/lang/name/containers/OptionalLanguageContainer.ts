import type {OptionalLanguage} from 'lang/name/containers/OptionalLanguage'
import type {EmptyArray}       from 'util/types/variables'

import {LanguageContainer}     from 'lang/name/containers/LanguageContainer'
import {isNullableEmptyString} from 'util/utilitiesMethods'

/**
 * @provider
 */
export class OptionalLanguageContainer<T, S extends T = T, A extends readonly T[] = EmptyArray, U extends boolean = boolean, >
    extends LanguageContainer<T, S, A>
    implements OptionalLanguage<T, S, A, U> {

    readonly #isUsed

    public constructor(value: | S | A,) {
        super(value)
        this.#isUsed = !isNullableEmptyString(this.get()) && !isNullableEmptyString(this.get(0)) && !isNullableEmptyString(this.get(2))
    }

    public get isUsed() {
        return this.#isUsed as U
    }

}

export namespace OptionalLanguageContainer {

    export function newInstance<T, U extends boolean, S extends T, >(value: T,): OptionalLanguage<T, S, never, U>
    export function newInstance<T, U extends boolean, A extends readonly T[], >(value: A,): OptionalLanguage<T, never, A, U>
    export function newInstance<T, U extends boolean, S extends T, A extends readonly T[], >(value: | S | A,): OptionalLanguage<T, S, A, U>
    export function newInstance<T, >(value: | T | readonly T[],): OptionalLanguage<T, T, readonly T[]> {
        return new OptionalLanguageContainer<T, T, readonly T[]>(value)
    }

}
