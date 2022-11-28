import type {NullOrNumber, NullOrString}  from '../../util/types'
import type {PossibleValueOnObjectHolder} from '../../util/holder/ObjectHolder'
import type {PropertyWithEverything}      from './PropertyWithEverything'

import {PropertyContainer} from './Property.container'

export class PropertyWithEverythingContainer<T, IS_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyContainer<T, IS_UNKNOWN, AMOUNT, COMMENT>
    implements PropertyWithEverything<T, IS_UNKNOWN, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,) {
        super(value, isUnknown, amount, comment,)
    }

}
