import type {DEFAULT_IS_UNKNOWN}          from 'core/_properties/Property'
import type {PropertyWithAmount}          from 'core/_properties/PropertyWithAmount'
import type {PossibleValueOnObjectHolder} from 'util/holder/ObjectHolder'
import type {NullOrNumber}                from 'util/types/nullable'

import {PropertyContainer} from 'core/_properties/Property.container'

export class PropertyWithAmountContainer<T, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyContainer<T, DEFAULT_IS_UNKNOWN, AMOUNT>
    implements PropertyWithAmount<T, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, amount: AMOUNT,) {
        super(value, amount,)
    }

}
