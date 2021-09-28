import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal}                                                                          from './name/containers/Language';
import type {ClassWithEveryLanguages}                                                                                                                          from './ClassWithEveryLanguages';
import type {PossibleEveryLanguagesAcronym, PossibleEveryLanguagesEnglishName, PossibleEveryLanguagesInternationalAcronym, PossibleEveryLanguagesOriginalName} from './EveryLanguages.types';

export interface LanguageEnumerable {

    //region -------------------- Getter methods --------------------

    get projectAcronym(): PossibleEveryLanguagesAcronym

    get internationalAcronym(): PossibleEveryLanguagesInternationalAcronym

    get englishName(): PossibleEveryLanguagesEnglishName

    get originalName(): PossibleEveryLanguagesOriginalName

    get isCurrentLanguage(): boolean

    get isCurrentLanguageOrAssociatedWithIt(): boolean

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    get(classWithEveryLanguages: ClassWithEveryLanguages,): string

    original(classWithEveryLanguages: ClassWithEveryLanguages,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal

    //endregion -------------------- Methods --------------------

}