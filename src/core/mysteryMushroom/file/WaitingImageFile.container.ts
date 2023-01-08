import type {PossibleEnglishName, PossibleFileName}              from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ImageFallbackName, ImageFileName, WaitingImageFile} from 'core/mysteryMushroom/file/WaitingImageFile'

import {AbstractMysteryMushroomImageFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomImageFile'

export class WaitingImageFileContainer
    extends AbstractMysteryMushroomImageFile<ImageFileName, ImageFallbackName>
    implements WaitingImageFile {

    public constructor(englishName: PossibleEnglishName, file: PossibleFileName,) {
        super(englishName, file, 'wait.0', 'waiting image',)
    }

}
