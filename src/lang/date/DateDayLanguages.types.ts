import type {PossibleNonNullableValue as ProjectPossibleNonNullableValue} from '../ProjectLanguages.types';
import type {DateDayLanguages}                                            from './DateDayLanguages';

export type PossibleNonNullableValue = | DateDayLanguages | ProjectPossibleNonNullableValue;
