import type {PossibleEnglishName, PossibleFileName}                                                                                                           from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ImageFileExtension, ImageFilePath, MysteryMushroomImageFile, PossibleImageFallbackName, PossibleImageFileName, PossibleImagePartialFallbackName} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export abstract class AbstractMysteryMushroomImageFile<NAME extends PossibleImageFileName, PARTIAL_FALLBACK extends PossibleImagePartialFallbackName, >
    extends AbstractImageFile<ImageFilePath, NAME, ImageFileExtension, PossibleImageFallbackName<PARTIAL_FALLBACK>>
    implements MysteryMushroomImageFile<NAME, PARTIAL_FALLBACK> {

    protected constructor(englishName: PossibleEnglishName, file: PossibleFileName, name: NAME, fallbackName: PARTIAL_FALLBACK,) {
        super(`entity/1 - SMB/In game/SMM1/Player Chara - ${file}`, name, 'tiff', `${englishName} (${fallbackName})`,)
    }

}
