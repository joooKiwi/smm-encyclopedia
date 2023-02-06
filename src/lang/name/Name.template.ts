import type {NullOrString} from 'util/types/nullable'

/**
 * @template
 */
export interface NameTemplate {

    readonly english: {
        readonly simple: NullOrString
        readonly american: NullOrString
        readonly european: NullOrString
    }

    readonly german: NullOrString

    readonly french: {
        readonly simple: NullOrString
        readonly canadian: NullOrString
        readonly european: NullOrString
    }

    readonly spanish: {
        readonly simple: NullOrString
        readonly american: NullOrString
        readonly european: NullOrString
    }

    readonly italian: NullOrString

    readonly dutch: NullOrString

    readonly portuguese: {
        readonly simple: NullOrString
        readonly american: NullOrString
        readonly european: NullOrString
    }

    readonly russian: NullOrString

    readonly chinese: {
        readonly simple: NullOrString
        readonly traditional: NullOrString
        readonly simplified: NullOrString
    }

    readonly japanese: NullOrString

    readonly korean: NullOrString


    readonly hebrew: NullOrString

    readonly polish: NullOrString

    readonly ukrainian: NullOrString

    readonly greek: NullOrString

}
