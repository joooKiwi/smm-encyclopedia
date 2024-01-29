import type {EmptyableLanguage}     from 'lang/name/containers/EmptyableLanguage'
import type {LanguageThatCanBeUsed} from 'lang/name/containers/LanguageThatCanBeUsed'

export interface EmptyableOptionalLanguage<out T, out S extends T = T, out A extends readonly T[] = EmptyArray, out U extends boolean = boolean, >
    extends EmptyableLanguage<T, S, A>, LanguageThatCanBeUsed<U> {}
