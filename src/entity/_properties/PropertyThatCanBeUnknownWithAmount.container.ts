import type {PropertyThatCanBeUnknownWithAmount} from './PropertyThatCanBeUnknownWithAmount';
import type {PossibleAmount}                     from './ClassWithAmount';
import type {ValueOrCallbackValue}               from '../../util/holder/ObjectHolder';

import {PropertyContainer} from './Property.container';

export class PropertyThatCanBeUnknownWithAmountContainer<T, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, >
    extends PropertyContainer<T, IS_UNKNOWN, AMOUNT>
    implements PropertyThatCanBeUnknownWithAmount<T, IS_UNKNOWN, AMOUNT> {

    public constructor(value: ValueOrCallbackValue<T>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,);
    }

}
