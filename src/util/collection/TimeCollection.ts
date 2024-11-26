import type {PossibleIterableArraySetOrCollectionHolder, PossibleIterableOrCollection} from '@joookiwi/collection'
import type {Array}                                                                    from '@joookiwi/type'
import {GenericCollectionHolder, hasAllWithCollectionHolderByArray, isEmptyByArray}    from '@joookiwi/collection'

import {Times} from 'core/time/Times'
import {Empty} from 'util/emptyVariables'

import ALL =         Times.ALL
import ALL_TIMES =   Times.ALL
import EMPTY_ARRAY = Empty.EMPTY_ARRAY
import {TimeProperty} from 'core/entity/properties/time/TimeProperty'

export class TimeCollection<const T extends Times = Times,
    const REFERENCE extends PossibleIterableOrCollection<T> = PossibleIterableArraySetOrCollectionHolder<T>, >
    extends GenericCollectionHolder<T, REFERENCE> {

    //region -------------------- Fields --------------------

    #hasAllGames?: boolean
    #hasDay?: boolean
    #hasNight?: boolean
    #hasOnlyDay?: boolean
    #hasOnlyNight?: boolean

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    /** The collection has every time ({@link Times.DAY}, {@link Times.NIGHT}) type in its values */
    public get hasAllTimes(): boolean {
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


    /** The collection has <b>only</b> the {@link Times.DAY} type in its values */
    public get hasOnlyDay(): boolean {
        return this.#hasOnlyDay ??= this.hasDay && this.size === 1
    }

    /** The collection has <b>only</b> the {@link Times.NIGHT} type in its values */
    public get hasOnlyNight(): boolean {
        return this.#hasOnlyNight ??= this.hasNight && this.size === 1
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Tell if the {@link property} is present via {@link Times.get} on at least one
     *
     * @param property The reference to validate its time property
     */
    public hasAnyIn(property: TimeProperty,): boolean {
        return this._any(it => it.get(property,),)
    }

    //endregion -------------------- Methods --------------------

}

export namespace TimeCollection {

    export const EMPTY = new TimeCollection(EMPTY_ARRAY,)
    export const ALL =   new TimeCollection(ALL_TIMES,)


    /**
     * Create a new {@link TimeCollection} from the {@link values} received
     * by attempting to reuse some predefined collections
     *
     * @param values The values to create a new {@link TimeCollection}
     */
    export function of<const T extends Times,>(values: NullableArray<T>,): TimeCollection<T>
    export function of(values: NullableArray<Times>,): TimeCollection {
        if (isEmptyByArray(values,))
            return EMPTY
        if (hasAllWithCollectionHolderByArray(values, ALL,))
            return ALL
        return new TimeCollection(values!,)
    }

}
