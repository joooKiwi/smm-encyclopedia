import type {NullOrString} from 'util/types/nullable'

/**
 * @template
 */
export interface NameTemplate<HEBREW extends NullOrString = null,
    POLISH extends NullOrString = null,
    UKRAINIAN extends NullOrString = null,
    GREEK extends NullOrString = null, > {

    english: {
        simple: NullOrString
        american: NullOrString
        european: NullOrString
    }

    german: NullOrString

    french: {
        simple: NullOrString
        canadian: NullOrString
        european: NullOrString
    }

    spanish: {
        simple: NullOrString
        american: NullOrString
        european: NullOrString
    }

    italian: NullOrString

    dutch: NullOrString

    portuguese: {
        simple: NullOrString
        american: NullOrString
        european: NullOrString
    }

    russian: NullOrString

    chinese: {
        simple: NullOrString
        traditional: NullOrString
        simplified: NullOrString
    }

    japanese: NullOrString

    korean: NullOrString

    hebrew: HEBREW

    polish: POLISH

    ukrainian: UKRAINIAN

    greek: GREEK

}

/**
 * @template
 */
export interface NameTemplateWithOptionalLanguages
    extends NameTemplate<NullOrString, NullOrString, NullOrString, NullOrString> {

}

export type PossibleNameTemplate = | NameTemplate | NameTemplateWithOptionalLanguages
