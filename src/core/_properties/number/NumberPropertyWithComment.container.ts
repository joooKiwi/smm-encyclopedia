import type {NumberPropertyWithComment} from 'core/_properties/PropertyWithComment'
import type {ValueOrCallback}           from 'util/holder/ObjectHolder.types'

import {PropertyWithCommentContainer} from 'core/_properties/PropertyWithComment.container'

export class NumberPropertyWithCommentContainer<const N extends NullOrNumber = NullOrNumber, const COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithCommentContainer<N, COMMENT>
    implements NumberPropertyWithComment<N, COMMENT> {

    public constructor(value: ValueOrCallback<N>, comment: COMMENT,) {
        super(value, comment,)
    }

}
