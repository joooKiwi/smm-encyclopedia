import type {PossibleAmount}                     from '../ClassWithAmount'
import type {PossibleComment}                    from '../ClassWithComment'
import type {PossibleString}                     from '../Property'
import type {PossibleValueOnObjectHolder}        from '../../../util/holder/ObjectHolder'
import type {StringPropertyWithAmountAndComment} from '../PropertyWithAmountAndComment'

import {PropertyWithAmountAndCommentContainer} from '../PropertyWithAmountAndComment.container'

export class StringPropertyWithAmountAndCommentContainer<S extends PossibleString = PossibleString, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithAmountAndCommentContainer<S, AMOUNT, COMMENT>
    implements StringPropertyWithAmountAndComment<S, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
