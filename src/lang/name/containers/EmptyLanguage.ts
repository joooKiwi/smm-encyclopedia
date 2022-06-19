import type {EmptyableLanguage}         from './EmptyableLanguage';
import type {EmptyableOptionalLanguage} from './EmptyableOptionalLanguage';

export interface EmptyLanguage
    extends EmptyableLanguage<never>, EmptyableOptionalLanguage<never, never, never, false> {

    get original(): null

    get(): null

    get<INDEX extends number = number, >(index: INDEX,): null

}
