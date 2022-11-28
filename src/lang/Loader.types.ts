import type {NullOr} from '../util/types'

//region -------------------- Properties --------------------

//region -------------------- Single property --------------------

type NonNullableLanguage = string
type NonNullableArrayLanguage = | [string, null, null,] | [null, string, string,]
type NullableLanguage = NullOr<NonNullableLanguage>
type NullableArrayLanguage = | NonNullableArrayLanguage | [null, null, null,]

//endregion -------------------- Single property --------------------
//region -------------------- PropertiesArray --------------------

export type PropertiesArray<ENGLISH extends NullableLanguage = NullableLanguage, AMERICAN_ENGLISH extends NullableLanguage = NullableLanguage, EUROPEAN_ENGLISH extends NullableLanguage = NullableLanguage,
    FRENCH extends NullableLanguage = NullableLanguage, CANADIAN_FRENCH extends NullableLanguage = NullableLanguage, EUROPEAN_FRENCH extends NullableLanguage = NullableLanguage,
    GERMAN extends NullableLanguage = NullableLanguage,
    SPANISH extends NullableLanguage = NullableLanguage, AMERICAN_SPANISH extends NullableLanguage = NullableLanguage, EUROPEAN_SPANISH extends NullableLanguage = NullableLanguage,
    ITALIAN extends NullableLanguage = NullableLanguage,
    DUTCH extends NullableLanguage = NullableLanguage,
    PORTUGUESE extends NullableLanguage = NullableLanguage, AMERICAN_PORTUGUESE extends NullableLanguage = NullableLanguage, EUROPEAN_PORTUGUESE extends NullableLanguage = NullableLanguage,
    RUSSIAN extends NullableLanguage = NullableLanguage,
    JAPANESE extends NullableLanguage = NullableLanguage,
    CHINESE extends NullableLanguage = NullableLanguage, TRADITIONAL_CHINESE extends NullableLanguage = NullableLanguage, SIMPLIFIED_CHINESE extends NullableLanguage = NullableLanguage,
    KOREAN extends NullableLanguage = NullableLanguage, >
    = readonly [
    english: ENGLISH, americanEnglish: AMERICAN_ENGLISH, europeanEnglish: EUROPEAN_ENGLISH,
    french: FRENCH, canadianFrench: CANADIAN_FRENCH, europeanFrench: EUROPEAN_FRENCH,
    german: GERMAN,
    spanish: SPANISH, americanSpanish: AMERICAN_SPANISH, europeanSpanish: EUROPEAN_SPANISH,
    italian: ITALIAN,
    dutch: DUTCH,
    portuguese: PORTUGUESE, americanPortuguese: AMERICAN_PORTUGUESE, europeanPortuguese: EUROPEAN_PORTUGUESE,
    russian: RUSSIAN,
    japanese: JAPANESE,
    chinese: CHINESE, traditionalChinese: TRADITIONAL_CHINESE, simplifiedChinese: SIMPLIFIED_CHINESE,
    korean: KOREAN,
]
export type PropertiesArrayWithOptionalLanguages<ENGLISH extends NullableLanguage = NullableLanguage, AMERICAN_ENGLISH extends NullableLanguage = NullableLanguage, EUROPEAN_ENGLISH extends NullableLanguage = NullableLanguage,
    FRENCH extends NullableLanguage = NullableLanguage, CANADIAN_FRENCH extends NullableLanguage = NullableLanguage, EUROPEAN_FRENCH extends NullableLanguage = NullableLanguage,
    GERMAN extends NullableLanguage = NullableLanguage,
    SPANISH extends NullableLanguage = NullableLanguage, AMERICAN_SPANISH extends NullableLanguage = NullableLanguage, EUROPEAN_SPANISH extends NullableLanguage = NullableLanguage,
    ITALIAN extends NullableLanguage = NullableLanguage,
    DUTCH extends NullableLanguage = NullableLanguage,
    PORTUGUESE extends NullableLanguage = NullableLanguage, AMERICAN_PORTUGUESE extends NullableLanguage = NullableLanguage, EUROPEAN_PORTUGUESE extends NullableLanguage = NullableLanguage,
    RUSSIAN extends NullableLanguage = NullableLanguage,
    JAPANESE extends NullableLanguage = NullableLanguage,
    CHINESE extends NullableLanguage = NullableLanguage, TRADITIONAL_CHINESE extends NullableLanguage = NullableLanguage, SIMPLIFIED_CHINESE extends NullableLanguage = NullableLanguage,
    KOREAN extends NullableLanguage = NullableLanguage,
    HEBREW extends NullableLanguage = NullableLanguage,
    POLISH extends NullableLanguage = NullableLanguage,
    UKRAINIAN extends NullableLanguage = NullableLanguage,
    GREEK extends NullableLanguage = NullableLanguage, >
    = readonly [
    ...PropertiesArray<ENGLISH, AMERICAN_ENGLISH, EUROPEAN_ENGLISH,
        FRENCH, CANADIAN_FRENCH, EUROPEAN_FRENCH,
        GERMAN,
        SPANISH, AMERICAN_SPANISH, EUROPEAN_SPANISH,
        ITALIAN,
        DUTCH,
        PORTUGUESE, AMERICAN_PORTUGUESE, EUROPEAN_PORTUGUESE,
        RUSSIAN,
        JAPANESE,
        CHINESE, TRADITIONAL_CHINESE, SIMPLIFIED_CHINESE,
        KOREAN>,
    HEBREW,
    POLISH,
    UKRAINIAN,
    GREEK,
]

export type NonNullablePropertiesArray = readonly [
    /*english*/ ...NonNullableArrayLanguage,
    /*french*/ ...NonNullableArrayLanguage,
    /*german*/ NonNullableLanguage,
    /*spanish*/  ...NonNullableArrayLanguage,
    /*italian*/ NonNullableLanguage,
    /*dutch*/ NonNullableLanguage,
    /*portuguese*/  ...NonNullableArrayLanguage,
    /*russian*/ NonNullableLanguage,
    /*japanese*/ NonNullableLanguage,
    /*chinese*/  ...NonNullableArrayLanguage,
    /*korean*/ NonNullableLanguage,
]
export type DefaultNonNullablePropertiesArray = readonly [
    /*english*/ ...NonNullableArrayLanguage,
    /*french*/ ...NonNullableArrayLanguage,
    /*german*/ NullableLanguage,
    /*spanish*/  ...NullableArrayLanguage,
    /*italian*/ NullableLanguage,
    /*dutch*/ NullableLanguage,
    /*portuguese*/  ...NullableArrayLanguage,
    /*russian*/ NullableLanguage,
    /*japanese*/ NullableLanguage,
    /*chinese*/  ...NullableArrayLanguage,
    /*korean*/ NullableLanguage,
]

//endregion -------------------- PropertiesArray ------------------

//endregion -------------------- Properties --------------------
