import type {NotApplicable, Property}                                         from './Property'
import type {NullOrBoolean, NullOrNumber, NullOrString}                       from '../../util/types'
import type {PossibleAmountOnFalse, PossibleAmountOnTrue, PropertyWithAmount} from './PropertyWithAmount'
import type {PropertyThatCanBeUnknown}                                        from './PropertyThatCanBeUnknown'
import type {PropertyThatCanBeUnknownWithAmount}                              from './PropertyThatCanBeUnknownWithAmount'
import type {PropertyThatCanBeUnknownWithComment}                             from './PropertyThatCanBeUnknownWithComment'
import type {PropertyWithAmountAndComment}                                    from './PropertyWithAmountAndComment'
import type {PropertyWithComment}                                             from './PropertyWithComment'

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
