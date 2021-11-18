import type {Enumerable} from './Enumerable';

//region -------------------- String types --------------------

export type EnumName = 'Enum';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<N extends string, E extends Enumerable = Enumerable, > = Record<N, E>;

//endregion -------------------- Instance types --------------------
