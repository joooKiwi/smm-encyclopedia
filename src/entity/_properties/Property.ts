import type {BooleanPropertyWithAmount}                                                                        from './PropertyWithAmount';
import type {BooleanPropertyWithAmountAndComment}                                                              from './PropertyWithAmountAndComment';
import type {BooleanPropertyWithComment, NumberPropertyWithComment, StringPropertyWithComment}                 from './PropertyWithComment';
import type {BooleanPropertyWithEverything, NotApplicableProperty, NullProperty, NumberPropertyWithEverything} from './PropertyWithEverything';
import type {PossibleComment}                                                                                  from './ClassWithComment';
import type {PropertyWithNoValues}                                                                             from './PropertyWithNoValues';

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
export type InferredAmountByBoolean<T extends boolean = boolean, > = T extends true ? 1 : 0;
export type InferredAmountByStringOnBoolean<T extends string = string, > = T extends '' ? 0 : 1;

type _UnknownBooleanProperty<COMMENT extends PossibleComment, > = BooleanPropertyWithEverything<null, true, null, COMMENT>;

type _InferredBooleanProperty<CONTAINER_WHEN_NULL, T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? _UnknownBooleanProperty<null>
    : T extends boolean ? T extends true
        ? BooleanProperty<true>
        : BooleanProperty<false>
    : T extends string  ? BooleanPropertyWithComment<true, T>
    : T extends number  ? BooleanPropertyWithAmount<true, T>
    : never;
type _InferredBooleanPropertyWithAmount<CONTAINER_WHEN_NULL, T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? _UnknownBooleanProperty<null>
    : T extends boolean ? T extends true
        ? BooleanPropertyWithAmount<true, InferredAmountByBoolean<true>>
        : BooleanPropertyWithAmount<false, InferredAmountByBoolean<false>>
    : T extends string  ? BooleanPropertyWithAmountAndComment<true, InferredAmountByStringOnBoolean<T>, T>
    : T extends number  ? BooleanPropertyWithAmount<true, T>
    : never;
type _InferredBooleanPropertyWithComment<CONTAINER_WHEN_NULL, T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? _UnknownBooleanProperty<COMMENT>
    : T extends boolean ? T extends true
        ? BooleanPropertyWithComment<true, COMMENT>
        : BooleanPropertyWithComment<false, COMMENT>
    : T extends string  ? BooleanPropertyWithComment<true, T>
    : T extends number  ? BooleanPropertyWithAmountAndComment<true, T, COMMENT>
    : never;
type _InferredBooleanPropertyWithAmountAndComment<CONTAINER_WHEN_NULL, T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment,> =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? _UnknownBooleanProperty<COMMENT>
    : T extends boolean ? T extends true
        ? BooleanPropertyWithAmountAndComment<true, InferredAmountByBoolean<true>, COMMENT>
        : BooleanPropertyWithAmountAndComment<false, InferredAmountByBoolean<false>, COMMENT>
    : T extends string  ? BooleanPropertyWithAmountAndComment<true, InferredAmountByStringOnBoolean<T>, T>
    : T extends number  ? BooleanPropertyWithAmountAndComment<true, T, COMMENT>
    : never;
type _InferredBooleanPropertyWithEverything<CONTAINER_WHEN_NULL, T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment,> =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? _UnknownBooleanProperty<COMMENT>
    : T extends boolean ? T extends true
        ? BooleanPropertyWithEverything<true, false, InferredAmountByBoolean<true>, COMMENT>
        : BooleanPropertyWithEverything<false, false, InferredAmountByBoolean<false>, COMMENT>
    : T extends string  ? BooleanPropertyWithEverything<true, false, InferredAmountByStringOnBoolean<T>, T>
    : T extends number  ? BooleanPropertyWithEverything<true, false, T, COMMENT>
    : never;
export type PossibleInferredBooleanProperty<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, DOES_HAVE_AN_AMOUNT extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > =
    CAN_BE_NOT_APPLICABLE extends true
        ? DOES_HAVE_AN_AMOUNT extends true
            ? HAVE_A_COMMENT extends true ? InferredBooleanPropertyWithEverything<T, COMMENT> :                    InferredBooleanPropertyThatCanBeNotApplicableWithAmount<T>
            : HAVE_A_COMMENT extends true ? InferredBooleanPropertyThatCanBeNotApplicableWithComment<T, COMMENT> : InferredBooleanPropertyThatCanBeNotApplicable<T>
        : DOES_HAVE_AN_AMOUNT extends true
            ? HAVE_A_COMMENT extends true ? InferredBooleanPropertyWithAmountAndComment<T, COMMENT> :              InferredBooleanPropertyWithAmount<T>
            : HAVE_A_COMMENT extends true ? InferredBooleanPropertyWithComment<T, COMMENT> :                       InferredBooleanProperty<T>;

