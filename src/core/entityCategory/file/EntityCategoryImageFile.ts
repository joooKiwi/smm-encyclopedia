import type {PossibleEnglishName} from 'core/entityCategory/EntityCategories.types'
import type {ImageFile}           from 'util/file/image/ImageFile'

export interface EntityCategoryImageFile
    extends ImageFile<ImageFilePath, PossibleImageFileName, ImageFileExtension, PossibleEnglishName> {
}

export type ImageFilePath = 'category'

export type PossibleImageNumber = | 0 | 1 | 2 | 3
export type PossibleImageFileName = `CategoryIcon_0${PossibleImageNumber}^s`

export type ImageFileExtension = 'tiff'
