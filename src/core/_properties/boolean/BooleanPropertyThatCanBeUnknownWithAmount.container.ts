import type {BooleanPropertyThatCanBeUnknownWithAmount} from 'core/_properties/PropertyThatCanBeUnknownWithAmount'
import type {ValueOrCallback}                           from 'util/holder/ObjectHolder.types'

import {PropertyThatCanBeUnknownWithAmountContainer} from 'core/_properties/PropertyThatCanBeUnknownWithAmount.container'

export class BooleanPropertyThatCanBeUnknownWithAmountContainer<const B extends NullOrBoolean = NullOrBoolean, const IS_UNKNOWN extends boolean = boolean, const AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyThatCanBeUnknownWithAmountContainer<B, IS_UNKNOWN, AMOUNT>
    implements BooleanPropertyThatCanBeUnknownWithAmount<B, IS_UNKNOWN, AMOUNT> {

    public constructor(value: ValueOrCallback<B>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,)
    }

}
