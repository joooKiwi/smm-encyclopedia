import type {COMMA_SPACE, INFINITY, NOT_APPLICABLE, SPACE, SUSPENSION_POINT, UNKNOWN_CHARACTER, UNKNOWN_REFERENCE} from 'util/commonVariables'
import type {EMPTY_ARRAY, EMPTY_MAP, EMPTY_OBJECT, EMPTY_STRING}                                                   from 'util/emptyVariables'

declare global {

    type EmptyString = typeof EMPTY_STRING
    type EmptyArray = typeof EMPTY_ARRAY
    type EmptyMap = typeof EMPTY_MAP
    type EmptyObject = typeof EMPTY_OBJECT

    type Space = typeof SPACE
    type CommaSpace = typeof COMMA_SPACE

    type UnknownCharacter = typeof UNKNOWN_CHARACTER
    type UnknownReference = typeof UNKNOWN_REFERENCE

    type NotApplicable = typeof NOT_APPLICABLE
    type BooleanOrNotApplicable = | boolean | NotApplicable
    type Infinity = typeof INFINITY
    type SuspensionPoint = typeof SUSPENSION_POINT

}
