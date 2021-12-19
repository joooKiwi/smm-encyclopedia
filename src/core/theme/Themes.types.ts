import type {CourseTheme}                                                                                                                                                                                                                                  from './CourseTheme';
import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {Themes}                                                                                                                                                                                                                                       from './Themes';
import type {WorldTheme}                                                                                                                                                                                                                                   from './WorldTheme';

export type PossibleNonNullableValue = | Themes | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
export type PossibleValue = | Themes | number | string | null | undefined;

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

export type SimpleImagePath = | Exclude<PossibleEnglishName, | 'Castle' | 'Volcano'> | 'Castle - Volcano';
export type PossibleImagePath = `/game/themes/${SimpleImagePath}`;
export type SmallImagePath = `${PossibleImagePath} (small).png`;
export type LargeImagePath = | `${PossibleImagePath} (large).png` | '/game/Themes/Space (large).jpg';

export type PossibleGameName = | 'plain' | 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle';
export type DayGameName<V extends string = string, > = `${V}_${PossibleGameName}`;
export type NightGameName<V extends string = string, > = `${V}_${PossibleGameName}_night`;
export type DayOrNightGameName<B extends boolean = boolean, V extends string = string, >
    = B extends true ? DayGameName<V> :
    B extends false ? NightGameName<V>
        : | DayGameName<V> | NightGameName<V>

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends Themes = Themes, > = OriginalSimpleEnum<Names, T>;

export type EnumByOrdinal<O extends Ordinals, E extends Themes = Themes, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends Themes = Themes, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends Themes = Themes, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends Themes = Themes, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends Themes = Themes, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type CourseAndWorldTheme = readonly [CourseTheme, WorldTheme,];

export type EnumArray<T extends Themes = Themes, > = readonly [
    ...EnumArray_OnlyCourseTheme<T>,

    SimpleEnum<T>['VOLCANO'], SimpleEnum<T>['SPACE'],
];
export type EnumArray_OnlyCourseTheme<T extends Themes = Themes, > = readonly [
    SimpleEnum<T>['GROUND'], SimpleEnum<T>['UNDERGROUND'], SimpleEnum<T>['UNDERWATER'], SimpleEnum<T>['DESERT'], SimpleEnum<T>['SNOW'],
    SimpleEnum<T>['SKY'], SimpleEnum<T>['FOREST'], SimpleEnum<T>['GHOST_HOUSE'], SimpleEnum<T>['AIRSHIP'], SimpleEnum<T>['CASTLE'],
];
export type EnumArray_OnlyCourseTheme_SMM1<T extends Themes = Themes, > = readonly [
    SimpleEnum<T>['GROUND'], SimpleEnum<T>['UNDERGROUND'], SimpleEnum<T>['UNDERWATER'],
    SimpleEnum<T>['GHOST_HOUSE'], SimpleEnum<T>['AIRSHIP'], SimpleEnum<T>['CASTLE'],
];
export type EnumArray_OnlyWorldTheme<T extends Themes = Themes, > = readonly [
    SimpleEnum<T>['GROUND'], SimpleEnum<T>['UNDERGROUND'], SimpleEnum<T>['DESERT'], SimpleEnum<T>['SNOW'],
    SimpleEnum<T>['SKY'], SimpleEnum<T>['FOREST'], SimpleEnum<T>['VOLCANO'], SimpleEnum<T>['SPACE'],
];

//endregion -------------------- Array types --------------------
