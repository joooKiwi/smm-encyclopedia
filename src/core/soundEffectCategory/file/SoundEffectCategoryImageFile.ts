import type {ImageFile}           from 'util/file/image/ImageFile'

export type PossibleImageNumber = | 4 | 5 | 6 | 7 | 8
/** An {@link ImageFile} made to be related to a {@link SoundEffectCategories} */
export type SoundEffectCategoryImageFile<NUMBER extends PossibleImageNumber = PossibleImageNumber, > = ImageFile<'category', `CategoryIcon_0${NUMBER}^s`, 'tiff'>
