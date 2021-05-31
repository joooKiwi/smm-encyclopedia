import {AmericanOrEuropeanOriginal} from '../../lang/name/containers/AmericanAndEuropeanLanguage';
import {CanadianOrEuropeanOriginal} from '../../lang/name/containers/CanadianAndEuropeanLanguage';
import {ChineseOriginal}  from '../../lang/name/containers/ChineseLanguage';
import {Property}         from '../properties/Property';
import {EntityReferences} from '../properties/EntityReferences';
import {EntityCategory}             from '../category/EntityCategory';
import {Name}                       from '../../lang/name/Name';

export interface Entity
    extends Name, Property, EntityReferences {

    name: Name

    //region -------------------- Category properties --------------------

    category: EntityCategory

    categoryName: Name

    categoryLanguageValue: string

    categoryOriginalEnglish: AmericanOrEuropeanOriginal
    categoryEnglish: string
    categoryAmericanEnglish: string
    categoryEuropeanEnglish: string

    categoryOriginalFrench: CanadianOrEuropeanOriginal
    categoryFrench: string
    categoryCanadianFrench: string
    categoryEuropeanFrench: string

    categoryGerman: string

    categoryOriginalSpanish: AmericanOrEuropeanOriginal
    categorySpanish: string
    categoryAmericanSpanish: string
    categoryEuropeanSpanish: string

    categoryItalian: string

    categoryDutch: string

    categoryOriginalPortuguese: AmericanOrEuropeanOriginal
    categoryPortuguese: string
    categoryAmericanPortuguese: string
    categoryEuropeanPortuguese: string

    categoryRussian: string

    categoryJapanese: string

    categoryOriginalChinese: ChineseOriginal
    categoryChinese: string
    categorySimplifiedChinese: string
    categoryTraditionalChinese: string

    categoryKorean: string

    //endregion -------------------- Category properties --------------------

    isInPropertyContainer: Property

    referencesContainer: EntityReferences

}
