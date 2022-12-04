import type {EmptyableLanguage}     from 'lang/name/containers/EmptyableLanguage'
import type {LanguageThatCanBeUsed} from 'lang/name/containers/LanguageThatCanBeUsed'

export interface EmptyableOptionalLanguage<T, S extends T = T, A extends readonly T[] = readonly [], U extends boolean = boolean, >
    extends EmptyableLanguage<T, S, A>, LanguageThatCanBeUsed<U> {

}
