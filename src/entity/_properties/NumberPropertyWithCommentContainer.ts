import type {NumberPropertyWithComment}             from './PropertyWithComment';
import type {PossibleComment}                       from './ClassWithComment';
import type {PossibleNumber, PossibleValueReceived} from './Property';

import {PropertyWithCommentContainer} from './PropertyWithCommentContainer';

export class NumberPropertyWithCommentContainer<N extends PossibleNumber = PossibleNumber, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithCommentContainer<N, COMMENT>
    implements NumberPropertyWithComment<N, COMMENT> {

    public constructor(value: PossibleValueReceived<N>, comment: COMMENT,) {
        super(value, comment,);
    }

}
