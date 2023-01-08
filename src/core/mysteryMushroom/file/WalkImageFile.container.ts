import type {PossibleEnglishName, PossibleFileName}                                                   from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ImageFallbackName, ImageFileName, ImageFileNumber, ImageFileNumberOnName, WalkImageFile} from 'core/mysteryMushroom/file/WalkImageFile'

import {AbstractMysteryMushroomImageFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomImageFile'

export class WalkImageFileContainer
    extends AbstractMysteryMushroomImageFile<ImageFileName, ImageFallbackName>
    implements WalkImageFile {

    public constructor(englishName: PossibleEnglishName, file: PossibleFileName, number: ImageFileNumber,) {
        super(englishName, file, `walk.${number}`, `walk image #${number + 1 as ImageFileNumberOnName}`,)
    }

}
