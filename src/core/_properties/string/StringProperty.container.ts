import type {StringProperty}              from 'core/_properties/Property'
import type {PossibleValueOnObjectHolder} from 'util/holder/ObjectHolder'
import type {NullOrString}                from 'util/types/nullable'

import {PropertyContainer} from 'core/_properties/Property.container'

export class StringPropertyContainer<S extends NullOrString = NullOrString, >
    extends PropertyContainer<S>
    implements StringProperty<S> {

    public constructor(value: PossibleValueOnObjectHolder<S>,) {
        super(value,)
    }

}
