import type {NumberPropertyWithAmount}    from '../PropertyWithAmount';
import type {PossibleAmount}              from '../ClassWithAmount';
import type {PossibleNumber}              from '../Property';
import type {PossibleValueOnObjectHolder} from '../../../util/holder/ObjectHolder';

import {PropertyWithAmountContainer} from '../PropertyWithAmount.container';

export class NumberPropertyWithAmountContainer<N extends PossibleNumber = PossibleNumber, AMOUNT extends PossibleAmount = PossibleAmount, >
    extends PropertyWithAmountContainer<N, AMOUNT>
    implements NumberPropertyWithAmount<N, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, comment: AMOUNT,) {
        super(value, comment,);
    }

}
