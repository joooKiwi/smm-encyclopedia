import type {OptionalLanguage} from 'lang/name/containers/OptionalLanguage'

import {LanguageContainer}     from 'lang/name/containers/Language.container'
import {isNullableEmptyString} from 'util/utilitiesMethods'

export class OptionalLanguageContainer<const out T, const out S extends T = T, const out A extends readonly T[] = EmptyArray, const out U extends boolean = boolean, >
    extends LanguageContainer<T, S, A>
    implements OptionalLanguage<T, S, A, U> {

    readonly #isUsed

    public constructor(value: | S | A,) {
        super(value)
        this.#isUsed = !isNullableEmptyString(this.get()) && !isNullableEmptyString(this.get(0)) && !isNullableEmptyString(this.get(2))
    }

    public get isUsed(): U {
        return this.#isUsed as U
    }

}
