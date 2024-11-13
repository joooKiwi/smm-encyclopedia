import type {NullOrString} from '@joookiwi/type'

/**
 * A content that has every possible language
 * with optional languages (Hebrew, Polish, Ukrainian & Greek)
 *
 * @see EveryLanguages
 * @see ProjectLanguages
 */
export interface LanguageContent {

    readonly english: NullOrString
    readonly americanEnglish: NullOrString
    readonly europeanEnglish: NullOrString

    readonly french: NullOrString
    readonly canadianFrench: NullOrString
    readonly europeanFrench: NullOrString

    readonly german: NullOrString

    readonly spanish: NullOrString
    readonly americanSpanish: NullOrString
    readonly europeanSpanish: NullOrString

    readonly italian: NullOrString

    readonly dutch: NullOrString

    readonly portuguese: NullOrString
    readonly americanPortuguese: NullOrString
    readonly europeanPortuguese: NullOrString

    readonly russian: NullOrString

    readonly japanese: NullOrString

    readonly chinese: NullOrString
    readonly traditionalChinese: NullOrString
    readonly simplifiedChinese: NullOrString

    readonly korean: NullOrString

    readonly hebrew?: NullOrString

    readonly polish?: NullOrString

    readonly ukrainian?: NullOrString

    readonly greek?: NullOrString

}
