import type {StringPropertyWithEverything} from 'core/_properties/PropertyWithEverything'
import type {ValueOrCallback}              from 'util/holder/ObjectHolder.types'

import {PropertyWithEverythingContainer} from 'core/_properties/PropertyWithEverything.container'

export class StringPropertyWithEverythingContainer<const S extends NullOrString = NullOrString, const IS_UNKNOWN extends boolean = boolean, const AMOUNT extends NullOrNumber = NullOrNumber, const COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithEverythingContainer<S, IS_UNKNOWN, AMOUNT, COMMENT>
    implements StringPropertyWithEverything<S, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: ValueOrCallback<S>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,)
    }

}
