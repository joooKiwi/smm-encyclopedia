import type {COMMA_SPACE, INFINITY, NOT_APPLICABLE, SPACE, SUSPENSION_POINT, UNKNOWN_CHARACTER, UNKNOWN_REFERENCE} from 'util/commonVariables'
import type {Empty}                                                                                                from 'util/emptyVariables'

declare global {

    type EmptyObject = typeof Empty['EMPTY_OBJECT']

    type Space = typeof SPACE
    type CommaSpace = typeof COMMA_SPACE

    type UnknownCharacter =                      typeof UNKNOWN_CHARACTER
    type BooleanOrUnknownCharacter = | boolean | typeof UNKNOWN_CHARACTER

    type UnknownReference = typeof UNKNOWN_REFERENCE

    type NotApplicable =                                   typeof NOT_APPLICABLE
    type BooleanOrNotApplicable =              | boolean | typeof NOT_APPLICABLE
    type NullOrBooleanOrNotApplicable = | null | boolean | typeof NOT_APPLICABLE

    type Infinity = typeof INFINITY
    type SuspensionPoint = typeof SUSPENSION_POINT

}
