import type {NullOrString}                   from '../../../util/types'
import type {PossibleValueOnObjectHolder}    from '../../../util/holder/ObjectHolder'
import type {StringPropertyThatCanBeUnknown} from '../PropertyThatCanBeUnknown'

import {PropertyThatCanBeUnknownContainer} from '../PropertyThatCanBeUnknown.container'

export class StringPropertyThatCanBeUnknownContainer<S extends NullOrString = NullOrString, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyThatCanBeUnknownContainer<S, IS_UNKNOWN>
    implements StringPropertyThatCanBeUnknown<S, IS_UNKNOWN> {

    public constructor(value: PossibleValueOnObjectHolder<S>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,)
    }

}
