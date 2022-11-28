import type {BooleanPropertyThatCanBeUnknown} from '../PropertyThatCanBeUnknown'
import type {NullOrBoolean}                   from '../../../util/types'
import type {PossibleValueOnObjectHolder}     from '../../../util/holder/ObjectHolder'

import {PropertyThatCanBeUnknownContainer} from '../PropertyThatCanBeUnknown.container'

export class BooleanPropertyThatCanBeUnknownContainer<B extends NullOrBoolean = NullOrBoolean, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyThatCanBeUnknownContainer<B, IS_UNKNOWN>
    implements BooleanPropertyThatCanBeUnknown<B, IS_UNKNOWN> {

    public constructor(value: PossibleValueOnObjectHolder<B>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,)
    }

}
