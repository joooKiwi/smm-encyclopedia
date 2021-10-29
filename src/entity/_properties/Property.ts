import type {BooleanPropertyWithAmount}                                                                        from './PropertyWithAmount';
import type {BooleanPropertyWithAmountAndComment}                                                              from './PropertyWithAmountAndComment';
import type {BooleanPropertyWithComment, NumberPropertyWithComment, StringPropertyWithComment}                 from './PropertyWithComment';
import type {BooleanPropertyWithEverything, NotApplicableProperty, NullProperty, NumberPropertyWithEverything} from './PropertyWithEverything';
import type {PossibleComment}                                                                                  from './ClassWithComment';
import type {PropertyWithNoValues}                                                                       from './PropertyWithNoValues';
import {BooleanPropertyThatCanBeUnknown, NumberPropertyThatCanBeUnknown, StringPropertyThatCanBeUnknown}                                  from './PropertyThatCanBeUnknown';
import {BooleanPropertyThatCanBeUnknownWithComment, NumberPropertyThatCanBeUnknownWithComment, StringPropertyThatCanBeUnknownWithComment} from './PropertyThatCanBeUnknownWithComment';
import {BooleanPropertyThatCanBeUnknownWithAmount}                                                                                        from './PropertyThatCanBeUnknownWithAmount';

/**
 * A generic property with a value contained in it.
 */
export interface Property<T>
    extends PropertyWithNoValues {

    get value(): T

}

export type BooleanProperty<B extends PossibleBoolean = PossibleBoolean, > = Property<B>;
export type NumberProperty<N extends PossibleNumber = PossibleNumber, > = Property<N>;
export type StringProperty<S extends PossibleString = PossibleString, > = Property<S>;

//region -------------------- Inferred property by a value --------------------

//region -------------------- Inferred boolean property by a value --------------------

export type PossibleBooleanValuesByInferredProperty = | boolean | string | number | null;
export type InferredAmountByBoolean<T extends boolean = boolean, > = T extends true ? 1 : T extends false ? 0 : (| 1 | 0);
export type InferredAmountByStringOnBoolean<T extends string = string, > = T extends EmptyString ? 0 : T extends Exclude<T, EmptyString> ? 1 : (| 0 | 1);

type _UnknownBooleanProperty<COMMENT extends PossibleComment, > = BooleanPropertyWithEverything<null, true, null, COMMENT>;

export type PossibleInferredBooleanProperty<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, DOES_HAVE_AN_AMOUNT extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > =
    CAN_BE_NOT_APPLICABLE extends true
        ? DOES_HAVE_AN_AMOUNT extends true
            ? HAVE_A_COMMENT extends true ? InferredBooleanPropertyWithEverything<T, COMMENT> :                    InferredBooleanPropertyThatCanBeNotApplicableWithAmount<T>
            : HAVE_A_COMMENT extends true ? InferredBooleanPropertyThatCanBeNotApplicableWithComment<T, COMMENT> : InferredBooleanPropertyThatCanBeNotApplicable<T>
        : DOES_HAVE_AN_AMOUNT extends true
            ? HAVE_A_COMMENT extends true ? InferredBooleanPropertyWithAmountAndComment<T, COMMENT> :              InferredBooleanPropertyWithAmount<T>
            : HAVE_A_COMMENT extends true ? InferredBooleanPropertyWithComment<T, COMMENT> :                       InferredBooleanProperty<T>;

//region -------------------- Basic inferred boolean property --------------------

export type InferredBooleanProperty<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =
      T extends null    ? NullProperty
    : T extends Unknown ? _UnknownBooleanProperty<null>
    : T extends boolean ? BooleanProperty<T>
    : T extends string  ? BooleanPropertyWithComment<true, T>
    : T extends number  ? BooleanPropertyWithAmount<true, T>
    : never;
export type InferredBooleanPropertyThatCanBeNotApplicable<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =
      T extends null    ? NotApplicableProperty
    : T extends Unknown ? _UnknownBooleanProperty<null>
    : T extends boolean ? BooleanPropertyThatCanBeUnknown<T, false>
    : T extends string  ? BooleanPropertyThatCanBeUnknownWithComment<true, false, T>
    : T extends number  ? BooleanPropertyThatCanBeUnknownWithAmount<true, false, T>
    : never;

//endregion -------------------- Basic inferred boolean property --------------------
//region -------------------- Inferred boolean property (with amount) --------------------

