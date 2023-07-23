import type {StringPropertyWithComment} from 'core/_properties/PropertyWithComment'
import type {ValueOrCallback}           from 'util/holder/ObjectHolder.types'

import {PropertyWithCommentContainer} from 'core/_properties/PropertyWithComment.container'

export class StringPropertyWithCommentContainer<const S extends NullOrString = NullOrString, const COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithCommentContainer<S, COMMENT>
    implements StringPropertyWithComment<S, COMMENT> {

    public constructor(value: ValueOrCallback<S>, comment: COMMENT,) {
        super(value, comment,)
    }

}
