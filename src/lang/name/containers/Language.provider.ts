import type {Language}         from 'lang/name/containers/Language'
import type {OptionalLanguage} from 'lang/name/containers/OptionalLanguage'

import {LanguageContainer}         from 'lang/name/containers/Language.container'
import {OptionalLanguageContainer} from 'lang/name/containers/OptionalLanguage.container'

export function newLanguage<const T, const S extends T, >(value: T,): Language<T, S, never>
export function newLanguage<const T, const A extends readonly T[], >(value: A,): Language<T, never, A>
export function newLanguage<const T, S extends T, A extends readonly T[], >(value: | T | A,): Language<T, S, A>
export function newLanguage<const T, >(value: | T | readonly T[],): Language<T, T, readonly T[]> {
    return new LanguageContainer<T, T, readonly T[]>(value,)
}

export function newOptionalLanguage<const T, const U extends boolean, const S extends T, >(value: T,): OptionalLanguage<T, S, never, U>
export function newOptionalLanguage<const T, const U extends boolean, const A extends readonly T[], >(value: A,): OptionalLanguage<T, never, A, U>
export function newOptionalLanguage<const T, const U extends boolean, const S extends T, const A extends readonly T[], >(value: | S | A,): OptionalLanguage<T, S, A, U>
export function newOptionalLanguage<const T, >(value: | T | readonly T[],): OptionalLanguage<T, T, readonly T[]> {
    return new OptionalLanguageContainer<T, T, readonly T[]>(value)
}
