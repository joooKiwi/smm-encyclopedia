import type {PossibleEnglishName, PossibleImageName}                                                           from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {ImageFileExtension, PossibleImageFileName, SoundEffectCategoryImageFile, SoundEffectCategoryPath} from 'core/soundEffectCategory/file/SoundEffectCategoryImageFile'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export class SoundEffectCategoryImageFileContainer
    extends AbstractImageFile<SoundEffectCategoryPath, PossibleImageFileName, ImageFileExtension, PossibleEnglishName>
    implements SoundEffectCategoryImageFile {

    public constructor(englishName: PossibleEnglishName, imageName: PossibleImageName,) {
        super('category', `${imageName}^s`, 'tiff', englishName,)
    }

}
