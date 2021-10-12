import type {DEFAULT_IS_UNKNOWN, PossibleValueReceived} from './Property';
import type {PropertyWithComment}                       from './PropertyWithComment';
import type {PossibleComment}                           from './ClassWithComment';

import {AbstractProperty} from './AbstractProperty';

export class PropertyWithCommentContainer<T, COMMENT extends PossibleComment = PossibleComment, >
    extends AbstractProperty<T, DEFAULT_IS_UNKNOWN, COMMENT>
    implements PropertyWithComment<T, COMMENT> {

    public constructor(value: PossibleValueReceived<T>, comment: COMMENT,) {
        super(value, comment,);
    }

}
