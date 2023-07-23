import type {BooleanProperty} from 'core/_properties/Property'
import type {ValueOrCallback} from 'util/holder/ObjectHolder.types'

import {PropertyContainer} from 'core/_properties/Property.container'

export class BooleanPropertyContainer<const B extends NullOrBoolean = NullOrBoolean, >
    extends PropertyContainer<B>
    implements BooleanProperty<B> {

    public constructor(value: ValueOrCallback<B>,) {
        super(value,)
    }

}
