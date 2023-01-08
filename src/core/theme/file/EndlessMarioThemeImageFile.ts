import type {PossibleEnglishName_CourseTheme, PossibleGameName_CourseTheme} from 'core/theme/Themes.types'
import type {ThemeImageFile}                                                from 'core/theme/file/ThemeImageFile'

export interface EndlessMarioThemeImageFile
    extends ThemeImageFile<EndlessMarioThemeName, EndlessMarioThemeFallbackName> {
}


export type EndlessMarioThemeName = `WM_GameSkin_${PossibleGameName_CourseTheme}_00^l`
export type EndlessMarioThemeFallbackName = `${PossibleEnglishName_CourseTheme} (endless Mario)`
