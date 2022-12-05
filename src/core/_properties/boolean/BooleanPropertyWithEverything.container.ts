import type {BooleanPropertyWithEverything}             from 'core/_properties/PropertyWithEverything'
import type {PossibleValueOnObjectHolder}               from 'util/holder/ObjectHolder'
import type {NullOrBoolean, NullOrNumber, NullOrString} from 'util/types/nullable'

import {PropertyWithEverythingContainer} from 'core/_properties/PropertyWithEverything.container'

export class BooleanPropertyWithEverythingContainer<B extends NullOrBoolean = NullOrBoolean, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithEverythingContainer<B, IS_UNKNOWN, AMOUNT, COMMENT>
    implements BooleanPropertyWithEverything<B, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<B>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,)
    }

}
