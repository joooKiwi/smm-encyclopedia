import type {Enumerable}       from './Enumerable';
import type {EnumerableStatic} from './EnumerableStatic';

import {getLastOrdinalOn} from './enumUtilityMethods';

export abstract class Enum<O extends number = number, N extends string = string, >
    implements Enumerable<O, N> {

    //region -------------------- Enum attributes --------------------

    readonly #ordinal: O;

    //endregion -------------------- Enum attributes --------------------

    protected constructor(instance: EnumerableStatic<O, N>,) {
        this.#ordinal = getLastOrdinalOn(instance);
    }

    //region -------------------- Enum methods --------------------

    /**
     * Get the ordinal on the current enum instance.
     */
    public get ordinal(): O {
        return this.#ordinal;
    }

    //endregion -------------------- Enum methods --------------------

}
