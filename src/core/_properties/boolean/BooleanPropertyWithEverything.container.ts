import type {BooleanPropertyWithEverything} from 'core/_properties/PropertyWithEverything'
import type {ValueOrCallback}               from 'util/holder/ObjectHolder.types'

import {PropertyWithEverythingContainer} from 'core/_properties/PropertyWithEverything.container'

export class BooleanPropertyWithEverythingContainer<B extends NullOrBoolean = NullOrBoolean, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithEverythingContainer<B, IS_UNKNOWN, AMOUNT, COMMENT>
    implements BooleanPropertyWithEverything<B, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: ValueOrCallback<B>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,)
    }

}
