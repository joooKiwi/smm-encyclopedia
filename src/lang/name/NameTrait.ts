import type {Name} from 'lang/name/Name'

/**
 * <p>
 *  A trait implementation of the {@link Name},
 *  but only adding the method {@link NameTrait.nameContainer nameContainer(): Name}.
 * </p>
 *
 * <p>
 *  It also add the type of each methods of a {@link Name}
 *  with a reference to the method {@link NameTrait.nameContainer nameContainer(): Name}.
 * </p>
 */
export interface NameTrait<T, >
    extends Name<T> {

    get nameContainer(): Name<T>

    //region -------------------- Properties --------------------

    get languageValue(): this['nameContainer']['languageValue']

    //region -------------------- English properties --------------------

    get originalEnglish(): this['nameContainer']['originalEnglish']

    get english(): this['nameContainer']['english']

    get americanEnglish(): this['nameContainer']['americanEnglish']

    get europeanEnglish(): this['nameContainer']['europeanEnglish']

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    get originalFrench(): this['nameContainer']['originalFrench']

    get french(): this['nameContainer']['french']

    get canadianFrench(): this['nameContainer']['canadianFrench']

    get europeanFrench(): this['nameContainer']['europeanFrench']

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    get german(): this['nameContainer']['german']

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    get originalSpanish(): this['nameContainer']['originalSpanish']

    get spanish(): this['nameContainer']['spanish']

    get americanSpanish(): this['nameContainer']['americanSpanish']

    get europeanSpanish(): this['nameContainer']['europeanSpanish']

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    get italian(): this['nameContainer']['italian']

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    get dutch(): this['nameContainer']['dutch']

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    get originalPortuguese(): this['nameContainer']['originalPortuguese']

    get portuguese(): this['nameContainer']['portuguese']

    get americanPortuguese(): this['nameContainer']['americanPortuguese']

    get europeanPortuguese(): this['nameContainer']['europeanPortuguese']

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    get russian(): this['nameContainer']['russian']

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    get japanese(): this['nameContainer']['japanese']

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    get originalChinese(): this['nameContainer']['originalChinese']

    get chinese(): this['nameContainer']['chinese']

    get traditionalChinese(): this['nameContainer']['traditionalChinese']

    get simplifiedChinese(): this['nameContainer']['simplifiedChinese']

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    get korean(): this['nameContainer']['korean']

    //endregion -------------------- Korean properties --------------------
    //region -------------------- Hebrew properties --------------------

    get isHebrewUsed(): this['nameContainer']['isHebrewUsed']

    get hebrew(): this['nameContainer']['hebrew']

    //endregion -------------------- Hebrew properties --------------------
    //region -------------------- Polish properties --------------------

    get isPolishUsed(): this['nameContainer']['isPolishUsed']

    get polish(): this['nameContainer']['polish']

    //endregion -------------------- Polish properties --------------------
    //region -------------------- Ukrainian properties --------------------

    get isUkrainianUsed(): this['nameContainer']['isUkrainianUsed']

    get ukrainian(): this['nameContainer']['ukrainian']

    //endregion -------------------- Ukrainian properties --------------------
    //region -------------------- Greek properties --------------------

    get isGreekUsed(): this['nameContainer']['isGreekUsed']

    get greek(): this['nameContainer']['greek']

    //endregion -------------------- Greek properties --------------------

    get originalLanguages(): this['nameContainer']['originalLanguages']

    //endregion -------------------- Properties --------------------

}
