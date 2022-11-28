import type {NullOrNumber}                             from '../../../util/types'
import type {NumberPropertyThatCanBeUnknownWithAmount} from '../PropertyThatCanBeUnknownWithAmount'
import type {PossibleValueOnObjectHolder}              from '../../../util/holder/ObjectHolder'

import {PropertyThatCanBeUnknownWithAmountContainer} from '../PropertyThatCanBeUnknownWithAmount.container'

export class NumberPropertyThatCanBeUnknownWithAmountContainer<N extends NullOrNumber = NullOrNumber, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyThatCanBeUnknownWithAmountContainer<N, IS_UNKNOWN, AMOUNT>
    implements NumberPropertyThatCanBeUnknownWithAmount<N, IS_UNKNOWN, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,)
    }

}
