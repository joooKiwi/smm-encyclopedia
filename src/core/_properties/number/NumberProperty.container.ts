import type {NumberProperty, PossibleNumber} from '../Property'
import type {PossibleValueOnObjectHolder}    from '../../../util/holder/ObjectHolder'

import {PropertyContainer} from '../Property.container'

export class NumberPropertyContainer<N extends PossibleNumber = PossibleNumber, >
    extends PropertyContainer<N>
    implements NumberProperty<N> {

    public constructor(value: PossibleValueOnObjectHolder<N>,) {
        super(value,)
    }

}
