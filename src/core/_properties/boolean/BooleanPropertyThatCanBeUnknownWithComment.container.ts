import type {BooleanPropertyThatCanBeUnknownWithComment} from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {ValueOrCallback}                            from 'util/holder/ObjectHolder.types'
import type {NullOrBoolean, NullOrString}                from 'util/types/nullable'

import {PropertyThatCanBeUnknownWithCommentContainer} from 'core/_properties/PropertyThatCanBeUnknownWithComment.container'

export class BooleanPropertyThatCanBeUnknownWithCommentContainer<B extends NullOrBoolean = NullOrBoolean, IS_UNKNOWN extends boolean = boolean, COMMENT extends NullOrString = NullOrString, >
    extends PropertyThatCanBeUnknownWithCommentContainer<B, IS_UNKNOWN, COMMENT>
    implements BooleanPropertyThatCanBeUnknownWithComment<B, IS_UNKNOWN, COMMENT> {

    public constructor(value: ValueOrCallback<B>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,)
    }

}
