import type {NullOr} from '@joookiwi/type'

/**
 * A class with every language used in the project.
 * But, it does not contain every straight language.
 *
 * As an example, the english language only contains the American and European,
 * but not the straight language.
 */
export interface ClassWithOnlyProjectLanguages<T,
    GERMAN extends NullOr<T> = NullOr<T>,
    AMERICAN_SPANISH extends NullOr<T> = NullOr<T>, EUROPEAN_SPANISH extends NullOr<T> = NullOr<T>,
    ITALIAN extends NullOr<T> = NullOr<T>,
    DUTCH extends NullOr<T> = NullOr<T>,
    AMERICAN_PORTUGUESE extends NullOr<T> = NullOr<T>, EUROPEAN_PORTUGUESE extends NullOr<T> = NullOr<T>,
    RUSSIAN extends NullOr<T> = NullOr<T>,
    JAPANESE extends NullOr<T> = NullOr<T>,
    TRADITIONAL_CHINESE extends NullOr<T> = NullOr<T>, SIMPLIFIED_CHINESE extends NullOr<T> = NullOr<T>,
    KOREAN extends NullOr<T> = NullOr<T>,
    HEBREW extends NullOr<T> = NullOr<T>,
    POLISH extends NullOr<T> = NullOr<T>,
    UKRAINIAN extends NullOr<T> = NullOr<T>,
    GREEK extends NullOr<T> = NullOr<T>, > {

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
