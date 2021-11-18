import type {AnyClassWithEveryLanguages, ClassWithEveryLanguages, CompleteClassWithEveryLanguages}                                                                                                                                       from './ClassWithEveryLanguages';
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal}                                                                                                                                                    from './name/containers/Language';
import type {CharactersTrait}                                                                                                                                                                                                            from './CharactersTrait';
import type {PossibleAcronym as PossibleAcronym_All, PossibleEnglishName as PossibleEnglishName_All, PossibleInternationalAcronym as PossibleInternationalAcronym_All, PossibleOriginalName as PossibleOriginalName_All}                 from './EveryLanguages.types';
import type {PossibleAcronym as PossibleAcronym_Project, PossibleEnglishName as PossibleEnglishName_Project, PossibleInternationalAcronym as PossibleInternationalAcronym_Project, PossibleOriginalName as PossibleOriginalName_Project} from './ProjectLanguages.types';

export interface LanguageEnumerable<PROJECT_ACRONYM extends | PossibleAcronym_All | PossibleAcronym_Project,
    INTERNATIONAL_ACRONYM extends | PossibleInternationalAcronym_All | PossibleInternationalAcronym_Project,
    ENGLISH_NAME extends | PossibleEnglishName_All | PossibleEnglishName_Project,
    ORIGINAL_NAME extends | PossibleOriginalName_All | PossibleOriginalName_Project>
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
