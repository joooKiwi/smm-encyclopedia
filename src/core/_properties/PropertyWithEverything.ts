import type {Property}                                                        from 'core/_properties/Property'
import type {PropertyThatCanBeUnknown}                                        from 'core/_properties/PropertyThatCanBeUnknown'
import type {PropertyThatCanBeUnknownWithAmount}                              from 'core/_properties/PropertyThatCanBeUnknownWithAmount'
import type {PropertyThatCanBeUnknownWithComment}                             from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {PossibleAmountOnFalse, PossibleAmountOnTrue, PropertyWithAmount} from 'core/_properties/PropertyWithAmount'
import type {PropertyWithAmountAndComment}                                    from 'core/_properties/PropertyWithAmountAndComment'
import type {PropertyWithComment}                                             from 'core/_properties/PropertyWithComment'

export interface PropertyWithEverything<T, CAN_BE_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, >
    extends Property<T>,
        PropertyWithComment<T, COMMENT>, PropertyThatCanBeUnknown<T, CAN_BE_UNKNOWN>, PropertyWithAmount<T, AMOUNT>,
        PropertyWithAmountAndComment<T, AMOUNT, COMMENT>, PropertyThatCanBeUnknownWithComment<T, CAN_BE_UNKNOWN, COMMENT>, PropertyThatCanBeUnknownWithAmount<T, CAN_BE_UNKNOWN, AMOUNT> {

}

export type BooleanPropertyWithEverything<B extends NullOrBoolean = NullOrBoolean, CAN_BE_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, > = PropertyWithEverything<B, CAN_BE_UNKNOWN, AMOUNT, COMMENT>
export type NumberPropertyWithEverything<N extends NullOrNumber = NullOrNumber, CAN_BE_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, > = PropertyWithEverything<N, CAN_BE_UNKNOWN, AMOUNT, COMMENT>
export type StringPropertyWithEverything<S extends NullOrString = NullOrString, CAN_BE_UNKNOWN extends boolean = boolean, AMOUNT extends NullOrNumber = NullOrNumber, COMMENT extends NullOrString = NullOrString, > = PropertyWithEverything<S, CAN_BE_UNKNOWN, AMOUNT, COMMENT>

export type NullProperty<COMMENT extends NullOrString = null, > = PropertyWithEverything<null, false, null, COMMENT>
export type UnknownProperty<COMMENT extends NullOrString = null, > = PropertyWithEverything<null, true, null, COMMENT>
export type NotApplicableProperty = PropertyWithEverything<NotApplicable, false, null, null>
export type TrueProperty<AMOUNT extends PossibleAmountOnTrue = null, > = PropertyWithEverything<true, false, AMOUNT, null>
export type FalseProperty<AMOUNT extends PossibleAmountOnFalse = null, > = PropertyWithEverything<false, false, AMOUNT, null>
