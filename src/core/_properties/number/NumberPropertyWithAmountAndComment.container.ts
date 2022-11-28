import type {NullOrNumber, NullOrString}         from '../../../util/types'
import type {NumberPropertyWithAmountAndComment} from '../PropertyWithAmountAndComment'
import type {PossibleValueOnObjectHolder}        from '../../../util/holder/ObjectHolder'

import {PropertyWithAmountAndCommentContainer} from '../PropertyWithAmountAndComment.container'

export class NumberPropertyWithAmountAndCommentContainer<N extends NullOrNumber = NullOrNumber, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithAmountAndCommentContainer<N, AMOUNT, COMMENT>
    implements NumberPropertyWithAmountAndComment<N, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
