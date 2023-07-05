import type {DefaultIsUnknown}             from 'core/_properties/Property'
import type {PropertyWithAmountAndComment} from 'core/_properties/PropertyWithAmountAndComment'
import type {ValueOrCallback}              from 'util/holder/ObjectHolder.types'
import type {NullOrNumber, NullOrString}   from 'util/types/nullable'

import {PropertyContainer} from 'core/_properties/Property.container'

export class PropertyWithAmountAndCommentContainer<T, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyContainer<T, DefaultIsUnknown, AMOUNT, COMMENT>
    implements PropertyWithAmountAndComment<T, AMOUNT, COMMENT> {

    public constructor(value: ValueOrCallback<T>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,)
    }

}
