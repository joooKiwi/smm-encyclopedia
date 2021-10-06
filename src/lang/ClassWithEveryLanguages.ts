import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal} from './name/containers/Language';
import type {ClassWithOnlyProjectLanguages}                                           from './ClassWithOnlyProjectLanguages';
import type {EveryLanguages}                                                          from './EveryLanguages';

/**
 * <p>
 *     A class with every languages including the simple language.
 * </p>
 *
 * <p>
 *     As a reference, this class utilise the simple language without the region as well
 *     as every languages included inside {@link ClassWithOnlyProjectLanguages}
 * </p>
 */
export interface ClassWithEveryLanguages<GERMAN extends | string | null = | string | null,
    ORIGINAL_SPANISH extends | AmericanOrEuropeanOriginal | null = | AmericanOrEuropeanOriginal | null, SPANISH extends | string | null = | string | null, AMERICAN_SPANISH extends | string | null = | string | null, EUROPEAN_SPANISH extends | string | null = | string | null,
    ITALIAN extends | string | null = | string | null,
    DUTCH extends | string | null = | string | null,
    ORIGINAL_PORTUGUESE extends | AmericanOrEuropeanOriginal | null = | AmericanOrEuropeanOriginal | null, PORTUGUESE extends | string | null = | string | null, AMERICAN_PORTUGUESE extends | string | null = | string | null, EUROPEAN_PORTUGUESE extends | string | null = | string | null,
    RUSSIAN extends | string | null = | string | null,
    JAPANESE extends | string | null = | string | null,
    ORIGINAL_CHINESE extends | ChineseOriginal | null = | ChineseOriginal | null, CHINESE extends | string | null = | string | null, TRADITIONAL_CHINESE extends | string | null = | string | null, SIMPLIFIED_CHINESE extends | string | null = | string | null,
    KOREAN extends | string | null = | string | null, >
    extends ClassWithOnlyProjectLanguages<GERMAN, AMERICAN_SPANISH, EUROPEAN_SPANISH, ITALIAN, DUTCH, AMERICAN_PORTUGUESE, EUROPEAN_PORTUGUESE, RUSSIAN, JAPANESE, TRADITIONAL_CHINESE, SIMPLIFIED_CHINESE, KOREAN> {

    //region -------------------- English properties --------------------

    get english(): string

    get originalEnglish(): AmericanOrEuropeanOriginal

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    get french(): string

    get originalFrench(): CanadianOrEuropeanOriginal

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

    get originalLanguages(): readonly EveryLanguages[]


    /**
     * Return a {@link Map} based on the enum {@link EveryLanguages}
     * with every values used by the original value stored for this instance.
     */
    toNameMap(): ReadonlyMap<EveryLanguages, string>

}

export type CompleteClassWithEveryLanguages = ClassWithEveryLanguages<string,
    AmericanOrEuropeanOriginal, string, string, string,
    string,
    string,
    AmericanOrEuropeanOriginal, string, string, string,
    string,
    string,
    ChineseOriginal, string, string, string,
    string>;

export type AnyClassWithEveryLanguages = | ClassWithEveryLanguages | CompleteClassWithEveryLanguages;