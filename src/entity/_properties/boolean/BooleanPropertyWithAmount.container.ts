import type {BooleanPropertyWithAmount} from '../PropertyWithAmount';
import type {PossibleAmount}            from '../ClassWithAmount';
import type {PossibleBoolean}           from '../Property';
import type {ValueOrCallbackValue}      from '../../../util/holder/ObjectHolder';

import {PropertyWithAmountContainer} from '../PropertyWithAmount.container';

export class BooleanPropertyWithAmountContainer<B extends PossibleBoolean = PossibleBoolean, AMOUNT extends PossibleAmount = PossibleAmount, >
    extends PropertyWithAmountContainer<B, AMOUNT>
    implements BooleanPropertyWithAmount<B, AMOUNT> {

    public constructor(value: ValueOrCallbackValue<B>, amount: AMOUNT,) {
        super(value, amount,);
    }

}
