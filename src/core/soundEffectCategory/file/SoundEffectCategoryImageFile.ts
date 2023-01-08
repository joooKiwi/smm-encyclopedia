import type {PossibleEnglishName, PossibleImageName} from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {ImageFile}                              from 'util/file/image/ImageFile'

export interface SoundEffectCategoryImageFile
    extends ImageFile<SoundEffectCategoryPath, PossibleImageFileName, ImageFileExtension, PossibleEnglishName> {
}

export type SoundEffectCategoryPath = 'category'
export type PossibleImageFileName = `${PossibleImageName}^s`
export type ImageFileExtension = 'tiff'
