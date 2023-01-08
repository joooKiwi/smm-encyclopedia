import type {PossibleEnglishName, PossibleFileName}                   from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ImageFallbackName, ImageFileName, PressingDownImageFile} from 'core/mysteryMushroom/file/PressingDownImageFile'

import {AbstractMysteryMushroomImageFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomImageFile'

export class PressingDownImageFileContainer
    extends AbstractMysteryMushroomImageFile<ImageFileName, ImageFallbackName>
    implements PressingDownImageFile {

    public constructor(englishName: PossibleEnglishName, file: PossibleFileName,) {
        super(englishName, file, 'stoop.0', 'pressing ↓ image',)
    }

}
