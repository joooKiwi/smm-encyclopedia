import type {ImageFile} from 'util/file/image/ImageFile'

export type PossibleImageNumber = | 0 | 1 | 2 | 3
/** An {@link ImageFile} made to be related to an {@link EntityCategories} */
export type EntityCategoryImageFile<NUMBER extends PossibleImageNumber = PossibleImageNumber, > = ImageFile<'category', `CategoryIcon_0${NUMBER}^s`, 'tiff'>
