import type {Nullable} from '@joookiwi/type'

import type {Time} from 'util/file/sound/time/Time'

export abstract class AbstractTime<const MILLISECOND extends number = number,
    const SECOND extends number = number, >
    implements Time<MILLISECOND, SECOND> {

    //region -------------------- Fields --------------------

    readonly #millisecond
    readonly #second

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(millisecond: MILLISECOND, second: SECOND,) {
        this.#millisecond = millisecond
        this.#second = second
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get millisecond(): MILLISECOND {
        return this.#millisecond
    }

    public get second(): SECOND {
        return this.#second
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public equals(other: Nullable<Time>,) {
        if (this == other)
            return true
        if (other == null)
            return false
        return this.#millisecond == other.millisecond
            && this.#second == other.second
    }

    //endregion -------------------- Methods --------------------

}
