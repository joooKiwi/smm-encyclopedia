import type {PossibleComment}                           from '../ClassWithComment'
import type {PossibleString}                            from '../Property'
import type {PossibleValueOnObjectHolder}               from '../../../util/holder/ObjectHolder'
import type {StringPropertyThatCanBeUnknownWithComment} from '../PropertyThatCanBeUnknownWithComment'

import {PropertyThatCanBeUnknownWithCommentContainer} from '../PropertyThatCanBeUnknownWithComment.container'

export class StringPropertyThatCanBeUnknownWithCommentContainer<S extends PossibleString = PossibleString, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyThatCanBeUnknownWithCommentContainer<S, IS_UNKNOWN, COMMENT>
    implements StringPropertyThatCanBeUnknownWithComment<S, IS_UNKNOWN, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,)
    }

}
