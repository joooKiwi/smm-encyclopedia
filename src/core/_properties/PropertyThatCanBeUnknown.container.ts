import type {PropertyThatCanBeUnknown} from 'core/_properties/PropertyThatCanBeUnknown'
import type {ValueOrCallback}          from 'util/holder/ObjectHolder.types'

import {PropertyContainer} from 'core/_properties/Property.container'

export class PropertyThatCanBeUnknownContainer<T, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyContainer<T, IS_UNKNOWN>
    implements PropertyThatCanBeUnknown<T, IS_UNKNOWN> {

    public constructor(value: ValueOrCallback<T>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,)
    }

}
