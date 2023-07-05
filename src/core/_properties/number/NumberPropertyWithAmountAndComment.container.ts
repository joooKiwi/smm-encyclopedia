import type {NumberPropertyWithAmountAndComment} from 'core/_properties/PropertyWithAmountAndComment'
import type {ValueOrCallback}                    from 'util/holder/ObjectHolder.types'
import type {NullOrNumber, NullOrString}         from 'util/types/nullable'

import {PropertyWithAmountAndCommentContainer} from 'core/_properties/PropertyWithAmountAndComment.container'

export class NumberPropertyWithAmountAndCommentContainer<N extends NullOrNumber = NullOrNumber, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithAmountAndCommentContainer<N, AMOUNT, COMMENT>
    implements NumberPropertyWithAmountAndComment<N, AMOUNT, COMMENT> {

    public constructor(value: ValueOrCallback<N>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
