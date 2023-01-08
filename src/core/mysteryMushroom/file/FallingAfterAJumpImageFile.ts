import type {MysteryMushroomImageFile} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'

export interface FallingAfterAJumpImageFile
    extends MysteryMushroomImageFile<ImageFileName, ImageFallbackName> {
}

export type ImageFileName = 'jump_fall.0'

export type ImageFallbackName = 'falling after a jump image'
