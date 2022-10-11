import type {EveryLanguages} from '../EveryLanguages'
import type {NameTrait}      from './NameTrait'

/**
 * A simili-trait class method that is a kind of {@link  NameTrait},
 * but with every methods that the trait reference has with "alternativeContainer" before.
 */
export interface NameTraitFromAnAlternativeContainer<T, ALTERNATIVE_CONTAINER extends NameTrait<T>, > {

    get alternativeContainer(): ALTERNATIVE_CONTAINER

    //region -------------------- Name --------------------

    get alternativeNameContainer(): this['alternativeContainer']['nameContainer']


    get alternativeLanguageValue(): this['alternativeNameContainer']['languageValue']

    //region -------------------- English properties --------------------

    get alternativeOriginalEnglish(): this['alternativeNameContainer']['originalEnglish']

    get alternativeEnglish(): this['alternativeNameContainer']['english']

    get alternativeAmericanEnglish(): this['alternativeNameContainer']['americanEnglish']

    get alternativeEuropeanEnglish(): this['alternativeNameContainer']['europeanEnglish']

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    get alternativeOriginalFrench(): this['alternativeNameContainer']['originalFrench']

    get alternativeFrench(): this['alternativeNameContainer']['french']

    get alternativeCanadianFrench(): this['alternativeNameContainer']['canadianFrench']

    get alternativeEuropeanFrench(): this['alternativeNameContainer']['europeanFrench']

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    get alternativeGerman(): this['alternativeNameContainer']['german']

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    get alternativeOriginalSpanish(): this['alternativeNameContainer']['originalSpanish']

    get alternativeSpanish(): this['alternativeNameContainer']['spanish']

    get alternativeAmericanSpanish(): this['alternativeNameContainer']['americanSpanish']

    get alternativeEuropeanSpanish(): this['alternativeNameContainer']['europeanSpanish']

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    get alternativeItalian(): this['alternativeNameContainer']['italian']

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    get alternativeDutch(): this['alternativeNameContainer']['dutch']

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    get alternativeOriginalPortuguese(): this['alternativeNameContainer']['originalPortuguese']

    get alternativePortuguese(): this['alternativeNameContainer']['portuguese']

    get alternativeAmericanPortuguese(): this['alternativeNameContainer']['americanPortuguese']

    get alternativeEuropeanPortuguese(): this['alternativeNameContainer']['europeanPortuguese']

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    get alternativeRussian(): this['alternativeNameContainer']['russian']

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    get alternativeJapanese(): this['alternativeNameContainer']['japanese']

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    get alternativeOriginalChinese(): this['alternativeNameContainer']['originalChinese']

    get alternativeChinese(): this['alternativeNameContainer']['chinese']

    get alternativeTraditionalChinese(): this['alternativeNameContainer']['traditionalChinese']

    get alternativeSimplifiedChinese(): this['alternativeNameContainer']['simplifiedChinese']

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    get alternativeKorean(): this['alternativeNameContainer']['korean']

    //endregion -------------------- Korean properties --------------------
    //region -------------------- Hebrew properties --------------------

    get alternativeIsHebrewUsed(): this['alternativeNameContainer']['isHebrewUsed']

    get alternativeHebrew(): this['alternativeNameContainer']['hebrew']

    //endregion -------------------- Hebrew properties --------------------
    //region -------------------- Polish properties --------------------

    get alternativeIsPolishUsed(): this['alternativeNameContainer']['isPolishUsed']

    get alternativePolish(): this['alternativeNameContainer']['polish']

    //endregion -------------------- Polish properties --------------------
    //region -------------------- Ukrainian properties --------------------

    get alternativeIsUkrainianUsed(): this['alternativeNameContainer']['isUkrainianUsed']

    get alternativeUkrainian(): this['alternativeNameContainer']['ukrainian']

    //endregion -------------------- Ukrainian properties --------------------
    //region -------------------- Greek properties --------------------

    get alternativeIsGreekUsed(): this['alternativeNameContainer']['isGreekUsed']

    get alternativeGreek(): this['alternativeNameContainer']['greek']

    //endregion -------------------- Greek properties --------------------

    get alternativeOriginalLanguages(): this['alternativeNameContainer']['originalLanguages']

    //endregion -------------------- Name --------------------

    toAlternativeNameMap(): ReadonlyMap<EveryLanguages, T>

}
