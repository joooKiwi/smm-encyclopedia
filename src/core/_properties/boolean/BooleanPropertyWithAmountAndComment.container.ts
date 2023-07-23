import type {BooleanPropertyWithAmountAndComment} from 'core/_properties/PropertyWithAmountAndComment'
import type {ValueOrCallback}                     from 'util/holder/ObjectHolder.types'

import {PropertyWithAmountAndCommentContainer} from 'core/_properties/PropertyWithAmountAndComment.container'

export class BooleanPropertyWithAmountAndCommentContainer<const B extends NullOrBoolean = NullOrBoolean, const AMOUNT extends NullOrNumber = NullOrNumber, const COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithAmountAndCommentContainer<B, AMOUNT, COMMENT>
    implements BooleanPropertyWithAmountAndComment<B, AMOUNT, COMMENT> {

    public constructor(value: ValueOrCallback<B>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
