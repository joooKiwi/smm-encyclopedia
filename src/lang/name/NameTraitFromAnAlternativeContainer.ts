import type {NameTrait} from './NameTrait';

/**
 * A simili-trait class method that is a kind of {@link  NameTrait},
 * but with every methods that the trait reference has with "alternativeContainer" before.
 */
export interface NameTraitFromAnAlternativeContainer<ALTERNATIVE_CONTAINER extends NameTrait,>{

    get alternativeContainer(): ALTERNATIVE_CONTAINER

    //region -------------------- Name --------------------

    get alternativeNameContainer(): this['alternativeContainer']['nameContainer']


    get alternativeLanguageValue(): this['alternativeNameContainer']['languageValue']


    get alternativeOriginalEnglish(): this['alternativeNameContainer']['originalEnglish']

    get alternativeEnglish(): this['alternativeNameContainer']['english']

    get alternativeAmericanEnglish(): this['alternativeNameContainer']['americanEnglish']

    get alternativeEuropeanEnglish(): this['alternativeNameContainer']['europeanEnglish']


    get alternativeOriginalFrench(): this['alternativeNameContainer']['originalFrench']

    get alternativeFrench(): this['alternativeNameContainer']['french']

    get alternativeCanadianFrench(): this['alternativeNameContainer']['canadianFrench']

    get alternativeEuropeanFrench(): this['alternativeNameContainer']['europeanFrench']


    get alternativeGerman(): this['alternativeNameContainer']['german']


    get alternativeOriginalSpanish(): this['alternativeNameContainer']['originalSpanish']

    get alternativeSpanish(): this['alternativeNameContainer']['spanish']

    get alternativeAmericanSpanish(): this['alternativeNameContainer']['americanSpanish']

    get alternativeEuropeanSpanish(): this['alternativeNameContainer']['europeanSpanish']


    get alternativeItalian(): this['alternativeNameContainer']['italian']


    get alternativeDutch(): this['alternativeNameContainer']['dutch']


    get alternativeIsPortugueseUsed(): this['alternativeNameContainer']['isPortugueseUsed']

    get alternativeOriginalPortuguese(): this['alternativeNameContainer']['originalPortuguese']

    get alternativePortuguese(): this['alternativeNameContainer']['portuguese']

    get alternativeAmericanPortuguese(): this['alternativeNameContainer']['americanPortuguese']

    get alternativeEuropeanPortuguese(): this['alternativeNameContainer']['europeanPortuguese']


    get alternativeRussian(): this['alternativeNameContainer']['russian']


    get alternativeJapanese(): this['alternativeNameContainer']['japanese']


    get alternativeOriginalChinese(): this['alternativeNameContainer']['originalChinese']

    get alternativeChinese(): this['alternativeNameContainer']['chinese']

    get alternativeTraditionalChinese(): this['alternativeNameContainer']['traditionalChinese']

    get alternativeSimplifiedChinese(): this['alternativeNameContainer']['simplifiedChinese']


    get alternativeKorean(): this['alternativeNameContainer']['korean']


    get alternativeIsGreekUsed(): this['alternativeNameContainer']['isGreekUsed']

    get alternativeGreek(): this['alternativeNameContainer']['greek']


    get alternativeOriginalLanguages(): this['alternativeNameContainer']['originalLanguages']

    //endregion -------------------- Name --------------------

}
