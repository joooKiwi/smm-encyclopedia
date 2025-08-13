import type {Array, NullOr} from '@joookiwi/type'

import type {ClassWithOnlyProjectLanguages} from 'lang/ClassWithOnlyProjectLanguages'
import type {EveryLanguages}                from 'lang/EveryLanguages'

/**
 * A class with every language including the simple language.
 * The English & French are included in the first type
 * since they are always complete in the current project.
 *
 * As a reference, this class utilize the simple language without the region as well
 * as every language included inside {@link ClassWithOnlyProjectLanguages}
 */
export interface ClassWithEveryLanguages<out T,
    out GERMAN extends NullOr<T> = NullOr<T>,
    out ORIGINAL_SPANISH extends NullOr<| T | ArrayOf2<T>> = NullOr<| T | ArrayOf2<T>>, out SPANISH extends NullOr<T> = NullOr<T>, out AMERICAN_SPANISH extends NullOr<T> = NullOr<T>, out EUROPEAN_SPANISH extends NullOr<T> = NullOr<T>,
    out ITALIAN extends NullOr<T> = NullOr<T>,
    out DUTCH extends NullOr<T> = NullOr<T>,
    out ORIGINAL_PORTUGUESE extends NullOr<| T | ArrayOf2<T>> = NullOr<| T | ArrayOf2<T>>, out PORTUGUESE extends NullOr<T> = NullOr<T>, out AMERICAN_PORTUGUESE extends NullOr<T> = NullOr<T>, out EUROPEAN_PORTUGUESE extends NullOr<T> = NullOr<T>,
    out RUSSIAN extends NullOr<T> = NullOr<T>,
    out JAPANESE extends NullOr<T> = NullOr<T>,
    out ORIGINAL_CHINESE extends NullOr<| T | ArrayOf2<T>> = NullOr<| T | ArrayOf2<T>>, out CHINESE extends NullOr<T> = NullOr<T>, out TRADITIONAL_CHINESE extends NullOr<T> = NullOr<T>, out SIMPLIFIED_CHINESE extends NullOr<T> = NullOr<T>,
    out KOREAN extends NullOr<T> = NullOr<T>,
    out HEBREW extends NullOr<T> = NullOr<T>,
    out POLISH extends NullOr<T> = NullOr<T>,
    out UKRAINIAN extends NullOr<T> = NullOr<T>,
    out GREEK extends NullOr<T> = NullOr<T>, >
    extends ClassWithOnlyProjectLanguages<T, GERMAN, AMERICAN_SPANISH, EUROPEAN_SPANISH, ITALIAN, DUTCH, AMERICAN_PORTUGUESE, EUROPEAN_PORTUGUESE, RUSSIAN, JAPANESE, TRADITIONAL_CHINESE, SIMPLIFIED_CHINESE, KOREAN, HEBREW, POLISH, UKRAINIAN, GREEK> {

    readonly english: T
    readonly originalEnglish: | T | ArrayOf2<T>

    readonly french: T
    readonly originalFrench: | T | ArrayOf2<T>

    readonly spanish: SPANISH
    readonly originalSpanish: ORIGINAL_SPANISH

    readonly portuguese: PORTUGUESE
    readonly originalPortuguese: ORIGINAL_PORTUGUESE

    readonly chinese: CHINESE
    readonly originalChinese: ORIGINAL_CHINESE

    /** The original languages used when the instance was constructed */
    readonly originalLanguages: Array<EveryLanguages>


    /**
     * Return a {@link Map} based on the enum {@link EveryLanguages}
     * with every value used by the original value stored for this instance.
     */
    toNameMap(): ReadonlyMap<EveryLanguages, T>

}


/**
 * A complete class with every language,
 * excluding the optional languages ({@link EveryLanguages.HEBREW hebrew}, {@link EveryLanguages.POLISH polish},
 * {@link EveryLanguages.UKRAINIAN ukrainian} & {@link EveryLanguages.GREEK greek}).
 */
export type CompleteClassWithEveryLanguages<T, > = ClassWithEveryLanguages<T,
    T,
    | T | ArrayOf2<T>, T, T, T,
    T,
    T,
    | T | ArrayOf2<T>, T, T, T,
    T,
    T,
    | T | ArrayOf2<T>, T, T, T,
    T>

export type AnyClassWithEveryLanguages<T, > = | ClassWithEveryLanguages<T> | CompleteClassWithEveryLanguages<T>
