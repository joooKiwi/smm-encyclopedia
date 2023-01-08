import type {LargeThemeFallbackName, LargeThemeImageFile, LargeThemeName} from 'core/theme/file/LargeThemeImageFile'

import {AbstractThemeImageFile}                from 'core/theme/file/AbstractThemeImageFile'
import {PossibleEnglishName, PossibleGameName} from 'core/theme/Themes.types'

export class LargeThemeImageFileContainer
    extends AbstractThemeImageFile<LargeThemeName, LargeThemeFallbackName>
    implements LargeThemeImageFile {

    public constructor(englishName: PossibleEnglishName, gameName: PossibleGameName,) {
        super(`Lyt_E_Scene_${gameName}_00`, `${englishName} (large)`,)
    }

}
