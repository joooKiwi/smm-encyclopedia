import type {SimpleEnum} from '../../util/enum/EnumTypes';
import type {Times}      from './Times';

//region -------------------- Number types --------------------

export type TimesOrdinals = | 0 | 1;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type TimesNames = Uppercase<PossibleTimeName>;

export type PossibleTimeName = | 'Day' | 'Night';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleTimes<T = Times, > = SimpleEnum<TimesNames, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type TimesArray<T = Times, > = readonly [
    SimpleTimes<T>['DAY'],
    SimpleTimes<T>['NIGHT'],
];

//endregion -------------------- Array types --------------------
