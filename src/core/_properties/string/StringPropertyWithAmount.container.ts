import type {StringPropertyWithAmount} from 'core/_properties/PropertyWithAmount'
import type {ValueOrCallback}          from 'util/holder/ObjectHolder.types'

import {PropertyWithAmountContainer} from 'core/_properties/PropertyWithAmount.container'

export class StringPropertyWithAmountContainer<const S extends NullOrString = NullOrString, const AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyWithAmountContainer<S, AMOUNT>
    implements StringPropertyWithAmount<S, AMOUNT> {

    public constructor(value: ValueOrCallback<S>, comment: AMOUNT,) {
        super(value, comment,)
    }

}
