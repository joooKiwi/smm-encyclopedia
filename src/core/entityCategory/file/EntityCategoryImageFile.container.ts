import type {PossibleEnglishName}                                                                                    from 'core/entityCategory/EntityCategories.types'
import type {EntityCategoryImageFile, ImageFileExtension, ImageFilePath, PossibleImageFileName, PossibleImageNumber} from 'core/entityCategory/file/EntityCategoryImageFile'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export class EntityCategoryImageFileContainer
    extends AbstractImageFile<ImageFilePath, PossibleImageFileName, ImageFileExtension, PossibleEnglishName>
    implements EntityCategoryImageFile {

    public constructor(imageNumber: PossibleImageNumber, englishName: PossibleEnglishName,) {
        super('category', `CategoryIcon_0${imageNumber}`, 'tiff', englishName,)
    }

}
