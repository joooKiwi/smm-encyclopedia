import type {NullOrNumber, NullOrString}   from '../../../util/types'
import type {NumberPropertyWithEverything} from '../PropertyWithEverything'
import type {PossibleValueOnObjectHolder}  from '../../../util/holder/ObjectHolder'

import {PropertyWithEverythingContainer} from '../PropertyWithEverything.container'

export class NumberPropertyWithEverythingContainer<N extends NullOrNumber = NullOrNumber, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithEverythingContainer<N, IS_UNKNOWN, AMOUNT, COMMENT>
    implements NumberPropertyWithEverything<N, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,)
    }

}
