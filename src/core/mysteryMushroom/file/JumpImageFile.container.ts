import type {PossibleEnglishName, PossibleFileName}                                                   from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ImageFallbackName, ImageFileName, ImageFileNumber, ImageFileNumberOnName, JumpImageFile} from 'core/mysteryMushroom/file/JumpImageFile'

import {AbstractMysteryMushroomImageFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomImageFile'

export class JumpImageFileContainer
    extends AbstractMysteryMushroomImageFile<ImageFileName, ImageFallbackName>
    implements JumpImageFile {

    public constructor(englishName: PossibleEnglishName, file: PossibleFileName, number: ImageFileNumber,) {
        super(englishName, file, `jump.${number}`, `jump image #${number + 1 as ImageFileNumberOnName}`,)
    }

}
