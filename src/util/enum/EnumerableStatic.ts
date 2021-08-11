import {Enumerable} from './Enumerable';

export interface EnumerableStatic<O extends number = number, N extends string = string, >
    extends Function {

    getValue(nullValue: | null | undefined,): null

    getValue(ordinal: O,): this['values'][O]

    getValue<O extends number = number, >(ordinal: O,): | NonNullable<this['values'][O]> | null

    getValue(name: N,): Enumerable<O, N>

    getValue(name: string,): Enumerable<O, N> | null

    getValue<I extends Enumerable<O, N> = Enumerable<O, N>, >(instance: I,): I

    getValue<I extends Enumerable<O, N> = Enumerable<O, N>, >(value: | I | Enumerable<O, N> | string | number | null | undefined,): | I | Enumerable<O, N> | null


    get values(): readonly Enumerable<O, N>[]

}