import {Language}                  from './Language';
import {EmptyableOptionalLanguage} from './EmptyableOptionalLanguage';

export interface OptionalLanguage<S extends string | never, A extends readonly string[] | never = never, U extends boolean = boolean, >
    extends Language<S, A>, EmptyableOptionalLanguage<S, A, U> {

    get original(): | S | A

    get(): S

    get<INDEX extends number = number, >(index: INDEX,): | NonNullable<A[INDEX]> | S

}

type OptionalLanguageUsed<S extends string | never, A extends readonly string[] | never = never, > = OptionalLanguage<S, A, true>;
type OptionalLanguageUnused = OptionalLanguage<never, never, false>;

export type PossibleOptionalLanguage<S extends string | never, A extends readonly string[] | never = never, > =
    | OptionalLanguageUsed<S, A> | OptionalLanguageUnused;
