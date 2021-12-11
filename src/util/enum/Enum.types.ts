import type {Enumerable}       from './Enumerable';
import type {EnumerableStatic} from './EnumerableStatic';

//region -------------------- String types --------------------

export type EnumName = 'Enum';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<N extends string, E extends Enumerable = Enumerable, > = Record<N, E>;

export type EnumByOrdinal<ARRAY extends readonly E[], ORDINAL extends E['ordinal'], E extends Enumerable = Enumerable, > = ARRAY[ORDINAL];
export type EnumByNumber<ARRAY extends readonly Enumerable[], ORDINAL extends number = number, > = | NonNullable<ARRAY[ORDINAL]> | null;

export type EnumByName<NAME extends string, E extends Enumerable = Enumerable, > = SimpleEnum<NAME, E>[NAME];
export type EnumByPossibleString<POSSIBLE_STRING extends | string | NAME, NAME extends string, E extends Enumerable = Enumerable, > = POSSIBLE_STRING extends NAME ? EnumByName<NAME, E> : E
export type EnumByString<STRING extends | POSSIBLE_STRING | string, POSSIBLE_STRING extends | NAME | string, NAME extends string, E extends Enumerable = Enumerable, > = STRING extends POSSIBLE_STRING ? EnumByPossibleString<POSSIBLE_STRING, NAME, E> : | E | null;

export type StaticReference<E extends Enumerable, > = EnumerableStatic<E['ordinal'], E['name']>;

//endregion -------------------- Instance types --------------------
