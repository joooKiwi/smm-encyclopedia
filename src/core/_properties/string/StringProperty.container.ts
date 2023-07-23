import type {StringProperty}  from 'core/_properties/Property'
import type {ValueOrCallback} from 'util/holder/ObjectHolder.types'

import {PropertyContainer} from 'core/_properties/Property.container'

export class StringPropertyContainer<const S extends NullOrString = NullOrString, >
    extends PropertyContainer<S>
    implements StringProperty<S> {

    public constructor(value: ValueOrCallback<S>,) {
        super(value,)
    }

}
