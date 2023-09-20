import type {Themes}                       from 'core/theme/Themes'
import type {PossibleGameName_CourseTheme} from 'core/theme/Themes.types'
import type {LargeThemeImageFile}          from 'core/theme/file/ThemeImageFile'
import type {SmallThemeImageFile}          from 'core/theme/file/ThemeImageFile'
import type {EndlessMarioThemeImageFile}   from 'core/theme/file/ThemeImageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create a {@link SmallThemeImageFile} from a {@link Themes} {@link Themes.gameName game} and the {@link Themes.englishName english} name
 *
 * @param value The {@link Themes} to retrieve its {@link Themes.gameName game} and {@link Themes.englishName english} name
 */
export function smallImageFile(value: Themes,): SmallThemeImageFile {
    return new SimpleImageFile('theme', `Lyt_E_SceneSmall_${value.gameName}_00`, 'tiff', `${value.englishName} (small)`,)
}

/**
 * Create a {@link LargeThemeImageFile} from a {@link Themes} {@link Themes.gameName game} and the {@link Themes.englishName english} name
 *
 * @param value The {@link Themes} to retrieve its {@link Themes.gameName game} and {@link Themes.englishName english} name
 */
export function largeImageFile(value: Themes,): LargeThemeImageFile {
    return new SimpleImageFile('theme', `Lyt_E_Scene_${value.gameName}_00`, 'tiff', `${value.englishName} (large)`,)
}

/**
 * Create an {@link EndlessMarioThemeImageFile} from a {@link Themes} {@link Themes.gameName game} and the {@link Themes.englishName english} name
 *
 * @param value The {@link Themes} to retrieve its {@link Themes.gameName game} and {@link Themes.englishName english} name
 * @note It can only be a {@link CourseTheme}
 */
export function endlessMarioImageFile(value: Themes,): EndlessMarioThemeImageFile {
    return new SimpleImageFile('theme', `WM_GameSkin_${value.gameName as PossibleGameName_CourseTheme}_00^l`, 'tiff', `${value.englishName} (endless Mario)`,)
}
