import type {Themes} from 'core/theme/Themes'

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

export type PossibleGameName_CourseTheme = | 'plain' | 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'
export type PossibleGameName_WorldTheme = | 'plain' | 'underground' | 'desert' | 'snow' | 'athletic' | 'woods' | 'magma' | 'night'
export type PossibleGameName = | PossibleGameName_CourseTheme | PossibleGameName_WorldTheme
export type DayGameName = PossibleGameName
export type NightGameName = `${PossibleGameName}_night`
export type DayOrNightGameName<B extends boolean = boolean, >
    = B extends true ? DayGameName :
    B extends false ? NightGameName
        : | DayGameName | NightGameName

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
