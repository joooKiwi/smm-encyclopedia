import type {BooleanPropertyWithCommentThatCanBeUnknown} from './PropertyWithCommentThatCanBeUnknown';
import type {PossibleBoolean, PossibleValueReceived}     from './Property';
import type {PossibleComment}                            from './ClassWithComment';

import {PropertyWithCommentThatCanBeUnknownContainer} from './PropertyWithCommentThatCanBeUnknownContainer';

export class BooleanPropertyWithCommentThatCanBeUnknownContainer<B extends PossibleBoolean = PossibleBoolean, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithCommentThatCanBeUnknownContainer<B, IS_UNKNOWN, COMMENT>
    implements BooleanPropertyWithCommentThatCanBeUnknown<B, IS_UNKNOWN, COMMENT> {

    public constructor(value: PossibleValueReceived<B>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,);
    }

}
