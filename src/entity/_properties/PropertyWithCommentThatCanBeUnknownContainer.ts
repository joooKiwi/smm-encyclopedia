import type {PossibleComment}                     from './ClassWithComment';
import type {PropertyWithCommentThatCanBeUnknown} from './PropertyWithCommentThatCanBeUnknown';
import type {ValueOrCallbackValue}                from '../../util/holder/ObjectHolder';

import {AbstractProperty} from './AbstractProperty';

export class PropertyWithCommentThatCanBeUnknownContainer<T, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends AbstractProperty<T, IS_UNKNOWN, COMMENT>
    implements PropertyWithCommentThatCanBeUnknown<T, IS_UNKNOWN, COMMENT> {

    public constructor(value: ValueOrCallbackValue<T>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,);
    }

}
