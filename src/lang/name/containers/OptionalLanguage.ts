import {Language} from './Language';

export interface OptionalLanguage<U extends boolean, S extends string | never, A extends readonly string[] | never = never, >
    extends Language<S, A> {

    get isUsed(): U;
}

type OptionalLanguageUsed<S extends string | never, A extends readonly string[] | never = never, > = OptionalLanguage<true, S, A>;
type OptionalLanguageUnused = OptionalLanguage<false, never>;

export type PossibleOptionalLanguage<S extends string | never, A extends readonly string[] | never = never, > =
    | OptionalLanguageUsed<S, A> | OptionalLanguageUnused;
