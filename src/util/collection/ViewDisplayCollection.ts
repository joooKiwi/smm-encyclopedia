import type {PossibleIterableArraySetOrCollectionHolder, PossibleIterableOrCollection} from '@joookiwi/collection'
import {GenericCollectionHolder}                                                       from '@joookiwi/collection'

import {ViewDisplays} from 'app/withInterpreter/ViewDisplays'

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
     * The collection has every view display ({@link ViewDisplays.SIMPLE_LIST},
     * {@link ViewDisplays.CARD_LIST} & {@link ViewDisplays.TABLE})
     * type in its values
     */
    public get hasAllViewDisplay(): boolean {
        return this.#hasAllViewDisplay ??= this.hasAll([ViewDisplays.SIMPLE_LIST, ViewDisplays.CARD_LIST, ViewDisplays.TABLE,],)
    }

    /** The collection has the {@link ViewDisplays.SIMPLE_LIST} type in its values */
    public get hasSimpleList(): boolean {
        return this.#hasSimpleList ??= this.has(ViewDisplays.SIMPLE_LIST,)
    }

    /** The collection has the {@link ViewDisplays.CARD_LIST} type in its values */
    public get hasCardList(): boolean {
        return this.#hasCardList ??= this.has(ViewDisplays.CARD_LIST,)
    }

    /** The collection has the {@link ViewDisplays.SIMPLE_LIST} or {@link ViewDisplays.CARD_LIST} type in its values */
    public get hasSimpleOrCardList(): boolean {
        return this.#hasSimpleOrCardList ??= this.hasOne([ViewDisplays.SIMPLE_LIST, ViewDisplays.CARD_LIST,],)
    }

    /** The collection has the {@link ViewDisplays.TABLE} type in its values */
    public get hasSMM2(): boolean {
        return this.#hasTable ??= this.has(ViewDisplays.TABLE,)
    }

    //endregion -------------------- Getter methods --------------------

}