import type {PossibleComment}     from '../../../_properties/ClassWithComment';
import type {PropertyWithComment} from '../../../_properties/PropertyWithComment';
import type {SingleLimitProperty} from './SingleLimitProperty';

export interface SingleLimitWithCommentProperty<T, COMMENT extends PossibleComment = PossibleComment, >
    extends SingleLimitProperty<T>, PropertyWithComment<T, COMMENT> {

}
