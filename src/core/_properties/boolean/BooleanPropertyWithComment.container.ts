import type {BooleanPropertyWithComment}  from '../PropertyWithComment'
import type {PossibleBoolean}             from '../Property'
import type {PossibleComment}             from '../ClassWithComment'
import type {PossibleValueOnObjectHolder} from '../../../util/holder/ObjectHolder'

import {PropertyWithCommentContainer} from '../PropertyWithComment.container'

export class BooleanPropertyWithCommentContainer<B extends PossibleBoolean = PossibleBoolean, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithCommentContainer<B, COMMENT>
    implements BooleanPropertyWithComment<B, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<B>, comment: COMMENT,) {
        super(value, comment,)
    }

}
