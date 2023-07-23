import type {NumberPropertyWithAmount} from 'core/_properties/PropertyWithAmount'
import type {ValueOrCallback}          from 'util/holder/ObjectHolder.types'

import {PropertyWithAmountContainer} from 'core/_properties/PropertyWithAmount.container'

export class NumberPropertyWithAmountContainer<const N extends NullOrNumber = NullOrNumber, const AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyWithAmountContainer<N, AMOUNT>
    implements NumberPropertyWithAmount<N, AMOUNT> {

    public constructor(value: ValueOrCallback<N>, comment: AMOUNT,) {
        super(value, comment,)
    }

}
