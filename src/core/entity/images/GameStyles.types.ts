import type {BasePath}               from '../../../variables'
import type {GameStyles}             from './GameStyles'
import type {PossibleShortImagePath} from '../../gameStyle/GameStyles.types'

export type GamePath_Editor = `/${BasePath}/entity/${PossibleShortImagePath}/Editor/`
export type GamePath_ClearCondition = `/${BasePath}/entity/${PossibleShortImagePath}/Clear Condition/`
export type GamePath_InGameSMM1 = `/${BasePath}/entity/${PossibleShortImagePath}/In game/SMM1/`

//region -------------------- Array types --------------------

export type GameStylesInSMM1 = readonly [
    typeof GameStyles['SUPER_MARIO_BROS'],
    typeof GameStyles['SUPER_MARIO_BROS_3'],
    typeof GameStyles['SUPER_MARIO_WORLD'],
    typeof GameStyles['NEW_SUPER_MARIO_BROS_U'],
]

//endregion -------------------- Array types --------------------
