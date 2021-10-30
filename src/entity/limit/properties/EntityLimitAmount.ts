import type {PossibleAmount}                      from '../../_properties/ClassWithAmount';
import type {PossibleComment}                     from '../../_properties/ClassWithComment';
import type {PropertyThatCanBeUnknownWithComment} from '../../_properties/PropertyThatCanBeUnknownWithComment';

export interface EntityLimitAmount<AMOUNT extends PossibleAmount = PossibleAmount,
    IS_UNKNOWN extends boolean = boolean,
    COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyThatCanBeUnknownWithComment<AMOUNT, IS_UNKNOWN, COMMENT> {

}

