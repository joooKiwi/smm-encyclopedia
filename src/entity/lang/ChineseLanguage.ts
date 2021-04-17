import {PluralLanguage} from "./PluralLanguage";

export type ChineseReference = 'simplified' | 'traditional';

export interface ChineseLanguage
    extends PluralLanguage<ChineseReference> {


    simplified: string

    traditional: string


}