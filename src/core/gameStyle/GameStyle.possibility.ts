import {GameStyles} from 'core/gameStyle/GameStyles'

/**
 * An encapsulation on the possibilities of the {@link GameStyles} grouped in {@link ReadonlyArray Array}
 *
 * @recursiveReference<{@link GameStyles}>
 */
export namespace GameStylePossibility {

    //region -------------------- Singular --------------------

    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB} */
    export const SMB_ONLY = [GameStyles.SUPER_MARIO_BROS,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} */
    export const SMB3_ONLY = [GameStyles.SUPER_MARIO_BROS_3,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_WORLD SMW} */
    export const SMW_ONLY = [GameStyles.SUPER_MARIO_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
    export const NSMBU_ONLY = [GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    export const SM3DW_ONLY = [GameStyles.SUPER_MARIO_3D_WORLD,] as const

    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB} & {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} */
    export const SMB_AND_SMB3 = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB} & {@link GameStyles.SUPER_MARIO_WORLD SMW} */
    export const SMB_AND_SMW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
    export const SMB_AND_NSMBU = [GameStyles.SUPER_MARIO_BROS, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    export const SMB_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_3D_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} & {@link GameStyles.SUPER_MARIO_WORLD SMW} */
    export const SMB3_AND_SMW = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
    export const SMB3_AND_NSMBU = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    export const SMB3_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_3D_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
    export const SMW_AND_NSMBU = [GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    export const SMW_AND_SM3DW = [GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    export const NSMBU_AND_SM3DW = [GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const

    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} & {@link GameStyles.SUPER_MARIO_WORLD SMW} */
    export const SMB_AND_SMB3_AND_SMW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
    export const SMB_AND_SMB3_AND_NSMBU = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    export const SMB_AND_SMB3_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_3D_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
    export const SMB_AND_SMW_AND_NSMBU = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    export const SMB_AND_SMW_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    export const SMB_AND_NSMBU_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}, {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
    export const SMB3_AND_SMW_AND_NSMBU = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}, {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    export const SMB3_AND_SMW_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}, {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    export const SMB3_AND_NSMBU_AND_SM3DW = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link GameStyles.SUPER_MARIO_WORLD SMW}, {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    export const SMW_AND_NSMBU_AND_SM3DW = [GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const

    /** An {@link ReadonlyArray Array} representing the game styles excluding {@link GameStyles.SUPER_MARIO_BROS SMB} */
    export const NOT_SMB = [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles excluding {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} */
    export const NOT_SMB3 = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles excluding {@link GameStyles.SUPER_MARIO_WORLD SMW} */
    export const NOT_SMW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles excluding {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} */
    export const NOT_NSMBU = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,] as const
    /** An {@link ReadonlyArray Array} representing the game styles excluding {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} */
    export const NOT_SM3DW = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,] as const

    /**
     * An {@link ReadonlyArray Array} representing every game style
     * ({@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3},
     * {@link GameStyles.SUPER_MARIO_WORLD SMW}, {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} &
     * {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW})
     */
    export const ALL_GAME_STYLES = [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,] as const

    //endregion -------------------- Singular --------------------
    //region -------------------- Group --------------------

    /** Every single (1x) {@link GameStyles} fields in the {@link GameStylePossibility} */
    export const EVERY_SINGLE_GAME_STYLE = [SMB_ONLY, SMB3_ONLY, SMW_ONLY, NSMBU_ONLY, SM3DW_ONLY,] as const

    /** Every double (2x) {@link GameStyles} fields in the {@link GameStylePossibility} */
    export const EVERY_DOUBLE_GAME_STYLE = [
        SMB_AND_SMB3, SMB_AND_SMW, SMB_AND_NSMBU, SMB_AND_SM3DW,
        SMB3_AND_SMW, SMB3_AND_NSMBU, SMB3_AND_SM3DW,
        SMW_AND_NSMBU, SMW_AND_SM3DW,
        NSMBU_AND_SM3DW,
    ] as const

    /** Every triple (3x) {@link GameStyles} fields in the {@link GameStylePossibility} */
    export const EVERY_TRIPLE_GAME_STYLE = [
        SMB_AND_SMB3_AND_SMW, SMB_AND_SMB3_AND_NSMBU, SMB_AND_SMB3_AND_SM3DW,
        SMB_AND_SMW_AND_NSMBU, SMB_AND_SMW_AND_SM3DW,
        SMB_AND_NSMBU_AND_SM3DW,

        SMB3_AND_SMW_AND_NSMBU, SMB3_AND_SMW_AND_SM3DW,
        SMB3_AND_NSMBU_AND_SM3DW,

        SMW_AND_NSMBU_AND_SM3DW,
    ] as const

    /** Every quadruple (4x) {@link GameStyles} fields in the {@link GameStylePossibility} */
    export const EVERY_QUADRUPLE_GAME_STYLE = [NOT_SM3DW, NOT_NSMBU, NOT_SMW, NOT_SMB3, NOT_SMB,] as const

    /** Every {@link GameStyles} fields in the {@link GameStylePossibility} */
    export const EVERY_GAME_STYLE = [
        ALL_GAME_STYLES,


        SMB_ONLY, SMB3_ONLY, SMW_ONLY, NSMBU_ONLY, SM3DW_ONLY,


        SMB_AND_SMB3, SMB_AND_SMW, SMB_AND_NSMBU, SMB_AND_SM3DW,
        SMB3_AND_SMW, SMB3_AND_NSMBU, SMB3_AND_SM3DW,
        SMW_AND_NSMBU, SMW_AND_SM3DW,
        NSMBU_AND_SM3DW,


        SMB_AND_SMB3_AND_SMW, SMB_AND_SMB3_AND_NSMBU, SMB_AND_SMB3_AND_SM3DW,
        SMB_AND_SMW_AND_NSMBU, SMB_AND_SMW_AND_SM3DW,
        SMB_AND_NSMBU_AND_SM3DW,

        SMB3_AND_SMW_AND_NSMBU, SMB3_AND_SMW_AND_SM3DW,
        SMB3_AND_NSMBU_AND_SM3DW,

        SMW_AND_NSMBU_AND_SM3DW,


        NOT_SM3DW, NOT_NSMBU, NOT_SMW, NOT_SMB3, NOT_SMB,
    ] as const

    //endregion -------------------- Group --------------------

}
