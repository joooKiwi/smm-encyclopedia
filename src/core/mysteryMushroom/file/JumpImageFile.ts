import type {MysteryMushroomImageFile} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'

export interface JumpImageFile
    extends MysteryMushroomImageFile<ImageFileName, ImageFallbackName> {
}

export type ImageFileNumber = | 0 | 1 | 2
export type ImageFileName = `jump.${ImageFileNumber}`

export type ImageFileNumberOnName = | 1 | 2 | 3
export type ImageFallbackName = `jump image #${ImageFileNumberOnName}`
