import type {NullOrNumber}                from '../../../util/types'
import type {NumberPropertyWithAmount}    from '../PropertyWithAmount'
import type {PossibleValueOnObjectHolder} from '../../../util/holder/ObjectHolder'

import {PropertyWithAmountContainer} from '../PropertyWithAmount.container'

export class NumberPropertyWithAmountContainer<N extends NullOrNumber = NullOrNumber, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyWithAmountContainer<N, AMOUNT>
    implements NumberPropertyWithAmount<N, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, comment: AMOUNT,) {
        super(value, comment,)
    }

}
