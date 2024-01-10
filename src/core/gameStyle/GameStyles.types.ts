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
export type PossibleSimpleValue = | '1' | '3' | 'W' | 'U' | '3DW'
export type PossibleSimpleValue_SMM1 = | '1' | '3' | 'W' | 'U'

/** @deprecated This type should no longer be used, the folder should use the {@link PossibleAcronym_InFile} */
export type PossibleShortImagePath = | '1 - SMB' | '2 - SMB3' | '3 - SMW' | '4 - NSMBU' | '5 - SM3DW'
/** The possible acronym that are used within the file system of the {@link Games Super Mario Maker games} */
export type PossibleAcronym_InFile = | PossibleAcronym_InFile_SMM1 | '3W'
/** The possible acronym that are used within the file system of the {@link Games.SUPER_MARIO_MAKER_1 Super Mario Maker 1 game} */
export type PossibleAcronym_InFile_SMM1 = | 'M1' | 'M3' | 'MW' | 'WU'

//endregion -------------------- Acronym / name / image ----------------------------------------
//region -------------------- URL --------------------

type GroupValidUrlSimpleValue = | PossibleSimpleValue
                                       | '1&3' | '1&W' | '1&U' | '1&3DW' | '3&W' | '3&U' | '3&3DW' | 'W&U' | 'W&3DW' | 'U&3DW'
                                       | '1&3&W' | '1&3&U' | '1&3&3DW' | '1&W&U' | '1&W&3DW' | '3&W&U' | '3&W&3DW' | 'W&W&3DW'
                                       | '1&3&W&U' | '1&3&W&3DW' | '1&3&U&3DW' | '1&W&U&3DW' | '3&W&U&3DW'
                                       | 'all'
type GroupValidUrlSimpleValue_SMM1 = | PossibleSimpleValue_SMM1
                                            | '1&3' | '1&W' | '1&U' | '3&W' | '3&U' | 'W&U'
                                            | '1&3&W' | '1&3&U' | '1&W&U' | '3&W&U'
                                            | 'all'
export type FullGroupValidUrlSimpleValue = `GameStyle=${GroupValidUrlSimpleValue}`
export type FullGroupValidUrlSimpleValue_SMM1 = `GameStyle=${GroupValidUrlSimpleValue_SMM1}`


export type PossibleSimpleUrlValue = Lowercase<PossibleSimpleValue>
export type PossibleSimpleUrlValue_SMM1 = Lowercase<PossibleSimpleValue_SMM1>
export type GroupUrlValue = | PossibleSimpleUrlValue
                            | `${PossibleSimpleUrlValue},${PossibleSimpleUrlValue}`
                            | `${PossibleSimpleUrlValue},${PossibleSimpleUrlValue},${PossibleSimpleUrlValue}`
                            | `${PossibleSimpleUrlValue},${PossibleSimpleUrlValue},${PossibleSimpleUrlValue},${PossibleSimpleUrlValue}`
                            | `${PossibleSimpleUrlValue},${PossibleSimpleUrlValue},${PossibleSimpleUrlValue},${PossibleSimpleUrlValue},${PossibleSimpleUrlValue}`
                            | 'all'
type GroupValidUrlValue = | PossibleSimpleUrlValue
                          | '1,3' | '1,w' | '1,u' | '1,3dw' | '3,w' | '3,u' | '3,3dw' | 'w,u' | 'w,3dw' | 'u,3dw'
                          | '1,3,w' | '1,3,u' | '1,3,3dw' | '1,w,u' | '1,w,3dw' | '3,w,u' | '3,w,3dw' | 'w,w,3dw'
                          | '1,3,w,u' | '1,3,w,3dw' | '1,3,u,3dw' | '1,w,u,3dw' | '3,w,u,3dw'
                          | 'all'
type GroupValidUrlValue_SMM1 = | PossibleSimpleUrlValue_SMM1
                               | '1,3' | '1,w' | '1,u' | '3,w' | '3,u' | 'w,u'
                               | '1,3,w' | '1,3,u' | '1,w,u' | '3,w,u'
                               | 'all'
export type FullValidUrlValue = `game-style-${GroupValidUrlValue}`
export type FullValidUrlValue_SMM1 = `game-style-${GroupValidUrlValue_SMM1}`

//endregion -------------------- URL --------------------
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
