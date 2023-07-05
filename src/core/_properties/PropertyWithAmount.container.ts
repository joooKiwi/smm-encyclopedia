import type {DefaultIsUnknown}            from 'core/_properties/Property'
import type {PropertyWithAmount} from 'core/_properties/PropertyWithAmount'
import type {ValueOrCallback}    from 'util/holder/ObjectHolder.types'
import type {NullOrNumber}       from 'util/types/nullable'

import {PropertyContainer} from 'core/_properties/Property.container'

export class PropertyWithAmountContainer<T, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyContainer<T, DefaultIsUnknown, AMOUNT>
    implements PropertyWithAmount<T, AMOUNT> {

    public constructor(value: ValueOrCallback<T>, amount: AMOUNT,) {
        super(value, amount,)
    }

}
