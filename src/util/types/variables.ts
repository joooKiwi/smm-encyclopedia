import type {COMMA_SPACE, INFINITY, NOT_APPLICABLE, SPACE, SUSPENSION_POINT, UNKNOWN_CHARACTER, UNKNOWN_REFERENCE} from 'util/commonVariables'
import type {EMPTY_ARRAY, EMPTY_MAP, EMPTY_OBJECT, EMPTY_STRING}                                                   from 'util/emptyVariables'

export type EmptyString = typeof EMPTY_STRING
export type EmptyArray = typeof EMPTY_ARRAY
export type EmptyMap = typeof EMPTY_MAP
export type EmptyObject = typeof EMPTY_OBJECT

export type Space = typeof SPACE
export type CommaSpace = typeof COMMA_SPACE

export type UnknownCharacter = typeof UNKNOWN_CHARACTER
export type UnknownReference = typeof UNKNOWN_REFERENCE

export type NotApplicable = typeof NOT_APPLICABLE
export type BooleanOrNotApplicable = | boolean | NotApplicable
export type Infinity = typeof INFINITY
export type SuspensionPoint = typeof SUSPENSION_POINT
