import type {PropertyWithEverything}      from 'core/_properties/PropertyWithEverything'
import type {PossibleValueOnObjectHolder} from 'util/holder/ObjectHolder'
import type {NullOrNumber, NullOrString}  from 'util/types/nullable'

import {PropertyContainer} from 'core/_properties/Property.container'

export class PropertyWithEverythingContainer<T, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyContainer<T, IS_UNKNOWN, AMOUNT, COMMENT>
    implements PropertyWithEverything<T, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,)
    }

}
