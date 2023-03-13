import type {EveryLanguages}   from 'lang/EveryLanguages'
import type {ProjectLanguages} from 'lang/ProjectLanguages'

enum Enum {

    AMERICAN_ENGLISH, EUROPEAN_ENGLISH,
    CANADIAN_FRENCH, EUROPEAN_FRENCH,
    GERMAN,
    AMERICAN_SPANISH, EUROPEAN_SPANISH,
    ITALIAN,
    DUTCH,
    AMERICAN_PORTUGUESE, EUROPEAN_PORTUGUESE,
    RUSSIAN,
    JAPANESE,
    TRADITIONAL_CHINESE, SIMPLIFIED_CHINESE,
    KOREAN,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Acronyms --------------------

export type PossibleAcronym =
    | `en-${| 'AM' | 'EU'}`
    | `fr-${| 'CA' | 'EU'}`
    | 'de'
    | `es-${| 'AM' | 'EU'}`
    | 'it' | 'nl'
    | `pt-${| 'AM' | 'EU'}`
    | 'ru' | 'ja'
    | `zh-${| 'tw' | 'cn'}`
    | 'ko'

export type PossibleInternationalAcronym =
    | `en-${| 'US' | 'EU'}`
    | `fr-${| 'CA' | 'EU'}`
    | 'de'
    | `es-${| 'US' | 'EU'}`
    | 'it' | 'nl'
    | `pt-${| 'US' | 'EU'}`
    | 'ru' | 'ja'
    | `zh-${| 'TW' | 'CN'}`
    | 'ko'

//endregion -------------------- Acronyms --------------------
//region -------------------- Names --------------------

export type PossibleEnglishName =
    | `English (${'America' | 'Europe'})`
    | `French (${'Canada' | 'Europe'})`
    | 'German'
    | `Spanish (${'America' | 'Europe'})`
    | 'Dutch' | 'Italian'
    | `Portuguese (${'America' | 'Europe'})`
    | 'Russian' | 'Japanese'
    | `${'Traditional' | 'Simplified'} chinese`
    | 'Korean'

export type PossibleOriginalName =
    | `English (${| 'America' | 'Europe'})`
    | `Français (${| 'Canada' | 'Europe'})`
    | 'Deutsche'
    | `Español (${| 'America' | 'Europa'})`
    | `Português (${| 'América' | 'Europa'})`
    | 'Nederlands' | 'Italiano'
    | 'русский' | '日本語'
    | '简体中文' | '繁體中文'
    | '한국어'

//endregion -------------------- Names --------------------
//region -------------------- Region --------------------

export type PossibleRegion = | 'Canada' | 'America' | 'Europe'
export type PossibleChinese = | 'Traditional' | 'Simplified'
export type PossibleDifferentWord = | PossibleRegion | PossibleChinese

//endregion -------------------- Region --------------------

export type ProjectLanguagesByLanguage<T, > = T extends (PossibleAcronym | PossibleInternationalAcronym | PossibleEnglishName | PossibleOriginalName)
    ? ProjectLanguages
    : T extends EveryLanguages
        ? | ProjectLanguages | never
        : never
