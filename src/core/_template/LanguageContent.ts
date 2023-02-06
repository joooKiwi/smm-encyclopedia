import type {NullOr} from 'util/types/nullable'

/**
 * A content that has every possible languages
 * with optional languages (Hebrew, Polish, Ukrainian & Greek)
 *
 * @see EveryLanguages
 * @see ProjectLanguages
 */
export interface LanguageContent {

    readonly english: NullOr<string>
    readonly americanEnglish: NullOr<string>
    readonly europeanEnglish: NullOr<string>

    readonly french: NullOr<string>
    readonly canadianFrench: NullOr<string>
    readonly europeanFrench: NullOr<string>

    readonly german: NullOr<string>

    readonly spanish: NullOr<string>
    readonly americanSpanish: NullOr<string>
    readonly europeanSpanish: NullOr<string>

    readonly italian: NullOr<string>

    readonly dutch: NullOr<string>

    readonly portuguese: NullOr<string>
    readonly americanPortuguese: NullOr<string>
    readonly europeanPortuguese: NullOr<string>

    readonly russian: NullOr<string>

    readonly japanese: NullOr<string>

    readonly chinese: NullOr<string>
    readonly traditionalChinese: NullOr<string>
    readonly simplifiedChinese: NullOr<string>

    readonly korean: NullOr<string>

    readonly hebrew?: NullOr<string>

    readonly polish?: NullOr<string>

    readonly ukrainian?: NullOr<string>

    readonly greek?: NullOr<string>

}
