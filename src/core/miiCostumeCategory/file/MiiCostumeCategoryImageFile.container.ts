import type {PossibleEnglishName}                                                                                        from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {ImageFileExtension, ImageFilePath, MiiCostumeCategoryImageFile, PossibleImageFileName, PossibleImageNumber} from 'core/miiCostumeCategory/file/MiiCostumeCategoryImageFile'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export class MiiCostumeCategoryImageFileContainer
    extends AbstractImageFile<ImageFilePath, PossibleImageFileName, ImageFileExtension, PossibleEnglishName>
    implements MiiCostumeCategoryImageFile {

    public constructor(imageNumber: PossibleImageNumber, englishName: PossibleEnglishName,) {
        super('category', `DressIcon_0${imageNumber}^s`, 'tiff', englishName,)
    }

}
