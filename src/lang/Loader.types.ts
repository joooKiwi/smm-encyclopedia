//region -------------------- Headers --------------------

export type Headers = | 'english' | 'spanish' | 'portuguese' | `${'american' | 'european'}${'English' | 'Spanish' | 'Portuguese'}`
                      | 'french' | `${'canadian' | 'european'}French` | 'german' | 'italian' | 'dutch' | 'russian' | 'japanese'
                      | 'chinese' | `${'simplified' | 'traditional'}Chinese` | 'korean';
export type HeadersWithPortuguese = Headers | 'portuguese' | `${'american' | 'european'}Portuguese`;

//endregion -------------------- Headers --------------------
//region -------------------- PropertiesArray --------------------

export type PropertiesArray<EVERY_TYPES extends | string | null = | string | null, > = [
    english: EVERY_TYPES,
    americanEnglish: EVERY_TYPES,
    europeanEnglish: EVERY_TYPES,

    french: EVERY_TYPES,
    canadianFrench: EVERY_TYPES,
    europeanFrench: EVERY_TYPES,

    german: EVERY_TYPES,

    spanish: EVERY_TYPES,
    americanSpanish: EVERY_TYPES,
    europeanSpanish: EVERY_TYPES,

    italian: EVERY_TYPES,

    dutch: EVERY_TYPES,

    russian: EVERY_TYPES,

    japanese: EVERY_TYPES,

    chinese: EVERY_TYPES,
    simplifiedChinese: EVERY_TYPES,
    tradionalChinese: EVERY_TYPES,

    korean: EVERY_TYPES,
];
export type PropertiesArrayWithPortuguese<EVERY_TYPES extends | string | null = | string | null, > = [
    // @ts-ignore
    ...PropertiesArray<EVERY_TYPES>,

    portuguese: EVERY_TYPES,
    americanPortuguese: EVERY_TYPES,
    europeanPortuguese: EVERY_TYPES,
];

//endregion -------------------- PropertiesArray --------------------
//region -------------------- PropertiesArrayAsFunctionParameter --------------------

export type PropertiesArrayAsFunctionParameter<EVERY_TYPES extends | string | null = | string | null, > = readonly [
    english: | string | null, americanEnglish: | string | null, europeanEnglish: | string | null,
    french: | string | null, canadianFrench: | string | null, europeanFrench: | string | null,
    german: | string | null,
    spanish: | string | null, americanSpanish: | string | null, europeanSpanish: | string | null,
    italian: | string | null,
    dutch: | string | null,
    russian: | string | null,
    japanese: | string | null,
    chinese: | string | null, simplifiedChinese: | string | null, traditionalChinese: | string | null,
    korean: | string | null,
];

export type PropertiesArrayAsFunctionParameterWithPortuguese<EVERY_TYPES extends | string | null = | string | null, > = readonly [
    // @ts-ignore
    ...PropertiesArrayAsFunctionParameter<EVERY_TYPES>,
    portuguese: | string | null, americanPortuguese: | string | null, europeanPortuguese: | string | null,
];

//endregion -------------------- PropertiesArrayAsFunctionParameter --------------------
