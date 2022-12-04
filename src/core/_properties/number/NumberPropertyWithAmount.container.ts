import type {NumberPropertyWithAmount}    from 'core/_properties/PropertyWithAmount'
import type {PossibleValueOnObjectHolder} from 'util/holder/ObjectHolder'
import type {NullOrNumber}                from 'util/types/nullable'

import {PropertyWithAmountContainer} from 'core/_properties/PropertyWithAmount.container'

export class NumberPropertyWithAmountContainer<N extends NullOrNumber = NullOrNumber, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyWithAmountContainer<N, AMOUNT>
    implements NumberPropertyWithAmount<N, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, comment: AMOUNT,) {
        super(value, comment,)
    }

}
