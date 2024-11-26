import type {NullOrString} from '@joookiwi/type'

/**
 * A content that has every possible language as a description
 * with no optional languages
 *
 * @see EveryLanguages
 * @see ProjectLanguages
 */
export interface DescriptionLanguageContent {

    readonly english_description: NullOrString
    readonly americanEnglish_description: NullOrString
    readonly europeanEnglish_description: NullOrString

    readonly french_description: NullOrString
    readonly canadianFrench_description: NullOrString
    readonly europeanFrench_description: NullOrString

    readonly german_description: NullOrString

    readonly spanish_description: NullOrString
    readonly americanSpanish_description: NullOrString
    readonly europeanSpanish_description: NullOrString

    readonly italian_description: NullOrString

    readonly dutch_description: NullOrString

    readonly portuguese_description: NullOrString
    readonly americanPortuguese_description: NullOrString
    readonly europeanPortuguese_description: NullOrString

    readonly russian_description: NullOrString

    readonly japanese_description: NullOrString

    readonly chinese_description: NullOrString
    readonly traditionalChinese_description: NullOrString
    readonly simplifiedChinese_description: NullOrString

    readonly korean_description: NullOrString

}
