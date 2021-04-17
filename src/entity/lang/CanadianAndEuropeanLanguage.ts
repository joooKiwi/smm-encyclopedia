import {PluralLanguage} from "./PluralLanguage";

export type CanadianOrEuropeanReference = 'canadian' | 'european';

export interface CanadianAndEuropeanLanguage
    extends PluralLanguage<CanadianOrEuropeanReference> {

    canadian: string

    european: string

}