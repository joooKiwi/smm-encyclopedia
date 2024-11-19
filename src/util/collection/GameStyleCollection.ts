import type {PossibleIterableArraySetOrCollectionHolder, PossibleIterableOrCollection} from '@joookiwi/collection'
import type {Array}                                                                    from '@joookiwi/type'
import {GenericCollectionHolder, hasAllWithCollectionHolderByArray, isEmptyByArray}    from '@joookiwi/collection'

import type {GameStyleProperty} from 'core/entity/properties/gameStyle/GameStyleProperty'

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
    #hasOnlySmb?: boolean
    #hasOnlySmb3?: boolean
    #hasOnlySmw?: boolean
    #hasOnlyNsmbu?: boolean
    #hasOnlySm3dw?: boolean

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


    /** The collection has <b>only</b> the {@link SMB} type in its values */
    public get hasOnlySmb(): boolean {
        return this.#hasOnlySmb ??= this.hasSMB && this.size === 1
    }

    /** The collection has <b>only</b> the {@link SMB3} type in its values */
    public get hasOnlySmb3(): boolean {
        return this.#hasOnlySmb3 ??= this.hasSMB3 && this.size === 1
    }

    /** The collection has <b>only</b> the {@link SMW} type in its values */
    public get hasOnlySmw(): boolean {
        return this.#hasOnlySmw ??= this.hasSMW && this.size === 1
    }

    /** The collection has <b>only</b> the {@link NSMBU} type in its values */
    public get hasOnlyNsmbu(): boolean {
        return this.#hasOnlyNsmbu ??= this.hasNSMBU && this.size === 1
    }

    /** The collection has <b>only</b> the {@link SM3DW} type in its values */
    public get hasOnlySm3dw(): boolean {
        return this.#hasOnlySm3dw ??= this.hasSM3DW && this.size === 1
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Tell if the {@link property} is present via {@link GameStyles.get} on at least one
     *
     * @param property The reference to validate its game style property
     */
    public hasAnyIn(property: GameStyleProperty,): boolean {
        return this._any(it => it.get(property,),)
    }

    //endregion -------------------- Methods --------------------

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
    export function of<const T extends GameStyles,>(values: NullableArray<T>,): GameStyleCollection<T>
    export function of(values: NullableArray<GameStyles>,): GameStyleCollection {
        if (isEmptyByArray(values,))
            return EMPTY
        if (hasAllWithCollectionHolderByArray(values, ALL,))
            return ALL
        return new GameStyleCollection(values!,)
    }

}
