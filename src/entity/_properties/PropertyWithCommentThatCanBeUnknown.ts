import type {PossibleBoolean, PossibleNumber} from './Property';
import type {PossibleComment}                 from './ClassWithComment';
import type {PropertyWithComment}             from './PropertyWithComment';
import type {PropertyThatCanBeUnknown}        from './PropertyThatCanBeUnknown';

/**
 * A generic property with a value,
 * a <u>is unknown</u> property
 * and a comment that can be {@link PossibleComment null or a string}
 * contained in it.
 */
export interface PropertyWithCommentThatCanBeUnknown<T, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithComment<T, COMMENT>, PropertyThatCanBeUnknown<T, IS_UNKNOWN> {

}

export type BooleanPropertyWithCommentThatCanBeUnknown<B extends PossibleBoolean = PossibleBoolean, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > = PropertyWithCommentThatCanBeUnknown<B, IS_UNKNOWN, COMMENT>;
export type NumberPropertyWithCommentThatCanBeUnknown<N extends PossibleNumber = PossibleNumber, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > = PropertyWithCommentThatCanBeUnknown<N, IS_UNKNOWN, COMMENT>;
