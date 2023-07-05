import type {BooleanProperty} from 'core/_properties/Property'
import type {ValueOrCallback} from 'util/holder/ObjectHolder.types'
import type {NullOrBoolean}   from 'util/types/nullable'

import {PropertyContainer} from 'core/_properties/Property.container'

export class BooleanPropertyContainer<B extends NullOrBoolean = NullOrBoolean, >
    extends PropertyContainer<B>
    implements BooleanProperty<B> {

    public constructor(value: ValueOrCallback<B>,) {
        super(value,)
    }

}
