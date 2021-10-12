/**
 * @template
 */
export interface SMM2NameTemplate<PORTUGUESE extends string | null = null, GREEK extends string | null = null, > {

    english: {
        simple: | string | null
        american: | string | null
        european: | string | null
    }

    german: | string | null

    french: {
        simple: | string | null
        canadian: | string | null
        european: | string | null
    }

    spanish: {
        simple: | string | null
        american: | string | null
        european: | string | null
    }

    italian: | string | null

    dutch: | string | null

    portuguese: {
        simple: PORTUGUESE
        american: PORTUGUESE
        european: PORTUGUESE
    }

    russian: | string | null

    chinese: {
        simple: | string | null
        traditional: | string | null
        simplified: | string | null
    }

    japanese: | string | null

    korean: | string | null

    greek: GREEK

}

/**
 * @template
 */
export interface SMM2NameTemplateWithOptionalLanguages
    extends SMM2NameTemplate<| string | null, | string | null> {

}
