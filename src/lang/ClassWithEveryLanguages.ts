import {ClassWithLanguages}         from './ClassWithLanguages';
import {EveryLanguages}             from './EveryLanguages';
import {ChineseOriginal}            from './name/containers/ChineseLanguage';
import {AmericanOrEuropeanOriginal} from './name/containers/AmericanAndEuropeanLanguage';
import {CanadianOrEuropeanOriginal} from './name/containers/CanadianAndEuropeanLanguage';

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

    get english(): string

    get originalEnglish(): AmericanOrEuropeanOriginal


    get french(): string

    get originalFrench(): CanadianOrEuropeanOriginal


    get spanish(): string

    get originalSpanish(): AmericanOrEuropeanOriginal


    get portuguese(): string

    get originalPortuguese(): AmericanOrEuropeanOriginal


    get chinese(): string

    get originalChinese(): ChineseOriginal


    get individualValues(): readonly EveryLanguages[]//TODO find a better name


    /**
     * Return a {@link Map} based on the enum {@link EveryLanguages}
     * with every values used by the original value stored for this instance.
     */
    toNameMap(): Map<EveryLanguages, string>

}