import {Games} from 'core/game/Games'

import SMM1 =   Games.SMM1
import SMM2 =   Games.SMM2
import SMM3DS = Games.SMM3DS

/**
 * An encapsulation on the possibilities of the {@link Games} grouped in {@link ReadonlyArray Array}
 *
 * @recursiveReference<{@link Games}>
 */
export namespace GamePossibility {

    //region -------------------- Singular --------------------

    /** An {@link ReadonlyArray Array} representing the games with only {@link SMM1} */
    export const SMM1_ONLY = [SMM1,] as const
    /** An {@link ReadonlyArray Array} representing the games with only {@link SMM3DS} */
    export const SMM3DS_ONLY = [SMM3DS,] as const
    /** An {@link ReadonlyArray Array} representing the games with only {@link SMM2} */
    export const SMM2_ONLY = [SMM2,] as const

    /** An {@link ReadonlyArray Array} representing the games with {@link SMM1} & {@link SMM3DS} */
    export const SMM1_AND_3DS = [SMM1, SMM3DS,] as const
    /** An {@link ReadonlyArray Array} representing the games with {@link SMM1} & {@link SMM2} */
    export const SMM1_AND_2 = [SMM1, SMM2,] as const
    /** An {@link ReadonlyArray Array} representing the games with {@link SMM3DS} & {@link SMM2} */
    export const SMM3DS_AND_2 = [SMM3DS, SMM2,] as const

    /**
     * An {@link ReadonlyArray Array} representing the games with every game
     * ({@link SMM1}, {@link SMM3DS} & {@link SMM2})
     */
    export const ALL_GAMES = [SMM1, SMM3DS, SMM2,] as const

    //endregion -------------------- Singular --------------------
    //region -------------------- Group --------------------

    /** Every single (1x) {@link Games} fields in the {@link GamePossibility} */
    export const EVERY_SINGLE_GAME = [SMM1_ONLY, SMM3DS_ONLY, SMM2_ONLY,] as const

    /** Every double (2x) {@link Games} fields in the {@link GamePossibility} */
    export const EVERY_DOUBLE_GAME = [SMM1_AND_3DS, SMM1_AND_2, SMM3DS_AND_2,] as const

    /** Every {@link Games} fields in the {@link GamePossibility} */
    export const EVERY_GAME = [
        ALL_GAMES,
        SMM1_ONLY, SMM3DS_ONLY, SMM2_ONLY,
        SMM1_AND_3DS, SMM1_AND_2, SMM3DS_AND_2,
    ] as const

    //endregion -------------------- Group --------------------

}
