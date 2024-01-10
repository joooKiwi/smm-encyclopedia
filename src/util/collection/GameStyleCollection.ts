import type {PossibleIterable}   from '@joookiwi/collection'
import {GenericCollectionHolder} from '@joookiwi/collection'

import {GameStyles} from 'core/gameStyle/GameStyles'

export class GameStyleCollection<const out T extends GameStyles = GameStyles, const out REFERENCE extends PossibleIterable<T> = PossibleIterable<T>>
    extends GenericCollectionHolder<T, REFERENCE> {

    //region -------------------- Fields --------------------

    #hasAllGameStyles?: boolean
    #hasAllGameStylesInSMM1?: boolean
    #hasSMB?: boolean
    #hasSMB3?: boolean
    #hasSMW?: boolean
    #hasNSMBU?: boolean
    #hasSM3DW?: boolean

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    /**
     * The collection has all {@link GameStyles} ({@link GameStyles.SUPER_MARIO_BROS SMB},
     * {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}, {@link GameStyles.SUPER_MARIO_WORLD SMW},
     * {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} & {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW})
     * types in its values
     */
    public get hasAllGameStyles(): boolean {
        return this.#hasAllGameStyles ??= this.hasAll(GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,)
    }


    /**
     * The collection has all {@link GameStyles} in {@link Games.SUPER_MARIO_MAKER_1 SMM1}
     * ({@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3},
     * {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU})
     * types in its values
     */
    public get hasAllGameStylesInSMM1(): boolean {
        return this.#hasAllGameStylesInSMM1 ??= this.hasAll(GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,)
    }

    /** The collection has the {@link GameStyles.SUPER_MARIO_BROS SMB} type in its values */
    public get hasSMB(): boolean {
        return this.#hasSMB ??= this.hasOne(GameStyles.SUPER_MARIO_BROS,)
    }

    /** The collection has the {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} type in its values */
    public get hasSMB3(): boolean {
        return this.#hasSMB3 ??= this.hasOne(GameStyles.SUPER_MARIO_BROS_3,)
    }

    /** The collection has the {@link GameStyles.SUPER_MARIO_WORLD SMW} type in its values */
    public get hasSMW(): boolean {
        return this.#hasSMW ??= this.hasOne(GameStyles.SUPER_MARIO_WORLD,)
    }

    /** The collection has the {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} type in its values */
    public get hasNSMBU(): boolean {
        return this.#hasNSMBU ??= this.hasOne(GameStyles.NEW_SUPER_MARIO_BROS_U,)
    }

    /** The collection has the {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} type in its values */
    public get hasSM3DW(): boolean {
        return this.#hasSM3DW ??= this.hasOne(GameStyles.SUPER_MARIO_3D_WORLD,)
    }

    //endregion -------------------- Getter methods --------------------

}
