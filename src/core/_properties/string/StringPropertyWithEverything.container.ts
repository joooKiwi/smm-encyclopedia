import type {NullOrNumber, NullOrString}   from '../../../util/types'
import type {PossibleValueOnObjectHolder}  from '../../../util/holder/ObjectHolder'
import type {StringPropertyWithEverything} from '../PropertyWithEverything'

import {PropertyWithEverythingContainer} from '../PropertyWithEverything.container'

export class StringPropertyWithEverythingContainer<S extends NullOrString = NullOrString, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithEverythingContainer<S, IS_UNKNOWN, AMOUNT, COMMENT>
    implements StringPropertyWithEverything<S, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,)
    }

}
