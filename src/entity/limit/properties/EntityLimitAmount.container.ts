import type {EntityLimitAmount, PossibleAmount} from './EntityLimitAmount';
import type {PossibleComment}                   from '../../_properties/ClassWithComment';

import {NumberPropertyWithCommentThatCanBeUnknownContainer} from '../../_properties/NumberPropertyWithCommentThatCanBeUnknownContainer';

export class EntityLimitAmountContainer<AMOUNT extends PossibleAmount = PossibleAmount,
    IS_UNKNOWN extends boolean = boolean,
    COMMENT extends PossibleComment = PossibleComment, >
    extends NumberPropertyWithCommentThatCanBeUnknownContainer<AMOUNT, IS_UNKNOWN, COMMENT>
    implements EntityLimitAmount<AMOUNT, IS_UNKNOWN, COMMENT> {

    public constructor(amount: AMOUNT, isUnknown: IS_UNKNOWN, comment: COMMENT,) {
        super(amount, isUnknown, comment,);
    }

}
