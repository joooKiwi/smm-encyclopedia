import type {Enumerable}                                                        from './Enumerable';
import type {EnumByName, EnumByNumber, EnumByOrdinal, EnumByString, SimpleEnum} from './Enum.types';

interface _EnumerableStatic<O extends number = number, N extends string = string, E extends Enumerable<O, N> = Enumerable<O, N>, >
    extends Function {

    [index: number]: E

    getValue(nullValue: | null | undefined,): null

    getValue(ordinal: O,): EnumByOrdinal<this['values'], O, E>

    getValue<O extends number = number, >(ordinal: O,): EnumByNumber<this['values'], O>

    getValue(name: N,): EnumByName<N, E>

    getValue<N2 extends string = string, >(name: N2,): EnumByString<N2, N2, N, E>

    getValue<I extends E = E, >(instance: I,): I

    getValue<I extends E = E, >(value: | I | E | string | number | null | undefined,): | I | E | null


    /**
     * Get every values inside the instance.
     */
    get values(): readonly E[]

}

export type EnumerableStatic<O extends number = number, N extends string = string, E extends Enumerable<O, N> = Enumerable<O, N>, >
    = _EnumerableStatic<O, N, E> & SimpleEnum<N, E>;
