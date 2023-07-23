import type {NumberPropertyThatCanBeUnknownWithComment} from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {ValueOrCallback}                           from 'util/holder/ObjectHolder.types'

import {PropertyThatCanBeUnknownWithCommentContainer} from 'core/_properties/PropertyThatCanBeUnknownWithComment.container'

export class NumberPropertyThatCanBeUnknownWithCommentContainer<const N extends NullOrNumber = NullOrNumber, const IS_UNKNOWN extends boolean = boolean, const COMMENT extends NullOrString = NullOrString, >
    extends PropertyThatCanBeUnknownWithCommentContainer<N, IS_UNKNOWN, COMMENT>
    implements NumberPropertyThatCanBeUnknownWithComment<N, IS_UNKNOWN, COMMENT> {

    public constructor(value: ValueOrCallback<N>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,)
    }

}
