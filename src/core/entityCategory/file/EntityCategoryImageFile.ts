import type {ImageFile} from 'util/file/image/ImageFile'

/** An {@link ImageFile} made to be related to an {@link EntityCategories} */
export type EntityCategoryImageFile = ImageFile<'category', `CategoryIcon_0${PossibleImageNumber}^s`, 'tiff'>

export type PossibleImageNumber = | 0 | 1 | 2 | 3
