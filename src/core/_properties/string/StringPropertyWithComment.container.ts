import type {PossibleComment}           from '../ClassWithComment';
import type {PossibleString}            from '../Property';
import type {StringPropertyWithComment} from '../PropertyWithComment';
import type {ValueOrCallbackValue}      from '../../../util/holder/ObjectHolder';

import {PropertyWithCommentContainer} from '../PropertyWithComment.container';

export class StringPropertyWithCommentContainer<S extends PossibleString = PossibleString, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithCommentContainer<S, COMMENT>
    implements StringPropertyWithComment<S, COMMENT> {

    public constructor(value: ValueOrCallbackValue<S>, comment: COMMENT,) {
        super(value, comment,);
    }

}
