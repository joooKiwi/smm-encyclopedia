import type {BooleanPropertyThatCanBeUnknown, NumberPropertyThatCanBeUnknown, StringPropertyThatCanBeUnknown}                                  from 'core/_properties/PropertyThatCanBeUnknown'
import type {BooleanPropertyThatCanBeUnknownWithAmount}                                                                                        from 'core/_properties/PropertyThatCanBeUnknownWithAmount'
import type {BooleanPropertyThatCanBeUnknownWithComment, NumberPropertyThatCanBeUnknownWithComment, StringPropertyThatCanBeUnknownWithComment} from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {BooleanPropertyWithAmount}                                                                                                        from 'core/_properties/PropertyWithAmount'
import type {BooleanPropertyWithAmountAndComment}                                                                                              from 'core/_properties/PropertyWithAmountAndComment'
import type {BooleanPropertyWithComment, NumberPropertyWithComment, StringPropertyWithComment}                                                 from 'core/_properties/PropertyWithComment'
import type {BooleanPropertyWithEverything, NotApplicableProperty, NullProperty, NumberPropertyWithEverything}                                 from 'core/_properties/PropertyWithEverything'
import type {PropertyWithNoValues}                                                                                                             from 'core/_properties/PropertyWithNoValues'

/**
 * A generic property with a value contained in it.
 */
export interface Property<T>
    extends PropertyWithNoValues {

    get value(): T

}

export type BooleanProperty<B extends NullOrBoolean = NullOrBoolean, > = Property<B>
export type NumberProperty<N extends NullOrNumber = NullOrNumber, > = Property<N>
export type StringProperty<S extends NullOrString = NullOrString, > = Property<S>

//region -------------------- Inferred property by a value --------------------

//region -------------------- Inferred boolean property by a value --------------------

export type PossibleBooleanValuesByInferredProperty = NullOr<| boolean | string | number>
export type InferredAmountByBoolean<T extends boolean = boolean, > = T extends true ? 1 : T extends false ? 0 : (| 1 | 0)
export type InferredAmountByStringOnBoolean<T extends string = string, > = T extends EmptyString ? 0 : T extends Exclude<T, EmptyString> ? 1 : (| 0 | 1)

type _UnknownBooleanProperty<COMMENT extends NullOrString, > = BooleanPropertyWithEverything<null, true, null, COMMENT>

export type PossibleInferredBooleanProperty<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, DOES_HAVE_AN_AMOUNT extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, COMMENT extends NullOrString = NullOrString, > =
    CAN_BE_NOT_APPLICABLE extends true
        ? DOES_HAVE_AN_AMOUNT extends true
            ? HAVE_A_COMMENT extends true ? InferredBooleanPropertyWithEverything<T, COMMENT> :                    InferredBooleanPropertyThatCanBeNotApplicableWithAmount<T>
            : HAVE_A_COMMENT extends true ? InferredBooleanPropertyThatCanBeNotApplicableWithComment<T, COMMENT> : InferredBooleanPropertyThatCanBeNotApplicable<T>
        : DOES_HAVE_AN_AMOUNT extends true
            ? HAVE_A_COMMENT extends true ? InferredBooleanPropertyWithAmountAndComment<T, COMMENT> :              InferredBooleanPropertyWithAmount<T>
            : HAVE_A_COMMENT extends true ? InferredBooleanPropertyWithComment<T, COMMENT> :                       InferredBooleanProperty<T>

//region -------------------- Basic inferred boolean property --------------------

export type InferredBooleanProperty<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =
      T extends null             ? NullProperty
    : T extends UnknownCharacter ? _UnknownBooleanProperty<null>
    : T extends boolean          ? BooleanProperty<T>
    : T extends string           ? BooleanPropertyWithComment<true, T>
    : T extends number           ? BooleanPropertyWithAmount<true, T>
    : never
export type InferredBooleanPropertyThatCanBeNotApplicable<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =
      T extends null             ? NotApplicableProperty
    : T extends UnknownCharacter ? _UnknownBooleanProperty<null>
    : T extends boolean          ? BooleanPropertyThatCanBeUnknown<T, false>
    : T extends string           ? BooleanPropertyThatCanBeUnknownWithComment<true, false, T>
    : T extends number           ? BooleanPropertyThatCanBeUnknownWithAmount<true, false, T>
    : never

//endregion -------------------- Basic inferred boolean property --------------------
//region -------------------- Inferred boolean property (with amount) --------------------

