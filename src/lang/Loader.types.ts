export type Headers = | 'english' | 'spanish' | 'portuguese' | `${'american' | 'european'}${'English' | 'Spanish' | 'Portuguese'}`
                      | 'french' | `${'canadian' | 'european'}French` | 'german' | 'italian' | 'dutch' | 'russian' | 'japanese'
                      | 'chinese' | `${'simplified' | 'traditional'}Chinese` | 'korean';
export type PropertiesArray = [
    english: | string | null,
    americanEnglish: | string | null,
    europeanEnglish: | string | null,

    french: | string | null,
    canadianFrench: | string | null,
    europeanFrench: | string | null,

    german: | string | null,

    spanish: | string | null,
    americanSpanish: | string | null,
    europeanSpanish: | string | null,

    italian: | string | null,

    dutch: | string | null,

    portuguese: | string | null,
    americanPortuguese: | string | null,
    europeanPortuguese: | string | null,

    russian: | string | null,

    japanese: | string | null,

    chinese: | string | null,
    simplifiedChinese: | string | null,
    tradionalChinese: | string | null,

    korean: | string | null,
];