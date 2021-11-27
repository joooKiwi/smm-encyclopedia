/**
 * @template
 */
export interface NameTemplate<GREEK extends string | null = null, > {

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
        simple: | string | null
        american: | string | null
        european: | string | null
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
export interface NameTemplateWithOptionalLanguages
    extends NameTemplate<| string | null> {

}

export type PossibleNameTemplate = | NameTemplate | NameTemplateWithOptionalLanguages;
