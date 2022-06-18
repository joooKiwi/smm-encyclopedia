import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './ArrowDirections.types';
import type {StaticReference}                                                                                                                                                                     from '../../../util/enum/Enum.types';

import {Enum} from '../../../util/enum/Enum';

/**
 * The arrow direction.<br/>
 *
 * It contains the value as a string directly.<br/>
 *
 * The only possible values are vertical & horizontal.
 */
export class ArrowDirections
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static /*readonly*/ HORIZONTAL;
    public static /*readonly*/ VERTICAL;

    static {
        this.HORIZONTAL = new ArrowDirections('horizontal',);
        this.VERTICAL = new ArrowDirections('vertical',);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: ArrowDirections;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #value;

    //endregion -------------------- Attributes --------------------

    private constructor(value: PossibleName,) {
        super();
        this.#value = value;
    }

    //region -------------------- Getter methods --------------------

    public get value(): PossibleName {
        return this.#value;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<ArrowDirections> {
        return ArrowDirections;
    }

    //region -------------------- Enum value methods --------------------

    protected static _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.value === value)
            ?? null;
    }

    public static getValue(value: | null | undefined,): null
    public static getValue<O extends Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(nameOrCharacter: S,): EnumByPossibleString<S>
    public static getValue<S extends string, >(nameOrCharacter: S,): EnumByString<S>
    public static getValue<I extends ArrowDirections, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): ArrowDirections
    public static getValue(value: PossibleValue,): | ArrowDirections | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
