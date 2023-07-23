import type {BooleanPropertyWithComment} from 'core/_properties/PropertyWithComment'
import type {ValueOrCallback}            from 'util/holder/ObjectHolder.types'

import {PropertyWithCommentContainer} from 'core/_properties/PropertyWithComment.container'

export class BooleanPropertyWithCommentContainer<B extends NullOrBoolean = NullOrBoolean, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithCommentContainer<B, COMMENT>
    implements BooleanPropertyWithComment<B, COMMENT> {

    public constructor(value: ValueOrCallback<B>, comment: COMMENT,) {
        super(value, comment,)
    }

}
