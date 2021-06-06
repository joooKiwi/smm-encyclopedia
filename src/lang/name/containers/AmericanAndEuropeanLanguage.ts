import {PluralLanguage} from './PluralLanguage';

export type AmericanOrEuropeanReference = | 'american' | 'european';
export type AmericanOrEuropeanOriginal = | string | readonly [american: string, european: string,];

export interface AmericanAndEuropeanLanguage
    extends PluralLanguage<AmericanOrEuropeanReference> {

    original: AmericanOrEuropeanOriginal

    american: string

    european: string

}