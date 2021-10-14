import type {PropertyThatCanBeUnknown}       from '../../../_properties/PropertyThatCanBeUnknown';
import type {SingleLimitWithCommentProperty} from './SingleLimitWithCommentProperty';

export interface SingleLimitWithCommentThatCanBeUnknownProperty<T>
    extends SingleLimitWithCommentProperty<| T | null>, PropertyThatCanBeUnknown<| T | null> {

}
