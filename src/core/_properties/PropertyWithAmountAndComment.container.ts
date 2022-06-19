import type {DEFAULT_IS_UNKNOWN}           from './Property';
import type {PossibleAmount}               from './ClassWithAmount';
import type {PossibleComment}              from './ClassWithComment';
import type {PossibleValueOnObjectHolder}  from '../../util/holder/ObjectHolder';
import type {PropertyWithAmountAndComment} from './PropertyWithAmountAndComment';

import {PropertyContainer} from './Property.container';

export class PropertyWithAmountAndCommentContainer<T, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyContainer<T, DEFAULT_IS_UNKNOWN, AMOUNT, COMMENT>
    implements PropertyWithAmountAndComment<T, AMOUNT, COMMENT> {

    public constructor(value: PossibleValueOnObjectHolder<T>, amount: AMOUNT, comment: COMMENT,) {
        super(value, amount, comment,);
    }

}
