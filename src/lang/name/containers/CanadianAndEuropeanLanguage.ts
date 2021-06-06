import {PluralLanguage} from './PluralLanguage';

export type CanadianOrEuropeanReference = | 'canadian' | 'european';
export type CanadianOrEuropeanOriginal = | string | readonly [canadian: string, european: string,];

export interface CanadianAndEuropeanLanguage
    extends PluralLanguage<CanadianOrEuropeanReference> {

    original: CanadianOrEuropeanOriginal

    canadian: string

    european: string

}