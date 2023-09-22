import type {PossibleImageName} from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {ImageFile}         from 'util/file/image/ImageFile'

/** An {@link ImageFile} made to be related to a {@link SoundEffectCategories} */
export type SoundEffectCategoryImageFile = ImageFile<'category', `${PossibleImageName}^s`, 'tiff'>