export type InferredBooleanPropertyWithAmount<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =
      T extends null             ? NullProperty
    : T extends UnknownCharacter ? _UnknownBooleanProperty<null>
    : T extends boolean          ? T extends boolean
        ? (| BooleanPropertyThatCanBeUnknownWithAmount<true, false, InferredAmountByBoolean<true>> | BooleanPropertyThatCanBeUnknownWithAmount<false, false, InferredAmountByBoolean<false>>)
        : BooleanPropertyThatCanBeUnknownWithAmount<T, false, InferredAmountByBoolean<T>>
    : T extends string           ? BooleanPropertyWithEverything<true, false, InferredAmountByStringOnBoolean<T>, T>
    : T extends number           ? BooleanPropertyThatCanBeUnknownWithAmount<true, false, T>
    : never
export type InferredBooleanPropertyThatCanBeNotApplicableWithAmount<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =
      T extends null             ? NotApplicableProperty
    : T extends UnknownCharacter ? _UnknownBooleanProperty<null>
    : T extends boolean          ? T extends boolean
        ? (| BooleanPropertyWithAmount<true, InferredAmountByBoolean<true>> | BooleanPropertyWithAmount<false, InferredAmountByBoolean<false>>)
        : BooleanPropertyWithAmount<T, InferredAmountByBoolean<T>>
    : T extends string           ? BooleanPropertyWithAmountAndComment<true, InferredAmountByStringOnBoolean<T>, T>
    : T extends number           ? BooleanPropertyWithAmount<true, T>
    : never

//endregion -------------------- Inferred boolean property (with amount) --------------------
//region -------------------- Inferred boolean property (with comment) --------------------

export type InferredBooleanPropertyWithComment<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends NullOrString = NullOrString, > =
      T extends null             ? NullProperty
    : T extends UnknownCharacter ? _UnknownBooleanProperty<COMMENT>
    : T extends boolean          ? BooleanPropertyWithComment<T, COMMENT>
    : T extends string           ? BooleanPropertyWithComment<true, T>
    : T extends number           ? BooleanPropertyWithAmountAndComment<true, T, COMMENT>
    : never
export type InferredBooleanPropertyThatCanBeNotApplicableWithComment<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends NullOrString = NullOrString, > =
      T extends null             ? NotApplicableProperty
    : T extends UnknownCharacter ? _UnknownBooleanProperty<COMMENT>
    : T extends boolean          ? BooleanPropertyThatCanBeUnknownWithComment<T, false, COMMENT>
    : T extends string           ? BooleanPropertyThatCanBeUnknownWithComment<true, false, T>
    : T extends number           ? BooleanPropertyWithEverything<true, false, T, COMMENT>
    : never

//endregion -------------------- Inferred boolean property (with comment) --------------------
//region -------------------- Inferred boolean property (with amount & comment) --------------------

export type InferredBooleanPropertyWithAmountAndComment<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends NullOrString = NullOrString,> =
      T extends null             ? NullProperty
    : T extends UnknownCharacter ? _UnknownBooleanProperty<COMMENT>
    : T extends boolean          ? T extends boolean
        ? (| BooleanPropertyWithAmountAndComment<true, InferredAmountByBoolean<true>, COMMENT> | BooleanPropertyWithAmountAndComment<false, InferredAmountByBoolean<false>, COMMENT>)
        : BooleanPropertyWithAmountAndComment<T, InferredAmountByBoolean<T>, COMMENT>
    : T extends string           ? BooleanPropertyWithAmountAndComment<true, InferredAmountByStringOnBoolean<T>, T>
    : T extends number           ? BooleanPropertyWithAmountAndComment<true, T, COMMENT>
    : never
export type InferredBooleanPropertyWithEverything<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends NullOrString = NullOrString,> =
      T extends null             ? NotApplicableProperty
    : T extends UnknownCharacter ? _UnknownBooleanProperty<COMMENT>
    : T extends boolean          ? T extends boolean
        ? (| BooleanPropertyWithEverything<true, false, InferredAmountByBoolean<true>, COMMENT> | BooleanPropertyWithEverything<false, false, InferredAmountByBoolean<false>, COMMENT>)
        : BooleanPropertyWithEverything<T, false, InferredAmountByBoolean<T>, COMMENT>
    : T extends string           ? BooleanPropertyWithEverything<true, false, InferredAmountByStringOnBoolean<T>, T>
    : T extends number           ? BooleanPropertyWithEverything<true, false, T, COMMENT>
    : never

//endregion -------------------- Inferred boolean property (with amount & comment) --------------------

//endregion -------------------- Inferred boolean property by a value --------------------
//region -------------------- Inferred number property by a value --------------------

export type PossibleNumberValuesByInferredProperty = NullOr<| string | number>

type _UnknownNumberProperty<COMMENT extends NullOrString, > = NumberPropertyWithEverything<null, true, null, COMMENT>

