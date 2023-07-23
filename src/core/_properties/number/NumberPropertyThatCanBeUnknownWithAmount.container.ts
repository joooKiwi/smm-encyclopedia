import type {NumberPropertyThatCanBeUnknownWithAmount} from 'core/_properties/PropertyThatCanBeUnknownWithAmount'
import type {ValueOrCallback}                          from 'util/holder/ObjectHolder.types'

import {PropertyThatCanBeUnknownWithAmountContainer} from 'core/_properties/PropertyThatCanBeUnknownWithAmount.container'

export class NumberPropertyThatCanBeUnknownWithAmountContainer<const N extends NullOrNumber = NullOrNumber, const IS_UNKNOWN extends boolean = boolean, const AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyThatCanBeUnknownWithAmountContainer<N, IS_UNKNOWN, AMOUNT>
    implements NumberPropertyThatCanBeUnknownWithAmount<N, IS_UNKNOWN, AMOUNT> {

    public constructor(value: ValueOrCallback<N>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,)
    }

}
