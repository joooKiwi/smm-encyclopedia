import type {PossibleEnglishName, PossibleFileName}                                                       from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ImageFallbackName, ImageFileName, ImageFileNumber, ImageFileNumberOnName, SwimmingImageFile} from 'core/mysteryMushroom/file/SwimmingImageFile'

import {AbstractMysteryMushroomImageFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomImageFile'

export class SwimmingImageFileContainer
    extends AbstractMysteryMushroomImageFile<ImageFileName, ImageFallbackName>
    implements SwimmingImageFile {

    public constructor(englishName: PossibleEnglishName, file: PossibleFileName, number: ImageFileNumber,) {
        super(englishName, file, `swim.${number}`, `swimming image #${number + 1 as ImageFileNumberOnName}`,)
    }

}
