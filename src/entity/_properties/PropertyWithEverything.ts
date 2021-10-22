import type {PossibleAmount}                      from './ClassWithAmount';
import type {PossibleComment}                     from './ClassWithComment';
import type {NotApplicable, Property}             from './Property';
import type {PropertyThatCanBeUnknown}            from './PropertyThatCanBeUnknown';
import type {PropertyThatCanBeUnknownWithAmount}  from './PropertyThatCanBeUnknownWithAmount';
import type {PropertyThatCanBeUnknownWithComment} from './PropertyThatCanBeUnknownWithComment';
import type {PropertyWithAmount}                  from './PropertyWithAmount';
import type {PropertyWithAmountAndComment}        from './PropertyWithAmountAndComment';
import type {PropertyWithComment}                 from './PropertyWithComment';

export interface PropertyWithEverything<T, CAN_BE_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, >
    extends Property<T>,
        PropertyWithComment<T, COMMENT>, PropertyThatCanBeUnknown<T, CAN_BE_UNKNOWN>, PropertyWithAmount<T, AMOUNT>,
        PropertyWithAmountAndComment<T, AMOUNT, COMMENT>, PropertyThatCanBeUnknownWithComment<T, CAN_BE_UNKNOWN, COMMENT>, PropertyThatCanBeUnknownWithAmount<T, CAN_BE_UNKNOWN, AMOUNT> {

}

export type NullProperty<COMMENT extends PossibleComment = null, > = PropertyWithEverything<null, false, null, COMMENT>;
export type UnknownProperty<COMMENT extends PossibleComment = null, > = PropertyWithEverything<false, true, null, COMMENT>;
export type NotApplicableProperty = PropertyWithEverything<NotApplicable, false, null, null>;
export type TrueProperty = PropertyWithEverything<true, false, null, null>;
export type FalseProperty = PropertyWithEverything<false, false, null, null>;
