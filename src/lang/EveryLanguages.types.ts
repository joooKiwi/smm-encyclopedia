import type {EveryLanguages} from './EveryLanguages';
import type {SimpleEnum}     from '../util/enum/Enum.types';

export type PossibleNonNullableValue = | EveryLanguages
                                       | EveryLanguagesOrdinals
                                       | PossibleEveryLanguagesAcronym
                                       | PossibleEveryLanguagesEnglishName | PossibleEveryLanguagesOriginalName | EveryLanguagesNames;

//region -------------------- Number types --------------------

export type EveryLanguagesOrdinals = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
                                     | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type ProjectLanguagesNames = | `${| 'AMERICAN' | 'EUROPEAN'}_${| 'ENGLISH' | 'SPANISH' | 'PORTUGUESE'}`
                                    | `${| 'CANADIAN' | 'EUROPEAN'}_FRENCH`
                                    | 'GERMAN' | 'ITALIAN' | 'DUTCH' | 'RUSSIAN' | 'JAPANESE' | 'KOREAN'
                                    | `CHINESE_${| 'TRADITIONAL' | 'SIMPLIFIED'}`;
export type EveryLanguagesNames = | ProjectLanguagesNames | Uppercase<BasicEnglishName>;

//region -------------------- Acronyms --------------------

export type BasicAcronym = | 'en' | 'fr' | 'es' | 'pt' | 'zh';
export type PossibleProjectLanguagesAcronym =
    | 'en_AM' | 'en_EU'
    | 'fr_CA' | 'fr_EU'
    | 'de'
    | 'es_AM' | 'es_EU'
    | 'it' | 'nl'
    | 'pt_AM' | 'pt_EU'
    | 'ru' | 'ja'
    | 'zh_T' | 'zh_S'
    | 'ko';
export type PossibleEveryLanguagesAcronym = | BasicAcronym | PossibleProjectLanguagesAcronym;

export type PossibleProjectLanguagesInternationalAcronym =
    | 'en-US' | 'en-EU'
    | 'fr-CA' | 'fr-EU'
    | 'de'
    | 'es-US' | 'es-EU'
    | 'it' | 'nl'
    | 'pt-US' | 'pt-EU'
    | 'ru' | 'ja'
    | 'zh'
    | 'ko';
export type PossibleEveryLanguagesInternationalAcronym = | BasicAcronym | PossibleProjectLanguagesInternationalAcronym;

//endregion -------------------- Acronyms --------------------
//region -------------------- Names --------------------

export type BasicEnglishName = | 'English' | 'French' | 'Spanish' | 'Portuguese' | 'Chinese';
export type PossibleProjectLanguagesEnglishName =
    | `English (${'America' | 'Europe'})`
    | `French (${'Canada' | 'Europe'})`
    | 'German'
    | `Spanish (${'America' | 'Europe'})`
    | 'Dutch' | 'Italian'
    | `Portuguese (${'America' | 'Europe'})`
    | 'Russian' | 'Japanese'
    | `${'Traditional' | 'Simplified'} chinese`
    | 'Korean';
export type PossibleEveryLanguagesEnglishName = | BasicEnglishName | PossibleProjectLanguagesEnglishName;

export type BasicOriginalName = | 'English' | 'Français' | 'Español' | 'Português' | '中国人';
export type PossibleProjectLanguagesOriginalName =
    | `English (${'America' | 'Europe'})`
    | `Français (${'Canada' | 'Europe'})`
    | 'Deutsche'
    | `Español (${'America' | 'Europa'})`
    | `Português (${'América' | 'Europa'})`//Canadá
    | 'Nederlands' | 'Italiano'
    | 'русский' | '日本語'
    | '简体中文' | '繁體中文'
    | '한국어';
export type PossibleEveryLanguagesOriginalName = | BasicOriginalName | PossibleProjectLanguagesOriginalName;

//endregion -------------------- Names --------------------

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleProjectLanguages<T = EveryLanguages, > = SimpleEnum<ProjectLanguagesNames, T>;
export type SimpleEveryLanguages<T = EveryLanguages, > = SimpleEnum<EveryLanguagesNames, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type ProjectLanguagesArray<T = EveryLanguages, > = readonly [
    SimpleProjectLanguages<T>['AMERICAN_ENGLISH'], SimpleProjectLanguages<T>['EUROPEAN_ENGLISH'],
    SimpleProjectLanguages<T>['CANADIAN_FRENCH'], SimpleProjectLanguages<T>['EUROPEAN_FRENCH'],
    SimpleProjectLanguages<T>['GERMAN'],
    SimpleProjectLanguages<T>['AMERICAN_SPANISH'], SimpleProjectLanguages<T>['EUROPEAN_SPANISH'],
    SimpleProjectLanguages<T>['ITALIAN'],
    SimpleProjectLanguages<T>['DUTCH'],
    SimpleProjectLanguages<T>['AMERICAN_PORTUGUESE'], SimpleProjectLanguages<T>['EUROPEAN_PORTUGUESE'],
    SimpleProjectLanguages<T>['RUSSIAN'],
    SimpleProjectLanguages<T>['JAPANESE'],
    SimpleProjectLanguages<T>['CHINESE_TRADITIONAL'], SimpleProjectLanguages<T>['CHINESE_SIMPLIFIED'],
    SimpleProjectLanguages<T>['KOREAN'],
];
export type EveryLanguagesArray<T = EveryLanguages, > = readonly [
    SimpleEveryLanguages<T>['ENGLISH'], SimpleEveryLanguages<T>['AMERICAN_ENGLISH'], SimpleEveryLanguages<T>['EUROPEAN_ENGLISH'],
    SimpleEveryLanguages<T>['FRENCH'], SimpleEveryLanguages<T>['CANADIAN_FRENCH'], SimpleEveryLanguages<T>['EUROPEAN_FRENCH'],
    SimpleEveryLanguages<T>['GERMAN'],
    SimpleEveryLanguages<T>['SPANISH'], SimpleEveryLanguages<T>['AMERICAN_SPANISH'], SimpleEveryLanguages<T>['EUROPEAN_SPANISH'],
    SimpleEveryLanguages<T>['ITALIAN'],
    SimpleEveryLanguages<T>['DUTCH'],
    SimpleEveryLanguages<T>['PORTUGUESE'], SimpleEveryLanguages<T>['AMERICAN_PORTUGUESE'], SimpleEveryLanguages<T>['EUROPEAN_PORTUGUESE'],
    SimpleEveryLanguages<T>['RUSSIAN'],
    SimpleEveryLanguages<T>['JAPANESE'],
    SimpleEveryLanguages<T>['CHINESE'], SimpleEveryLanguages<T>['CHINESE_TRADITIONAL'], SimpleEveryLanguages<T>['CHINESE_SIMPLIFIED'],
    SimpleEveryLanguages<T>['KOREAN'],
];

//endregion -------------------- Array types --------------------
