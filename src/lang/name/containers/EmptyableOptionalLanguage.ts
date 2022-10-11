import type {EmptyableLanguage}     from './EmptyableLanguage'
import type {LanguageThatCanBeUsed} from './LanguageThatCanBeUsed'

export interface EmptyableOptionalLanguage<T, S extends T = T, A extends readonly T[] = readonly [], U extends boolean = boolean, >
    extends EmptyableLanguage<T, S, A>, LanguageThatCanBeUsed<U> {

}
