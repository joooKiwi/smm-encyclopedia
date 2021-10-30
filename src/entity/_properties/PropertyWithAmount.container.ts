import type {DEFAULT_IS_UNKNOWN}   from './Property';
import type {ValueOrCallbackValue} from '../../util/holder/ObjectHolder';
import type {PossibleAmount}     from './ClassWithAmount';
import type {PropertyWithAmount} from './PropertyWithAmount';

import {PropertyContainer} from './Property.container';

export class PropertyWithAmountContainer<T, AMOUNT extends PossibleAmount = PossibleAmount, >
    extends PropertyContainer<T, DEFAULT_IS_UNKNOWN, AMOUNT>
    implements PropertyWithAmount<T, AMOUNT> {

    public constructor(value: ValueOrCallbackValue<T>, amount: AMOUNT,) {
        super(value, amount,);
    }

}
