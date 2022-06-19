import type {PossibleAmount}                                                           from './ClassWithAmount';
import type {PossibleAmountOnFalse, PossibleAmountOnTrue, PropertyWithAmount}          from './PropertyWithAmount';
import type {PossibleComment}                                                          from './ClassWithComment';
import type {NotApplicable, PossibleBoolean, PossibleNumber, PossibleString, Property} from './Property';
import type {PropertyThatCanBeUnknown}                                                 from './PropertyThatCanBeUnknown';
import type {PropertyThatCanBeUnknownWithAmount}                                       from './PropertyThatCanBeUnknownWithAmount';
import type {PropertyThatCanBeUnknownWithComment}                                      from './PropertyThatCanBeUnknownWithComment';
import type {PropertyWithAmountAndComment}                                             from './PropertyWithAmountAndComment';
import type {PropertyWithComment}                                                      from './PropertyWithComment';

export interface PropertyWithEverything<T, CAN_BE_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, >
    extends Property<T>,
        PropertyWithComment<T, COMMENT>, PropertyThatCanBeUnknown<T, CAN_BE_UNKNOWN>, PropertyWithAmount<T, AMOUNT>,
        PropertyWithAmountAndComment<T, AMOUNT, COMMENT>, PropertyThatCanBeUnknownWithComment<T, CAN_BE_UNKNOWN, COMMENT>, PropertyThatCanBeUnknownWithAmount<T, CAN_BE_UNKNOWN, AMOUNT> {

}

export type BooleanPropertyWithEverything<B extends PossibleBoolean = PossibleBoolean, CAN_BE_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, > = PropertyWithEverything<B, CAN_BE_UNKNOWN, AMOUNT, COMMENT>;
export type NumberPropertyWithEverything<N extends PossibleNumber = PossibleNumber, CAN_BE_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, > = PropertyWithEverything<N, CAN_BE_UNKNOWN, AMOUNT, COMMENT>;
export type StringPropertyWithEverything<S extends PossibleString = PossibleString, CAN_BE_UNKNOWN extends boolean = boolean, AMOUNT extends PossibleAmount = PossibleAmount, COMMENT extends PossibleComment = PossibleComment, > = PropertyWithEverything<S, CAN_BE_UNKNOWN, AMOUNT, COMMENT>;

export type NullProperty<COMMENT extends PossibleComment = null, > = PropertyWithEverything<null, false, null, COMMENT>;
export type UnknownProperty<COMMENT extends PossibleComment = null, > = PropertyWithEverything<null, true, null, COMMENT>;
export type NotApplicableProperty = PropertyWithEverything<NotApplicable, false, null, null>;
export type TrueProperty<AMOUNT extends PossibleAmountOnTrue = null, > = PropertyWithEverything<true, false, AMOUNT, null>;
export type FalseProperty<AMOUNT extends PossibleAmountOnFalse = null, > = PropertyWithEverything<false, false, AMOUNT, null>;
