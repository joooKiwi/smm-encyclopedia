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
export interface ClassWithOnlyProjectLanguages<GERMAN extends string | null = string | null,
    AMERICAN_SPANISH extends string | null = string | null, EUROPEAN_SPANISH extends string | null = string | null,
    ITALIAN extends string | null = string | null,
    DUTCH extends string | null = string | null,
    AMERICAN_PORTUGUESE extends string | null = string | null, EUROPEAN_PORTUGUESE extends string | null = string | null,
    RUSSIAN extends string | null = string | null,
    JAPANESE extends string | null = string | null,
    TRADITIONAL_CHINESE extends string | null = string | null, SIMPLIFIED_CHINESE extends string | null = string | null,
    KOREAN extends string | null = string | null,
    GREEK extends | string | null = | string | null,> {

    //region -------------------- English properties --------------------

    get americanEnglish(): string

    get europeanEnglish(): string

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    get canadianFrench(): string

    get europeanFrench(): string

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

    get isPortugueseUsed(): boolean

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
    //region -------------------- Greek properties --------------------

    get isGreekUsed(): boolean

    get greek(): GREEK

    //endregion -------------------- Greek properties --------------------

}