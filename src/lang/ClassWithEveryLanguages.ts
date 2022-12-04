import type {ClassWithOnlyProjectLanguages}                                           from 'lang/ClassWithOnlyProjectLanguages'
import type {EveryLanguages}                                                          from 'lang/EveryLanguages'
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal} from 'lang/name/containers/Language'
import type {NullOr}                                                                  from 'util/types/nullable'

/**
 * <p>
 *     A class with every language including the simple language.
 *     The English & French are included in the first type
 *     since they are always complete in the current project.
 * </p>
 *
 * <p>
 *     As a reference, this class utilise the simple language without the region as well
 *     as every language included inside {@link ClassWithOnlyProjectLanguages}
 * </p>
 */
export interface ClassWithEveryLanguages<T,
    GERMAN extends NullOr<T> = NullOr<T>,
    ORIGINAL_SPANISH extends NullOr<AmericanOrEuropeanOriginal<T>> = NullOr<AmericanOrEuropeanOriginal<T>>, SPANISH extends NullOr<T> = NullOr<T>, AMERICAN_SPANISH extends NullOr<T> = NullOr<T>, EUROPEAN_SPANISH extends NullOr<T> = NullOr<T>,
    ITALIAN extends NullOr<T> = NullOr<T>,
    DUTCH extends NullOr<T> = NullOr<T>,
    ORIGINAL_PORTUGUESE extends NullOr<AmericanOrEuropeanOriginal<T>> = NullOr<AmericanOrEuropeanOriginal<T>>, PORTUGUESE extends NullOr<T> = NullOr<T>, AMERICAN_PORTUGUESE extends NullOr<T> = NullOr<T>, EUROPEAN_PORTUGUESE extends NullOr<T> = NullOr<T>,
    RUSSIAN extends NullOr<T> = NullOr<T>,
    JAPANESE extends NullOr<T> = NullOr<T>,
    ORIGINAL_CHINESE extends NullOr<ChineseOriginal<T>> = NullOr<ChineseOriginal<T>>, CHINESE extends NullOr<T> = NullOr<T>, TRADITIONAL_CHINESE extends NullOr<T> = NullOr<T>, SIMPLIFIED_CHINESE extends NullOr<T> = NullOr<T>,
    KOREAN extends NullOr<T> = NullOr<T>,
    HEBREW extends NullOr<T> = NullOr<T>,
    POLISH extends NullOr<T> = NullOr<T>,
    UKRAINIAN extends NullOr<T> = NullOr<T>,
    GREEK extends NullOr<T> = NullOr<T>, >
    extends ClassWithOnlyProjectLanguages<T, GERMAN, AMERICAN_SPANISH, EUROPEAN_SPANISH, ITALIAN, DUTCH, AMERICAN_PORTUGUESE, EUROPEAN_PORTUGUESE, RUSSIAN, JAPANESE, TRADITIONAL_CHINESE, SIMPLIFIED_CHINESE, KOREAN, HEBREW, POLISH, UKRAINIAN, GREEK> {

    //region -------------------- English properties --------------------

    get english(): T

    get originalEnglish(): AmericanOrEuropeanOriginal<T>

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    get french(): T

    get originalFrench(): CanadianOrEuropeanOriginal<T>

    //endregion -------------------- French properties --------------------
    //region -------------------- Spanish properties --------------------

    get spanish(): SPANISH

    get originalSpanish(): ORIGINAL_SPANISH

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Portuguese properties --------------------

    get portuguese(): PORTUGUESE

    get originalPortuguese(): ORIGINAL_PORTUGUESE

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Chinese properties --------------------

    get chinese(): CHINESE

    get originalChinese(): ORIGINAL_CHINESE

    //endregion -------------------- Chinese properties --------------------

    /**
     * The original languages used when the instance was constructed.
     */
    get originalLanguages(): readonly EveryLanguages[]


    /**
     * Return a {@link Map} based on the enum {@link EveryLanguages}
     * with every values used by the original value stored for this instance.
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
    AmericanOrEuropeanOriginal<T>, T, T, T,
    T,
    T,
    AmericanOrEuropeanOriginal<T>, T, T, T,
    T,
    T,
    ChineseOriginal<T>, T, T, T,
    T>

export type AnyClassWithEveryLanguages<T, > = | ClassWithEveryLanguages<T> | CompleteClassWithEveryLanguages<T>
