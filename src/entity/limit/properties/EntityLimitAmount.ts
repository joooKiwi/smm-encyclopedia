import type {ClassThatCanBeUnknown} from '../../_properties/ClassThatCanBeUnknown';
import type {PossibleComment}       from '../../_properties/ClassWithComment';
import type {PropertyWithComment}   from '../../_properties/PropertyWithComment';

export interface EntityLimitAmount<AMOUNT extends PossibleAmount = PossibleAmount,
    IS_UNKNOWN extends boolean = boolean,
    COMMENT extends PossibleComment = PossibleComment, >
    extends PropertyWithComment<AMOUNT, COMMENT>, ClassThatCanBeUnknown<IS_UNKNOWN> {

}

export type PossibleAmount = | number | null;
