import type {NumberPropertyThatCanBeUnknown} from '../PropertyThatCanBeUnknown'
import type {PossibleNumber}                 from '../Property'
import type {PossibleValueOnObjectHolder}    from '../../../util/holder/ObjectHolder'

import {PropertyThatCanBeUnknownContainer} from '../PropertyThatCanBeUnknown.container'

export class NumberPropertyThatCanBeUnknownContainer<N extends PossibleNumber = PossibleNumber, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyThatCanBeUnknownContainer<N, IS_UNKNOWN>
    implements NumberPropertyThatCanBeUnknown<N, IS_UNKNOWN> {

    public constructor(value: PossibleValueOnObjectHolder<N>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,)
    }

}
