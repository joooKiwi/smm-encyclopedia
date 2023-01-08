import type {MysteryMushroomImageFile} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'

export interface GoalPoleImageFile
    extends MysteryMushroomImageFile<ImageFileName, ImageFallbackName> {
}

export type ImageFileNumber = | 0 | 1
export type ImageFileName = `pole.${ImageFileNumber}`

export type ImageFileNumberOnName = | 1 | 2
export type ImageFallbackName = `goal pole image #${ImageFileNumberOnName}`