export type InferredBooleanPropertyWithAmount<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =
      T extends null    ? NullProperty
    : T extends Unknown ? _UnknownBooleanProperty<null>
    : T extends boolean ? T extends boolean
        ? (| BooleanPropertyThatCanBeUnknownWithAmount<true, false, InferredAmountByBoolean<true>> | BooleanPropertyThatCanBeUnknownWithAmount<false, false, InferredAmountByBoolean<false>>)
        : BooleanPropertyThatCanBeUnknownWithAmount<T, false, InferredAmountByBoolean<T>>
    : T extends string  ? BooleanPropertyWithEverything<true, false, InferredAmountByStringOnBoolean<T>, T>
    : T extends number  ? BooleanPropertyThatCanBeUnknownWithAmount<true, false, T>
    : never;
export type InferredBooleanPropertyThatCanBeNotApplicableWithAmount<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =
      T extends null    ? NotApplicableProperty
    : T extends Unknown ? _UnknownBooleanProperty<null>
    : T extends boolean ? T extends boolean
        ? (| BooleanPropertyWithAmount<true, InferredAmountByBoolean<true>> | BooleanPropertyWithAmount<false, InferredAmountByBoolean<false>>)
        : BooleanPropertyWithAmount<T, InferredAmountByBoolean<T>>
    : T extends string  ? BooleanPropertyWithAmountAndComment<true, InferredAmountByStringOnBoolean<T>, T>
    : T extends number  ? BooleanPropertyWithAmount<true, T>
    : never;

//endregion -------------------- Inferred boolean property (with amount) --------------------
//region -------------------- Inferred boolean property (with comment) --------------------

export type InferredBooleanPropertyWithComment<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > =
      T extends null    ? NullProperty
    : T extends Unknown ? _UnknownBooleanProperty<COMMENT>
    : T extends boolean ? BooleanPropertyWithComment<T, COMMENT>
    : T extends string  ? BooleanPropertyWithComment<true, T>
    : T extends number  ? BooleanPropertyWithAmountAndComment<true, T, COMMENT>
    : never;
export type InferredBooleanPropertyThatCanBeNotApplicableWithComment<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > =
      T extends null    ? NotApplicableProperty
    : T extends Unknown ? _UnknownBooleanProperty<COMMENT>
    : T extends boolean ? BooleanPropertyThatCanBeUnknownWithComment<T, false, COMMENT>
    : T extends string  ? BooleanPropertyThatCanBeUnknownWithComment<true, false, T>
    : T extends number  ? BooleanPropertyWithEverything<true, false, T, COMMENT>
    : never;

//endregion -------------------- Inferred boolean property (with comment) --------------------
//region -------------------- Inferred boolean property (with amount & comment) --------------------

export type InferredBooleanPropertyWithAmountAndComment<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment,> =
      T extends null    ? NullProperty
    : T extends Unknown ? _UnknownBooleanProperty<COMMENT>
    : T extends boolean ? T extends boolean
        ? (| BooleanPropertyWithAmountAndComment<true, InferredAmountByBoolean<true>, COMMENT> | BooleanPropertyWithAmountAndComment<false, InferredAmountByBoolean<false>, COMMENT>)
        : BooleanPropertyWithAmountAndComment<T, InferredAmountByBoolean<T>, COMMENT>
    : T extends string  ? BooleanPropertyWithAmountAndComment<true, InferredAmountByStringOnBoolean<T>, T>
    : T extends number  ? BooleanPropertyWithAmountAndComment<true, T, COMMENT>
    : never;
export type InferredBooleanPropertyWithEverything<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment,> =
      T extends null    ? NotApplicableProperty
    : T extends Unknown ? _UnknownBooleanProperty<COMMENT>
    : T extends boolean ? T extends boolean
        ? (| BooleanPropertyWithEverything<true, false, InferredAmountByBoolean<true>, COMMENT> | BooleanPropertyWithEverything<false, false, InferredAmountByBoolean<false>, COMMENT>)
        : BooleanPropertyWithEverything<T, false, InferredAmountByBoolean<T>, COMMENT>
    : T extends string  ? BooleanPropertyWithEverything<true, false, InferredAmountByStringOnBoolean<T>, T>
    : T extends number  ? BooleanPropertyWithEverything<true, false, T, COMMENT>
    : never;

//endregion -------------------- Inferred boolean property (with amount & comment) --------------------

//endregion -------------------- Inferred boolean property by a value --------------------
//region -------------------- Inferred number property by a value --------------------

export type PossibleNumberValuesByInferredProperty = | string | number | null;

type _UnknownNumberProperty<COMMENT extends PossibleComment, > = NumberPropertyWithEverything<null, true, null, COMMENT>;

export type PossibleInferredNumberProperty<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > =
    CAN_BE_NOT_APPLICABLE extends true
        ? HAVE_A_COMMENT extends true ? InferredNumberPropertyThatCanBeNotApplicableWithComment<T, COMMENT> : InferredNumberPropertyThatCanBeNotApplicable<T>
        : HAVE_A_COMMENT extends true ? InferredNumberPropertyWithComment<T, COMMENT> :                       InferredNumberProperty<T>;

