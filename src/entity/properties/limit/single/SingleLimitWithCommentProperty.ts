import type {PropertyWithComment} from '../../../_properties/PropertyWithComment';
import type {SingleLimitProperty} from './SingleLimitProperty';

export interface SingleLimitWithCommentProperty<T>
    extends SingleLimitProperty<T>, PropertyWithComment<T> {

}
