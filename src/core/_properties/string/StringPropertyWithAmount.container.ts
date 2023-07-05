import type {StringPropertyWithAmount}   from 'core/_properties/PropertyWithAmount'
import type {ValueOrCallback}            from 'util/holder/ObjectHolder.types'
import type {NullOrNumber, NullOrString} from 'util/types/nullable'

import {PropertyWithAmountContainer} from 'core/_properties/PropertyWithAmount.container'

export class StringPropertyWithAmountContainer<S extends NullOrString = NullOrString, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyWithAmountContainer<S, AMOUNT>
    implements StringPropertyWithAmount<S, AMOUNT> {

    public constructor(value: ValueOrCallback<S>, comment: AMOUNT,) {
        super(value, comment,)
    }

}
