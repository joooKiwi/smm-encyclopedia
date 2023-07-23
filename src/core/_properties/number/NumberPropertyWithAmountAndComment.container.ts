import type {NumberPropertyWithAmountAndComment} from 'core/_properties/PropertyWithAmountAndComment'
import type {ValueOrCallback}                    from 'util/holder/ObjectHolder.types'

import {PropertyWithAmountAndCommentContainer} from 'core/_properties/PropertyWithAmountAndComment.container'

export class NumberPropertyWithAmountAndCommentContainer<const N extends NullOrNumber = NullOrNumber, const AMOUNT extends NullOrNumber = NullOrNumber, const COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithAmountAndCommentContainer<N, AMOUNT, COMMENT>
    implements NumberPropertyWithAmountAndComment<N, AMOUNT, COMMENT> {

    public constructor(value: ValueOrCallback<N>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
