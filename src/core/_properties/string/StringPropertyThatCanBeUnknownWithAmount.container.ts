import type {StringPropertyThatCanBeUnknownWithAmount} from 'core/_properties/PropertyThatCanBeUnknownWithAmount'
import type {PossibleValueOnObjectHolder}              from 'util/holder/ObjectHolder'
import type {NullOrNumber, NullOrString}               from 'util/types/nullable'

import {PropertyThatCanBeUnknownWithAmountContainer} from 'core/_properties/PropertyThatCanBeUnknownWithAmount.container'

export class StringPropertyThatCanBeUnknownWithAmountContainer<S extends NullOrString = NullOrString, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyThatCanBeUnknownWithAmountContainer<S, IS_UNKNOWN, AMOUNT>
    implements StringPropertyThatCanBeUnknownWithAmount<S, IS_UNKNOWN, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,)
    }

}
