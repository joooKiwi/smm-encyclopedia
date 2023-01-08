import type {PossibleEnglishName, PossibleFileName}              from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ImageFallbackName, ImageFileName} from 'core/mysteryMushroom/file/FallingAfterAJumpImageFile'

import {AbstractMysteryMushroomImageFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomImageFile'
import type {FallingAfterAJumpImageFile}       from 'core/mysteryMushroom/file/FallingAfterAJumpImageFile'

export class FallingAfterAJumpImageFileContainer
    extends AbstractMysteryMushroomImageFile<ImageFileName, ImageFallbackName>
    implements FallingAfterAJumpImageFile {

    public constructor(englishName: PossibleEnglishName, file: PossibleFileName,) {
        super(englishName, file, 'jump_fall.0', 'falling after a jump image',)
    }

}
