import type {Name} from './Name';

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
export interface NameTrait<T,>
    extends Name<T> {

    get nameContainer(): Name<T>

    //region -------------------- Properties --------------------

    get languageValue(): this['nameContainer']['languageValue']


    get originalEnglish(): this['nameContainer']['originalEnglish']

    get english(): this['nameContainer']['english']

    get americanEnglish(): this['nameContainer']['americanEnglish']

    get europeanEnglish(): this['nameContainer']['europeanEnglish']


    get originalFrench(): this['nameContainer']['originalFrench']

    get french(): this['nameContainer']['french']

    get canadianFrench(): this['nameContainer']['canadianFrench']

    get europeanFrench(): this['nameContainer']['europeanFrench']


    get german(): this['nameContainer']['german']


    get originalSpanish(): this['nameContainer']['originalSpanish']

    get spanish(): this['nameContainer']['spanish']

    get americanSpanish(): this['nameContainer']['americanSpanish']

    get europeanSpanish(): this['nameContainer']['europeanSpanish']


    get italian(): this['nameContainer']['italian']


    get dutch(): this['nameContainer']['dutch']


    get originalPortuguese(): this['nameContainer']['originalPortuguese']

    get portuguese(): this['nameContainer']['portuguese']

    get americanPortuguese(): this['nameContainer']['americanPortuguese']

    get europeanPortuguese(): this['nameContainer']['europeanPortuguese']


    get russian(): this['nameContainer']['russian']


    get japanese(): this['nameContainer']['japanese']


    get originalChinese(): this['nameContainer']['originalChinese']

    get chinese(): this['nameContainer']['chinese']

    get traditionalChinese(): this['nameContainer']['traditionalChinese']

    get simplifiedChinese(): this['nameContainer']['simplifiedChinese']


    get korean(): this['nameContainer']['korean']


    get isGreekUsed(): this['nameContainer']['isGreekUsed']

    get greek(): this['nameContainer']['greek']


    get originalLanguages(): this['nameContainer']['originalLanguages']

    //endregion -------------------- Properties --------------------

}
