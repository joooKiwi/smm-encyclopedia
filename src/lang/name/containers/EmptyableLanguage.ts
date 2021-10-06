export interface EmptyableLanguage<S extends | string | never, A extends | readonly string[] | never = never,
    ORIGINAL extends | null | never = null, GET_SINGLE extends | null | never = null, GET_INDEX extends | null | never = null, > {

    get original(): | S | A | ORIGINAL

    get(): S | GET_SINGLE

    get<INDEX extends number = number, >(index: INDEX,): | NonNullable<A[INDEX]> | S | GET_INDEX

}
