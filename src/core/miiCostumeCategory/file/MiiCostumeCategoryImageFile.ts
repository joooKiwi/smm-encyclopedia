import type {PossibleEnglishName} from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {ImageFile}           from 'util/file/image/ImageFile'

export interface MiiCostumeCategoryImageFile
    extends ImageFile<ImageFilePath, PossibleImageFileName, ImageFileExtension, PossibleEnglishName> {
}

export type ImageFilePath = 'category'

export type PossibleImageNumber = | 0 | 1 | 2 | 3
export type PossibleImageFileName = `DressIcon_0${PossibleImageNumber}^s`

export type ImageFileExtension = 'tiff'
