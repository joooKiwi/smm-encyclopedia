import type {PossibleIterableArraySetOrCollectionHolder, PossibleIterableOrCollection} from '@joookiwi/collection'
import {GenericCollectionHolder}                                                       from '@joookiwi/collection'

import {ViewDisplays} from 'display/ViewDisplays'
import {Empty}        from 'util/emptyVariables'

import ALL_VIEW_DISPLAYS = ViewDisplays.ALL
import EMPTY_ARRAY =       Empty.EMPTY_ARRAY

//region -------------------- Import from deconstruction --------------------

const {LIST, CARD, TABLE,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

export class ViewDisplayCollection<const T extends ViewDisplays = ViewDisplays,
    const REFERENCE extends PossibleIterableOrCollection<T> = PossibleIterableArraySetOrCollectionHolder<T>, >
    extends GenericCollectionHolder<T, REFERENCE> {

    //region -------------------- Fields --------------------

    #hasAllViewDisplay?: boolean
    #hasSimpleList?: boolean
    #hasCardList?: boolean
    #hasSimpleOrCardList?: boolean
    #hasTable?: boolean

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    /**
     * The collection has every view display ({@link ViewDisplays.LIST},
     * {@link ViewDisplays.CARD} & {@link ViewDisplays.TABLE})
     * type in its values
     */
    public get hasAllViewDisplay(): boolean {
        return this.#hasAllViewDisplay ??= this.hasAll([LIST as unknown as T, CARD as unknown as T, TABLE as unknown as T,],)
    }

    /** The collection has the {@link ViewDisplays.LIST} type in its values */
    public get hasSimpleList(): boolean {
        return this.#hasSimpleList ??= this.has(LIST as unknown as T,)
    }

    /** The collection has the {@link ViewDisplays.CARD} type in its values */
    public get hasCardList(): boolean {
        return this.#hasCardList ??= this.has(CARD as unknown as T,)
    }

    /** The collection has the {@link ViewDisplays.LIST} or {@link ViewDisplays.CARD} type in its values */
    public get hasSimpleOrCardList(): boolean {
        return this.#hasSimpleOrCardList ??= this.hasOne([LIST as unknown as T, CARD as unknown as T,],)
    }

    /** The collection has the {@link ViewDisplays.TABLE} type in its values */
    public get hasTable(): boolean {
        return this.#hasTable ??= this.has(TABLE as unknown as T,)
    }

    //endregion -------------------- Getter methods --------------------

}

export namespace ViewDisplayCollection {// eslint-disable-line @typescript-eslint/no-namespace

    export const EMPTY = new ViewDisplayCollection(EMPTY_ARRAY,)
    export const ALL =   new ViewDisplayCollection(ALL_VIEW_DISPLAYS,)

}
