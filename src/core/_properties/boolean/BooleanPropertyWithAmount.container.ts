import type {BooleanPropertyWithAmount}   from '../PropertyWithAmount'
import type {NullOrBoolean, NullOrNumber} from '../../../util/types'
import type {PossibleValueOnObjectHolder} from '../../../util/holder/ObjectHolder'

import {PropertyWithAmountContainer} from '../PropertyWithAmount.container'

export class BooleanPropertyWithAmountContainer<B extends NullOrBoolean = NullOrBoolean, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyWithAmountContainer<B, AMOUNT>
    implements BooleanPropertyWithAmount<B, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<B>, amount: AMOUNT,) {
        super(value, amount,)
    }

}
