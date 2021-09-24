export type NotApplicableString = 'N/A';

export type AmericanOrEuropeanOriginal = | string | AmericanOrEuropeanArray;
export type AmericanOrEuropeanArray = readonly [american: string, european: string,];

export type CanadianOrEuropeanOriginal = | string | CanadianOrEuropeanArray;
export type CanadianOrEuropeanArray = readonly [canadian: string, european: string,];

export type ChineseOriginal = | string | ChineseArray;
export type ChineseArray = readonly [simplified: string, traditional: string,];

export interface Language<S extends | string | never, A extends | readonly string[] | never = never, > {

    get original(): | S | A

    get(): | S | NotApplicableString

    get<INDEX extends number = number, >(index: INDEX,): | NonNullable<A[INDEX]> | NotApplicableString

}
