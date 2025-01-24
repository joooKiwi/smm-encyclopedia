import type {CollectionHolder, PossibleIterableArraySetOrCollectionHolder, PossibleIterableOrCollection} from '@joookiwi/collection'
import type {Nullable}                                                                                   from '@joookiwi/type'
import {LazyGenericCollectionHolder}                                                                     from '@joookiwi/collection'

import type {GameStyleProperty} from 'core/entity/properties/gameStyle/GameStyleProperty'

import {GameStyles}            from 'core/gameStyle/GameStyles'
import {GameStylesPossibility} from 'core/gameStyle/GameStyles.possibility'
import {Empty}                 from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

export class GameStyleCollection<const T extends GameStyles = GameStyles,
    const REFERENCE extends PossibleIterableOrCollection<T> = PossibleIterableArraySetOrCollectionHolder<T>>
    extends LazyGenericCollectionHolder<T, REFERENCE> {

    //region -------------------- Fields --------------------

    #hasAllGameStyles?: boolean
    #hasAllGameStylesInSmm1?: boolean
    #hasSmb?: boolean
    #hasSmb3?: boolean
    #hasSmw?: boolean
    #hasNsmbu?: boolean
    #hasSm3dw?: boolean
    #hasSmbOrSmb3?: boolean
    #hasSmwOrNsmbu?: boolean
    #hasSm3dwAndSizeOfNot4Or5?: boolean
    #hasOnlySmb?: boolean
    #hasOnlySmb3?: boolean
    #hasOnlySmw?: boolean
    #hasOnlyNsmbu?: boolean
    #hasOnlySm3dw?: boolean
    #hasOnlySmbOrSmb3?: boolean
    #hasOnlySmwOrNsmbu?: boolean

    static #ALL?: GameStyleCollection

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    /**
     * The collection has all {@link GameStyles}
     * ({@link SMB}, {@link SMB3}, {@link SMW}, {@link NSMBU} & {@link SM3DW})
     * types in its values
     */
    public get hasAllGameStyles(): boolean {
        return this.#hasAllGameStyles ??= this._hasAllByCollectionHolder(GameStylesPossibility.ALL as unknown as CollectionHolder<T>,)
    }

    /**
     * The collection has all {@link GameStyles} in {@link SMM1}
     * ({@link SMB}, {@link SMB3}, {@link SMW} & {@link NSMBU})
     * types in its values
     */
    public get hasAllGameStylesInSmm1(): boolean {
        return this.#hasAllGameStylesInSmm1 ??= this._hasAllByCollectionHolder(GameStylesPossibility.ALL_SMM1 as unknown as CollectionHolder<T>,)
    }


    /** The collection has the {@link SMB} type in its values */
    public get hasSmb(): boolean {
        return this.#hasSmb ??= this.has(GameStyles.SMB as T,)
    }

    /** The collection has the {@link SMB3} type in its values */
    public get hasSmb3(): boolean {
        return this.#hasSmb3 ??= this.has(GameStyles.SMB3 as T,)
    }

    /** The collection has the {@link SMW} type in its values */
    public get hasSmw(): boolean {
        return this.#hasSmw ??= this.has(GameStyles.SMW as T,)
    }

    /** The collection has the {@link NSMBU} type in its values */
    public get hasNsmbu(): boolean {
        return this.#hasNsmbu ??= this.has(GameStyles.NSMBU as T,)
    }

    /** The collection has the {@link SM3DW} type in its values */
    public get hasSm3dw(): boolean {
        return this.#hasSm3dw ??= this.has(GameStyles.SM3DW as T,)
    }

    /** The collection has the {@link SMB} or {@link SMB3} type in its values */
    public get hasSmbOrSmb3(): boolean {
        return this.#hasSmbOrSmb3 ??= this._hasAllByCollectionHolder(GameStylesPossibility.SMB_AND_SMB3 as unknown as CollectionHolder<T>,)
    }

    /** The collection has the {@link SMW} or {@link NSMBU} type in its values */
    public get hasSmwOrNsmbu(): boolean {
        return this.#hasSmwOrNsmbu ??= this._hasAllByCollectionHolder(GameStylesPossibility.SMW_AND_NSMBU as unknown as CollectionHolder<T>,)
    }


    public get hasSm3dwAndSizeOfNot4Or5(): boolean {
        const value = this.#hasSm3dwAndSizeOfNot4Or5
        if (value != null)
            return value
        if (!this.hasSm3dw)
            return this.#hasSm3dwAndSizeOfNot4Or5 = false

        const size = this.size
        return this.#hasSm3dwAndSizeOfNot4Or5 = size === 4 || size === 5
    }


    /** The collection has <b>only</b> the {@link SMB} type in its values */
    public get hasOnlySmb(): boolean {
        return this.#hasOnlySmb ??= this.hasSmb && this.size === 1
    }

    /** The collection has <b>only</b> the {@link SMB3} type in its values */
    public get hasOnlySmb3(): boolean {
        return this.#hasOnlySmb3 ??= this.hasSmb3 && this.size === 1
    }

    /** The collection has <b>only</b> the {@link SMW} type in its values */
    public get hasOnlySmw(): boolean {
        return this.#hasOnlySmw ??= this.hasSmw && this.size === 1
    }

    /** The collection has <b>only</b> the {@link NSMBU} type in its values */
    public get hasOnlyNsmbu(): boolean {
        return this.#hasOnlyNsmbu ??= this.hasNsmbu && this.size === 1
    }

    /** The collection has <b>only</b> the {@link SM3DW} type in its values */
    public get hasOnlySm3dw(): boolean {
        return this.#hasOnlySm3dw ??= this.hasSm3dw && this.size === 1
    }

    /** The collection has <b>only</b> the {@link SMB} or {@link SMB3} type in its values */
    public get hasOnlySmbOrSmb3(): boolean {
        const value = this.#hasOnlySmbOrSmb3
        if (value != null)
            return value
        if (!this.hasSmbOrSmb3)
            return this.#hasOnlySmbOrSmb3 = false

        const size = this.size
        if (size > 2)
            return this.#hasOnlySmbOrSmb3 = false
        return this.#hasOnlySmbOrSmb3 = this.hasSmb && this.hasSmb3
    }

    /** The collection has <b>only</b> the {@link SMW} or {@link NSMBU} type in its values */
    public get hasOnlySmwOrNsmbu(): boolean {
        const value = this.#hasOnlySmwOrNsmbu
        if (value != null)
            return value
        if (!this.hasSmwOrNsmbu)
            return this.#hasOnlySmwOrNsmbu = false

        const size = this.size
        if (size > 2)
            return this.#hasOnlySmwOrNsmbu = false
        return this.#hasOnlySmwOrNsmbu = this.hasSmw && this.hasNsmbu
    }


    public static get ALL(): GameStyleCollection { return GameStyleCollection.#ALL ??= new GameStyleCollection(() => GameStylesPossibility.ALL,) }

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


    /**
     * Create a new {@link GameStyleCollection} from the {@link values} received
     * by attempting to reuse some predefined collections
     *
     * @param values The values to create a new {@link GameStyleCollection}
     */
    export function of<const T extends GameStyles, >(values: Nullable<CollectionHolder<T>>,): GameStyleCollection<T>
    export function of(values: Nullable<CollectionHolder<GameStyles>>,): GameStyleCollection {
        if (values == null)
            return EMPTY
        if (values.isEmpty)
            return EMPTY
        if (values.hasAll(GameStyleCollection.ALL,))
            return GameStyleCollection.ALL
        return new GameStyleCollection(values,)
    }

}
