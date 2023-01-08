import type {PossibleEnglishName, PossibleFileName}            from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ImageFallbackName, ImageFileName, TauntImageFile} from 'core/mysteryMushroom/file/TauntImageFile'

import {AbstractMysteryMushroomImageFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomImageFile'

export class TauntImageFileContainer
    extends AbstractMysteryMushroomImageFile<ImageFileName, ImageFallbackName>
    implements TauntImageFile {

    public constructor(englishName: PossibleEnglishName, file: PossibleFileName,) {
        super(englishName, file, 'appeal.0', 'taunt image',)
    }

}
