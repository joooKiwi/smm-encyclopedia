import type {NullOr} from 'util/types/nullable'

/**
 * A content that has every possible languages
 * with optional languages (Hebrew, Polish, Ukrainian & Greek)
 *
 * @see EveryLanguages
 * @see ProjectLanguages
 */
export interface LanguageContent {

    english: NullOr<string>
    americanEnglish: NullOr<string>
    europeanEnglish: NullOr<string>

    french: NullOr<string>
    canadianFrench: NullOr<string>
    europeanFrench: NullOr<string>

    german: NullOr<string>

    spanish: NullOr<string>
    americanSpanish: NullOr<string>
    europeanSpanish: NullOr<string>

    italian: NullOr<string>

    dutch: NullOr<string>

    portuguese: NullOr<string>
    americanPortuguese: NullOr<string>
    europeanPortuguese: NullOr<string>

    russian: NullOr<string>

    japanese: NullOr<string>

    chinese: NullOr<string>
    traditionalChinese: NullOr<string>
    simplifiedChinese: NullOr<string>

    korean: NullOr<string>

    hebrew?: NullOr<string>

    polish?: NullOr<string>

    ukrainian?: NullOr<string>

    greek?: NullOr<string>

}
