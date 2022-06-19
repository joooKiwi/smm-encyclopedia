import type {EmptyableOptionalLanguage} from './EmptyableOptionalLanguage';
import type {Language}                  from './Language';

export interface OptionalLanguage<T, S extends T = T, A extends readonly T[] = readonly [], U extends boolean = boolean, >
    extends Language<T, S, A>, EmptyableOptionalLanguage<T, S, A, U> {

    get original(): | S | A

    get(): S

    get<INDEX extends number = number, >(index: INDEX,): | NonNullable<A[INDEX]> | S

}
