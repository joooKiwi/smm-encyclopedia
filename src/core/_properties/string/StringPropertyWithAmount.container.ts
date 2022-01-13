import type {PossibleAmount}           from '../ClassWithAmount';
import type {PossibleString}           from '../Property';
import type {StringPropertyWithAmount} from '../PropertyWithAmount';
import type {ValueOrCallbackValue}     from '../../../util/holder/ObjectHolder';

import {PropertyWithAmountContainer} from '../PropertyWithAmount.container';

export class StringPropertyWithAmountContainer<S extends PossibleString = PossibleString, AMOUNT extends PossibleAmount = PossibleAmount, >
    extends PropertyWithAmountContainer<S, AMOUNT>
    implements StringPropertyWithAmount<S, AMOUNT> {

    public constructor(value: ValueOrCallbackValue<S>, comment: AMOUNT,) {
        super(value, comment,);
    }

}
