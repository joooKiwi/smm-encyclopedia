import type {ImageFileExtension, PossibleImageFileFallbackName, ThemeImageFile, PossibleImageFileName, ThemePath} from 'core/theme/file/ThemeImageFile'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export abstract class AbstractThemeImageFile<NAME extends PossibleImageFileName = PossibleImageFileName, FALLBACK_NAME extends PossibleImageFileFallbackName = PossibleImageFileFallbackName, >
    extends AbstractImageFile<ThemePath, NAME, ImageFileExtension, FALLBACK_NAME>
    implements ThemeImageFile<NAME, FALLBACK_NAME> {

    protected constructor(name: NAME, fallbackName: FALLBACK_NAME,) {
        super('theme', name, 'tiff', fallbackName,)
    }

}
