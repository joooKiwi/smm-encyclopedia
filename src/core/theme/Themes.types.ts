enum Enum {

    GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW,
    SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,

    VOLCANO, SPACE,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleEnglishName_InBothCourseAndWorldTheme = | 'Ground' | 'Underground' | 'Desert' | 'Snow' | 'Sky' | 'Forest'
export type PossibleEnglishName_CourseTheme_SMM1 = | 'Ground' | 'Underground' | 'Underwater' | 'Ghost House' | 'Airship' | 'Castle'
export type PossibleEnglishName_CourseTheme = | PossibleEnglishName_InBothCourseAndWorldTheme | 'Underwater' | 'Ghost House' | 'Airship' | 'Castle'
export type PossibleEnglishName_WorldTheme = | PossibleEnglishName_InBothCourseAndWorldTheme | 'Volcano' | 'Space'
export type PossibleEnglishName = | PossibleEnglishName_CourseTheme | PossibleEnglishName_WorldTheme
