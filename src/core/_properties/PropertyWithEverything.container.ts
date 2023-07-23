import type {PropertyWithEverything} from 'core/_properties/PropertyWithEverything'
import type {ValueOrCallback}        from 'util/holder/ObjectHolder.types'

import {PropertyContainer} from 'core/_properties/Property.container'

export class PropertyWithEverythingContainer<const T, const IS_UNKNOWN extends boolean = boolean, const AMOUNT extends NullOrNumber = NullOrNumber, const COMMENT extends NullOrString = NullOrString, >
    extends PropertyContainer<T, IS_UNKNOWN, AMOUNT, COMMENT>
    implements PropertyWithEverything<T, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: ValueOrCallback<T>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,)
    }

}
