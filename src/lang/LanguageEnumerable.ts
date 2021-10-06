import type {AnyClassWithEveryLanguages, ClassWithEveryLanguages, CompleteClassWithEveryLanguages}                                                             from './ClassWithEveryLanguages';
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal}                                                                          from './name/containers/Language';
import type {PossibleEveryLanguagesAcronym, PossibleEveryLanguagesEnglishName, PossibleEveryLanguagesInternationalAcronym, PossibleEveryLanguagesOriginalName} from './EveryLanguages.types';

export interface LanguageEnumerable {

    //region -------------------- Getter methods --------------------

    get isACompleteLanguage(): boolean

    get projectAcronym(): PossibleEveryLanguagesAcronym

    get internationalAcronym(): PossibleEveryLanguagesInternationalAcronym

    get englishName(): PossibleEveryLanguagesEnglishName

    get originalName(): PossibleEveryLanguagesOriginalName

    get isCurrentLanguage(): boolean

    get isCurrentLanguageOrAssociatedWithIt(): boolean

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    get(classWithEveryLanguages: ClassWithEveryLanguages,): string


    original<T extends CompleteClassWithEveryLanguages, >(classWithEveryLanguages: T,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal

    original<T extends ClassWithEveryLanguages, >(classWithEveryLanguages: T,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal | null

    original<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal | null

    //endregion -------------------- Methods --------------------

}
