import type {BooleanPropertyThatCanBeUnknownWithAmount} from '../PropertyThatCanBeUnknownWithAmount';
import type {PossibleAmount}                            from '../ClassWithAmount';
import type {PossibleBoolean}                           from '../Property';
import type {ValueOrCallbackValue}                      from '../../../util/holder/ObjectHolder';

import {PropertyThatCanBeUnknownWithAmountContainer} from '../PropertyThatCanBeUnknownWithAmount.container';

export class BooleanPropertyThatCanBeUnknownWithAmountContainer<B extends PossibleBoolean = PossibleBoolean, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, >
    extends PropertyThatCanBeUnknownWithAmountContainer<B, IS_UNKNOWN, AMOUNT>
    implements BooleanPropertyThatCanBeUnknownWithAmount<B, IS_UNKNOWN, AMOUNT> {

    public constructor(value: ValueOrCallbackValue<B>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,);
    }

}
