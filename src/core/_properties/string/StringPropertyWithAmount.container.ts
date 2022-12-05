import type {StringPropertyWithAmount}    from 'core/_properties/PropertyWithAmount'
import type {PossibleValueOnObjectHolder} from 'util/holder/ObjectHolder'
import type {NullOrNumber, NullOrString}  from 'util/types/nullable'

import {PropertyWithAmountContainer} from 'core/_properties/PropertyWithAmount.container'

export class StringPropertyWithAmountContainer<S extends NullOrString = NullOrString, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyWithAmountContainer<S, AMOUNT>
    implements StringPropertyWithAmount<S, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, comment: AMOUNT,) {
        super(value, comment,)
    }

}
