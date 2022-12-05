import type {StringPropertyWithAmountAndComment} from 'core/_properties/PropertyWithAmountAndComment'
import type {PossibleValueOnObjectHolder}        from 'util/holder/ObjectHolder'
import type {NullOrNumber, NullOrString}         from 'util/types/nullable'

import {PropertyWithAmountAndCommentContainer} from 'core/_properties/PropertyWithAmountAndComment.container'

export class StringPropertyWithAmountAndCommentContainer<S extends NullOrString = NullOrString, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithAmountAndCommentContainer<S, AMOUNT, COMMENT>
    implements StringPropertyWithAmountAndComment<S, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
