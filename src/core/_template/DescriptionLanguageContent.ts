/**
 * A content that has every possible language as a description
 * with no optional languages
 *
 * @see EveryLanguages
 * @see ProjectLanguages
 */
export interface DescriptionLanguageContent {

    readonly english_description: NullOr<string>
    readonly americanEnglish_description: NullOr<string>
    readonly europeanEnglish_description: NullOr<string>

    readonly french_description: NullOr<string>
    readonly canadianFrench_description: NullOr<string>
    readonly europeanFrench_description: NullOr<string>

    readonly german_description: NullOr<string>

    readonly spanish_description: NullOr<string>
    readonly americanSpanish_description: NullOr<string>
    readonly europeanSpanish_description: NullOr<string>

    readonly italian_description: NullOr<string>

    readonly dutch_description: NullOr<string>

    readonly portuguese_description: NullOr<string>
    readonly americanPortuguese_description: NullOr<string>
    readonly europeanPortuguese_description: NullOr<string>

    readonly russian_description: NullOr<string>

    readonly japanese_description: NullOr<string>

    readonly chinese_description: NullOr<string>
    readonly traditionalChinese_description: NullOr<string>
    readonly simplifiedChinese_description: NullOr<string>

    readonly korean_description: NullOr<string>

}
