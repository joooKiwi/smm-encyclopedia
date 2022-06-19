import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleName, PossibleNonNullableValue, PossiblePlacement, PossibleStringValue, PossibleValue} from './HeaderTypes.types';
import type {StaticReference}                                                                                                                                                                                        from '../../../../util/enum/Enum.types';

import {Enum} from '../../../../util/enum/Enum';

export abstract class HeaderTypes
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static/* readonly*/ HEAD;
    public static/* readonly*/ FOOT;

    static {
        this.HEAD = new class HeaderTypes_Head extends HeaderTypes {

            public override getLayout(layout: readonly string[][]): readonly string[][] {
                return layout;
            }

        }('head', 'top',);
        this.FOOT = new class HeaderTypes_Foot extends HeaderTypes {

            public override getLayout(layout: readonly string[][]): readonly string[][] {
                return [...layout].reverse();
            }

        }('foot', 'bottom',);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: HeaderTypes;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #name;
    readonly #placement;

    //endregion -------------------- Attributes --------------------

    private constructor(name: PossibleName, placement: PossiblePlacement,) {
        super();
        this.#name = name;
        this.#placement = placement;
    }

    //region -------------------- Getter methods --------------------

    public get simpleName(): PossibleName {
        return this.#name;
    }

    public get placement(): PossiblePlacement {
        return this.#placement;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract getLayout(layout: readonly string[][],): readonly string[][];

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<HeaderTypes> {
        return HeaderTypes;
    }

    //region -------------------- Enum value methods --------------------

    public static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.simpleName === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(nameOrAcronym: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(nameOrAcronym: S,): EnumByString<S>
    public static getValue<I extends HeaderTypes, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): HeaderTypes
    public static getValue(value: PossibleValue,): | HeaderTypes | null
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
