import {ClassWithEveryLanguages} from '../../lang/ClassWithEveryLanguages';
import {IsInProperty}            from '../properties/IsInProperty';
import {EntityReferences}        from '../properties/EntityReferences';
import {EntityCategory}          from '../category/EntityCategory';

export interface Entity
    extends ClassWithEveryLanguages, IsInProperty, EntityReferences {

    name: ClassWithEveryLanguages

    //region -------------------- Category properties --------------------

    category: EntityCategory

    categoryName: ClassWithEveryLanguages

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
