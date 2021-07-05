import {PluralLanguage} from './PluralLanguage';

export type AmericanOrEuropeanReference = | 'american' | 'european';
export type AmericanOrEuropeanOriginal = | string | readonly [american: string, european: string,];

export interface AmericanAndEuropeanLanguage
    extends PluralLanguage<AmericanOrEuropeanReference> {

    get original(): AmericanOrEuropeanOriginal

    get american(): string

    get european(): string

}