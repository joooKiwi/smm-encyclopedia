import type {PossibleIterableArraySetOrCollectionHolder, PossibleIterableOrCollection} from '@joookiwi/collection'
import type {Array, Nullable}                                                          from '@joookiwi/type'
import {getFirstByArray}                                                               from '@joookiwi/collection'
import {GenericCollectionHolder}                                                       from '@joookiwi/collection'

import {Games} from 'core/game/Games'
import {Empty} from 'util/emptyVariables'

import ALL =               Games.ALL
import ALL_GAMES =         Games.ALL
import EMPTY_ARRAY =       Empty.EMPTY_ARRAY
import SMM1 =              Games.SMM1
import SMM1_ONLY_GAMES =   Games.SMM1_ONLY
import SMM2 =              Games.SMM2
import SMM2_ONLY_GAMES =   Games.SMM2_ONLY
import SMM3DS =            Games.SMM3DS
import SMM3DS_ONLY_GAMES = Games.SMM3DS_ONLY

export class GameCollection<const T extends Games = Games,
    const REFERENCE extends PossibleIterableOrCollection<T> = PossibleIterableArraySetOrCollectionHolder<T>, >
    extends GenericCollectionHolder<T, REFERENCE> {

    //region -------------------- Fields --------------------

    #hasAllGames?: boolean
    #hasSMM1?: boolean
    #hasSMM3DS?: boolean
    #hasSMM1Or3DS?: boolean
    #hasSMM2?: boolean

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    /** The collection has every game ({@link SMM1}, {@link SMM3DS} & {@link SMM2}) type in its values */
    public get hasAllGames(): boolean {
        return this.#hasAllGames ??= this._hasAllByArray(ALL as unknown as Array<T>,)
    }

    /** The collection has the {@link SMM1} type in its values */
    public get hasSMM1(): boolean {
        return this.#hasSMM1 ??= this.has(SMM1 as T,)
    }

    /** The collection has the {@link SMM3DS} type in its values */
    public get hasSMM3DS(): boolean {
        return this.#hasSMM3DS ??= this.has(SMM3DS as T,)
    }

    /** The collection has the {@link SMM1} or {@link SMM3DS} type in its values */
    public get hasSMM1Or3DS(): boolean {
        return this.#hasSMM1Or3DS ??= this.hasOne([SMM1 as T, SMM3DS as T,],)
    }

    /** The collection has the {@link SMM2} type in its values */
    public get hasSMM2(): boolean {
        return this.#hasSMM2 ??= this.has(SMM2 as T,)
    }

    //endregion -------------------- Getter methods --------------------

}

export namespace GameCollection {

    export const EMPTY =       new GameCollection(EMPTY_ARRAY,)
    export const SMM1_ONLY =   new GameCollection(SMM1_ONLY_GAMES,)
    export const SMM3DS_ONLY = new GameCollection(SMM3DS_ONLY_GAMES,)
    export const SMM2_ONLY =   new GameCollection(SMM2_ONLY_GAMES,)
    export const ALL =         new GameCollection(ALL_GAMES,)


    /**
     * Create a new {@link GameCollection} from the {@link values} received
     * by attempting to reuse some predefined collections
     *
     * @param values The values to create a new {@link GameCollection}
     */
    export function of<const T extends Games,>(values: Nullable<Array<T>>,): GameCollection<T>
    export function of(values: Nullable<Array<Games>>,): GameCollection {
        if (values == null)
            return EMPTY

        const size = values.length
        if (size === 0)
            return EMPTY
        if (size === 1) {
            const value = getFirstByArray(values,)
            if (value === SMM2)
                return SMM2_ONLY
            if (value === SMM1)
                return SMM1_ONLY
            return SMM3DS_ONLY
        }

        if ((ALL as GameCollection).hasAll(values,))
            return ALL
        return new GameCollection(values,)
    }

}
