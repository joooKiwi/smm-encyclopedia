import type {BooleanPropertyThatCanBeUnknownWithComment} from '../PropertyThatCanBeUnknownWithComment'
import type {NullOrBoolean, NullOrString}                from '../../../util/types'
import type {PossibleValueOnObjectHolder}                from '../../../util/holder/ObjectHolder'

import {PropertyThatCanBeUnknownWithCommentContainer} from '../PropertyThatCanBeUnknownWithComment.container'

export class BooleanPropertyThatCanBeUnknownWithCommentContainer<B extends NullOrBoolean = NullOrBoolean, IS_UNKNOWN extends boolean = boolean, COMMENT extends NullOrString = NullOrString, >
    extends PropertyThatCanBeUnknownWithCommentContainer<B, IS_UNKNOWN, COMMENT>
    implements BooleanPropertyThatCanBeUnknownWithComment<B, IS_UNKNOWN, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<B>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,)
    }

}
