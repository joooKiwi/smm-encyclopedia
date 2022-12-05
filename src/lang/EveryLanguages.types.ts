import type {EveryLanguages}                                                                                                                                                                                                             from 'lang/EveryLanguages'
import type {PossibleAcronym as PossibleAcronym_Project, PossibleEnglishName as PossibleEnglishName_Project, PossibleInternationalAcronym as PossibleInternationalAcronym_Project, PossibleOriginalName as PossibleOriginalName_Project} from 'lang/ProjectLanguages.types'
import type {EmptyString, Space}                                                                                                                                                                                                         from 'util/types/variables'

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

export type Ordinals = typeof Enum[Names]

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

export type PossibleSpaceCharacter = | Space | EmptyString

export type EveryLanguagesByLanguage<T, > = T extends (| PossibleAcronym | PossibleInternationalAcronym | PossibleEnglishName | PossibleOriginalName)
    ? EveryLanguages
    : never