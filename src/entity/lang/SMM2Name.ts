import {ClassWithEveryLanguages}    from '../../lang/ClassWithEveryLanguages';
import {SMM2Languages}              from './SMM2Languages';
import {AmericanOrEuropeanOriginal} from './AmericanAndEuropeanLanguage';
import {ChineseOriginal}            from './ChineseLanguage';
import {CanadianOrEuropeanOriginal} from './CanadianAndEuropeanLanguage';

export interface SMM2Name
    extends ClassWithEveryLanguages {

    languageValue: string

    originalEnglish: AmericanOrEuropeanOriginal
    english: string

    originalFrench: CanadianOrEuropeanOriginal
    french: string

    originalSpanish: AmericanOrEuropeanOriginal
    spanish: string

    originalPortuguese: AmericanOrEuropeanOriginal
    portuguese: string

    originalChinese: ChineseOriginal
    chinese: string


    toNameMap(): Map<SMM2Languages, string>

}
