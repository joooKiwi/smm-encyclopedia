import type {PossibleGameName, PossibleGameName_CourseTheme} from 'core/theme/Themes.types'
import type {ImageFile}                                      from 'util/file/image/ImageFile'

/**
 * An {@link ImageFile} made to be related to a {@link Themes}
 *
 * @see SmallThemeImageFile
 * @see LargeThemeImageFile
 * @see EndlessMarioThemeImageFile
 */
export type ThemeImageFile<NAME extends string = string, > = ImageFile<'theme', NAME, 'tiff'>

export type SmallThemeImageFile = ThemeImageFile<`Lyt_E_SceneSmall_${PossibleGameName}_00`>
export type LargeThemeImageFile = ThemeImageFile<`Lyt_E_Scene_${PossibleGameName}_00`>
export type EndlessMarioThemeImageFile = ThemeImageFile<`WM_GameSkin_${PossibleGameName_CourseTheme}_00^l`>
