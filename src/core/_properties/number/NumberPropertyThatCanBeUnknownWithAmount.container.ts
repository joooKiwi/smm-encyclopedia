import type {NumberPropertyThatCanBeUnknownWithAmount} from '../PropertyThatCanBeUnknownWithAmount';
import type {PossibleAmount}                           from '../ClassWithAmount';
import type {PossibleNumber}                           from '../Property';
import type {PossibleValueOnObjectHolder}              from '../../../util/holder/ObjectHolder';

import {PropertyThatCanBeUnknownWithAmountContainer} from '../PropertyThatCanBeUnknownWithAmount.container';

export class NumberPropertyThatCanBeUnknownWithAmountContainer<N extends PossibleNumber = PossibleNumber, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, >
    extends PropertyThatCanBeUnknownWithAmountContainer<N, IS_UNKNOWN, AMOUNT>
    implements NumberPropertyThatCanBeUnknownWithAmount<N, IS_UNKNOWN, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,);
    }

}
