import type {NumberPropertyWithEverything} from 'core/_properties/PropertyWithEverything'
import type {ValueOrCallback}              from 'util/holder/ObjectHolder.types'

import {PropertyWithEverythingContainer} from 'core/_properties/PropertyWithEverything.container'

export class NumberPropertyWithEverythingContainer<const N extends NullOrNumber = NullOrNumber, const IS_UNKNOWN extends boolean = boolean, const AMOUNT extends NullOrNumber = NullOrNumber, const COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithEverythingContainer<N, IS_UNKNOWN, AMOUNT, COMMENT>
    implements NumberPropertyWithEverything<N, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: ValueOrCallback<N>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,)
    }

}
