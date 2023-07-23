import type {BooleanPropertyThatCanBeUnknown} from 'core/_properties/PropertyThatCanBeUnknown'
import type {ValueOrCallback}                 from 'util/holder/ObjectHolder.types'

import {PropertyThatCanBeUnknownContainer} from 'core/_properties/PropertyThatCanBeUnknown.container'

export class BooleanPropertyThatCanBeUnknownContainer<const B extends NullOrBoolean = NullOrBoolean, const IS_UNKNOWN extends boolean = boolean, >
    extends PropertyThatCanBeUnknownContainer<B, IS_UNKNOWN>
    implements BooleanPropertyThatCanBeUnknown<B, IS_UNKNOWN> {

    public constructor(value: ValueOrCallback<B>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,)
    }

}
