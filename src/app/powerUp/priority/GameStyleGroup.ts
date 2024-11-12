import {GameStyles} from 'core/gameStyle/GameStyles'

/**@deprecated Use the {@link GameStyles.Possibilities} instead */
export namespace GameStyleGroup {

    export const SMB_AND_SMB3 = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,] as const
    export const SMW_AND_NSMBU = [GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const

    export const SMB_SMB3_AND_SMW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD,] as const
    export const SMB3_SMW_AND_NSMBU = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const

    export const  SMB_SMB3_SMW_AND_NSMBU = GameStyles.gameStyles_smm1
    export const  SMB3_SMW_NSMBU_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const

    export const  ALL_GAME_STYLES = GameStyles.CompanionEnum.get.values

}
