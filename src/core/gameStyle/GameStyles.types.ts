import type {PossibleAcronym_GameStyle, PossibleEnglishName_GameStyle} from 'core/gameReference/GameReferences.types'
import type {GameStyles}                                               from 'core/gameStyle/GameStyles'

enum Enum {

    SUPER_MARIO_BROS,
    SUPER_MARIO_BROS_3,
    SUPER_MARIO_WORLD,
    NEW_SUPER_MARIO_BROS_U,
    SUPER_MARIO_3D_WORLD,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Acronym / name / image ----------------------------------------

export type PossibleAcronym = PossibleAcronym_GameStyle
export type PossibleEnglishName = PossibleEnglishName_GameStyle

export type PossibleShortImagePath = | '1 - SMB' | '2 - SMB3' | '3 - SMW' | '4 - NSMBU' | '5 - SM3DW'
/** The possible acronym that are used within the file system of the {@link Games Super Mario Maker games} */
export type PossibleAcronym_InFile = | PossibleAcronym_InFile_SMM1 | '3W'
/** The possible acronym that are used within the file system of the {@link Games.SUPER_MARIO_MAKER_1 Super Mario Maker 1 game} */
export type PossibleAcronym_InFile_SMM1 = | 'M1' | 'M3' | 'MW' | 'WU'

//endregion -------------------- Acronym / name / image ----------------------------------------
//region -------------------- Array types --------------------

export type GameStyles_ArrayInSMM2 = readonly [
    typeof GameStyles['SUPER_MARIO_BROS'],
    typeof GameStyles['SUPER_MARIO_BROS_3'],
    typeof GameStyles['SUPER_MARIO_WORLD'],
    typeof GameStyles['NEW_SUPER_MARIO_BROS_U'],
    typeof GameStyles['SUPER_MARIO_3D_WORLD'],
]

export type GameStyles_ArrayInSMM1 = readonly [
    typeof GameStyles['SUPER_MARIO_BROS'],
    typeof GameStyles['SUPER_MARIO_BROS_3'],
    typeof GameStyles['SUPER_MARIO_WORLD'],
    typeof GameStyles['NEW_SUPER_MARIO_BROS_U'],
]

//endregion -------------------- Array types --------------------
