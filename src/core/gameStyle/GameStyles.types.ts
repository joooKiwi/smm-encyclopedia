import type {BasePath}                                                 from 'variables'
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

export type PossibleImagePath = `/${BasePath}/game style/${PossibleGameAcronym}_Lyt_Logo_00.tiff`

export type PossibleShortImagePath = | '1 - SMB' | '2 - SMB3' | '3 - SMW' | '4 - NSMBU' | '5 - SM3DW'
export type PossibleGameAcronym = | 'M1' | 'M3' | 'MW' | 'WU' | '3W'

//endregion -------------------- Acronym / name / image ----------------------------------------
//region -------------------- Array types --------------------

export type GameStylesInSMM1 = readonly [
    typeof GameStyles['SUPER_MARIO_BROS'],
    typeof GameStyles['SUPER_MARIO_BROS_3'],
    typeof GameStyles['SUPER_MARIO_WORLD'],
    typeof GameStyles['NEW_SUPER_MARIO_BROS_U'],
]

//endregion -------------------- Array types --------------------

export type GameStylesByName<T extends string, > = T extends PossibleEnglishName ? GameStyles : never
