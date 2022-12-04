import type {BooleanPropertyWithAmount}   from 'core/_properties/PropertyWithAmount'
import type {PossibleValueOnObjectHolder} from 'util/holder/ObjectHolder'
import type {NullOrBoolean, NullOrNumber} from 'util/types/nullable'

import {PropertyWithAmountContainer} from 'core/_properties/PropertyWithAmount.container'

export class BooleanPropertyWithAmountContainer<B extends NullOrBoolean = NullOrBoolean, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyWithAmountContainer<B, AMOUNT>
    implements BooleanPropertyWithAmount<B, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<B>, amount: AMOUNT,) {
        super(value, amount,)
    }

}
