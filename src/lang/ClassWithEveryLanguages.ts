import {ClassWithLanguages}         from './ClassWithLanguages';
import {EveryLanguages}             from './EveryLanguages';
import {ChineseOriginal}            from './name/components/ChineseLanguage';
import {AmericanOrEuropeanOriginal} from './name/components/AmericanAndEuropeanLanguage';
import {CanadianOrEuropeanOriginal} from './name/components/CanadianAndEuropeanLanguage';

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

    languageValue: string

    english: string
    originalEnglish: AmericanOrEuropeanOriginal

    french: string
    originalFrench: CanadianOrEuropeanOriginal

    spanish: string
    originalSpanish: AmericanOrEuropeanOriginal

    portuguese: string
    originalPortuguese: AmericanOrEuropeanOriginal

    chinese: string
    originalChinese: ChineseOriginal

    toNameMap(): Map<EveryLanguages, string>

}