import type {PossibleEnglishName_CourseTheme, PossibleGameName_CourseTheme}                    from 'core/theme/Themes.types'
import type {EndlessMarioThemeFallbackName, EndlessMarioThemeImageFile, EndlessMarioThemeName} from 'core/theme/file/EndlessMarioThemeImageFile'

import {AbstractThemeImageFile} from 'core/theme/file/AbstractThemeImageFile'

export class EndlessMarioThemeImageFileContainer
    extends AbstractThemeImageFile<EndlessMarioThemeName, EndlessMarioThemeFallbackName>
    implements EndlessMarioThemeImageFile {

    public constructor(englishName: PossibleEnglishName_CourseTheme, gameName: PossibleGameName_CourseTheme,) {
        super(`WM_GameSkin_${gameName}_00^l`, `${englishName} (endless Mario)`,)
    }

}
