import type {EveryLanguages}                                                                                                                                                                                                             from './EveryLanguages'
import type {SimpleEnum as OriginalSimpleEnum}                                                                                                                                                                                           from '../util/enum/Enum.types'
import type {PossibleAcronym as PossibleAcronym_Project, PossibleEnglishName as PossibleEnglishName_Project, PossibleInternationalAcronym as PossibleInternationalAcronym_Project, PossibleOriginalName as PossibleOriginalName_Project} from './ProjectLanguages.types'

export type PossibleNonNullableValue = | EveryLanguages | Ordinals | PossibleStringValue
export type PossibleStringValue = | Names
                                  | PossibleAcronym | PossibleInternationalAcronym
                                  | PossibleEnglishName | PossibleOriginalName
export type PossibleValue = | EveryLanguages | number | string | null | undefined

enum Enum {

    ENGLISH, AMERICAN_ENGLISH, EUROPEAN_ENGLISH,
    FRENCH, CANADIAN_FRENCH, EUROPEAN_FRENCH,
    GERMAN,
    SPANISH, AMERICAN_SPANISH, EUROPEAN_SPANISH,
    ITALIAN,
    DUTCH,
    PORTUGUESE, AMERICAN_PORTUGUESE, EUROPEAN_PORTUGUESE,
    RUSSIAN,
    JAPANESE,
    CHINESE, TRADITIONAL_CHINESE, SIMPLIFIED_CHINESE,
    KOREAN,

    HEBREW,
    POLISH,
    UKRAINIAN,
    GREEK,
}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum

//region -------------------- Acronyms --------------------

export type BasicAcronym = | 'en' | 'fr' | 'es' | 'pt' | 'zh'
export type AdditionalAcronym = | 'he' | 'pl' | 'uk' | 'el'
export type PossibleAcronym = | BasicAcronym | PossibleAcronym_Project | AdditionalAcronym

export type PossibleInternationalAcronym = | BasicAcronym | PossibleInternationalAcronym_Project | AdditionalAcronym

//endregion -------------------- Acronyms --------------------
//region -------------------- Names --------------------

export type BasicEnglishName = | 'English' | 'French' | 'Spanish' | 'Portuguese' | 'Chinese'
export type AdditionalEnglishName = | 'Hebrew' | 'Polish' | 'Ukrainian' | 'Greek'
export type PossibleEnglishName = | BasicEnglishName | PossibleEnglishName_Project | AdditionalEnglishName

export type BasicOriginalName = | 'English' | 'Français' | 'Español' | 'Português' | '中国人'
export type AdditionalOriginalName = | 'עִברִית' | 'Polski' | 'Український' | 'ελληνικά'
export type PossibleOriginalName = | BasicOriginalName | PossibleOriginalName_Project | AdditionalOriginalName

//endregion -------------------- Names --------------------

export type PossibleSpaceCharacter = | ' ' | ''

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends EveryLanguages = EveryLanguages, > = OriginalSimpleEnum<Names, T>

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends EveryLanguages = EveryLanguages, > = readonly [
    SimpleEnum<T>['ENGLISH'], SimpleEnum<T>['AMERICAN_ENGLISH'], SimpleEnum<T>['EUROPEAN_ENGLISH'],
    SimpleEnum<T>['FRENCH'], SimpleEnum<T>['CANADIAN_FRENCH'], SimpleEnum<T>['EUROPEAN_FRENCH'],
    SimpleEnum<T>['GERMAN'],
    SimpleEnum<T>['SPANISH'], SimpleEnum<T>['AMERICAN_SPANISH'], SimpleEnum<T>['EUROPEAN_SPANISH'],
    SimpleEnum<T>['ITALIAN'],
    SimpleEnum<T>['DUTCH'],
    SimpleEnum<T>['PORTUGUESE'], SimpleEnum<T>['AMERICAN_PORTUGUESE'], SimpleEnum<T>['EUROPEAN_PORTUGUESE'],
    SimpleEnum<T>['RUSSIAN'],
    SimpleEnum<T>['JAPANESE'],
    SimpleEnum<T>['CHINESE'], SimpleEnum<T>['TRADITIONAL_CHINESE'], SimpleEnum<T>['SIMPLIFIED_CHINESE'],
    SimpleEnum<T>['KOREAN'],

    SimpleEnum<T>['HEBREW'],
    SimpleEnum<T>['POLISH'],
    SimpleEnum<T>['UKRAINIAN'],
    SimpleEnum<T>['GREEK'],
]

//endregion -------------------- Array types --------------------