export type PossibleInferredNumberProperty<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, COMMENT extends NullOrString = NullOrString, > =
    CAN_BE_NOT_APPLICABLE extends true
        ? HAVE_A_COMMENT extends true ? InferredNumberPropertyThatCanBeNotApplicableWithComment<T, COMMENT> : InferredNumberPropertyThatCanBeNotApplicable<T>
        : HAVE_A_COMMENT extends true ? InferredNumberPropertyWithComment<T, COMMENT> :                       InferredNumberProperty<T>

//region -------------------- Basic inferred number property --------------------

export type InferredNumberProperty<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, > =
      T extends null             ? NullProperty
    : T extends UnknownCharacter ? _UnknownNumberProperty<null>
    : T extends number           ? NumberProperty<T>
    : T extends string           ? NumberPropertyWithComment<null, T>
    : never
export type InferredNumberPropertyThatCanBeNotApplicable<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, > =
      T extends null             ? NotApplicableProperty
    : T extends UnknownCharacter ? _UnknownNumberProperty<null>
    : T extends number           ? NumberPropertyThatCanBeUnknown<T, false>
    : T extends string           ? NumberPropertyThatCanBeUnknownWithComment<null, false, T>
    : never

//endregion -------------------- Basic inferred number property --------------------
//region -------------------- Inferred number property (with comment) --------------------

export type InferredNumberPropertyWithComment<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, COMMENT extends NullOrString = NullOrString, > =
    T extends null               ? NullProperty
    : T extends UnknownCharacter ? _UnknownNumberProperty<COMMENT>
    : T extends number           ? NumberPropertyWithComment<T, COMMENT>
    : T extends string           ? NumberPropertyWithComment<null, T>
    : never
export type InferredNumberPropertyThatCanBeNotApplicableWithComment<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, COMMENT extends NullOrString = NullOrString, > =
    T extends null               ? NotApplicableProperty
    : T extends UnknownCharacter ? _UnknownNumberProperty<COMMENT>
    : T extends number           ? NumberPropertyThatCanBeUnknownWithComment<T, false, COMMENT>
    : T extends string           ? NumberPropertyThatCanBeUnknownWithComment<null, false, T>
    : never

//endregion -------------------- Inferred number property (with comment) --------------------

//endregion -------------------- Inferred number property by a value --------------------
//region -------------------- Inferred string property by a value --------------------

type _UnknownStringProperty<COMMENT extends NullOrString, > = NumberPropertyWithEverything<null, true, null, COMMENT>

export type PossibleInferredStringProperty<T extends NullOrString = NullOrString, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, COMMENT extends NullOrString = NullOrString, > =
    CAN_BE_NOT_APPLICABLE extends true
        ? HAVE_A_COMMENT extends true ? InferredStringPropertyThatCanBeNotApplicableWithComment<T, COMMENT> : InferredStringPropertyThatCanBeNotApplicable<T>
        : HAVE_A_COMMENT extends true ? InferredStringPropertyWithComment<T, COMMENT> :                       InferredStringProperty<T>

//region -------------------- Basic inferred string property --------------------

export type InferredStringProperty<T extends NullOrString = NullOrString, > =
      T extends null             ? NullProperty
    : T extends UnknownCharacter ? _UnknownStringProperty<null>
    : T extends string           ? StringProperty<T>
    : never
export type InferredStringPropertyThatCanBeNotApplicable<T extends NullOrString = NullOrString, > =
      T extends null             ? NotApplicableProperty
    : T extends UnknownCharacter ? _UnknownStringProperty<null>
    : T extends string           ? StringPropertyThatCanBeUnknown<T, false>
    : never

//endregion -------------------- Basic inferred string property --------------------
//region -------------------- Inferred string property (with comment) --------------------

export type InferredStringPropertyWithComment<T extends NullOrString = NullOrString, COMMENT extends NullOrString = NullOrString, > =
      T extends null             ? NullProperty
    : T extends UnknownCharacter ? _UnknownStringProperty<COMMENT>
    : T extends string           ? StringPropertyWithComment<T, COMMENT>
    : never
export type InferredStringPropertyThatCanBeNotApplicableWithComment<T extends NullOrString = NullOrString, COMMENT extends NullOrString = NullOrString, > =
      T extends null             ? NotApplicableProperty
    : T extends UnknownCharacter ? _UnknownStringProperty<COMMENT>
    : T extends string           ? StringPropertyThatCanBeUnknownWithComment<T, false, COMMENT>
    : never

//endregion -------------------- Inferred string property (with comment) --------------------


//endregion -------------------- Inferred string property by a value --------------------

//endregion -------------------- Inferred property by a value --------------------
//region -------------------- Default values for a property --------------------

export type DefaultIsUnknown = false
export type DefaultAmount = null
export type DefaultComment = null

//endregion -------------------- Default values for a property --------------------
