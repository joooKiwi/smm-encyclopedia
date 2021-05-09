import {SMM2Name} from "../lang/SMM2Name";
import {IsInProperty} from "../properties/IsInProperty";
import {EntityReferences} from "../properties/EntityReferences";
import {EntityCategory} from "../category/EntityCategory";

export interface Entity
    extends SMM2Name, IsInProperty, EntityReferences {

    name: SMM2Name

    //region -------------------- Category properties --------------------

    category: EntityCategory

    categoryName: SMM2Name

    categoryLanguageValue: string

    categoryEnglish: string
    categoryAmericanEnglish: string
    categoryEuropeanEnglish: string

    categoryFrench: string
    categoryCanadianFrench: string
    categoryEuropeanFrench: string

    categoryGerman: string

    categorySpanish: string
    categoryAmericanSpanish: string
    categoryEuropeanSpanish: string

    categoryItalian: string

    categoryDutch: string

    categoryPortuguese: string
    categoryAmericanPortuguese: string
    categoryEuropeanPortuguese: string

    categoryRussian: string

    categoryJapanese: string

    categoryChinese: string
    categorySimplifiedChinese: string
    categoryTraditionalChinese: string

    categoryKorean: string

    //endregion -------------------- Category properties --------------------

    isInProperty: IsInProperty

    references: EntityReferences

}
