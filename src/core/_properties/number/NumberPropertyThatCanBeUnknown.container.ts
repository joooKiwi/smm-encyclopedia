import type {NullOrNumber}                   from '../../../util/types'
import type {NumberPropertyThatCanBeUnknown} from '../PropertyThatCanBeUnknown'
import type {PossibleValueOnObjectHolder}    from '../../../util/holder/ObjectHolder'

import {PropertyThatCanBeUnknownContainer} from '../PropertyThatCanBeUnknown.container'

export class NumberPropertyThatCanBeUnknownContainer<N extends NullOrNumber = NullOrNumber, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyThatCanBeUnknownContainer<N, IS_UNKNOWN>
    implements NumberPropertyThatCanBeUnknown<N, IS_UNKNOWN> {

    public constructor(value: PossibleValueOnObjectHolder<N>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,)
    }

}