//region -------------------- Basic inferred number property --------------------

export type InferredNumberProperty<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, > =
      T extends null    ? NullProperty
    : T extends Unknown ? _UnknownNumberProperty<null>
    : T extends number  ? NumberProperty<T>
    : T extends string  ? NumberPropertyWithComment<null, T>
    : never;
export type InferredNumberPropertyThatCanBeNotApplicable<CONTAINER_WHEN_NULL, T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, > =
      T extends null    ? NotApplicableProperty
    : T extends Unknown ? _UnknownNumberProperty<null>
    : T extends number  ? NumberPropertyThatCanBeUnknown<T, false>
    : T extends string  ? NumberPropertyThatCanBeUnknownWithComment<null, false, T>
    : never;

//endregion -------------------- Basic inferred number property --------------------
//region -------------------- Inferred number property (with comment) --------------------

export type InferredNumberPropertyWithComment<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > =
    T extends null      ? NullProperty
    : T extends Unknown ? _UnknownNumberProperty<COMMENT>
    : T extends number  ? NumberPropertyWithComment<T, COMMENT>
    : T extends string  ? NumberPropertyWithComment<null, T>
    : never;
export type InferredNumberPropertyThatCanBeNotApplicableWithComment<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > =
    T extends null      ? NotApplicableProperty
    : T extends Unknown ? _UnknownNumberProperty<COMMENT>
    : T extends number  ? NumberPropertyThatCanBeUnknownWithComment<T, false, COMMENT>
    : T extends string  ? NumberPropertyThatCanBeUnknownWithComment<null, false, T>
    : never;

//endregion -------------------- Inferred number property (with comment) --------------------

//endregion -------------------- Inferred number property by a value --------------------
//region -------------------- Inferred string property by a value --------------------

export type PossibleStringValuesByInferredProperty = | string | null;

type _UnknownStringProperty<COMMENT extends PossibleComment, > = NumberPropertyWithEverything<null, true, null, COMMENT>;

export type PossibleInferredStringProperty<T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > =
    CAN_BE_NOT_APPLICABLE extends true
        ? HAVE_A_COMMENT extends true ? InferredStringPropertyThatCanBeNotApplicableWithComment<T, COMMENT> : InferredStringPropertyThatCanBeNotApplicable<T>
        : HAVE_A_COMMENT extends true ? InferredStringPropertyWithComment<T, COMMENT> :                       InferredStringProperty<T>;

//region -------------------- Basic inferred string property --------------------

export type InferredStringProperty<T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, > =
      T extends null    ? NullProperty
    : T extends Unknown ? _UnknownStringProperty<null>
    : T extends string  ? StringProperty<T>
    : never;
export type InferredStringPropertyThatCanBeNotApplicable<T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, > =
      T extends null    ? NotApplicableProperty
    : T extends Unknown ? _UnknownStringProperty<null>
    : T extends string  ? StringPropertyThatCanBeUnknown<T, false>
    : never;

//endregion -------------------- Basic inferred string property --------------------
//region -------------------- Inferred string property (with comment) --------------------

export type InferredStringPropertyWithComment<T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > =
      T extends null    ? NullProperty
    : T extends Unknown ? _UnknownStringProperty<COMMENT>
    : T extends string  ? StringPropertyWithComment<T, COMMENT>
    : never;
export type InferredStringPropertyThatCanBeNotApplicableWithComment<T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > =
      T extends null    ? NotApplicableProperty
    : T extends Unknown ? _UnknownStringProperty<COMMENT>
    : T extends string  ? StringPropertyThatCanBeUnknownWithComment<T, false, COMMENT>
    : never;

//endregion -------------------- Inferred string property (with comment) --------------------


//endregion -------------------- Inferred string property by a value --------------------

//endregion -------------------- Inferred property by a value --------------------
//region -------------------- Default values for a property --------------------

export type DEFAULT_IS_UNKNOWN = false;
export type DEFAULT_AMOUNT = null;
export type DEFAULT_COMMENT = null;

//endregion -------------------- Default values for a property --------------------
//region -------------------- Possible values for a property --------------------

export type EmptyString = '';
export type Unknown = '?';
export type NotApplicable = 'N/A';
export type NotANumber = typeof Number['NaN'];
export type PossibleBoolean<B extends boolean = boolean, > = | B | null;
export type PossibleNumber<N extends number = number, > = | N | null;
export type PossibleString<S extends string = string, > = | S | null;

//endregion -------------------- Possible values for a property --------------------
