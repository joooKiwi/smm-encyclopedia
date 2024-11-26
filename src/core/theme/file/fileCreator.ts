import type {Themes}                                                                                                                     from 'core/theme/Themes'
import type {EndlessMarioThemeImageFile, LargeThemeImageFile, PossibleName_InFile, PossibleName_InFile_CourseTheme, SmallThemeImageFile} from 'core/theme/file/ThemeImageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create a {@link SmallThemeImageFile} from a {@link Themes} {@link Themes.gameName game} and the {@link Themes.englishName english} name
 *
 * @param value The {@link Themes} to retrieve its {@link Themes.gameName game} and {@link Themes.englishName english} name
 */
export function smallImageFile<const T extends PossibleName_InFile, >(value: Themes<any, T>,): SmallThemeImageFile<T> {
    return new SimpleImageFile('theme', `Lyt_E_SceneSmall_${value.nameInFile}_00`, 'tiff', `${value.englishName} (small)`,)
}

/**
 * Create a {@link LargeThemeImageFile} from a {@link Themes} {@link Themes.gameName game} and the {@link Themes.englishName english} name
 *
 * @param value The {@link Themes} to retrieve its {@link Themes.gameName game} and {@link Themes.englishName english} name
 */
export function largeImageFile<const T extends PossibleName_InFile, >(value: Themes<any, T>,): LargeThemeImageFile<T> {
    return new SimpleImageFile('theme', `Lyt_E_Scene_${value.nameInFile}_00`, 'tiff', `${value.englishName} (large)`,)
}

/**
 * Create an {@link EndlessMarioThemeImageFile} from a {@link Themes} {@link Themes.gameName game} and the {@link Themes.englishName english} name
 *
 * @param value The {@link Themes} to retrieve its {@link Themes.gameName game} and {@link Themes.englishName english} name
 * @note It can only be a {@link CourseTheme}
 */
export function endlessMarioImageFile(value: Themes,): EndlessMarioThemeImageFile {
    return new SimpleImageFile('theme', `WM_GameSkin_${value.nameInFile as PossibleName_InFile_CourseTheme}_00^l`, 'tiff', `${value.englishName} (endless Mario)`,)
}
