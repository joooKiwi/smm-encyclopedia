import type {NumberPropertyThatCanBeUnknownWithComment} from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {ValueOrCallback}                           from 'util/holder/ObjectHolder.types'
import type {NullOrNumber, NullOrString}                from 'util/types/nullable'

import {PropertyThatCanBeUnknownWithCommentContainer} from 'core/_properties/PropertyThatCanBeUnknownWithComment.container'

export class NumberPropertyThatCanBeUnknownWithCommentContainer<N extends NullOrNumber = NullOrNumber, IS_UNKNOWN extends boolean = boolean, COMMENT extends NullOrString = NullOrString, >
    extends PropertyThatCanBeUnknownWithCommentContainer<N, IS_UNKNOWN, COMMENT>
    implements NumberPropertyThatCanBeUnknownWithComment<N, IS_UNKNOWN, COMMENT> {

    public constructor(value: ValueOrCallback<N>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,)
    }

}
