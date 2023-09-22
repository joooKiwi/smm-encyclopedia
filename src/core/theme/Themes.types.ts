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

//endregion -------------------- Name & image --------------------
