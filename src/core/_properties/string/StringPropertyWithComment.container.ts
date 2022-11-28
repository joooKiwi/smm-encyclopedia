import type {NullOrString}                from '../../../util/types'
import type {PossibleValueOnObjectHolder} from '../../../util/holder/ObjectHolder'
import type {StringPropertyWithComment}   from '../PropertyWithComment'

import {PropertyWithCommentContainer} from '../PropertyWithComment.container'

export class StringPropertyWithCommentContainer<S extends NullOrString = NullOrString, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithCommentContainer<S, COMMENT>
    implements StringPropertyWithComment<S, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, comment: COMMENT,) {
        super(value, comment,)
    }

}
