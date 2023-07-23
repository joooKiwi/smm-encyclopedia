import type {StringPropertyWithAmountAndComment} from 'core/_properties/PropertyWithAmountAndComment'
import type {ValueOrCallback}                    from 'util/holder/ObjectHolder.types'

import {PropertyWithAmountAndCommentContainer} from 'core/_properties/PropertyWithAmountAndComment.container'

export class StringPropertyWithAmountAndCommentContainer<const S extends NullOrString = NullOrString, const AMOUNT extends NullOrNumber = NullOrNumber, const COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithAmountAndCommentContainer<S, AMOUNT, COMMENT>
    implements StringPropertyWithAmountAndComment<S, AMOUNT, COMMENT> {

    public constructor(value: ValueOrCallback<S>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
