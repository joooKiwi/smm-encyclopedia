import type {NumberPropertyThatCanBeUnknown} from 'core/_properties/PropertyThatCanBeUnknown'
import type {ValueOrCallback}                from 'util/holder/ObjectHolder.types'
import type {NullOrNumber}                   from 'util/types/nullable'

import {PropertyThatCanBeUnknownContainer} from 'core/_properties/PropertyThatCanBeUnknown.container'

export class NumberPropertyThatCanBeUnknownContainer<N extends NullOrNumber = NullOrNumber, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyThatCanBeUnknownContainer<N, IS_UNKNOWN>
    implements NumberPropertyThatCanBeUnknown<N, IS_UNKNOWN> {

    public constructor(value: ValueOrCallback<N>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,)
    }

}
