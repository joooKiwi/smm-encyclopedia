import type {MysteryMushroomImageFile} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'

export interface WalkImageFile
    extends MysteryMushroomImageFile<ImageFileName, ImageFallbackName> {
}

export type ImageFileNumber = | 0 | 1 | 2
export type ImageFileName = `walk.${ImageFileNumber}`

export type ImageFileNumberOnName = | 1 | 2 | 3
export type ImageFallbackName = `walk image #${ImageFileNumberOnName}`
