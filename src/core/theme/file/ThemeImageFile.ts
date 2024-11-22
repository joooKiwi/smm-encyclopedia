import type {ImageFile}                                            from 'util/file/image/ImageFile'

/**
 * An {@link ImageFile} made to be related to a {@link Themes}
 *
 * @see SmallThemeImageFile
 * @see LargeThemeImageFile
 * @see EndlessMarioThemeImageFile
 */
export type ThemeImageFile<NAME extends string = string, > = ImageFile<'theme', NAME, 'tiff'>


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

export type SmallThemeImageFile<T extends PossibleName_InFile = PossibleName_InFile, > = ThemeImageFile<`Lyt_E_SceneSmall_${T}_00`>
export type LargeThemeImageFile<T extends PossibleName_InFile = PossibleName_InFile, > = ThemeImageFile<`Lyt_E_Scene_${T}_00`>
export type EndlessMarioThemeImageFile = ThemeImageFile<`WM_GameSkin_${PossibleName_InFile_CourseTheme}_00^l`>
