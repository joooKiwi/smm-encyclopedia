import type {PossibleEnglishName, PossibleGameName} from 'core/theme/Themes.types'
import type {ThemeImageFile}                        from 'core/theme/file/ThemeImageFile'

export interface SmallThemeImageFile
    extends ThemeImageFile<SmallThemeName, SmallThemeFallbackName> {
}

export type SmallThemeName = `Lyt_E_SceneSmall_${PossibleGameName}_00`
export type SmallThemeFallbackName = `${PossibleEnglishName} (small)`
