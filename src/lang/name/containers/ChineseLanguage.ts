import {PluralLanguage} from './PluralLanguage';

export type ChineseReference = | 'simplified' | 'traditional';
export type ChineseOriginal = | string | readonly [simplified: string, traditional: string,];

export interface ChineseLanguage
    extends PluralLanguage<ChineseReference> {

    original: ChineseOriginal

    simplified: string

    traditional: string

}