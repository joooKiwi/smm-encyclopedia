import type {EveryLanguages}                   from './EveryLanguages';
import type {ProjectLanguages}                 from './ProjectLanguages';
import type {SimpleEnum as OriginalSimpleEnum} from '../util/enum/Enum.types';

export type PossibleNonNullableValue = | ProjectLanguages | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names
                                  | PossibleAcronym | PossibleInternationalAcronym
                                  | PossibleEnglishName | PossibleOriginalName;
export type PossibleValue = | ProjectLanguages | EveryLanguages | number | string | null | undefined;

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

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

//region -------------------- Acronyms --------------------

export type PossibleAcronym =
    | 'en_AM' | 'en_EU'
    | 'fr_CA' | 'fr_EU'
    | 'de'
    | 'es_AM' | 'es_EU'
    | 'it' | 'nl'
    | 'pt_AM' | 'pt_EU'
    | 'ru' | 'ja'
    | 'zh_T' | 'zh_S'
    | 'ko';

export type PossibleInternationalAcronym =
    | 'en-US' | 'en-EU'
    | 'fr-CA' | 'fr-EU'
    | 'de'
    | 'es-US' | 'es-EU'
    | 'it' | 'nl'
    | 'pt-US' | 'pt-EU'
    | 'ru' | 'ja'
    | 'zh'
    | 'ko';

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
    | 'Korean';

export type PossibleOriginalName =
    | `English (${'America' | 'Europe'})`
    | `Français (${'Canada' | 'Europe'})`
    | 'Deutsche'
    | `Español (${'America' | 'Europa'})`
    | `Português (${'América' | 'Europa'})`//Canadá
    | 'Nederlands' | 'Italiano'
    | 'русский' | '日本語'
    | '简体中文' | '繁體中文'
    | '한국어';

//endregion -------------------- Names --------------------

export type PossibleRegion = | 'Canada' | 'America' | 'Europe';
export type PossibleChinese = | 'Traditional' | 'Simplified';
export type PossibleDifferentWord = | PossibleRegion | PossibleChinese;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends ProjectLanguages = ProjectLanguages, > = OriginalSimpleEnum<Names, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends ProjectLanguages = ProjectLanguages, > = readonly [
    SimpleEnum<T>['AMERICAN_ENGLISH'], SimpleEnum<T>['EUROPEAN_ENGLISH'],
    SimpleEnum<T>['CANADIAN_FRENCH'], SimpleEnum<T>['EUROPEAN_FRENCH'],
    SimpleEnum<T>['GERMAN'],
    SimpleEnum<T>['AMERICAN_SPANISH'], SimpleEnum<T>['EUROPEAN_SPANISH'],
    SimpleEnum<T>['ITALIAN'],
    SimpleEnum<T>['DUTCH'],
    SimpleEnum<T>['AMERICAN_PORTUGUESE'], SimpleEnum<T>['EUROPEAN_PORTUGUESE'],
    SimpleEnum<T>['RUSSIAN'],
    SimpleEnum<T>['JAPANESE'],
    SimpleEnum<T>['TRADITIONAL_CHINESE'], SimpleEnum<T>['SIMPLIFIED_CHINESE'],
    SimpleEnum<T>['KOREAN'],
];

//endregion -------------------- Array types --------------------
