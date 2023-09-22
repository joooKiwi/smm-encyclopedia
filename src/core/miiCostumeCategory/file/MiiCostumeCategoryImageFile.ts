import type {ImageFile} from 'util/file/image/ImageFile'

/** An {@link ImageFile} made to be related to a {@link MiiCostumeCategories} */
export type MiiCostumeCategoryImageFile = ImageFile<'category', `DressIcon_0${PossibleImageNumber}^s`, 'tiff'>

export type PossibleImageNumber = | 0 | 1 | 2 | 3
