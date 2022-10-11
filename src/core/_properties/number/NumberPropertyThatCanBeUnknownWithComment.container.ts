import type {NumberPropertyThatCanBeUnknownWithComment} from '../PropertyThatCanBeUnknownWithComment'
import type {PossibleComment}                           from '../ClassWithComment'
import type {PossibleNumber}                            from '../Property'
import type {PossibleValueOnObjectHolder}               from '../../../util/holder/ObjectHolder'

import {PropertyThatCanBeUnknownWithCommentContainer} from '../PropertyThatCanBeUnknownWithComment.container'

export class NumberPropertyThatCanBeUnknownWithCommentContainer<N extends PossibleNumber = PossibleNumber, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyThatCanBeUnknownWithCommentContainer<N, IS_UNKNOWN, COMMENT>
    implements NumberPropertyThatCanBeUnknownWithComment<N, IS_UNKNOWN, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,)
    }

}
