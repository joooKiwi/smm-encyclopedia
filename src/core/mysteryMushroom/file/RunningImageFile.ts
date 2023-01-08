import type {MysteryMushroomImageFile} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'

export interface RunningImageFile
    extends MysteryMushroomImageFile<ImageFileName, ImageFallbackName> {
}

export type ImageFileNumber = | 0 | 1 | 2
export type ImageFileName = `b_dash.${ImageFileNumber}`

export type ImageFileNumberOnName = | 1 | 2 | 3
export type ImageFallbackName = `running image #${ImageFileNumberOnName}`
