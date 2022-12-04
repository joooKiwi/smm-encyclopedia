import type {DEFAULT_IS_UNKNOWN}           from 'core/_properties/Property'
import type {PropertyWithAmountAndComment} from 'core/_properties/PropertyWithAmountAndComment'
import type {PossibleValueOnObjectHolder}  from 'util/holder/ObjectHolder'
import type {NullOrNumber, NullOrString}   from 'util/types/nullable'

import {PropertyContainer} from 'core/_properties/Property.container'

export class PropertyWithAmountAndCommentContainer<T, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyContainer<T, DEFAULT_IS_UNKNOWN, AMOUNT, COMMENT>
    implements PropertyWithAmountAndComment<T, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
