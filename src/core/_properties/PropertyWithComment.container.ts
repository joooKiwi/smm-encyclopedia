import type {DEFAULT_AMOUNT, DEFAULT_IS_UNKNOWN} from './Property';
import type {PropertyWithComment}                from './PropertyWithComment';
import type {PossibleComment}      from './ClassWithComment';
import type {ValueOrCallbackValue} from '../../util/holder/ObjectHolder';

import {PropertyContainer} from './Property.container';

export class PropertyWithCommentContainer<T, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyContainer<T, DEFAULT_IS_UNKNOWN, DEFAULT_AMOUNT, COMMENT>
    implements PropertyWithComment<T, COMMENT> {

    public constructor(value: ValueOrCallbackValue<T>, comment: COMMENT,) {
        super(value, comment,);
    }

}
