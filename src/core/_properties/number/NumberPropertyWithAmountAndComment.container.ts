import type {NumberPropertyWithAmountAndComment} from '../PropertyWithAmountAndComment'
import type {PossibleAmount}                     from '../ClassWithAmount'
import type {PossibleComment}                    from '../ClassWithComment'
import type {PossibleNumber}                     from '../Property'
import type {PossibleValueOnObjectHolder}        from '../../../util/holder/ObjectHolder'

import {PropertyWithAmountAndCommentContainer} from '../PropertyWithAmountAndComment.container'

export class NumberPropertyWithAmountAndCommentContainer<N extends PossibleNumber = PossibleNumber, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithAmountAndCommentContainer<N, AMOUNT, COMMENT>
    implements NumberPropertyWithAmountAndComment<N, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
