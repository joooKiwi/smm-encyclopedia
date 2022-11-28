import type {DEFAULT_IS_UNKNOWN}          from './Property'
import type {NullOrNumber}                from '../../util/types'
import type {PossibleValueOnObjectHolder} from '../../util/holder/ObjectHolder'
import type {PropertyWithAmount}          from './PropertyWithAmount'

import {PropertyContainer} from './Property.container'

export class PropertyWithAmountContainer<T, AMOUNT extends NullOrNumber = NullOrNumber, >
    extends PropertyContainer<T, DEFAULT_IS_UNKNOWN, AMOUNT>
    implements PropertyWithAmount<T, AMOUNT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, amount: AMOUNT,) {
        super(value, amount,)
    }

}
