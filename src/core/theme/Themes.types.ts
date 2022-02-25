import type {CourseTheme}                                                                                                                                                                                                                                  from './CourseTheme';
import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {Themes as RealEnum}                                                                                                                                                                                                                           from './Themes';
import type {WorldTheme}                                                                                                                                                                                                                                   from './WorldTheme';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
export type PossibleValue = | RealEnum | number | string | null | undefined;

enum Enum {

    GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW,
    SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,

    VOLCANO, SPACE,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleEnglishName_InBothCourseAndWorldTheme = | 'Ground' | 'Underground' | 'Desert' | 'Snow' | 'Sky' | 'Forest';
export type PossibleEnglishName_CourseTheme = | PossibleEnglishName_InBothCourseAndWorldTheme | 'Underwater' | 'Ghost House' | 'Airship' | 'Castle';
export type PossibleEnglishName_WorldTheme = | PossibleEnglishName_InBothCourseAndWorldTheme | 'Volcano' | 'Space';
export type PossibleEnglishName = | PossibleEnglishName_CourseTheme | PossibleEnglishName_WorldTheme;

export type SmallImagePath = `/theme/Lyt_E_SceneSmall_${PossibleGameName}_00.tiff`;
export type LargeImagePath = `/theme/Lyt_E_Scene_${PossibleGameName}_00.tiff`;
export type EndlessMarioImagePath = `/theme/WM_GameSkin_${PossibleGameName_CourseTheme}_00^l.tiff`;

export type PossibleGameName_CourseTheme = | 'plain' | 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle';
export type PossibleGameName_WorldTheme = | 'plain' | 'underground' | 'desert' | 'snow' | 'athletic' | 'woods' | 'magma' | 'night';
export type PossibleGameName = | PossibleGameName_CourseTheme | PossibleGameName_WorldTheme;
export type DayGameName<V extends string = string, > = `${V}_${PossibleGameName}`;
export type NightGameName<V extends string = string, > = `${V}_${PossibleGameName}_night`;
export type DayOrNightGameName<B extends boolean = boolean, V extends string = string, >
    = B extends true ? DayGameName<V> :
    B extends false ? NightGameName<V>
        : | DayGameName<V> | NightGameName<V>

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, T>;

export type EnumByOrdinal<O extends Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type CourseAndWorldTheme = readonly [CourseTheme, WorldTheme,];

export type EnumArray<T extends RealEnum = RealEnum, > = readonly [
    ...EnumArray_OnlyCourseTheme<T>,

    SimpleEnum<T>['VOLCANO'], SimpleEnum<T>['SPACE'],
];
export type EnumArray_OnlyCourseTheme<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['GROUND'], SimpleEnum<T>['UNDERGROUND'], SimpleEnum<T>['UNDERWATER'], SimpleEnum<T>['DESERT'], SimpleEnum<T>['SNOW'],
    SimpleEnum<T>['SKY'], SimpleEnum<T>['FOREST'], SimpleEnum<T>['GHOST_HOUSE'], SimpleEnum<T>['AIRSHIP'], SimpleEnum<T>['CASTLE'],
];
export type EnumArray_OnlyCourseTheme_SMM1<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['GROUND'], SimpleEnum<T>['UNDERGROUND'], SimpleEnum<T>['UNDERWATER'],
    SimpleEnum<T>['GHOST_HOUSE'], SimpleEnum<T>['AIRSHIP'], SimpleEnum<T>['CASTLE'],
];
export type EnumArray_OnlyWorldTheme<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['GROUND'], SimpleEnum<T>['UNDERGROUND'], SimpleEnum<T>['DESERT'], SimpleEnum<T>['SNOW'],
    SimpleEnum<T>['SKY'], SimpleEnum<T>['FOREST'], SimpleEnum<T>['VOLCANO'], SimpleEnum<T>['SPACE'],
];

//endregion -------------------- Array types --------------------
