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
export interface ClassWithEveryLanguages
    extends ClassWithOnlyProjectLanguages {

    //region -------------------- English properties --------------------

    get english(): string

    get originalEnglish(): AmericanOrEuropeanOriginal

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    get french(): string

    get originalFrench(): CanadianOrEuropeanOriginal

    //endregion -------------------- French properties --------------------
    //region -------------------- Spanish properties --------------------

    get spanish(): string

    get originalSpanish(): AmericanOrEuropeanOriginal

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Portuguese properties --------------------

    get portuguese(): string

    get originalPortuguese(): AmericanOrEuropeanOriginal

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Chinese properties --------------------

    get chinese(): string

    get originalChinese(): ChineseOriginal

    //endregion -------------------- Chinese properties --------------------

    get originalLanguages(): readonly EveryLanguages[]


    /**
     * Return a {@link Map} based on the enum {@link EveryLanguages}
     * with every values used by the original value stored for this instance.
     */
    toNameMap(): ReadonlyMap<EveryLanguages, string>

}