import type {InGameImageFile}        from 'core/entity/file/InGameImageFile'
import type {ImageName_SMM1}         from 'core/entity/images/inGame/InGameImage_SMM1.types'
import type {PossibleShortImagePath} from 'core/gameStyle/GameStyles.types'

export interface InGameSMM1ImageFile
    extends InGameImageFile<ImageFilePath, PossibleInGameSMM1ImageFileName, 'png', PossibleInGameSMM1ImageFallbackName> {}

export type ImageFilePath = `${PossibleShortImagePath}/In game/SMM1/Item - ${ImageName_SMM1}/`
export type PossibleInGameSMM1ImageFileName = 'wait.0'
export type PossibleInGameSMM1ImageFallbackName = 'In game - SMM1'
