import type {NumberPropertyWithAmountAndComment} from 'core/_properties/PropertyWithAmountAndComment'
import type {PossibleValueOnObjectHolder}        from 'util/holder/ObjectHolder'
import type {NullOrNumber, NullOrString}         from 'util/types/nullable'

import {PropertyWithAmountAndCommentContainer} from 'core/_properties/PropertyWithAmountAndComment.container'

export class NumberPropertyWithAmountAndCommentContainer<N extends NullOrNumber = NullOrNumber, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithAmountAndCommentContainer<N, AMOUNT, COMMENT>
    implements NumberPropertyWithAmountAndComment<N, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
