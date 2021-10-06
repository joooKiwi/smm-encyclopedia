import type {EmptyableLanguage}     from './EmptyableLanguage';
import type {LanguageThatCanBeUsed} from './LanguageThatCanBeUsed';

export interface EmptyableOptionalLanguage<S extends string | never, A extends readonly string[] | never = never, U extends boolean = boolean, >
    extends EmptyableLanguage<S, A>, LanguageThatCanBeUsed<U> {

}
