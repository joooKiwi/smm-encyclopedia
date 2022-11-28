import type {NullOrNumber}                from '../../../util/types'
import type {NumberProperty}              from '../Property'
import type {PossibleValueOnObjectHolder} from '../../../util/holder/ObjectHolder'

import {PropertyContainer} from '../Property.container'

export class NumberPropertyContainer<N extends NullOrNumber = NullOrNumber, >
    extends PropertyContainer<N>
    implements NumberProperty<N> {

    public constructor(value: PossibleValueOnObjectHolder<N>,) {
        super(value,)
    }

}
