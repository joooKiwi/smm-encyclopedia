import type {UnusedSMM1ImageFile}               from 'core/entity/file/UnusedSMM1ImageFile'
import type {ImageName_BigMushroom_Unused_SMM1} from 'core/entity/images/unused/UnusedImage'

export interface UnusedSMM1BigMushroomImageFile
    extends UnusedSMM1ImageFile<ImageFilePath, PossibleUnusedBigMushroomImageFileName, PossibleUnusedBigMushroomImageFallbackName> {
}

export type ImageFilePath = `M1 A - Enemy - ${ImageName_BigMushroom_Unused_SMM1}`

export type PossibleUnusedBigMushroomImageFileName = `${ImageIdentifier}${| '' | `.${ImageNumber}`}`
export type ImageIdentifier = | 'anger' | 'blink' | 'weep' | 'damage' | 'kutsu' | 'swim' | 'walk' | 'out' | 'wait' | 'fire' | 'iron_ball' | 'tear' | 'senkan_houdai_ball'
export type ImageNumber = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

export type PossibleUnusedBigMushroomImageFallbackName = `Big Mushroom - ${ImageIdentifier}${| '' | ` #${ImageNumber}`}`
export type PossibleAmountOfImages = | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
