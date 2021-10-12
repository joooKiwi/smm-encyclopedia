import type {PossibleComment}                     from './ClassWithComment';
import type {PossibleValueReceived}               from './Property';
import type {PropertyWithCommentThatCanBeUnknown} from './PropertyWithCommentThatCanBeUnknown';

import {AbstractProperty} from './AbstractProperty';

export class PropertyWithCommentThatCanBeUnknownContainer<T, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends AbstractProperty<T, IS_UNKNOWN, COMMENT>
    implements PropertyWithCommentThatCanBeUnknown<T, IS_UNKNOWN, COMMENT> {

    public constructor(value: PossibleValueReceived<T>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,);
    }

}
