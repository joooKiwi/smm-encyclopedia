import type {StringProperty}  from 'core/_properties/Property'
import type {ValueOrCallback} from 'util/holder/ObjectHolder.types'
import type {NullOrString}    from 'util/types/nullable'

import {PropertyContainer} from 'core/_properties/Property.container'

export class StringPropertyContainer<S extends NullOrString = NullOrString, >
    extends PropertyContainer<S>
    implements StringProperty<S> {

    public constructor(value: ValueOrCallback<S>,) {
        super(value,)
    }

}
