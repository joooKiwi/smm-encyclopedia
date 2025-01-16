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

    readonly americanEnglish: T
    readonly europeanEnglish: T

    readonly canadianFrench: T
    readonly europeanFrench: T

    readonly german: GERMAN

    readonly americanSpanish: AMERICAN_SPANISH
    readonly europeanSpanish: EUROPEAN_SPANISH

    readonly italian: ITALIAN

    readonly dutch: DUTCH

    readonly americanPortuguese: AMERICAN_PORTUGUESE
    readonly europeanPortuguese: EUROPEAN_PORTUGUESE

    readonly russian: RUSSIAN

    readonly japanese: JAPANESE

    readonly traditionalChinese: TRADITIONAL_CHINESE
    readonly simplifiedChinese: SIMPLIFIED_CHINESE

    readonly korean: KOREAN

    readonly isHebrewUsed: boolean
    readonly hebrew: HEBREW

    readonly isPolishUsed: boolean
    readonly polish: POLISH

    readonly isUkrainianUsed: boolean
    readonly ukrainian: UKRAINIAN

    readonly isGreekUsed: boolean
    readonly greek: GREEK

}
