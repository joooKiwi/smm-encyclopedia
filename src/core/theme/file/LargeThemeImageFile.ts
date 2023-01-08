import type {PossibleEnglishName, PossibleGameName} from 'core/theme/Themes.types'
import type {ThemeImageFile}                        from 'core/theme/file/ThemeImageFile'

export interface LargeThemeImageFile
    extends ThemeImageFile<LargeThemeName, LargeThemeFallbackName> {
}

export type LargeThemeName = `Lyt_E_Scene_${PossibleGameName}_00`
export type LargeThemeFallbackName = `${PossibleEnglishName} (large)`
