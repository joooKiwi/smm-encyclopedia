import type {BooleanPropertyWithAmount} from 'core/_properties/PropertyWithAmount'
import type {ValueOrCallback}           from 'util/holder/ObjectHolder.types'

import {PropertyWithAmountContainer} from 'core/_properties/PropertyWithAmount.container'

export class BooleanPropertyWithAmountContainer<const B extends NullOrBoolean = NullOrBoolean, const AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyWithAmountContainer<B, AMOUNT>
    implements BooleanPropertyWithAmount<B, AMOUNT> {

    public constructor(value: ValueOrCallback<B>, amount: AMOUNT,) {
        super(value, amount,)
    }

}
