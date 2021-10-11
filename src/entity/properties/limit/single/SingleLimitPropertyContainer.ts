import type {SingleLimitThatCanBeUnknownProperty}            from './SingleLimitThatCanBeUnknownProperty';
import type {SingleLimitWithCommentProperty}                 from './SingleLimitWithCommentProperty';
import type {SingleLimitWithCommentThatCanBeUnknownProperty} from './SingleLimitWithCommentThatCanBeUnknownProperty';

import {CallbackCaller}                               from '../../../../util/CallbackCaller';
import {PropertyWithCommentThatCanBeUnknownContainer} from '../../../_properties/PropertyWithCommentThatCanBeUnknownContainer';

/**
 * @provider
 */
export class SingleLimitPropertyContainer<T>
    extends PropertyWithCommentThatCanBeUnknownContainer<T>
    implements SingleLimitThatCanBeUnknownProperty<T>, SingleLimitWithCommentProperty<T>, SingleLimitWithCommentThatCanBeUnknownProperty<T> {

    //region -------------------- Predefined containers --------------------

    public static readonly NULL_LIMIT = new SingleLimitPropertyContainer(null, false, null,);
    public static readonly UNKNOWN_LIMIT = new SingleLimitPropertyContainer(null, true, null,);

    //endregion -------------------- Predefined containers --------------------

    private constructor(value: T, isUnknown: boolean, comment: | string | null,) {
        super(value, isUnknown, comment,);
    }

    //region -------------------- Provider methods ----------

    public static newLimitThatCanBeUnknown(value: null, isUnknown?: any,): [container: null, value: CallbackCaller<null>, isUnknown: CallbackCaller<false>,]
    public static newLimitThatCanBeUnknown<T>(value: '?', isUnknown?: boolean,): [container: SingleLimitThatCanBeUnknownProperty<T>, value: CallbackCaller<null>, isUnknown: CallbackCaller<true>,]
    public static newLimitThatCanBeUnknown<T>(value: T | '?' | null, isUnknown?: boolean,): [container: SingleLimitThatCanBeUnknownProperty<T> | null, value: CallbackCaller<| T | null>, isUnknown: CallbackCaller<boolean>,]
    public static newLimitThatCanBeUnknown<T>(value: T | '?' | null, isUnknown: boolean = false,): [container: SingleLimitThatCanBeUnknownProperty<T> | null, value: CallbackCaller<| T | null>, isUnknown: CallbackCaller<boolean>,] {
        if (value == null)
            return [this.NULL_LIMIT, CallbackCaller.NULL, CallbackCaller.FALSE,];
        if (value === '?')
            return [this.UNKNOWN_LIMIT, CallbackCaller.NULL, CallbackCaller.TRUE,];

        const container = new SingleLimitPropertyContainer(value, isUnknown, null,);

        return [container, new CallbackCaller(() => container.value), new CallbackCaller(() => container.isUnknown),];
    }

    public static newLimitWithComment(value: null, comment?: null,): [container: null, value: CallbackCaller<null>, comment: CallbackCaller<null>,]
    public static newLimitWithComment<T>(value: T | null, comment?: | string | null,): [container: SingleLimitWithCommentProperty<T> | null, value: CallbackCaller<| T | null>, comment: CallbackCaller<| string | null>,]
    public static newLimitWithComment<T>(value: T | null, comment: | string | null = null,): [container: SingleLimitWithCommentProperty<T> | null, value: CallbackCaller<| T | null>, comment: CallbackCaller<| string | null>,] {
        if (value == null)
            return [null, CallbackCaller.NULL, CallbackCaller.NULL,];

        const container = new SingleLimitPropertyContainer(value, false, comment,);
        return [container, new CallbackCaller(() => container.value), new CallbackCaller(() => container.comment),];
    }

    public static newLimitWithCommentThatCanBeUnknown(value: null, comment?: any, isUnknown?: any,): [container: null, value: CallbackCaller<null>, isUnknown: CallbackCaller<false>, comment: CallbackCaller<null>,]
    public static newLimitWithCommentThatCanBeUnknown<T>(value: '?', comment?: any, isUnknown?: any,): [container: SingleLimitWithCommentThatCanBeUnknownProperty<T>, value: CallbackCaller<null>, isUnknown: CallbackCaller<true>, comment: CallbackCaller<null>,]
    public static newLimitWithCommentThatCanBeUnknown<T>(value: T | '?' | null, comment?: | string | null, isUnknown?: boolean,): [container: SingleLimitWithCommentThatCanBeUnknownProperty<T> | null, value: CallbackCaller<| T | null>, isUnknown: CallbackCaller<boolean>, comment: CallbackCaller<| string | null>,]
    public static newLimitWithCommentThatCanBeUnknown<T>(value: T | '?' | null, comment: | string | null = null, isUnknown: boolean = false,): [container: SingleLimitWithCommentThatCanBeUnknownProperty<T> | null, value: CallbackCaller<| T | null>, isUnknown: CallbackCaller<boolean>, comment: CallbackCaller<| string | null>,] {
        if (value == null)
            return [this.NULL_LIMIT, CallbackCaller.NULL, CallbackCaller.FALSE, CallbackCaller.NULL,];
        if (value === '?')
            return [this.UNKNOWN_LIMIT, CallbackCaller.NULL, CallbackCaller.TRUE, CallbackCaller.NULL,];

        const container = new SingleLimitPropertyContainer(value, isUnknown, comment,);
        return [container, new CallbackCaller(() => container.value), new CallbackCaller(() => container.isUnknown), new CallbackCaller(() => container.comment),];
    }

    //endregion -------------------- Provider methods ----------
}