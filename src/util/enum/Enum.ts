import type {Enumerable}       from './Enumerable';
import type {EnumerableStatic} from './EnumerableStatic';
import type {EnumName}         from './Enum.types';

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


    public get ordinal(): O {
        return this.#ordinal;
    }

    public [Symbol.toStringTag](): EnumName {
        return 'Enum';
    }

    //endregion -------------------- Enum methods --------------------

}
