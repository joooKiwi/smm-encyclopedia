import type {BooleanPropertyWithComment}  from '../PropertyWithComment'
import type {NullOrBoolean, NullOrString} from '../../../util/types'
import type {PossibleValueOnObjectHolder} from '../../../util/holder/ObjectHolder'

import {PropertyWithCommentContainer} from '../PropertyWithComment.container'

export class BooleanPropertyWithCommentContainer<B extends NullOrBoolean = NullOrBoolean, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithCommentContainer<B, COMMENT>
    implements BooleanPropertyWithComment<B, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<B>, comment: COMMENT,) {
        super(value, comment,)
    }

}
