import type {PossibleComment}                                from '../../../_properties/ClassWithComment';
import type {SingleLimitThatCanBeUnknownProperty}            from './SingleLimitThatCanBeUnknownProperty';
import type {SingleLimitWithCommentProperty}                 from './SingleLimitWithCommentProperty';
import type {SingleLimitWithCommentThatCanBeUnknownProperty} from './SingleLimitWithCommentThatCanBeUnknownProperty';

import {PropertyThatCanBeUnknownWithCommentContainer} from '../../../_properties/PropertyThatCanBeUnknownWithComment.container';

/**
 * @provider
 * @deprecated Replace with {@link PropertyThatCanBeUnknownWithCommentContainer} or the {@link PropertyProvider} initialisation instead
 */
export class SingleLimitPropertyContainer<T>
    extends PropertyThatCanBeUnknownWithCommentContainer<T>
    implements SingleLimitThatCanBeUnknownProperty<T>, SingleLimitWithCommentProperty<T>, SingleLimitWithCommentThatCanBeUnknownProperty<T> {

    //region -------------------- Predefined containers --------------------

    public static readonly NULL_LIMIT = new SingleLimitPropertyContainer(null, false, null,);
    public static readonly UNKNOWN_LIMIT = new SingleLimitPropertyContainer(null, true, null,);

    //endregion -------------------- Predefined containers --------------------

    private constructor(value: T, isUnknown: boolean, comment: | string | null,) {
        super(value, isUnknown, comment,);
    }

    //region -------------------- Provider methods ----------

    public static newLimitThatCanBeUnknown(value: null, isUnknown?: any,): SingleLimitThatCanBeUnknownProperty<null, false>
    public static newLimitThatCanBeUnknown(value: '?', isUnknown?: any,): SingleLimitThatCanBeUnknownProperty<null, true>
    public static newLimitThatCanBeUnknown<T>(value: | T | '?' | null, isUnknown?: boolean,): SingleLimitThatCanBeUnknownProperty<| T | null>
    public static newLimitThatCanBeUnknown<T>(value: | T | '?' | null, isUnknown: boolean = false,): SingleLimitThatCanBeUnknownProperty<| T | null> {
        if (value == null)
            return this.NULL_LIMIT;
        if (value === '?')
            return this.UNKNOWN_LIMIT;

        return new SingleLimitPropertyContainer(value, isUnknown, null,);
    }

    public static newLimitWithComment(value: null, comment?: any,): SingleLimitWithCommentProperty<null, null>
    public static newLimitWithComment<T>(value: | T | null, comment?: PossibleComment,): SingleLimitWithCommentProperty<| T | null>
    public static newLimitWithComment<T>(value: | T | null, comment: PossibleComment = null,): SingleLimitWithCommentProperty<| T | null> {
        if (value == null)
            return this.NULL_LIMIT;

        return new SingleLimitPropertyContainer(value, false, comment,);
    }

    public static newLimitWithCommentThatCanBeUnknown(value: null, comment?: any, isUnknown?: any,): SingleLimitWithCommentThatCanBeUnknownProperty<null, false, null>
    public static newLimitWithCommentThatCanBeUnknown(value: '?', comment?: any, isUnknown?: any,): SingleLimitWithCommentThatCanBeUnknownProperty<null, true, null>
    public static newLimitWithCommentThatCanBeUnknown<T>(value: | T | '?' | null, comment?: PossibleComment, isUnknown?: boolean,): SingleLimitWithCommentThatCanBeUnknownProperty<| T | null>
    public static newLimitWithCommentThatCanBeUnknown<T>(value: | T | '?' | null, comment: PossibleComment = null, isUnknown: boolean = false,): SingleLimitWithCommentThatCanBeUnknownProperty<| T | null> {
        if (value == null)
            return this.NULL_LIMIT;
        if (value === '?')
            return this.UNKNOWN_LIMIT;

        return new SingleLimitPropertyContainer(value, isUnknown, comment,);
    }

    //endregion -------------------- Provider methods ----------
}