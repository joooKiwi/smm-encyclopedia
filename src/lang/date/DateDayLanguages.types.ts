import type {DateDayLanguages}                                                                                     from './DateDayLanguages';
import type {PossibleNonNullableValue as OriginalPossibleNonNullableValue, PossibleValue as OriginalPossibleValue} from '../ProjectLanguages.types';

export type PossibleNonNullableValue = | DateDayLanguages | OriginalPossibleNonNullableValue;
export type PossibleValue = | DateDayLanguages | OriginalPossibleValue;
