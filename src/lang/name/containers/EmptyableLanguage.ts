import type {Array, EmptyArray} from '@joookiwi/type'

export interface EmptyableLanguage<out T,
    out S extends T = T,
    out A extends Array<T> = EmptyArray,
    out ORIGINAL extends null = null,
    out GET_SINGLE extends null = null,
    out GET_INDEX extends null = null, > {

    get original(): | S | A | ORIGINAL

    get(): | S | GET_SINGLE

    get<INDEX extends number = number, >(index: INDEX,): | NonNullable<A[INDEX]> | S | GET_INDEX

}
