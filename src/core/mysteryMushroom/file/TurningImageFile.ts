import type {MysteryMushroomImageFile} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'

export interface TurningImageFile
    extends MysteryMushroomImageFile<ImageFileName, ImageFallbackName> {
}

export type ImageFileName = 'turn.0'

export type ImageFallbackName = 'turning image'
