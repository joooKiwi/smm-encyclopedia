import {PluralLanguage} from "./PluralLanguage";

export interface CanadianAndEuropeanLanguage
    extends PluralLanguage<'canadian' | 'european'> {

    canadian: string

    european: string

}