import type {DEFAULT_AMOUNT}                      from 'core/_properties/Property'
import type {PropertyThatCanBeUnknownWithComment} from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {PossibleValueOnObjectHolder}         from 'util/holder/ObjectHolder'
import type {NullOrString}                        from 'util/types/nullable'

import {PropertyContainer} from 'core/_properties/Property.container'

export class PropertyThatCanBeUnknownWithCommentContainer<T, IS_UNKNOWN extends boolean = boolean, COMMENT extends NullOrString = NullOrString, >
    extends PropertyContainer<T, IS_UNKNOWN, DEFAULT_AMOUNT, COMMENT>
    implements PropertyThatCanBeUnknownWithComment<T, IS_UNKNOWN, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,)
    }

}
