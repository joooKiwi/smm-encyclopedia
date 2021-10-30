import type {NameTrait}          from './NameTrait';

/**
 * A simili-trait class method that is a kind of {@link NameTrait},
 * but with every methods that the trait reference has with "category" before.
 */
export interface NameTraitFromACategory<CATEGORY extends NameTrait, > {

    get category(): CATEGORY

    //region -------------------- Properties --------------------

    get categoryName(): this['category']['nameContainer']


    get categoryLanguageValue(): this['categoryName']['languageValue']


    get categoryOriginalEnglish(): this['categoryName']['originalEnglish']

    get categoryEnglish(): this['categoryName']['english']

    get categoryAmericanEnglish(): this['categoryName']['americanEnglish']

    get categoryEuropeanEnglish(): this['categoryName']['europeanEnglish']


    get categoryOriginalFrench(): this['categoryName']['originalFrench']

    get categoryFrench(): this['categoryName']['french']

    get categoryCanadianFrench(): this['categoryName']['canadianFrench']

    get categoryEuropeanFrench(): this['categoryName']['europeanFrench']


    get categoryGerman(): this['categoryName']['german']


    get categoryOriginalSpanish(): this['categoryName']['originalSpanish']

    get categorySpanish(): this['categoryName']['spanish']

    get categoryAmericanSpanish(): this['categoryName']['americanSpanish']

    get categoryEuropeanSpanish(): this['categoryName']['europeanSpanish']


    get categoryItalian(): this['categoryName']['italian']


    get categoryDutch(): this['categoryName']['dutch']


    get categoryOriginalPortuguese(): this['categoryName']['originalPortuguese']

    get categoryPortuguese(): this['categoryName']['portuguese']

    get categoryAmericanPortuguese(): this['categoryName']['americanPortuguese']

    get categoryEuropeanPortuguese(): this['categoryName']['europeanPortuguese']


    get categoryRussian(): this['categoryName']['russian']


    get categoryJapanese(): this['categoryName']['japanese']


    get categoryOriginalChinese(): this['categoryName']['originalChinese']

    get categoryChinese(): this['categoryName']['chinese']

    get categoryTraditionalChinese(): this['categoryName']['traditionalChinese']

    get categorySimplifiedChinese(): this['categoryName']['simplifiedChinese']


    get categoryKorean(): this['categoryName']['korean']


    get categoryIsGreekUsed(): this['categoryName']['isGreekUsed']

    get categoryGreek(): this['categoryName']['greek']


    get categoryOriginalLanguages(): this['categoryName']['originalLanguages']

    //endregion -------------------- Properties --------------------

}
