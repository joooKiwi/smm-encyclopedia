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
export interface ClassWithLanguages {

    //region -------------------- English properties --------------------

    get americanEnglish(): string

    get europeanEnglish(): string

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    get canadianFrench(): string

    get europeanFrench(): string

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    get german(): string

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    get americanSpanish(): string

    get europeanSpanish(): string

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    get italian(): string

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    get dutch(): string

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    get isPortugueseUsed(): boolean

    get americanPortuguese(): string

    get europeanPortuguese(): string

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    get russian(): string

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    get japanese(): string

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    get simplifiedChinese(): string

    get traditionalChinese(): string

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    get korean(): string

    //endregion -------------------- Korean properties --------------------

}