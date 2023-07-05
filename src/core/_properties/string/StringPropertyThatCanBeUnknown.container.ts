import type {StringPropertyThatCanBeUnknown} from 'core/_properties/PropertyThatCanBeUnknown'
import type {ValueOrCallback}                from 'util/holder/ObjectHolder.types'
import type {NullOrString}                   from 'util/types/nullable'

import {PropertyThatCanBeUnknownContainer} from 'core/_properties/PropertyThatCanBeUnknown.container'

export class StringPropertyThatCanBeUnknownContainer<S extends NullOrString = NullOrString, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyThatCanBeUnknownContainer<S, IS_UNKNOWN>
    implements StringPropertyThatCanBeUnknown<S, IS_UNKNOWN> {

    public constructor(value: ValueOrCallback<S>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,)
    }

}
