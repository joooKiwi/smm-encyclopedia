import type {PossibleAmount}                           from '../ClassWithAmount';
import type {PossibleString}                           from '../Property';
import type {StringPropertyThatCanBeUnknownWithAmount} from '../PropertyThatCanBeUnknownWithAmount';
import type {ValueOrCallbackValue}                     from '../../../util/holder/ObjectHolder';

import {PropertyThatCanBeUnknownWithAmountContainer} from '../PropertyThatCanBeUnknownWithAmount.container';

export class StringPropertyThatCanBeUnknownWithAmountContainer<S extends PossibleString = PossibleString, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, >
    extends PropertyThatCanBeUnknownWithAmountContainer<S, IS_UNKNOWN, AMOUNT>
    implements StringPropertyThatCanBeUnknownWithAmount<S, IS_UNKNOWN, AMOUNT> {

    public constructor(value: ValueOrCallbackValue<S>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,);
    }

}
