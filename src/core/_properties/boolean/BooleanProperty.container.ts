import type {BooleanProperty}             from 'core/_properties/Property'
import type {PossibleValueOnObjectHolder} from 'util/holder/ObjectHolder'
import type {NullOrBoolean}               from 'util/types/nullable'

import {PropertyContainer} from 'core/_properties/Property.container'

export class BooleanPropertyContainer<B extends NullOrBoolean = NullOrBoolean, >
    extends PropertyContainer<B>
    implements BooleanProperty<B> {

    public constructor(value: PossibleValueOnObjectHolder<B>,) {
        super(value,)
    }

}
