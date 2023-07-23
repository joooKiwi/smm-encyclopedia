import type {StringPropertyThatCanBeUnknownWithAmount} from 'core/_properties/PropertyThatCanBeUnknownWithAmount'
import type {ValueOrCallback}                          from 'util/holder/ObjectHolder.types'

import {PropertyThatCanBeUnknownWithAmountContainer} from 'core/_properties/PropertyThatCanBeUnknownWithAmount.container'

export class StringPropertyThatCanBeUnknownWithAmountContainer<const S extends NullOrString = NullOrString, const IS_UNKNOWN extends boolean = boolean, const AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyThatCanBeUnknownWithAmountContainer<S, IS_UNKNOWN, AMOUNT>
    implements StringPropertyThatCanBeUnknownWithAmount<S, IS_UNKNOWN, AMOUNT> {

    public constructor(value: ValueOrCallback<S>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,)
    }

}
