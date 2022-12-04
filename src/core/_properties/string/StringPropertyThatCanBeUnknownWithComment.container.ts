import type {StringPropertyThatCanBeUnknownWithComment} from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {PossibleValueOnObjectHolder}               from 'util/holder/ObjectHolder'
import type {NullOrString}                              from 'util/types/nullable'

import {PropertyThatCanBeUnknownWithCommentContainer} from 'core/_properties/PropertyThatCanBeUnknownWithComment.container'

export class StringPropertyThatCanBeUnknownWithCommentContainer<S extends NullOrString = NullOrString, IS_UNKNOWN extends boolean = boolean, COMMENT extends NullOrString = NullOrString, >
    extends PropertyThatCanBeUnknownWithCommentContainer<S, IS_UNKNOWN, COMMENT>
    implements StringPropertyThatCanBeUnknownWithComment<S, IS_UNKNOWN, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<S>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,)
    }

}
