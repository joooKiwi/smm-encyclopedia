import type {PossibleIterableArraySetOrCollectionHolder, PossibleIterableOrCollection} from '@joookiwi/collection'
import type {Array}                                                                    from '@joookiwi/type'
import {GenericCollectionHolder}                                                       from '@joookiwi/collection'

import {Times} from 'core/time/Times'
import ALL = Times.ALL

export class TimeCollection<const T extends Times = Times,
    const REFERENCE extends PossibleIterableOrCollection<T> = PossibleIterableArraySetOrCollectionHolder<T>, >
    extends GenericCollectionHolder<T, REFERENCE> {

    //region -------------------- Fields --------------------

    #hasAllGames?: boolean
    #hasDay?: boolean
    #hasNight?: boolean

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    /** The collection has every time ({@link Times.DAY}, {@link Times.NIGHT}) type in its values */
    public get hasAllGames(): boolean {
        return this.#hasAllGames ??= this._hasAllByArray(ALL as unknown as Array<T>,)
    }

    /** The collection has the {@link Times.DAY} type in its values */
    public get hasDay(): boolean {
        return this.#hasDay ??= this.has(Times.DAY as T,)
    }

    /** The collection has the {@link Times.NIGHT} type in its values */
    public get hasNight(): boolean {
        return this.#hasNight ??= this.has(Times.NIGHT as T,)
    }

    //endregion -------------------- Getter methods --------------------

}
