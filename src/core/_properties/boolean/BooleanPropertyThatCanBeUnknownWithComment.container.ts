import type {BooleanPropertyThatCanBeUnknownWithComment} from '../PropertyThatCanBeUnknownWithComment';
import type {PossibleBoolean}                            from '../Property';
import type {PossibleComment}                            from '../ClassWithComment';
import type {PossibleValueOnObjectHolder}                from '../../../util/holder/ObjectHolder';

import {PropertyThatCanBeUnknownWithCommentContainer} from '../PropertyThatCanBeUnknownWithComment.container';

export class BooleanPropertyThatCanBeUnknownWithCommentContainer<B extends PossibleBoolean = PossibleBoolean, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyThatCanBeUnknownWithCommentContainer<B, IS_UNKNOWN, COMMENT>
    implements BooleanPropertyThatCanBeUnknownWithComment<B, IS_UNKNOWN, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<B>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,);
    }

}
