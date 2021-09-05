import type {ClassWithLanguages}         from './ClassWithLanguages';
import type {EveryLanguages}             from './EveryLanguages';
import type {ChineseOriginal}            from './name/containers/ChineseLanguage';
import type {AmericanOrEuropeanOriginal} from './name/containers/AmericanAndEuropeanLanguage';
import type {CanadianOrEuropeanOriginal} from './name/containers/CanadianAndEuropeanLanguage';

/**
 * <p>
 *     A class with every languages including the simple language.
 * </p>
 *
 * <p>
 *     As a reference, this class utilise the simple language without the region as well
 *     as every languages included inside {@link ClassWithLanguages}
 * </p>
 */
export interface ClassWithEveryLanguages
    extends ClassWithLanguages {

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

    get individualValues(): readonly EveryLanguages[]//TODO find a better name


    /**
     * Return a {@link Map} based on the enum {@link EveryLanguages}
     * with every values used by the original value stored for this instance.
     */
    toNameMap(): ReadonlyMap<EveryLanguages, string>

}