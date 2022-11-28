import type {NullOrNumber, NullOrString}               from '../../../util/types'
import type {PossibleValueOnObjectHolder}              from '../../../util/holder/ObjectHolder'
import type {StringPropertyThatCanBeUnknownWithAmount} from '../PropertyThatCanBeUnknownWithAmount'

import {PropertyThatCanBeUnknownWithAmountContainer} from '../PropertyThatCanBeUnknownWithAmount.container'

export class StringPropertyThatCanBeUnknownWithAmountContainer<S extends NullOrString = NullOrString, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyThatCanBeUnknownWithAmountContainer<S, IS_UNKNOWN, AMOUNT>
    implements StringPropertyThatCanBeUnknownWithAmount<S, IS_UNKNOWN, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,)
    }

}
