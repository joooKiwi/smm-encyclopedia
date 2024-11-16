import {PossibleIterableArraySetOrCollectionHolder, PossibleIterableOrCollection} from '@joookiwi/collection'
import type {Array, Nullable}                                                     from '@joookiwi/type'
import {GenericCollectionHolder}                                                  from '@joookiwi/collection'

import {GameStyles} from 'core/gameStyle/GameStyles'
import {Empty}      from 'util/emptyVariables'

import ALL =             GameStyles.ALL
import ALL_GAME_STYLES = GameStyles.ALL
import ALL_SMM1 =        GameStyles.ALL_SMM1
import EMPTY_ARRAY =     Empty.EMPTY_ARRAY
import NSMBU =           GameStyles.NSMBU
import SMB =             GameStyles.SMB
import SMB3 =            GameStyles.SMB3
import SMW =             GameStyles.SMW
import SM3DW =           GameStyles.SM3DW

export class GameStyleCollection<const T extends GameStyles = GameStyles,
    const REFERENCE extends PossibleIterableOrCollection<T> = PossibleIterableArraySetOrCollectionHolder<T>>
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
     * The collection has all {@link GameStyles}
     * ({@link SMB}, {@link SMB3}, {@link SMW}, {@link NSMBU} & {@link SM3DW})
     * types in its values
     */
    public get hasAllGameStyles(): boolean {
        return this.#hasAllGameStyles ??= this._hasAllByArray(ALL as unknown as Array<T>,)
    }

    /**
     * The collection has all {@link GameStyles} in {@link SMM1}
     * ({@link SMB}, {@link SMB3}, {@link SMW} & {@link NSMBU})
     * types in its values
     */
    public get hasAllGameStylesInSMM1(): boolean {
        return this.#hasAllGameStylesInSMM1 ??= this._hasAllByArray(ALL_SMM1 as unknown as Array<T>,)
    }


    /** The collection has the {@link SMB} type in its values */
    public get hasSMB(): boolean {
        return this.#hasSMB ??= this.has(SMB as T,)
    }

    /** The collection has the {@link SMB3} type in its values */
    public get hasSMB3(): boolean {
        return this.#hasSMB3 ??= this.has(SMB3 as T,)
    }

    /** The collection has the {@link SMW} type in its values */
    public get hasSMW(): boolean {
        return this.#hasSMW ??= this.has(SMW as T,)
    }

    /** The collection has the {@link NSMBU} type in its values */
    public get hasNSMBU(): boolean {
        return this.#hasNSMBU ??= this.has(NSMBU as T,)
    }

    /** The collection has the {@link SM3DW} type in its values */
    public get hasSM3DW(): boolean {
        return this.#hasSM3DW ??= this.has(SM3DW as T,)
    }

    //endregion -------------------- Getter methods --------------------

}

export namespace GameStyleCollection {

    export const EMPTY = new GameStyleCollection(EMPTY_ARRAY,)
    export const ALL =   new GameStyleCollection(ALL_GAME_STYLES,)


    /**
     * Create a new {@link GameStyleCollection} from the {@link values} received
     * by attempting to reuse some predefined collections
     *
     * @param values The values to create a new {@link GameStyleCollection}
     */
    export function of<const T extends GameStyles,>(values: Nullable<Array<T>>,): GameStyleCollection<T>
    export function of(values: Nullable<Array<GameStyles>>,): GameStyleCollection {
        if (values == null)
            return EMPTY

        const size = values.length
        if (size === 0)
            return EMPTY

        if ((ALL as GameStyleCollection).hasAll(values,))
            return ALL
        return new GameStyleCollection(values,)
    }

}
