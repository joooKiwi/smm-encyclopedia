import type {PossibleComment}                from '../../../_properties/ClassWithComment';
import type {PropertyThatCanBeUnknown}       from '../../../_properties/PropertyThatCanBeUnknown';
import type {SingleLimitWithCommentProperty} from './SingleLimitWithCommentProperty';

export interface SingleLimitWithCommentThatCanBeUnknownProperty<T, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends SingleLimitWithCommentProperty<| T | null, COMMENT>, PropertyThatCanBeUnknown<| T | null, IS_UNKNOWN> {

}
