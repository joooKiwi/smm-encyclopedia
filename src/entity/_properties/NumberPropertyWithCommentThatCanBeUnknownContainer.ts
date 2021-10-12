import type {NumberPropertyWithCommentThatCanBeUnknown} from './PropertyWithCommentThatCanBeUnknown';
import type {PossibleComment}                           from './ClassWithComment';
import type {PossibleNumber, PossibleValueReceived}     from './Property';

import {PropertyWithCommentThatCanBeUnknownContainer} from './PropertyWithCommentThatCanBeUnknownContainer';

export class NumberPropertyWithCommentThatCanBeUnknownContainer<N extends PossibleNumber = PossibleNumber, IS_UNKNOWN extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithCommentThatCanBeUnknownContainer<N, IS_UNKNOWN, COMMENT>
    implements NumberPropertyWithCommentThatCanBeUnknown<N, IS_UNKNOWN, COMMENT> {

    public constructor(value: PossibleValueReceived<N>, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(value, isUnknown, comment,);
    }

}
