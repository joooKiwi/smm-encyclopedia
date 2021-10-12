//region -------------------- Headers --------------------

export type Headers = | 'english' | 'spanish' | 'portuguese' | `${'american' | 'european'}${'English' | 'Spanish' | 'Portuguese'}`
                      | 'french' | `${'canadian' | 'european'}French` | 'german' | 'italian' | 'dutch' | 'russian' | 'japanese'
                      | 'chinese' | `${'simplified' | 'traditional'}Chinese` | 'korean';
export type HeadersWithOptionalLanguages = Headers | 'portuguese' | `${'american' | 'european'}Portuguese` | 'greek';

//endregion -------------------- Headers --------------------
//region -------------------- Properties --------------------

//region -------------------- Single property --------------------

type NonNullableLanguage = string;
type NonNullableArrayLanguage = | [string, null, null,] | [null, string, string,];
type NullableLanguage = | NonNullableLanguage | null;
type NullableArrayLanguage = | NonNullableArrayLanguage | [null, null, null,];

//endregion -------------------- Single property --------------------
//region -------------------- PropertiesArray --------------------

export type PropertiesArray<ENGLISH extends NullableLanguage = NullableLanguage, AMERICAN_ENGLISH extends NullableLanguage = NullableLanguage, EUROPEAN_ENGLISH extends NullableLanguage = NullableLanguage,
    FRENCH extends NullableLanguage = NullableLanguage, CANADIAN_FRENCH extends NullableLanguage = NullableLanguage, EUROPEAN_FRENCH extends NullableLanguage = NullableLanguage,
    GERMAN extends NullableLanguage = NullableLanguage,
    SPANISH extends NullableLanguage = NullableLanguage, AMERICAN_SPANISH extends NullableLanguage = NullableLanguage, EUROPEAN_SPANISH extends NullableLanguage = NullableLanguage,
    ITALIAN extends NullableLanguage = NullableLanguage,
    DUTCH extends NullableLanguage = NullableLanguage,
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
    russian: RUSSIAN,
    japanese: JAPANESE,
    chinese: CHINESE, traditionalChinese: TRADITIONAL_CHINESE, simplifiedChinese: SIMPLIFIED_CHINESE,
    korean: KOREAN,
];
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
    GREEK extends NullableLanguage = NullableLanguage, >
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
    greek: GREEK,
];

export type NonNullablePropertiesArray = readonly [
    /*english*/ ...NonNullableArrayLanguage,
    /*french*/ ...NonNullableArrayLanguage,
    /*german*/ NonNullableLanguage,
    /*spanish*/  ...NonNullableArrayLanguage,
    /*italian*/ NonNullableLanguage,
    /*dutch*/ NonNullableLanguage,
    /*russian*/ NonNullableLanguage,
    /*japanese*/ NonNullableLanguage,
    /*chinese*/  ...NonNullableArrayLanguage,
    /*korean*/ NonNullableLanguage,
];
export type DefaultNonNullablePropertiesArray = readonly [
    /*english*/ ...NonNullableArrayLanguage,
    /*french*/ ...NonNullableArrayLanguage,
    /*german*/ NullableLanguage,
    /*spanish*/  ...NullableArrayLanguage,
    /*italian*/ NullableLanguage,
    /*dutch*/ NullableLanguage,
    /*russian*/ NullableLanguage,
    /*japanese*/ NullableLanguage,
    /*chinese*/  ...NullableArrayLanguage,
    /*korean*/ NullableLanguage,
];


//endregion -------------------- PropertiesArray ------------------

//endregion -------------------- Properties --------------------
