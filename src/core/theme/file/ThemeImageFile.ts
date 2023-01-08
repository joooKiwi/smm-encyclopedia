import type {EndlessMarioThemeFallbackName, EndlessMarioThemeName} from 'core/theme/file/EndlessMarioThemeImageFile'
import type {LargeThemeFallbackName, LargeThemeName}               from 'core/theme/file/LargeThemeImageFile'
import type {SmallThemeFallbackName, SmallThemeName}               from 'core/theme/file/SmallThemeImageFile'
import type {ImageFile}                                            from 'util/file/image/ImageFile'

export interface ThemeImageFile<NAME extends PossibleImageFileName = PossibleImageFileName, FALLBACK_NAME extends PossibleImageFileFallbackName = PossibleImageFileFallbackName, >
    extends ImageFile<ThemePath, NAME, ImageFileExtension, FALLBACK_NAME> {
}

export type ThemePath = 'theme'

export type PossibleImageFileName = | SmallThemeName | LargeThemeName | EndlessMarioThemeName

export type PossibleImageFileFallbackName = | SmallThemeFallbackName | LargeThemeFallbackName | EndlessMarioThemeFallbackName

export type ImageFileExtension = 'tiff'
