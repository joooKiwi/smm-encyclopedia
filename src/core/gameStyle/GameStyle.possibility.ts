import {GameStyles} from 'core/gameStyle/GameStyles'

import NSMBU = GameStyles.NSMBU
import SMB =   GameStyles.SMB
import SMB3 =  GameStyles.SMB3
import SMW =   GameStyles.SMW
import SM3DW = GameStyles.SM3DW

/**
 * An encapsulation on the possibilities of the {@link GameStyles} grouped in {@link ReadonlyArray Array}
 *
 * @recursiveReference<{@link GameStyles}>
 */
export namespace GameStylePossibility {

    //region -------------------- Singular --------------------

    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB} */
    export const SMB_ONLY = [SMB,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB3} */
    export const SMB3_ONLY = [SMB3,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMW} */
    export const SMW_ONLY = [SMW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link NSMBU} */
    export const NSMBU_ONLY = [NSMBU,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SM3DW} */
    export const SM3DW_ONLY = [SM3DW,] as const

    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB} & {@link SMB3} */
    export const SMB_AND_SMB3 = [SMB, SMB3,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB} & {@link SMW} */
    export const SMB_AND_SMW = [SMB, SMW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB} & {@link NSMBU} */
    export const SMB_AND_NSMBU = [SMB, NSMBU,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB} & {@link SM3DW} */
    export const SMB_AND_SM3DW = [SMB, SM3DW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB3} & {@link SMW} */
    export const SMB3_AND_SMW = [SMB3, SMW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB3} & {@link NSMBU} */
    export const SMB3_AND_NSMBU = [SMB3, NSMBU,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB3} & {@link SM3DW} */
    export const SMB3_AND_SM3DW = [SMB3, SM3DW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMW} & {@link NSMBU} */
    export const SMW_AND_NSMBU = [SMW, NSMBU,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMW} & {@link SM3DW} */
    export const SMW_AND_SM3DW = [SMW, SM3DW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link NSMBU} & {@link SM3DW} */
    export const NSMBU_AND_SM3DW = [NSMBU, SM3DW,] as const

    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB}, {@link SMB3} & {@link SMW} */
    export const SMB_AND_SMB3_AND_SMW = [SMB, SMB3, SMW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB}, {@link SMB3} & {@link NSMBU} */
    export const SMB_AND_SMB3_AND_NSMBU = [SMB, SMB3, NSMBU,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB}, {@link SMB3} & {@link SM3DW} */
    export const SMB_AND_SMB3_AND_SM3DW = [SMB, SMB3, SM3DW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB}, {@link SMW} & {@link NSMBU} */
    export const SMB_AND_SMW_AND_NSMBU = [SMB, SMW, NSMBU,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB}, {@link SMW} & {@link SM3DW} */
    export const SMB_AND_SMW_AND_SM3DW = [SMB, SMW, SM3DW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB}, {@link NSMBU} & {@link SM3DW} */
    export const SMB_AND_NSMBU_AND_SM3DW = [SMB, NSMBU, SM3DW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB3}, {@link SMW} & {@link NSMBU} */
    export const SMB3_AND_SMW_AND_NSMBU = [SMB3, SMW, NSMBU,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB3}, {@link SMW} & {@link SM3DW} */
    export const SMB3_AND_SMW_AND_SM3DW = [SMB3, SMW, SM3DW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMB3}, {@link NSMBU} & {@link SM3DW} */
    export const SMB3_AND_NSMBU_AND_SM3DW = [SMB3, NSMBU, SM3DW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles with only {@link SMW}, {@link NSMBU} & {@link SM3DW} */
    export const SMW_AND_NSMBU_AND_SM3DW = [SMW, NSMBU, SM3DW,] as const

    /** An {@link ReadonlyArray Array} representing the game styles excluding {@link SMB} */
    export const NOT_SMB = [SMB3, SMW, NSMBU, SM3DW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles excluding {@link SMB3} */
    export const NOT_SMB3 = [SMB, SMW, NSMBU, SM3DW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles excluding {@link SMW} */
    export const NOT_SMW = [SMB, SMB3, NSMBU, SM3DW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles excluding {@link NSMBU} */
    export const NOT_NSMBU = [SMB, SMB3, SMW, SM3DW,] as const
    /** An {@link ReadonlyArray Array} representing the game styles excluding {@link SM3DW} */
    export const NOT_SM3DW = [SMB, SMB3, SMW, NSMBU,] as const

    /**
     * An {@link ReadonlyArray Array} representing every game style
     * ({@link SMB}, {@link SMB3}, {@link SMW}, {@link NSMBU} & {@link SM3DW})
     */
    export const ALL_GAME_STYLES = [SMB, SMB3, SMW, NSMBU, SM3DW,] as const

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
