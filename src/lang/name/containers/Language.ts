import type {Array, EmptyArray} from '@joookiwi/type'
import type {EmptyableLanguage} from 'lang/name/containers/EmptyableLanguage'

export type AmericanOrEuropeanOriginal<T, > = | T | AmericanOrEuropeanArray<T>
export type AmericanOrEuropeanArray<T, > = readonly [american: T, european: T,]

export type CanadianOrEuropeanOriginal<T, > = | T | CanadianOrEuropeanArray<T>
export type CanadianOrEuropeanArray<T, > = readonly [canadian: T, european: T,]

export type ChineseOriginal<T, > = | T | ChineseArray<T>
export type ChineseArray<T, > = readonly [simplified: T, traditional: T,]

export interface Language<out T, out S extends T = T, out A extends Array<T> = EmptyArray, >
    extends EmptyableLanguage<T, S, A, never, never, never> {}
