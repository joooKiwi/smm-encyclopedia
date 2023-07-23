import type {StringPropertyWithAmountAndComment} from 'core/_properties/PropertyWithAmountAndComment'
import type {ValueOrCallback}                    from 'util/holder/ObjectHolder.types'

import {PropertyWithAmountAndCommentContainer} from 'core/_properties/PropertyWithAmountAndComment.container'

export class StringPropertyWithAmountAndCommentContainer<S extends NullOrString = NullOrString, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithAmountAndCommentContainer<S, AMOUNT, COMMENT>
    implements StringPropertyWithAmountAndComment<S, AMOUNT, COMMENT> {

    public constructor(value: ValueOrCallback<S>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
