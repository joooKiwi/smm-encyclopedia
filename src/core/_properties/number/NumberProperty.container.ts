import type {NumberProperty}              from 'core/_properties/Property'
import type {PossibleValueOnObjectHolder} from 'util/holder/ObjectHolder'
import type {NullOrNumber}                from 'util/types/nullable'

import {PropertyContainer} from 'core/_properties/Property.container'

export class NumberPropertyContainer<N extends NullOrNumber = NullOrNumber, >
    extends PropertyContainer<N>
    implements NumberProperty<N> {

    public constructor(value: PossibleValueOnObjectHolder<N>,) {
        super(value,)
    }

}
