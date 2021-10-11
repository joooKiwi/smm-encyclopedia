import type {PossibleComment}          from './ClassWithComment';
import type {PropertyWithComment}      from './PropertyWithComment';
import type {PropertyThatCanBeUnknown} from './PropertyThatCanBeUnknown';

export interface PropertyWithCommentThatCanBeUnknown<T, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithComment<T, COMMENT>, PropertyThatCanBeUnknown<T, IS_UNKNOWN> {

}
