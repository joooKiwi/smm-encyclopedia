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

/**
 * The possible acronym that are used within the file system of the {@link Games Super Mario Maker games}
 * applicable to a {@link CourseTheme} only
 *
 * @see PossibleName_InFile
 */
export type PossibleName_InFile_CourseTheme = | 'plain' | 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle'
/**
 * The possible acronym that are used within the file system of the {@link Games Super Mario Maker games}
 * applicable to a {@link WorldTheme} only
 *
 * @see PossibleName_InFile
 */
export type PossibleName_InFile_WorldTheme = | 'plain' | 'underground' | 'desert' | 'snow' | 'athletic' | 'woods' | 'magma' | 'night'
/** The possible acronym that are used within the file system of the {@link Games Super Mario Maker games} */
export type PossibleName_InFile = | PossibleName_InFile_CourseTheme | PossibleName_InFile_WorldTheme

//endregion -------------------- Name & image --------------------
