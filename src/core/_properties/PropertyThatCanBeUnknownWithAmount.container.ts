import type {PropertyThatCanBeUnknownWithAmount} from 'core/_properties/PropertyThatCanBeUnknownWithAmount'
import type {ValueOrCallback}                    from 'util/holder/ObjectHolder.types'

import {PropertyContainer} from 'core/_properties/Property.container'

export class PropertyThatCanBeUnknownWithAmountContainer<T, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyContainer<T, IS_UNKNOWN, AMOUNT>
    implements PropertyThatCanBeUnknownWithAmount<T, IS_UNKNOWN, AMOUNT> {

    public constructor(value: ValueOrCallback<T>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,)
    }

}
