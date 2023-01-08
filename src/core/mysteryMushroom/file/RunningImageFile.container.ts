import type {PossibleEnglishName, PossibleFileName}                                                      from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ImageFallbackName, ImageFileName, ImageFileNumber, ImageFileNumberOnName, RunningImageFile} from 'core/mysteryMushroom/file/RunningImageFile'

import {AbstractMysteryMushroomImageFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomImageFile'

export class RunningImageFileContainer
    extends AbstractMysteryMushroomImageFile<ImageFileName, ImageFallbackName>
    implements RunningImageFile {

    public constructor(englishName: PossibleEnglishName, file: PossibleFileName, number: ImageFileNumber,) {
        super(englishName, file, `b_dash.${number}`, `running image #${number + 1 as ImageFileNumberOnName}`,)
    }

}
