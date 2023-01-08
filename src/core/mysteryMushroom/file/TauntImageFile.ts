import type {MysteryMushroomImageFile} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'

export interface TauntImageFile
    extends MysteryMushroomImageFile<ImageFileName, ImageFallbackName> {
}

export type ImageFileName = 'appeal.0'

export type ImageFallbackName = 'taunt image'
