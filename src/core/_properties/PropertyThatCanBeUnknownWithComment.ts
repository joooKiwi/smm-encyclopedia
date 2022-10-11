import type {PossibleBoolean, PossibleNumber, PossibleString} from './Property'
import type {PossibleComment}                                 from './ClassWithComment'
import type {PropertyWithComment}                             from './PropertyWithComment'
import type {PropertyThatCanBeUnknown}                        from './PropertyThatCanBeUnknown'

/**
 * A generic property with a value,
 * a <u>is unknown</u> property
 * and a comment that can be {@link PossibleComment null or a string}
 * contained in it.
 */
export interface PropertyThatCanBeUnknownWithComment<T, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithComment<T, COMMENT>, PropertyThatCanBeUnknown<T, IS_UNKNOWN> {

}

export type BooleanPropertyThatCanBeUnknownWithComment<B extends PossibleBoolean = PossibleBoolean, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > = PropertyThatCanBeUnknownWithComment<B, IS_UNKNOWN, COMMENT>
export type NumberPropertyThatCanBeUnknownWithComment<N extends PossibleNumber = PossibleNumber, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > = PropertyThatCanBeUnknownWithComment<N, IS_UNKNOWN, COMMENT>
export type StringPropertyThatCanBeUnknownWithComment<S extends PossibleString = PossibleString, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > = PropertyThatCanBeUnknownWithComment<S, IS_UNKNOWN, COMMENT>
