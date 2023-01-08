import type {PossibleEnglishName, PossibleFileName}                                                       from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {GoalPoleImageFile, ImageFallbackName, ImageFileName, ImageFileNumber, ImageFileNumberOnName} from 'core/mysteryMushroom/file/GoalPoleImageFile'

import {AbstractMysteryMushroomImageFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomImageFile'

export class GoalPoleImageFileContainer
    extends AbstractMysteryMushroomImageFile<ImageFileName, ImageFallbackName>
    implements GoalPoleImageFile {

    public constructor(englishName: PossibleEnglishName, file: PossibleFileName, number: ImageFileNumber,) {
        super(englishName, file, `pole.${number}`, `goal pole image #${number + 1 as ImageFileNumberOnName}`,)
    }

}
