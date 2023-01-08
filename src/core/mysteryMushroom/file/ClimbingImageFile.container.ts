import type {PossibleEnglishName, PossibleFileName}                                                       from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ClimbingImageFile, ImageFallbackName, ImageFileName, ImageFileNumber, ImageFileNumberOnName} from 'core/mysteryMushroom/file/ClimbingImageFile'

import {AbstractMysteryMushroomImageFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomImageFile'

export class ClimbingImageFileContainer
    extends AbstractMysteryMushroomImageFile<ImageFileName, ImageFallbackName>
    implements ClimbingImageFile {

    public constructor(englishName: PossibleEnglishName, file: PossibleFileName, number: ImageFileNumber,) {
        super(englishName, file, `climb.${number}`, `climbing image #${number + 1 as ImageFileNumberOnName}`,)
    }

}
