import type {PossibleEnglishName, PossibleFileName}              from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ImageFallbackName, ImageFileName, TurningImageFile} from 'core/mysteryMushroom/file/TurningImageFile'

import {AbstractMysteryMushroomImageFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomImageFile'

export class TurningImageFileContainer
    extends AbstractMysteryMushroomImageFile<ImageFileName, ImageFallbackName>
    implements TurningImageFile {

    public constructor(englishName: PossibleEnglishName, file: PossibleFileName,) {
        super(englishName, file, 'turn.0', 'turning image',)
    }

}
