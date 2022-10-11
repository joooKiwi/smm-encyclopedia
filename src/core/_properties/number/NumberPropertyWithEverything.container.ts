import type {NumberPropertyWithEverything} from '../PropertyWithEverything'
import type {PossibleAmount}               from '../ClassWithAmount'
import type {PossibleComment}              from '../ClassWithComment'
import type {PossibleNumber}               from '../Property'
import type {PossibleValueOnObjectHolder}  from '../../../util/holder/ObjectHolder'

import {PropertyWithEverythingContainer} from '../PropertyWithEverything.container'

export class NumberPropertyWithEverythingContainer<N extends PossibleNumber = PossibleNumber, IS_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithEverythingContainer<N, IS_UNKNOWN, AMOUNT, COMMENT>
    implements NumberPropertyWithEverything<N, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,)
    }

}
