import type {PossibleEnglishName, PossibleGameName}                       from 'core/theme/Themes.types'
import type {SmallThemeFallbackName, SmallThemeImageFile, SmallThemeName} from 'core/theme/file/SmallThemeImageFile'

import {AbstractThemeImageFile} from 'core/theme/file/AbstractThemeImageFile'

export class SmallThemeImageFileContainer
    extends AbstractThemeImageFile<SmallThemeName, SmallThemeFallbackName>
    implements SmallThemeImageFile {

    public constructor(englishName: PossibleEnglishName, gameName: PossibleGameName,) {
        super(`Lyt_E_SceneSmall_${gameName}_00`, `${englishName} (small)`,)
    }

}
