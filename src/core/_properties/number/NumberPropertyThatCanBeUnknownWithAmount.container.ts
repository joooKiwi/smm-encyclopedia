import type {NumberPropertyThatCanBeUnknownWithAmount} from 'core/_properties/PropertyThatCanBeUnknownWithAmount'
import type {ValueOrCallback}                          from 'util/holder/ObjectHolder.types'
import type {NullOrNumber}                             from 'util/types/nullable'

import {PropertyThatCanBeUnknownWithAmountContainer} from 'core/_properties/PropertyThatCanBeUnknownWithAmount.container'

export class NumberPropertyThatCanBeUnknownWithAmountContainer<N extends NullOrNumber = NullOrNumber, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyThatCanBeUnknownWithAmountContainer<N, IS_UNKNOWN, AMOUNT>
    implements NumberPropertyThatCanBeUnknownWithAmount<N, IS_UNKNOWN, AMOUNT> {

    public constructor(value: ValueOrCallback<N>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,)
    }

}
