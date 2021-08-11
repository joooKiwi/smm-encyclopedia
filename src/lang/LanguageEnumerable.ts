import type {AmericanOrEuropeanOriginal}                                                                                                                       from './name/containers/AmericanAndEuropeanLanguage';
import type {CanadianOrEuropeanOriginal}                                                                                                                       from './name/containers/CanadianAndEuropeanLanguage';
import type {ChineseOriginal}                                                                                                                                  from './name/containers/ChineseLanguage';
import type {ClassWithEveryLanguages}                                                                                                                          from './ClassWithEveryLanguages';
import type {ClassWithLanguages}                                                                                                                               from './ClassWithLanguages';
import type {PossibleEveryLanguagesAcronym, PossibleEveryLanguagesEnglishName, PossibleEveryLanguagesInternationalAcronym, PossibleEveryLanguagesOriginalName} from './EveryLanguages';

export interface LanguageEnumerable {

    //region -------------------- Getter --------------------

    get projectAcronym(): PossibleEveryLanguagesAcronym

    get internationalAcronym(): PossibleEveryLanguagesInternationalAcronym

    get englishName(): PossibleEveryLanguagesEnglishName

    get originalName(): PossibleEveryLanguagesOriginalName

    get isCurrentLanguage(): boolean

    get isCurrentLanguageOrAssociatedWithIt(): boolean

    //endregion -------------------- Getter --------------------
    //region -------------------- Methods --------------------

    get(classWithLanguages: ClassWithLanguages,): string

    original(classWithEveryLanguages: ClassWithEveryLanguages,): | string | AmericanOrEuropeanOriginal | CanadianOrEuropeanOriginal | ChineseOriginal

    //endregion -------------------- Methods --------------------

}