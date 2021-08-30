import type {SingleLimitWithCommentProperty} from './SingleLimitWithCommentProperty';

export interface SingleLimitWithCommentThatCanBeUnknownProperty<T>
    extends SingleLimitWithCommentProperty<| T | null> {

    get isUnknown(): boolean

}
