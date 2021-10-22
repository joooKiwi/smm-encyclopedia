import type {PossibleComment}                           from '../ClassWithComment';
import type {PossibleString}                            from '../Property';
import type {StringPropertyThatCanBeUnknownWithComment} from '../PropertyThatCanBeUnknownWithComment';
import type {ValueOrCallbackValue}                      from '../../../util/holder/ObjectHolder';

import {PropertyThatCanBeUnknownWithCommentContainer} from '../PropertyThatCanBeUnknownWithComment.container';

export class StringPropertyWithCommentThatCanBeUnknownContainer<S extends PossibleString = PossibleString, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyThatCanBeUnknownWithCommentContainer<S, IS_UNKNOWN, COMMENT>
    implements StringPropertyThatCanBeUnknownWithComment<S, IS_UNKNOWN, COMMENT> {

    public constructor(value: ValueOrCallbackValue<S>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,);
    }

}
