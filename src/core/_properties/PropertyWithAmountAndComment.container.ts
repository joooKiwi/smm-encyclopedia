import type {DEFAULT_IS_UNKNOWN}           from './Property'
import type {NullOrNumber, NullOrString}   from '../../util/types'
import type {PossibleValueOnObjectHolder}  from '../../util/holder/ObjectHolder'
import type {PropertyWithAmountAndComment} from './PropertyWithAmountAndComment'

import {PropertyContainer} from './Property.container'

export class PropertyWithAmountAndCommentContainer<T, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyContainer<T, DEFAULT_IS_UNKNOWN, AMOUNT, COMMENT>
    implements PropertyWithAmountAndComment<T, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
