import type {BooleanPropertyWithAmountAndComment}       from '../PropertyWithAmountAndComment'
import type {NullOrBoolean, NullOrNumber, NullOrString} from '../../../util/types'
import type {PossibleValueOnObjectHolder}               from '../../../util/holder/ObjectHolder'

import {PropertyWithAmountAndCommentContainer} from '../PropertyWithAmountAndComment.container'

export class BooleanPropertyWithAmountAndCommentContainer<B extends NullOrBoolean = NullOrBoolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithAmountAndCommentContainer<B, AMOUNT, COMMENT>
    implements BooleanPropertyWithAmountAndComment<B, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<B>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
