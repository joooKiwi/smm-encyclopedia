import type {BasePath} from 'variables'
import type {Themes}   from 'core/theme/Themes'

enum Enum {

    GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW,
    SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,

    VOLCANO, SPACE,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name & image --------------------

export type PossibleEnglishName_InBothCourseAndWorldTheme = | 'Ground' | 'Underground' | 'Desert' | 'Snow' | 'Sky' | 'Forest'
export type PossibleEnglishName_CourseTheme = | PossibleEnglishName_InBothCourseAndWorldTheme | 'Underwater' | 'Ghost House' | 'Airship' | 'Castle'
export type PossibleEnglishName_WorldTheme = | PossibleEnglishName_InBothCourseAndWorldTheme | 'Volcano' | 'Space'
export type PossibleEnglishName = | PossibleEnglishName_CourseTheme | PossibleEnglishName_WorldTheme

export type SmallImagePath = `/${BasePath}/theme/Lyt_E_SceneSmall_${PossibleGameName}_00.tiff`
export type LargeImagePath = `/${BasePath}/theme/Lyt_E_Scene_${PossibleGameName}_00.tiff`
export type EndlessMarioImagePath = `/${BasePath}/theme/WM_GameSkin_${PossibleGameName_CourseTheme}_00^l.tiff`

export type PossibleGameName_CourseTheme = | 'plain' | 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'
export type PossibleGameName_WorldTheme = | 'plain' | 'underground' | 'desert' | 'snow' | 'athletic' | 'woods' | 'magma' | 'night'
export type PossibleGameName = | PossibleGameName_CourseTheme | PossibleGameName_WorldTheme
export type DayGameName<V extends string = string, > = `${V}_${PossibleGameName}`
export type NightGameName<V extends string = string, > = `${V}_${PossibleGameName}_night`
export type DayOrNightGameName<B extends boolean = boolean, V extends string = string, >
    = B extends true ? DayGameName<V> :
    B extends false ? NightGameName<V>
        : | DayGameName<V> | NightGameName<V>

//endregion -------------------- Name & image --------------------
//region -------------------- Array types --------------------

export type OnlyCourseThemes = readonly [
    typeof Themes['GROUND'],
    typeof Themes['UNDERGROUND'],
    typeof Themes['UNDERWATER'],
    typeof Themes['DESERT'],
    typeof Themes['SNOW'],
    typeof Themes['SKY'],
    typeof Themes['FOREST'],
    typeof Themes['GHOST_HOUSE'],
    typeof Themes['AIRSHIP'],
    typeof Themes['CASTLE'],
]
export type OnlyCourseThemesInSMM1 = readonly [
    typeof Themes['GROUND'],
    typeof Themes['UNDERGROUND'],
    typeof Themes['UNDERWATER'],
    typeof Themes['GHOST_HOUSE'],
    typeof Themes['AIRSHIP'],
    typeof Themes['CASTLE'],
]
export type OnlyWorldThemes = readonly [
    typeof Themes['GROUND'],
    typeof Themes['UNDERGROUND'],
    typeof Themes['DESERT'],
    typeof Themes['SNOW'],
    typeof Themes['SKY'],
    typeof Themes['FOREST'],
    typeof Themes['VOLCANO'],
    typeof Themes['SPACE'],
]

//endregion -------------------- Array types --------------------
