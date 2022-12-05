import type {EmptyableLanguage}         from 'lang/name/containers/EmptyableLanguage'
import type {EmptyableOptionalLanguage} from 'lang/name/containers/EmptyableOptionalLanguage'

export interface EmptyLanguage
    extends EmptyableLanguage<never>, EmptyableOptionalLanguage<never, never, never, false> {

    get original(): null

    get(): null

    get<INDEX extends number = number, >(index: INDEX,): null

}
