import type {BooleanPropertyWithEverything}             from '../PropertyWithEverything'
import type {NullOrBoolean, NullOrNumber, NullOrString} from '../../../util/types'
import type {PossibleValueOnObjectHolder}               from '../../../util/holder/ObjectHolder'

import {PropertyWithEverythingContainer} from '../PropertyWithEverything.container'

export class BooleanPropertyWithEverythingContainer<B extends NullOrBoolean = NullOrBoolean, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithEverythingContainer<B, IS_UNKNOWN, AMOUNT, COMMENT>
    implements BooleanPropertyWithEverything<B, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<B>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,)
    }

}
