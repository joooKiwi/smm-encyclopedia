import type {AnyClassWithEveryLanguages, ClassWithEveryLanguages, CompleteClassWithEveryLanguages}                                                                                                                                                              from './ClassWithEveryLanguages';
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal, PossibleAmericanOrEuropeanValue, PossibleCanadianOrEuropeanValue, PossibleChineseValue}                                                                                   from './name/containers/Language';
import type {CharactersTrait}                                                                                                                                                                                                                                   from './CharactersTrait';
import type {PossibleAcronym as PossibleAcronym_All, PossibleEnglishName as PossibleEnglishName_All, PossibleInternationalAcronym as PossibleInternationalAcronym_All, PossibleOriginalName as PossibleOriginalName_All, PossibleSpaceCharacter}                from './EveryLanguages.types';
import type {PossibleAcronym as PossibleAcronym_Project, PossibleDifferentWord, PossibleEnglishName as PossibleEnglishName_Project, PossibleInternationalAcronym as PossibleInternationalAcronym_Project, PossibleOriginalName as PossibleOriginalName_Project} from './ProjectLanguages.types';
import type {PossibleLanguageValue}                                                                                                                                                                                                                             from './ClassWithOnlyProjectLanguages';

export interface LanguageEnumerable<PROJECT_ACRONYM extends | PossibleAcronym_All | PossibleAcronym_Project,
    INTERNATIONAL_ACRONYM extends | PossibleInternationalAcronym_All | PossibleInternationalAcronym_Project,
    ENGLISH_NAME extends | PossibleEnglishName_All | PossibleEnglishName_Project,
    ORIGINAL_NAME extends | PossibleOriginalName_All | PossibleOriginalName_Project,
    DIFFERENT_WORDS extends | PossibleDifferentWord | null,>
    extends CharactersTrait {

    //region -------------------- Getter methods --------------------

    get isACompleteLanguage(): boolean

    //region -------------------- Space getter methods --------------------

    get hasSpace(): boolean

    get isASpaceEvenLanguage(): boolean

    get isASpaceEvenLanguageForThePointsAndSpace(): boolean

    get isASpaceEvenLanguageForEverythingExcludingThePointsAndSpace(): boolean

    //endregion -------------------- Space getter methods --------------------

    get projectAcronym(): PROJECT_ACRONYM

    get internationalAcronym(): INTERNATIONAL_ACRONYM

    get englishName(): ENGLISH_NAME

    get originalName(): ORIGINAL_NAME

    get differentWords(): DIFFERENT_WORDS

    get isCurrentLanguage(): boolean

    get isCurrentLanguageOrAssociatedWithIt(): boolean

    get isDefaultLanguage(): boolean

    //region -------------------- Characters getter methods --------------------

    get space(): PossibleSpaceCharacter

    //endregion -------------------- Characters getter methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    get<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): T


    original<T, >(classWithEveryLanguages: CompleteClassWithEveryLanguages<T>,): | T | AmericanOrEuropeanOriginal<T> | CanadianOrEuropeanOriginal<T> | ChineseOriginal<T>

    original<T, >(classWithEveryLanguages: ClassWithEveryLanguages<T>,): | PossibleLanguageValue<T> | PossibleAmericanOrEuropeanValue<T> | PossibleCanadianOrEuropeanValue<T> | PossibleChineseValue<T>

    original<T, >(classWithEveryLanguages: AnyClassWithEveryLanguages<T>,): | PossibleLanguageValue<T> | PossibleAmericanOrEuropeanValue<T> | PossibleCanadianOrEuropeanValue<T> | PossibleChineseValue<T>

    //endregion -------------------- Methods --------------------

}
