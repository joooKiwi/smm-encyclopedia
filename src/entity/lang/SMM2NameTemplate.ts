/**
 * @template
 */
export interface SMM2NameTemplate {

    english: {
        simple: | string | null
        american: | string | null
        european: | string | null
    }

    french: {
        simple: | string | null
        canadian: | string | null
        european: | string | null
    }

    german: | string | null

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
        simplified: | string | null
        traditional: | string | null
    }

    japanese: | string | null

    korean: | string | null

}