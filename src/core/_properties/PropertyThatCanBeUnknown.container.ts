import type {PossibleValueOnObjectHolder} from '../../util/holder/ObjectHolder'
import type {PropertyThatCanBeUnknown}    from './PropertyThatCanBeUnknown'

import {PropertyContainer} from './Property.container'

export class PropertyThatCanBeUnknownContainer<T, IS_UNKNOWN extends boolean = boolean, >
    extends PropertyContainer<T, IS_UNKNOWN>
    implements PropertyThatCanBeUnknown<T, IS_UNKNOWN> {

    public constructor(value: PossibleValueOnObjectHolder<T>, isUnknown: IS_UNKNOWN,) {
        super(value, isUnknown,)
    }

}
