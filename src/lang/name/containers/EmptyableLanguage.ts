export interface EmptyableLanguage<T, S extends T = T, A extends readonly T[] = EmptyArray,
    ORIGINAL extends null = null, GET_SINGLE extends null = null, GET_INDEX extends null = null, > {

    get original(): | S | A | ORIGINAL

    get(): | S | GET_SINGLE

    get<INDEX extends number = number, >(index: INDEX,): | NonNullable<A[INDEX]> | S | GET_INDEX

}
