import type {Name} from 'lang/name/Name'

/**
 * <p>
 *  A trait implementation of the {@link Name},
 *  but only adding the method {@link NameTrait.nameContainer nameContainer(): Name}.
 * </p>
 *
 * <p>
 *  It also add the type of each method of a {@link Name}
 *  with a reference to the method {@link NameTrait.nameContainer nameContainer(): Name}.
 * </p>
 */
export interface NameTrait<out T, >
    extends Name<T> {

    readonly nameContainer: Name<T>

    readonly languageValue: this['nameContainer']['languageValue']

    readonly originalEnglish: this['nameContainer']['originalEnglish']
    readonly english: this['nameContainer']['english']
    readonly americanEnglish: this['nameContainer']['americanEnglish']
    readonly europeanEnglish: this['nameContainer']['europeanEnglish']

    readonly originalFrench: this['nameContainer']['originalFrench']
    readonly french: this['nameContainer']['french']
    readonly canadianFrench: this['nameContainer']['canadianFrench']
    readonly europeanFrench: this['nameContainer']['europeanFrench']

    readonly german: this['nameContainer']['german']

    readonly originalSpanish: this['nameContainer']['originalSpanish']
    readonly spanish: this['nameContainer']['spanish']
    readonly americanSpanish: this['nameContainer']['americanSpanish']
    readonly europeanSpanish: this['nameContainer']['europeanSpanish']

    readonly italian: this['nameContainer']['italian']

    readonly dutch: this['nameContainer']['dutch']

    readonly originalPortuguese: this['nameContainer']['originalPortuguese']
    readonly portuguese: this['nameContainer']['portuguese']
    readonly americanPortuguese: this['nameContainer']['americanPortuguese']
    readonly europeanPortuguese: this['nameContainer']['europeanPortuguese']

    readonly russian: this['nameContainer']['russian']

    readonly japanese: this['nameContainer']['japanese']

    readonly originalChinese: this['nameContainer']['originalChinese']
    readonly chinese: this['nameContainer']['chinese']
    readonly traditionalChinese: this['nameContainer']['traditionalChinese']
    readonly simplifiedChinese: this['nameContainer']['simplifiedChinese']

    readonly korean: this['nameContainer']['korean']

    readonly isHebrewUsed: this['nameContainer']['isHebrewUsed']
    readonly hebrew: this['nameContainer']['hebrew']

    readonly isPolishUsed: this['nameContainer']['isPolishUsed']
    readonly polish: this['nameContainer']['polish']

    readonly isUkrainianUsed: this['nameContainer']['isUkrainianUsed']
    readonly ukrainian: this['nameContainer']['ukrainian']

    readonly isGreekUsed: this['nameContainer']['isGreekUsed']
    readonly greek: this['nameContainer']['greek']

    readonly originalLanguages: this['nameContainer']['originalLanguages']

}
