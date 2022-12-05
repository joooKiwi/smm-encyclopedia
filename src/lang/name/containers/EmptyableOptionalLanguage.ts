import type {EmptyableLanguage}     from 'lang/name/containers/EmptyableLanguage'
import type {LanguageThatCanBeUsed} from 'lang/name/containers/LanguageThatCanBeUsed'
import type {EmptyArray}            from 'util/types/variables'

export interface EmptyableOptionalLanguage<T, S extends T = T, A extends readonly T[] = EmptyArray, U extends boolean = boolean, >
    extends EmptyableLanguage<T, S, A>, LanguageThatCanBeUsed<U> {

}
