import type {NullOrNumber, NullOrString}         from '../../../util/types'
import type {PossibleValueOnObjectHolder}        from '../../../util/holder/ObjectHolder'
import type {StringPropertyWithAmountAndComment} from '../PropertyWithAmountAndComment'

import {PropertyWithAmountAndCommentContainer} from '../PropertyWithAmountAndComment.container'

export class StringPropertyWithAmountAndCommentContainer<S extends NullOrString = NullOrString, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithAmountAndCommentContainer<S, AMOUNT, COMMENT>
    implements StringPropertyWithAmountAndComment<S, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
