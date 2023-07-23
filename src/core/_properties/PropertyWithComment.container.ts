import type {DefaultAmount, DefaultIsUnknown} from 'core/_properties/Property'
import type {PropertyWithComment} from 'core/_properties/PropertyWithComment'
import type {ValueOrCallback}     from 'util/holder/ObjectHolder.types'

import {PropertyContainer} from 'core/_properties/Property.container'

export class PropertyWithCommentContainer<const T, const COMMENT extends NullOrString = NullOrString, >
    extends PropertyContainer<T, DefaultIsUnknown, DefaultAmount, COMMENT>
    implements PropertyWithComment<T, COMMENT> {

    public constructor(value: ValueOrCallback<T>, comment: COMMENT,) {
        super(value, comment,)
    }

}
