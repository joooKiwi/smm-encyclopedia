import type {ObjectHolder}                                   from '../../../../util/holder/ObjectHolder';
import type {SingleLimitThatCanBeUnknownProperty}            from './SingleLimitThatCanBeUnknownProperty';
import type {SingleLimitWithCommentProperty}                 from './SingleLimitWithCommentProperty';
import type {SingleLimitWithCommentThatCanBeUnknownProperty} from './SingleLimitWithCommentThatCanBeUnknownProperty';

import {DelayedObjectHolderContainer}                 from '../../../../util/holder/DelayedObjectHolderContainer';
import {ObjectHolders}                                from '../../../../util/holder/objectHolders';
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

    public static newLimitThatCanBeUnknown(value: null, isUnknown?: any,): [container: null, value: ObjectHolder<null>, isUnknown: ObjectHolder<false>,]
    public static newLimitThatCanBeUnknown<T>(value: '?', isUnknown?: boolean,): [container: SingleLimitThatCanBeUnknownProperty<T>, value: ObjectHolder<null>, isUnknown: ObjectHolder<true>,]
    public static newLimitThatCanBeUnknown<T>(value: T | '?' | null, isUnknown?: boolean,): [container: SingleLimitThatCanBeUnknownProperty<T> | null, value: ObjectHolder<| T | null>, isUnknown: ObjectHolder<boolean>,]
    public static newLimitThatCanBeUnknown<T>(value: T | '?' | null, isUnknown: boolean = false,): [container: SingleLimitThatCanBeUnknownProperty<T> | null, value: ObjectHolder<| T | null>, isUnknown: ObjectHolder<boolean>,] {
        if (value == null)
            return [this.NULL_LIMIT, ObjectHolders.NULL, ObjectHolders.FALSE,];
        if (value === '?')
            return [this.UNKNOWN_LIMIT, ObjectHolders.NULL, ObjectHolders.TRUE,];

        const container = new SingleLimitPropertyContainer(value, isUnknown, null,);

        return [container, new DelayedObjectHolderContainer(() => container.value), new DelayedObjectHolderContainer(() => container.isUnknown),];
    }

    public static newLimitWithComment(value: null, comment?: null,): [container: null, value: ObjectHolder<null>, comment: ObjectHolder<null>,]
    public static newLimitWithComment<T>(value: T | null, comment?: | string | null,): [container: SingleLimitWithCommentProperty<T> | null, value: ObjectHolder<| T | null>, comment: ObjectHolder<| string | null>,]
    public static newLimitWithComment<T>(value: T | null, comment: | string | null = null,): [container: SingleLimitWithCommentProperty<T> | null, value: ObjectHolder<| T | null>, comment: ObjectHolder<| string | null>,] {
        if (value == null)
            return [null, ObjectHolders.NULL, ObjectHolders.NULL,];

        const container = new SingleLimitPropertyContainer(value, false, comment,);
        return [container, new DelayedObjectHolderContainer(() => container.value), new DelayedObjectHolderContainer(() => container.comment),];
    }

    public static newLimitWithCommentThatCanBeUnknown(value: null, comment?: any, isUnknown?: any,): [container: null, value: ObjectHolder<null>, isUnknown: ObjectHolder<false>, comment: ObjectHolder<null>,]
    public static newLimitWithCommentThatCanBeUnknown<T>(value: '?', comment?: any, isUnknown?: any,): [container: SingleLimitWithCommentThatCanBeUnknownProperty<T>, value: ObjectHolder<null>, isUnknown: ObjectHolder<true>, comment: ObjectHolder<null>,]
    public static newLimitWithCommentThatCanBeUnknown<T>(value: T | '?' | null, comment?: | string | null, isUnknown?: boolean,): [container: SingleLimitWithCommentThatCanBeUnknownProperty<T> | null, value: ObjectHolder<| T | null>, isUnknown: ObjectHolder<boolean>, comment: ObjectHolder<| string | null>,]
    public static newLimitWithCommentThatCanBeUnknown<T>(value: T | '?' | null, comment: | string | null = null, isUnknown: boolean = false,): [container: SingleLimitWithCommentThatCanBeUnknownProperty<T> | null, value: ObjectHolder<| T | null>, isUnknown: ObjectHolder<boolean>, comment: ObjectHolder<| string | null>,] {
        if (value == null)
            return [this.NULL_LIMIT, ObjectHolders.NULL, ObjectHolders.FALSE, ObjectHolders.NULL,];
        if (value === '?')
            return [this.UNKNOWN_LIMIT, ObjectHolders.NULL, ObjectHolders.TRUE, ObjectHolders.NULL,];

        const container = new SingleLimitPropertyContainer(value, isUnknown, comment,);
        return [container, new DelayedObjectHolderContainer(() => container.value), new DelayedObjectHolderContainer(() => container.isUnknown), new DelayedObjectHolderContainer(() => container.comment),];
    }

    //endregion -------------------- Provider methods ----------
}