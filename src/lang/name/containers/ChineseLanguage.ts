import type {PluralLanguage} from './PluralLanguage';

export type ChineseReference = | 'simplified' | 'traditional';
export type ChineseOriginal = | string | readonly [simplified: string, traditional: string,];

export interface ChineseLanguage
    extends PluralLanguage<ChineseReference> {

    get original(): ChineseOriginal

    get simplified(): string

    get traditional(): string

}