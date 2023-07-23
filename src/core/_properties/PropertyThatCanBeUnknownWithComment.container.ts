import type {DefaultAmount}                       from 'core/_properties/Property'
import type {PropertyThatCanBeUnknownWithComment} from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {ValueOrCallback}                     from 'util/holder/ObjectHolder.types'

import {PropertyContainer} from 'core/_properties/Property.container'

export class PropertyThatCanBeUnknownWithCommentContainer<T, IS_UNKNOWN extends boolean = boolean, COMMENT extends NullOrString = NullOrString, >
    extends PropertyContainer<T, IS_UNKNOWN, DefaultAmount, COMMENT>
    implements PropertyThatCanBeUnknownWithComment<T, IS_UNKNOWN, COMMENT> {

    public constructor(value: ValueOrCallback<T>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,)
    }

}
