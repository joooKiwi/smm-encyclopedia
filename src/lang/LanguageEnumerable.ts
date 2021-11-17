import type {AnyClassWithEveryLanguages, ClassWithEveryLanguages, CompleteClassWithEveryLanguages}                                                                                                                                                                                                                       from './ClassWithEveryLanguages';
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal}                                                                                                                                                                                                                                    from './name/containers/Language';
import type {CharactersTrait}                                                                                                                                                                                                                                                                                            from './CharactersTrait';
import type {PossibleEveryLanguagesAcronym, PossibleEveryLanguagesEnglishName, PossibleEveryLanguagesInternationalAcronym, PossibleEveryLanguagesOriginalName, PossibleProjectLanguagesAcronym, PossibleProjectLanguagesEnglishName, PossibleProjectLanguagesInternationalAcronym, PossibleProjectLanguagesOriginalName} from './EveryLanguages.types';

export interface LanguageEnumerable<PROJECT_ACRONYM extends | PossibleEveryLanguagesAcronym | PossibleProjectLanguagesAcronym,
    INTERNATIONAL_ACRONYM extends | PossibleEveryLanguagesInternationalAcronym | PossibleProjectLanguagesInternationalAcronym,
    ENGLISH_NAME extends | PossibleEveryLanguagesEnglishName | PossibleProjectLanguagesEnglishName,
    ORIGINAL_NAME extends | PossibleEveryLanguagesOriginalName | PossibleProjectLanguagesOriginalName>
    extends CharactersTrait {

    //region -------------------- Getter methods --------------------

    get isACompleteLanguage(): boolean


    get isASpaceEvenLanguage(): boolean

    get isASpaceEvenLanguageForThePointsAndSpace(): boolean

    get isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace(): boolean


    get projectAcronym(): PROJECT_ACRONYM

    get internationalAcronym(): INTERNATIONAL_ACRONYM

    get englishName(): ENGLISH_NAME

    get originalName(): ORIGINAL_NAME

    get isCurrentLanguage(): boolean

    get isCurrentLanguageOrAssociatedWithIt(): boolean

    get isDefaultLanguage(): boolean

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    get(classWithEveryLanguages: ClassWithEveryLanguages,): string


    original<T extends CompleteClassWithEveryLanguages, >(classWithEveryLanguages: T,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal

    original<T extends ClassWithEveryLanguages, >(classWithEveryLanguages: T,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal | null

    original<T extends AnyClassWithEveryLanguages = AnyClassWithEveryLanguages, >(classWithEveryLanguages: T,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal | null

    //endregion -------------------- Methods --------------------

}
