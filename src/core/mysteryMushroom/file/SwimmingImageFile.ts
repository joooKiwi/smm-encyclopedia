import type {MysteryMushroomImageFile} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'

export interface SwimmingImageFile
    extends MysteryMushroomImageFile<ImageFileName, ImageFallbackName> {
}

export type ImageFileNumber = | 0 | 1 | 2 | 3 | 4 | 5
export type ImageFileName = `swim.${ImageFileNumber}`

export type ImageFileNumberOnName = | 1 | 2 | 3 | 4 | 5 | 6
export type ImageFallbackName = `swimming image #${ImageFileNumberOnName}`
