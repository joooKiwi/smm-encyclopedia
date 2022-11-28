import type {NullOrString}                from '../../../util/types'
import type {PossibleValueOnObjectHolder} from '../../../util/holder/ObjectHolder'
import type {StringProperty}              from '../Property'

import {PropertyContainer} from '../Property.container'

export class StringPropertyContainer<S extends NullOrString = NullOrString, >
    extends PropertyContainer<S>
    implements StringProperty<S> {

    public constructor(value: PossibleValueOnObjectHolder<S>,) {
        super(value,)
    }

}
