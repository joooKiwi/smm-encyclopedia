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


    get categoryOriginalEnglish(): this['categoryNameContainer']['originalEnglish']

    get categoryEnglish(): this['categoryNameContainer']['english']

    get categoryAmericanEnglish(): this['categoryNameContainer']['americanEnglish']

    get categoryEuropeanEnglish(): this['categoryNameContainer']['europeanEnglish']


    get categoryOriginalFrench(): this['categoryNameContainer']['originalFrench']

    get categoryFrench(): this['categoryNameContainer']['french']

    get categoryCanadianFrench(): this['categoryNameContainer']['canadianFrench']

    get categoryEuropeanFrench(): this['categoryNameContainer']['europeanFrench']


    get categoryGerman(): this['categoryNameContainer']['german']


    get categoryOriginalSpanish(): this['categoryNameContainer']['originalSpanish']

    get categorySpanish(): this['categoryNameContainer']['spanish']

    get categoryAmericanSpanish(): this['categoryNameContainer']['americanSpanish']

    get categoryEuropeanSpanish(): this['categoryNameContainer']['europeanSpanish']


    get categoryItalian(): this['categoryNameContainer']['italian']


    get categoryDutch(): this['categoryNameContainer']['dutch']


    get categoryOriginalPortuguese(): this['categoryNameContainer']['originalPortuguese']

    get categoryPortuguese(): this['categoryNameContainer']['portuguese']

    get categoryAmericanPortuguese(): this['categoryNameContainer']['americanPortuguese']

    get categoryEuropeanPortuguese(): this['categoryNameContainer']['europeanPortuguese']


    get categoryRussian(): this['categoryNameContainer']['russian']


    get categoryJapanese(): this['categoryNameContainer']['japanese']


    get categoryOriginalChinese(): this['categoryNameContainer']['originalChinese']

    get categoryChinese(): this['categoryNameContainer']['chinese']

    get categoryTraditionalChinese(): this['categoryNameContainer']['traditionalChinese']

    get categorySimplifiedChinese(): this['categoryNameContainer']['simplifiedChinese']


    get categoryKorean(): this['categoryNameContainer']['korean']


    get categoryIsGreekUsed(): this['categoryNameContainer']['isGreekUsed']

    get categoryGreek(): this['categoryNameContainer']['greek']


    get categoryOriginalLanguages(): this['categoryNameContainer']['originalLanguages']

    //endregion -------------------- Properties --------------------

    toCategoryNameMap(): ReadonlyMap<EveryLanguages, T>


}
