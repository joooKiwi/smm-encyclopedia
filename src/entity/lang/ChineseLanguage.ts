import {PluralLanguage} from "./PluralLanguage";

export interface ChineseLanguage
    extends PluralLanguage<'simplified' | 'traditional'> {


    simplified: string

    traditional: string


}