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

    categoryJapanese: string

    categoryEnglish: string
    categoryAmericanEnglish: string
    categoryEuropeanEnglish: string

    categorySpanish: string
    categoryAmericanSpanish: string
    categoryEuropeanSpanish: string

    categoryFrench: string
    categoryCanadianFrench: string
    categoryEuropeanFrench: string

    categoryDutch: string

    categoryGerman: string

    categoryPortuguese: string
    categoryAmericanPortuguese: string
    categoryEuropeanPortuguese: string

    categoryItalian: string

    categoryRussian: string

    categoryKorean: string

    categoryChinese: string
    categorySimplifiedChinese: string
    categoryTraditionalChinese: string

    //endregion -------------------- Category properties --------------------

    isInProperty: IsInProperty

    references: EntityReferences

}
