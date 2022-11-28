import type {BooleanProperty}             from '../Property'
import type {NullOrBoolean}               from '../../../util/types'
import type {PossibleValueOnObjectHolder} from '../../../util/holder/ObjectHolder'

import {PropertyContainer} from '../Property.container'

export class BooleanPropertyContainer<B extends NullOrBoolean = NullOrBoolean, >
    extends PropertyContainer<B>
    implements BooleanProperty<B> {

    public constructor(value: PossibleValueOnObjectHolder<B>,) {
        super(value,)
    }

}
