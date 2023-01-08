import type {MysteryMushroomImageFile} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'

export interface ClimbingImageFile
    extends MysteryMushroomImageFile<ImageFileName, ImageFallbackName> {
}

export type ImageFileNumber = | 0 | 1
export type ImageFileName = `climb.${ImageFileNumber}`

export type ImageFileNumberOnName = | 1 | 2
export type ImageFallbackName = `climbing image #${ImageFileNumberOnName}`
