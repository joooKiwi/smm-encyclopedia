import type {EmptyableLanguage} from './EmptyableLanguage'

export type AmericanOrEuropeanOriginal<T, > = | T | AmericanOrEuropeanArray<T>
export type AmericanOrEuropeanArray<T, > = readonly [american: T, european: T,]
export type PossibleAmericanOrEuropeanValue<T, > = | AmericanOrEuropeanOriginal<T> | null

export type CanadianOrEuropeanOriginal<T, > = | T | CanadianOrEuropeanArray<T>
export type CanadianOrEuropeanArray<T, > = readonly [canadian: T, european: T,]
export type PossibleCanadianOrEuropeanValue<T, > = | CanadianOrEuropeanArray<T> | null

export type ChineseOriginal<T, > = | T | ChineseArray<T>
export type ChineseArray<T, > = readonly [simplified: T, traditional: T,]
export type PossibleChineseValue<T, > = | ChineseOriginal<T> | null

export interface Language<T, S extends T = T, A extends readonly T[] = readonly [], >
    extends EmptyableLanguage<T, S, A, never, never, never> {

}
