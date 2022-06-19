import type {EveryLanguages} from '../EveryLanguages';
import type {NameTrait}      from './NameTrait';

/**
 * A simili-trait class method that is a kind of {@link NameTrait},
 * but with every methods that the trait reference has with "category" before.
 */
export interface NameTraitFromACategory<T, CATEGORY extends NameTrait<T>, > {

    get categoryContainer(): CATEGORY

    //region -------------------- Properties --------------------

    get categoryNameContainer(): this['categoryContainer']['nameContainer']


    get categoryLanguageValue(): this['categoryNameContainer']['languageValue']

    //region -------------------- English properties --------------------

    get categoryOriginalEnglish(): this['categoryNameContainer']['originalEnglish']

    get categoryEnglish(): this['categoryNameContainer']['english']

    get categoryAmericanEnglish(): this['categoryNameContainer']['americanEnglish']

    get categoryEuropeanEnglish(): this['categoryNameContainer']['europeanEnglish']

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    get categoryOriginalFrench(): this['categoryNameContainer']['originalFrench']

    get categoryFrench(): this['categoryNameContainer']['french']

    get categoryCanadianFrench(): this['categoryNameContainer']['canadianFrench']

    get categoryEuropeanFrench(): this['categoryNameContainer']['europeanFrench']

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    get categoryGerman(): this['categoryNameContainer']['german']

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    get categoryOriginalSpanish(): this['categoryNameContainer']['originalSpanish']

    get categorySpanish(): this['categoryNameContainer']['spanish']

    get categoryAmericanSpanish(): this['categoryNameContainer']['americanSpanish']

    get categoryEuropeanSpanish(): this['categoryNameContainer']['europeanSpanish']

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    get categoryItalian(): this['categoryNameContainer']['italian']

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    get categoryDutch(): this['categoryNameContainer']['dutch']

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    get categoryOriginalPortuguese(): this['categoryNameContainer']['originalPortuguese']

    get categoryPortuguese(): this['categoryNameContainer']['portuguese']

    get categoryAmericanPortuguese(): this['categoryNameContainer']['americanPortuguese']

    get categoryEuropeanPortuguese(): this['categoryNameContainer']['europeanPortuguese']

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    get categoryRussian(): this['categoryNameContainer']['russian']

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    get categoryJapanese(): this['categoryNameContainer']['japanese']

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    get categoryOriginalChinese(): this['categoryNameContainer']['originalChinese']

    get categoryChinese(): this['categoryNameContainer']['chinese']

    get categoryTraditionalChinese(): this['categoryNameContainer']['traditionalChinese']

    get categorySimplifiedChinese(): this['categoryNameContainer']['simplifiedChinese']

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    get categoryKorean(): this['categoryNameContainer']['korean']

    //endregion -------------------- Korean properties --------------------
    //region -------------------- Hebrew properties --------------------

    get categoryIsHebrewUsed(): this['categoryNameContainer']['isHebrewUsed']

    get categoryHebrew(): this['categoryNameContainer']['hebrew']

    //endregion -------------------- Hebrew properties --------------------
    //region -------------------- Polish properties --------------------

    get categoryIsPolishUsed(): this['categoryNameContainer']['isPolishUsed']

    get categoryPolish(): this['categoryNameContainer']['polish']

    //endregion -------------------- Polish properties --------------------
    //region -------------------- Ukrainian properties --------------------

    get categoryIsUkrainianUsed(): this['categoryNameContainer']['isUkrainianUsed']

    get categoryUkrainian(): this['categoryNameContainer']['ukrainian']

    //endregion -------------------- Ukrainian properties --------------------
    //region -------------------- Greek properties --------------------

    get categoryIsGreekUsed(): this['categoryNameContainer']['isGreekUsed']

    get categoryGreek(): this['categoryNameContainer']['greek']

    //endregion -------------------- Greek properties --------------------

    get categoryOriginalLanguages(): this['categoryNameContainer']['originalLanguages']

    //endregion -------------------- Properties --------------------

    toCategoryNameMap(): ReadonlyMap<EveryLanguages, T>


}
