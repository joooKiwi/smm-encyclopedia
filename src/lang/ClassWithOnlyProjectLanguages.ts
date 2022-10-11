/**
 * <p>
 *     A class with every languages used in the project.
 *     But, it does not contain every simple languages.
 * </p>
 *
 * <p>
 *     As an example, the english language only contain the America and the Europe,
 *     but not the simple language.
 * </p>
 */
export interface ClassWithOnlyProjectLanguages<T,
    GERMAN extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    AMERICAN_SPANISH extends PossibleLanguageValue<T> = PossibleLanguageValue<T>, EUROPEAN_SPANISH extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    ITALIAN extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    DUTCH extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    AMERICAN_PORTUGUESE extends PossibleLanguageValue<T> = PossibleLanguageValue<T>, EUROPEAN_PORTUGUESE extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    RUSSIAN extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    JAPANESE extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    TRADITIONAL_CHINESE extends PossibleLanguageValue<T> = PossibleLanguageValue<T>, SIMPLIFIED_CHINESE extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    KOREAN extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    HEBREW extends | PossibleLanguageValue<T> = | PossibleLanguageValue<T>,
    POLISH extends | PossibleLanguageValue<T> = | PossibleLanguageValue<T>,
    UKRAINIAN extends | PossibleLanguageValue<T> = | PossibleLanguageValue<T>,
    GREEK extends | PossibleLanguageValue<T> = | PossibleLanguageValue<T>, > {

    //region -------------------- English properties --------------------

    get americanEnglish(): T

    get europeanEnglish(): T

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    get canadianFrench(): T

    get europeanFrench(): T

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    get german(): GERMAN

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    get americanSpanish(): AMERICAN_SPANISH

    get europeanSpanish(): EUROPEAN_SPANISH

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    get italian(): ITALIAN

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    get dutch(): DUTCH

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    get americanPortuguese(): AMERICAN_PORTUGUESE

    get europeanPortuguese(): EUROPEAN_PORTUGUESE

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    get russian(): RUSSIAN

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    get japanese(): JAPANESE

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    get traditionalChinese(): TRADITIONAL_CHINESE

    get simplifiedChinese(): SIMPLIFIED_CHINESE

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    get korean(): KOREAN

    //endregion -------------------- Korean properties --------------------
    //region -------------------- Hebrew properties --------------------

    get isHebrewUsed(): boolean

    get hebrew(): HEBREW

    //endregion -------------------- Hebrew properties --------------------
    //region -------------------- Polish properties --------------------

    get isPolishUsed(): boolean

    get polish(): POLISH

    //endregion -------------------- Polish properties --------------------
    //region -------------------- Ukrainian properties --------------------

    get isUkrainianUsed(): boolean

    get ukrainian(): UKRAINIAN

    //endregion -------------------- Ukrainian properties --------------------
    //region -------------------- Greek properties --------------------

    get isGreekUsed(): boolean

    get greek(): GREEK

    //endregion -------------------- Greek properties --------------------

}

/**
 * The possible language value as either the generic type or null.
 */
export type PossibleLanguageValue<T, > = | T | null
