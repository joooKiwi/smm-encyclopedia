import type {BooleanPropertyThatCanBeUnknownWithAmount} from 'core/_properties/PropertyThatCanBeUnknownWithAmount'
import type {PossibleValueOnObjectHolder}               from 'util/holder/ObjectHolder'
import type {NullOrBoolean, NullOrNumber}               from 'util/types/nullable'

import {PropertyThatCanBeUnknownWithAmountContainer} from 'core/_properties/PropertyThatCanBeUnknownWithAmount.container'

export class BooleanPropertyThatCanBeUnknownWithAmountContainer<B extends NullOrBoolean = NullOrBoolean, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyThatCanBeUnknownWithAmountContainer<B, IS_UNKNOWN, AMOUNT>
    implements BooleanPropertyThatCanBeUnknownWithAmount<B, IS_UNKNOWN, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<B>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,)
    }

}
