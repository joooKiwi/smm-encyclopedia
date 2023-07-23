import type {NumberProperty}  from 'core/_properties/Property'
import type {ValueOrCallback} from 'util/holder/ObjectHolder.types'

import {PropertyContainer} from 'core/_properties/Property.container'

export class NumberPropertyContainer<N extends NullOrNumber = NullOrNumber, >
    extends PropertyContainer<N>
    implements NumberProperty<N> {

    public constructor(value: ValueOrCallback<N>,) {
        super(value,)
    }

}
