import {PluralLanguage} from "./PluralLanguage";

export interface AmericanAndEuropeanLanguage
    extends PluralLanguage<'american' | 'european'> {

    american: string

    european: string

}