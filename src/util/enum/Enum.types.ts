import type {Enumerable}       from './Enumerable';
import type {EnumerableStatic} from './EnumerableStatic';

//region -------------------- String types --------------------

export type EnumName = 'Enum';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<N extends string, E extends Enumerable = Enumerable, > = Record<N, E>;

export type EnumByOrdinal<A extends readonly E[], O extends E['ordinal'], E extends Enumerable = Enumerable, > = A[O];
export type EnumByNumber<A extends readonly Enumerable[], O extends number = number, > = | NonNullable<A[O]> | null

export type EnumByName<N extends string, E extends Enumerable = Enumerable, > = SimpleEnum<N, E>[N];
export type EnumByPossibleString<PS extends | string | N, N extends string, E extends Enumerable = Enumerable, > = PS extends N ? EnumByName<N, E> : E
export type EnumByString<S extends | PS | string, PS extends | N | string, N extends string, E extends Enumerable = Enumerable, > = S extends PS ? EnumByPossibleString<PS, N, E> : | E | null;

export type StaticReference<E extends Enumerable, > = EnumerableStatic<E['ordinal'], E['name']>;

//endregion -------------------- Instance types --------------------
