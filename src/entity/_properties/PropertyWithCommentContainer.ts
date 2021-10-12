import type {DEFAULT_IS_UNKNOWN}   from './Property';
import type {PropertyWithComment}  from './PropertyWithComment';
import type {PossibleComment}      from './ClassWithComment';
import type {ValueOrCallbackValue} from '../../util/holder/ObjectHolder';

import {AbstractProperty} from './AbstractProperty';

export class PropertyWithCommentContainer<T, COMMENT extends PossibleComment = PossibleComment, >
    extends AbstractProperty<T, DEFAULT_IS_UNKNOWN, COMMENT>
    implements PropertyWithComment<T, COMMENT> {

    public constructor(value: ValueOrCallbackValue<T>, comment: COMMENT,) {
        super(value, comment,);
    }

}
