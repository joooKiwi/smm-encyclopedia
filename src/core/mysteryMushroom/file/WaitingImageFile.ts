import type {MysteryMushroomImageFile} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'

export interface WaitingImageFile
    extends MysteryMushroomImageFile<ImageFileName, ImageFallbackName> {
}

export type ImageFileName = 'wait.0'

export type ImageFallbackName = 'waiting image'
