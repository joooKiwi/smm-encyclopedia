import type {SingleLimitProperty} from './SingleLimitProperty';

export interface SingleLimitWithCommentProperty<T>
    extends SingleLimitProperty<T> {

    get comment(): | string | null

}
