import type {UnusedSMM1ImageFile}      from 'core/entity/file/UnusedSMM1ImageFile'
import type {ImageName_Unused_SMM1}    from 'core/entity/images/unused/UnusedImage'
import type {PossibleGameAcronym_SMM1} from 'core/gameStyle/GameStyles.types'

export interface UnusedSMM1RegularImageFile
    extends UnusedSMM1ImageFile<ImageFilePath, PossibleUnusedRegularImageFileName, PossibleUnusedRegularImageFallbackName> {
}

export type ImageFilePath = `${PossibleGameAcronym_SMM1} - ${ImageType} - ${ImageName_Unused_SMM1}`
export type ImageType = | 'Enemy' | 'Object' | 'Object Block'

export type PossibleUnusedRegularImageFileName = `${ImageIdentifier}.${ImageNumber}`
export type ImageIdentifier = | 'out' | 'wait' | 'weep' | 'goalpole' | 'down_switch_hatena_Alb'
export type ImageNumber = | 0 | 1 | 2 | 4 | 5 | 6 | 7 | `00${| 0 | 4}`

export type PossibleUnusedRegularImageFallbackName = `${ImageIdentifier} #${PossibleAmountOfImages}`
export type PossibleAmountOfImages = | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
