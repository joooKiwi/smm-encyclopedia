import type {NullOrNumber, NullOrString}                from '../../../util/types'
import type {NumberPropertyThatCanBeUnknownWithComment} from '../PropertyThatCanBeUnknownWithComment'
import type {PossibleValueOnObjectHolder}               from '../../../util/holder/ObjectHolder'

import {PropertyThatCanBeUnknownWithCommentContainer} from '../PropertyThatCanBeUnknownWithComment.container'

export class NumberPropertyThatCanBeUnknownWithCommentContainer<N extends NullOrNumber = NullOrNumber, IS_UNKNOWN extends boolean = boolean, COMMENT extends NullOrString = NullOrString, >
    extends PropertyThatCanBeUnknownWithCommentContainer<N, IS_UNKNOWN, COMMENT>
    implements NumberPropertyThatCanBeUnknownWithComment<N, IS_UNKNOWN, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<N>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,)
    }

}
