import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal, PossibleAmericanOrEuropeanValue, PossibleChineseValue} from './name/containers/Language';
import type {ClassWithOnlyProjectLanguages, PossibleLanguageValue}                                                                           from './ClassWithOnlyProjectLanguages';
import type {EveryLanguages}                                                                                                                 from './EveryLanguages';

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
    GERMAN extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    ORIGINAL_SPANISH extends PossibleAmericanOrEuropeanValue<T> = PossibleAmericanOrEuropeanValue<T>, SPANISH extends PossibleLanguageValue<T> = PossibleLanguageValue<T>, AMERICAN_SPANISH extends PossibleLanguageValue<T> = PossibleLanguageValue<T>, EUROPEAN_SPANISH extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    ITALIAN extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    DUTCH extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    ORIGINAL_PORTUGUESE extends PossibleAmericanOrEuropeanValue<T> = PossibleAmericanOrEuropeanValue<T>, PORTUGUESE extends PossibleLanguageValue<T> = PossibleLanguageValue<T>, AMERICAN_PORTUGUESE extends PossibleLanguageValue<T> = PossibleLanguageValue<T>, EUROPEAN_PORTUGUESE extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    RUSSIAN extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    JAPANESE extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    ORIGINAL_CHINESE extends PossibleChineseValue<T> = PossibleChineseValue<T>, CHINESE extends PossibleLanguageValue<T> = PossibleLanguageValue<T>, TRADITIONAL_CHINESE extends PossibleLanguageValue<T> = PossibleLanguageValue<T>, SIMPLIFIED_CHINESE extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    KOREAN extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    HEBREW extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    POLISH extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    UKRAINIAN extends PossibleLanguageValue<T> = PossibleLanguageValue<T>,
    GREEK extends PossibleLanguageValue<T> = PossibleLanguageValue<T>, >
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
    T>;

export type AnyClassWithEveryLanguages<T, > = | ClassWithEveryLanguages<T> | CompleteClassWithEveryLanguages<T>;
