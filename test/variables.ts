import {UNKNOWN_CHARACTER} from 'src/util/commonVariables'

export const NULL_OR_BOOLEAN = [null, true, false,] as const
export const BOOLEAN_OR_UNKNOWN_CHARACTER = [true, false, UNKNOWN_CHARACTER,] as const
export const NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER = [null, true, false, UNKNOWN_CHARACTER,] as const
