import type {NullOrNumber, NullOrString}  from '../../../util/types'
import type {NumberPropertyWithComment}   from '../PropertyWithComment'
import type {PossibleValueOnObjectHolder} from '../../../util/holder/ObjectHolder'

import {PropertyWithCommentContainer} from '../PropertyWithComment.container'

export class NumberPropertyWithCommentContainer<N extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends PropertyWithCommentContainer<N, COMMENT>
    implements NumberPropertyWithComment<N, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, comment: COMMENT,) {
        super(value, comment,)
    }

}