export type InferredBooleanProperty                                 <T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =                                                    _InferredBooleanProperty<NullProperty, T>;
export type InferredBooleanPropertyWithAmount                       <T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =                                                    _InferredBooleanPropertyWithAmount<NullProperty, T>;
export type InferredBooleanPropertyWithComment                      <T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = _InferredBooleanPropertyWithComment<NullProperty, T, COMMENT>;
export type InferredBooleanPropertyWithAmountAndComment             <T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = _InferredBooleanPropertyWithAmountAndComment<NullProperty, T, COMMENT>;
export type InferredBooleanPropertyThatCanBeNotApplicable           <T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =                                                    _InferredBooleanProperty<NotApplicableProperty, T>;
export type InferredBooleanPropertyThatCanBeNotApplicableWithAmount <T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =                                                    _InferredBooleanPropertyWithAmount<NotApplicableProperty, T>;
export type InferredBooleanPropertyThatCanBeNotApplicableWithComment<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = _InferredBooleanPropertyWithComment<NotApplicableProperty, T, COMMENT>;
export type InferredBooleanPropertyWithEverything                   <T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = _InferredBooleanPropertyWithEverything<NotApplicableProperty, T, COMMENT>;

//endregion -------------------- Inferred boolean property by a value --------------------
//region -------------------- Inferred number property by a value --------------------

export type PossibleNumberValuesByInferredProperty = | string | number | null;

type _UnknownNumberProperty<COMMENT extends PossibleComment, > = NumberPropertyWithEverything<null, true, null, COMMENT>;

type _InferredNumberProperty<CONTAINER_WHEN_NULL, T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, > =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? _UnknownNumberProperty<null>
    : T extends number  ? NumberProperty<T>
    : T extends string  ? NumberPropertyWithComment<null, T>
    : never;
type _InferredNumberPropertyWithComment<CONTAINER_WHEN_NULL, T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > =
    T extends null      ? CONTAINER_WHEN_NULL
    : T extends Unknown ? _UnknownNumberProperty<COMMENT>
    : T extends number  ? NumberPropertyWithComment<T, COMMENT>
    : T extends string  ? NumberPropertyWithComment<null, T>
    : never;
export type PossibleInferredNumberProperty<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > =
    CAN_BE_NOT_APPLICABLE extends true
        ? HAVE_A_COMMENT extends true ? InferredNumberPropertyThatCanBeNotApplicableWithComment<T, COMMENT> : InferredNumberPropertyThatCanBeNotApplicable<T>
        : HAVE_A_COMMENT extends true ? InferredNumberPropertyWithComment<T, COMMENT> :                       InferredNumberProperty<T>;

export type InferredNumberProperty                                 <T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, > =                                                    _InferredNumberProperty<NullProperty, T>;
export type InferredNumberPropertyWithComment                      <T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = _InferredNumberPropertyWithComment<NullProperty, T, COMMENT>;
export type InferredNumberPropertyThatCanBeNotApplicable           <T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, > =                                                    _InferredNumberProperty<NotApplicableProperty, T>;
export type InferredNumberPropertyThatCanBeNotApplicableWithComment<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = _InferredNumberPropertyWithComment<NotApplicableProperty, T,COMMENT>;

//endregion -------------------- Inferred number property by a value --------------------
//region -------------------- Inferred string property by a value --------------------

export type PossibleStringValuesByInferredProperty = | string | null;

type _UnknownStringProperty<COMMENT extends PossibleComment, > = NumberPropertyWithEverything<null, true, null, COMMENT>;

type _InferredStringProperty<CONTAINER_WHEN_NULL, T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, > =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? _UnknownStringProperty<null>
    : T extends string  ? StringProperty<T>
    : never;
type _InferredStringPropertyWithComment<CONTAINER_WHEN_NULL, T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? _UnknownStringProperty<COMMENT>
    : T extends string  ? StringPropertyWithComment<T, COMMENT>
    : never;
export type PossibleInferredStringProperty<T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > =
    CAN_BE_NOT_APPLICABLE extends true
        ? HAVE_A_COMMENT extends true ? InferredStringPropertyThatCanBeNotApplicableWithComment<T, COMMENT> : InferredStringPropertyThatCanBeNotApplicable<T>
        : HAVE_A_COMMENT extends true ? InferredStringPropertyWithComment<T, COMMENT> :                       InferredStringProperty<T>;

export type InferredStringProperty                                 <T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, > =                                                    _InferredStringProperty<NullProperty, T>;
export type InferredStringPropertyWithComment                      <T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = _InferredStringPropertyWithComment<NullProperty, T, COMMENT>;
export type InferredStringPropertyThatCanBeNotApplicable           <T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, > =                                                    _InferredStringProperty<NotApplicableProperty, T>;
export type InferredStringPropertyThatCanBeNotApplicableWithComment<T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = _InferredStringPropertyWithComment<NotApplicableProperty, T, COMMENT>;

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
