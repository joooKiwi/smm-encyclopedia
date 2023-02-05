import type {NullOrString} from 'util/types/nullable'

/**
 * @template
 */
export interface NameTemplate {

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


    hebrew: NullOrString

    polish: NullOrString

    ukrainian: NullOrString

    greek: NullOrString

}
