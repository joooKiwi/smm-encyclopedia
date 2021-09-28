import {Language} from './Language';

export interface OptionalLanguage<S extends string | never, A extends readonly string[] | never = never, U extends boolean = boolean, >
    extends Language<S, A> {

    get isUsed(): U

}

type OptionalLanguageUsed<S extends string | never, A extends readonly string[] | never = never, > = OptionalLanguage<S, A, true>;
type OptionalLanguageUnused = OptionalLanguage<never, never, false>;

export type PossibleOptionalLanguage<S extends string | never, A extends readonly string[] | never = never, > =
    | OptionalLanguageUsed<S, A> | OptionalLanguageUnused;
