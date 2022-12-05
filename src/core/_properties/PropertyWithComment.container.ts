import type {DefaultAmount, DefaultIsUnknown} from 'core/_properties/Property'
import type {PropertyWithComment}             from 'core/_properties/PropertyWithComment'
import type {PossibleValueOnObjectHolder}     from 'util/holder/ObjectHolder'
import type {NullOrString}                    from 'util/types/nullable'

import {PropertyContainer} from 'core/_properties/Property.container'

export class PropertyWithCommentContainer<T, COMMENT extends NullOrString = NullOrString, >
    extends PropertyContainer<T, DefaultIsUnknown, DefaultAmount, COMMENT>
    implements PropertyWithComment<T, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, comment: COMMENT,) {
        super(value, comment,)
    }

}
