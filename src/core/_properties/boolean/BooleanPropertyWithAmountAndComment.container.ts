import type {BooleanPropertyWithAmountAndComment} from '../PropertyWithAmountAndComment'
import type {PossibleAmount}                      from '../ClassWithAmount'
import type {PossibleBoolean}                     from '../Property'
import type {PossibleComment}                     from '../ClassWithComment'
import type {PossibleValueOnObjectHolder}         from '../../../util/holder/ObjectHolder'

import {PropertyWithAmountAndCommentContainer} from '../PropertyWithAmountAndComment.container'

export class BooleanPropertyWithAmountAndCommentContainer<B extends PossibleBoolean = PossibleBoolean, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithAmountAndCommentContainer<B, AMOUNT, COMMENT>
    implements BooleanPropertyWithAmountAndComment<B, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<B>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
