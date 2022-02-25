import type {PossibleComment}             from '../ClassWithComment';
import type {PossibleString}              from '../Property';
import type {PossibleValueOnObjectHolder} from '../../../util/holder/ObjectHolder';
import type {StringPropertyWithComment}   from '../PropertyWithComment';

import {PropertyWithCommentContainer} from '../PropertyWithComment.container';

export class StringPropertyWithCommentContainer<S extends PossibleString = PossibleString, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithCommentContainer<S, COMMENT>
    implements StringPropertyWithComment<S, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, comment: COMMENT,) {
        super(value, comment,);
    }

}
