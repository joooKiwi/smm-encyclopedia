import type {PossibleAmount}                     from '../ClassWithAmount';
import type {PossibleComment}                    from '../ClassWithComment';
import type {PossibleString}                     from '../Property';
import type {StringPropertyWithAmountAndComment} from '../PropertyWithAmountAndComment';
import type {ValueOrCallbackValue}               from '../../../util/holder/ObjectHolder';

import {PropertyWithAmountAndCommentContainer} from '../PropertyWithAmountAndComment.container';

export class StringPropertyWithAmountAndCommentContainer<S extends PossibleString = PossibleString, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithAmountAndCommentContainer<S, AMOUNT, COMMENT>
    implements StringPropertyWithAmountAndComment<S, AMOUNT, COMMENT> {

    public constructor(value: ValueOrCallbackValue<S>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,);
    }

}
