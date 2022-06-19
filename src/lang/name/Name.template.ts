import type {PossibleLanguageValue} from '../ClassWithOnlyProjectLanguages';

/**
 * @template
 */
export interface NameTemplate<HEBREW extends PossibleLanguageValue<string> = null,
    POLISH extends PossibleLanguageValue<string> = null,
    UKRAINIAN extends PossibleLanguageValue<string> = null,
    GREEK extends PossibleLanguageValue<string> = null, > {

    english: {
        simple: PossibleLanguageValue<string>
        american: PossibleLanguageValue<string>
        european: PossibleLanguageValue<string>
    }

    german: PossibleLanguageValue<string>

    french: {
        simple: PossibleLanguageValue<string>
        canadian: PossibleLanguageValue<string>
        european: PossibleLanguageValue<string>
    }

    spanish: {
        simple: PossibleLanguageValue<string>
        american: PossibleLanguageValue<string>
        european: PossibleLanguageValue<string>
    }

    italian: PossibleLanguageValue<string>

    dutch: PossibleLanguageValue<string>

    portuguese: {
        simple: PossibleLanguageValue<string>
        american: PossibleLanguageValue<string>
        european: PossibleLanguageValue<string>
    }

    russian: PossibleLanguageValue<string>

    chinese: {
        simple: PossibleLanguageValue<string>
        traditional: PossibleLanguageValue<string>
        simplified: PossibleLanguageValue<string>
    }

    japanese: PossibleLanguageValue<string>

    korean: PossibleLanguageValue<string>

    hebrew: HEBREW

    polish: POLISH

    ukrainian: UKRAINIAN

    greek: GREEK

}

/**
 * @template
 */
export interface NameTemplateWithOptionalLanguages
    extends NameTemplate<PossibleLanguageValue<string>,PossibleLanguageValue<string>,PossibleLanguageValue<string>,PossibleLanguageValue<string>> {

}

export type PossibleNameTemplate = | NameTemplate | NameTemplateWithOptionalLanguages;
