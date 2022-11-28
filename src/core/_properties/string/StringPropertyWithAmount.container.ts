import type {NullOrNumber, NullOrString}  from '../../../util/types'
import type {PossibleValueOnObjectHolder} from '../../../util/holder/ObjectHolder'
import type {StringPropertyWithAmount}    from '../PropertyWithAmount'

import {PropertyWithAmountContainer} from '../PropertyWithAmount.container'

export class StringPropertyWithAmountContainer<S extends NullOrString = NullOrString, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyWithAmountContainer<S, AMOUNT>
    implements StringPropertyWithAmount<S, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, comment: AMOUNT,) {
        super(value, comment,)
    }

}
