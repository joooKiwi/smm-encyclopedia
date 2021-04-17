import {PluralLanguage} from "./PluralLanguage";

export type AmericanOrEuropeanReference = 'american' | 'european';

export interface AmericanAndEuropeanLanguage
    extends PluralLanguage<AmericanOrEuropeanReference> {

    american: string

    european: string

}