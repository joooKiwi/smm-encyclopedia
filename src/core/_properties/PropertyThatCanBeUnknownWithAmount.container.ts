import type {PossibleAmount}                     from './ClassWithAmount';
import type {PossibleValueOnObjectHolder}        from '../../util/holder/ObjectHolder';
import type {PropertyThatCanBeUnknownWithAmount} from './PropertyThatCanBeUnknownWithAmount';

import {PropertyContainer} from './Property.container';

export class PropertyThatCanBeUnknownWithAmountContainer<T, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, >
    extends PropertyContainer<T, IS_UNKNOWN, AMOUNT>
    implements PropertyThatCanBeUnknownWithAmount<T, IS_UNKNOWN, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, isUnknown: IS_UNKNOWN, amount: AMOUNT,) {
        super(value, isUnknown, amount,);
    }

}
