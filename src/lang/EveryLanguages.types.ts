import type {EmptyString} from '@joookiwi/type'

import type {PossibleAcronym as PossibleAcronym_Project, PossibleEnglishName as PossibleEnglishName_Project, PossibleInternationalAcronym as PossibleInternationalAcronym_Project, PossibleOriginalName as PossibleOriginalName_Project} from 'lang/ProjectLanguages.types'

declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars

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

type BasicAcronym = | 'en' | 'fr' | 'es' | 'pt' | 'zh'
type AdditionalAcronym = | 'he' | 'pl' | 'uk' | 'el'
export type PossibleAcronym = | BasicAcronym | PossibleAcronym_Project | AdditionalAcronym

export type PossibleInternationalAcronym = | BasicAcronym | PossibleInternationalAcronym_Project | AdditionalAcronym

//endregion -------------------- Acronyms --------------------
//region -------------------- Names --------------------

type BasicEnglishName = | 'English' | 'French' | 'Spanish' | 'Portuguese' | 'Chinese'
type AdditionalEnglishName = | 'Hebrew' | 'Polish' | 'Ukrainian' | 'Greek'
export type PossibleEnglishName = | BasicEnglishName | PossibleEnglishName_Project | AdditionalEnglishName

type BasicOriginalName = | 'English' | 'Français' | 'Español' | 'Português' | '中国人'
type AdditionalOriginalName = | 'עִברִית' | 'Polski' | 'Український' | 'ελληνικά'
export type PossibleOriginalName = | BasicOriginalName | PossibleOriginalName_Project | AdditionalOriginalName

//endregion -------------------- Names --------------------

export type PossibleSpaceCharacter = | Space | EmptyString
