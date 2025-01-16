import type {EveryLanguages} from 'lang/EveryLanguages'
import type {NameTrait}      from 'lang/name/NameTrait'

/**
 * A simili-trait class method that is a kind of {@link NameTrait},
 * but with every method that the trait reference has with "category" before.
 */
export interface NameTraitFromACategory<out T, out CATEGORY extends NameTrait<T>, > {

    readonly categoryContainer: CATEGORY

    readonly categoryNameContainer: this['categoryContainer']['nameContainer']
    readonly categoryLanguageValue: this['categoryNameContainer']['languageValue']

    readonly categoryOriginalEnglish: this['categoryNameContainer']['originalEnglish']
    readonly categoryEnglish: this['categoryNameContainer']['english']
    readonly categoryAmericanEnglish: this['categoryNameContainer']['americanEnglish']
    readonly categoryEuropeanEnglish: this['categoryNameContainer']['europeanEnglish']

    readonly categoryOriginalFrench: this['categoryNameContainer']['originalFrench']
    readonly categoryFrench: this['categoryNameContainer']['french']
    readonly categoryCanadianFrench: this['categoryNameContainer']['canadianFrench']
    readonly categoryEuropeanFrench: this['categoryNameContainer']['europeanFrench']

    readonly categoryGerman: this['categoryNameContainer']['german']

    readonly categoryOriginalSpanish: this['categoryNameContainer']['originalSpanish']
    readonly categorySpanish: this['categoryNameContainer']['spanish']
    readonly categoryAmericanSpanish: this['categoryNameContainer']['americanSpanish']
    readonly categoryEuropeanSpanish: this['categoryNameContainer']['europeanSpanish']

    readonly categoryItalian: this['categoryNameContainer']['italian']

    readonly categoryDutch: this['categoryNameContainer']['dutch']

    readonly categoryOriginalPortuguese: this['categoryNameContainer']['originalPortuguese']
    readonly categoryPortuguese: this['categoryNameContainer']['portuguese']
    readonly categoryAmericanPortuguese: this['categoryNameContainer']['americanPortuguese']
    readonly categoryEuropeanPortuguese: this['categoryNameContainer']['europeanPortuguese']

    readonly categoryRussian: this['categoryNameContainer']['russian']

    readonly categoryJapanese: this['categoryNameContainer']['japanese']

    readonly categoryOriginalChinese: this['categoryNameContainer']['originalChinese']
    readonly categoryChinese: this['categoryNameContainer']['chinese']
    readonly categoryTraditionalChinese: this['categoryNameContainer']['traditionalChinese']
    readonly categorySimplifiedChinese: this['categoryNameContainer']['simplifiedChinese']

    readonly categoryKorean: this['categoryNameContainer']['korean']

    readonly categoryIsHebrewUsed: this['categoryNameContainer']['isHebrewUsed']
    readonly categoryHebrew: this['categoryNameContainer']['hebrew']

    readonly categoryIsPolishUsed: this['categoryNameContainer']['isPolishUsed']
    readonly categoryPolish: this['categoryNameContainer']['polish']

    readonly categoryIsUkrainianUsed: this['categoryNameContainer']['isUkrainianUsed']
    readonly categoryUkrainian: this['categoryNameContainer']['ukrainian']

    readonly categoryIsGreekUsed: this['categoryNameContainer']['isGreekUsed']
    readonly categoryGreek: this['categoryNameContainer']['greek']

    readonly categoryOriginalLanguages: this['categoryNameContainer']['originalLanguages']

    toCategoryNameMap(): ReadonlyMap<EveryLanguages, T>


}
