import type {BooleanPropertyWithComment}             from './PropertyWithComment';
import type {PossibleBoolean, PossibleValueReceived} from './Property';
import type {PossibleComment}                        from './ClassWithComment';

import {PropertyWithCommentContainer} from './PropertyWithCommentContainer';

export class BooleanPropertyWithCommentContainer<B extends PossibleBoolean = PossibleBoolean, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithCommentContainer<B, COMMENT>
    implements BooleanPropertyWithComment<B, COMMENT> {

    public constructor(value: PossibleValueReceived<B>, comment: COMMENT,) {
        super(value, comment,);
    }

}
