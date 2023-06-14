import type {EntityImageFile}     from 'core/entity/file/EntityImageFile'
import type {PossibleGameAcronym} from 'core/gameStyle/GameStyles.types'

export interface InGameSMM2ImageFile
    extends EntityImageFile<ImageFilePath, PossibleInGameSMM2ImageFileName, 'tiff', PossibleInGameSMM2ImageFallbackName> {
}

export type ImageFilePath = `in game/${ObjectImagePath}`

// type ImageFileType = 'Object'
type ObjectImageFileName = | 'Balloon' | 'StartBlock'
type ObjectImagePath = `${PossibleGameAcronym} Object - ${ObjectImageFileName}`
export type ImageName_SMM2 = |ObjectImageFileName

type PossibleInGameSMM2ImageFileName_SMM3DW = |'TractorBubble_Alb'
type PossibleInGameSMM2ImageFileName_NSMBU = never
type PossibleInGameSMM2ImageFileName_4Styles = | `balloon${| '' | 2}.0` | 'startblock'
export type PossibleInGameSMM2ImageFileName = | PossibleInGameSMM2ImageFileName_4Styles | PossibleInGameSMM2ImageFileName_NSMBU | PossibleInGameSMM2ImageFileName_SMM3DW

export type PossibleInGameSMM2ImageFallbackName = 'In game - SMM2'
