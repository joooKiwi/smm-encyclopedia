import type {ImageNumber, PossibleAmountOfImages, SimpleImageName} from 'core/entity/images/clearCondition/ClearConditionImage.types'
import type {EntityImageFile}                                      from 'core/entity/file/EntityImageFile'
import type {PossibleGameAcronym, PossibleShortImagePath}          from 'core/gameStyle/GameStyles.types'

export interface ClearConditionImageFile
    extends EntityImageFile<ImageFilePath, PossibleClearConditionImageFileName, 'tiff', PossibleClearConditionImageFallbackName> {
}

export type ImageFilePath = `${PossibleShortImagePath}/Clear Condition/`
export type PossibleClearConditionImageFileName = `${PossibleGameAcronym}_Lyt_M_${NonNullable<SimpleImageName>}_0${ImageNumber}`
export type PossibleClearConditionImageFallbackName = `Clear condition${PossibleFallbackNameNumber}`
type PossibleFallbackNameNumber = | '' | ` #${PossibleAmountOfImages}`
