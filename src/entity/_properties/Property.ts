import type {BooleanPropertyThatCanBeUnknown, NumberPropertyThatCanBeUnknown, StringPropertyThatCanBeUnknown}                                  from './PropertyThatCanBeUnknown';
import type {BooleanPropertyThatCanBeUnknownWithComment, NumberPropertyThatCanBeUnknownWithComment, StringPropertyThatCanBeUnknownWithComment} from './PropertyThatCanBeUnknownWithComment';
import type {BooleanPropertyWithAmount}                                                                                                        from './PropertyWithAmount';
import type {BooleanPropertyWithAmountAndComment}                                                                                              from './PropertyWithAmountAndComment';
import type {BooleanPropertyWithComment, NumberPropertyWithComment, StringPropertyWithComment}                                                 from './PropertyWithComment';
import type {NotApplicableProperty, NullProperty}                                                                                              from './PropertyWithEverything';
import type {PossibleComment}                                                                                                                  from './ClassWithComment';
import type {PropertyWithNoValues}                                                                                                             from './PropertyWithNoValues';

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

type AbstractInferredBooleanProperty<CONTAINER_WHEN_NULL, T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? BooleanPropertyThatCanBeUnknown<null, true>
    : T extends boolean ? BooleanProperty<T>
    : T extends string  ? BooleanPropertyWithComment<true, T>
    : T extends number  ? BooleanPropertyWithAmount<true, T>
    : never;
type AbstractInferredBooleanPropertyWithComment<CONTAINER_WHEN_NULL, T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? BooleanPropertyThatCanBeUnknownWithComment<null, true, COMMENT>
    : T extends boolean ? BooleanPropertyWithComment<T, COMMENT>
    : T extends string  ? BooleanPropertyWithComment<true, T>
    : T extends number  ? BooleanPropertyWithAmountAndComment<true, T, COMMENT>
    : never;
export type PossibleInferredBooleanProperty<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > =
    CAN_BE_NOT_APPLICABLE extends true
        ? HAVE_A_COMMENT extends true ? InferredBooleanPropertyThatCanBeNotApplicableWithComment<T, COMMENT> : InferredBooleanPropertyThatCanBeNotApplicable<T>
        : HAVE_A_COMMENT extends true ? InferredBooleanPropertyWithComment<T, COMMENT> :                       InferredBooleanProperty<T>;

export type InferredBooleanProperty<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > = AbstractInferredBooleanProperty<NullProperty, T>;
export type InferredBooleanPropertyWithComment<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = AbstractInferredBooleanPropertyWithComment<NullProperty, T, COMMENT>;
export type InferredBooleanPropertyThatCanBeNotApplicable<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, > = AbstractInferredBooleanProperty<NotApplicableProperty, T>;
export type InferredBooleanPropertyThatCanBeNotApplicableWithComment<T extends PossibleBooleanValuesByInferredProperty = PossibleBooleanValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = AbstractInferredBooleanPropertyWithComment<NotApplicableProperty, T, COMMENT>;

//endregion -------------------- Inferred boolean property by a value --------------------
//region -------------------- Inferred number property by a value --------------------

export type PossibleNumberValuesByInferredProperty = | string | number | null;

type AbstractInferredNumberProperty<CONTAINER_WHEN_NULL, T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, > =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? NumberPropertyThatCanBeUnknown<null, true>
    : T extends number  ? NumberProperty<T>
    : T extends string  ? NumberPropertyWithComment<null, T>
    : never;
type AbstractInferredNumberPropertyWithComment<CONTAINER_WHEN_NULL, T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > =
    T extends null      ? CONTAINER_WHEN_NULL
    : T extends Unknown ? NumberPropertyThatCanBeUnknownWithComment<null, true, COMMENT>
    : T extends number  ? NumberPropertyWithComment<T, COMMENT>
    : T extends string  ? NumberPropertyWithComment<null, T>
    : never;
export type PossibleInferredNumberProperty<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > =
    CAN_BE_NOT_APPLICABLE extends true
        ? HAVE_A_COMMENT extends true ? InferredNumberPropertyThatCanBeNotApplicableWithComment<T, COMMENT> : InferredNumberPropertyThatCanBeNotApplicable<T>
        : HAVE_A_COMMENT extends true ? InferredNumberPropertyWithComment<T, COMMENT> :                       InferredNumberProperty<T>;

export type InferredNumberProperty<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, > = AbstractInferredNumberProperty<NullProperty, T>;
export type InferredNumberPropertyWithComment<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = AbstractInferredNumberPropertyWithComment<NullProperty, T, COMMENT>;
export type InferredNumberPropertyThatCanBeNotApplicable<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, > = AbstractInferredNumberProperty<NotApplicableProperty, T>;
export type InferredNumberPropertyThatCanBeNotApplicableWithComment<T extends PossibleNumberValuesByInferredProperty = PossibleNumberValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = AbstractInferredNumberPropertyWithComment<NotApplicableProperty, T,COMMENT>;

//endregion -------------------- Inferred number property by a value --------------------
//region -------------------- Inferred string property by a value --------------------

export type PossibleStringValuesByInferredProperty = | string | null;

type AbstractInferredStringProperty<CONTAINER_WHEN_NULL, T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, > =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? StringPropertyThatCanBeUnknown<null, true>
    : T extends string  ? StringPropertyWithComment<null, T>
    : never;
type AbstractInferredStringPropertyWithComment<CONTAINER_WHEN_NULL, T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > =
      T extends null    ? CONTAINER_WHEN_NULL
    : T extends Unknown ? StringPropertyThatCanBeUnknownWithComment<null, true, COMMENT>
    : T extends string  ? StringPropertyWithComment<T, COMMENT>
    : never;
export type PossibleInferredStringProperty<T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, > =
    CAN_BE_NOT_APPLICABLE extends true
        ? HAVE_A_COMMENT extends true ? InferredStringPropertyThatCanBeNotApplicableWithComment<T, COMMENT> : InferredStringPropertyThatCanBeNotApplicable<T>
        : HAVE_A_COMMENT extends true ? InferredStringPropertyWithComment<T, COMMENT> :                       InferredStringProperty<T>;

export type InferredStringProperty<T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, > = AbstractInferredStringProperty<NullProperty, T>;
export type InferredStringPropertyWithComment<T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = AbstractInferredStringPropertyWithComment<NullProperty, T, COMMENT>;
export type InferredStringPropertyThatCanBeNotApplicable<T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, > = AbstractInferredStringProperty<NotApplicableProperty, T>;
export type InferredStringPropertyThatCanBeNotApplicableWithComment<T extends PossibleStringValuesByInferredProperty = PossibleStringValuesByInferredProperty, COMMENT extends PossibleComment = PossibleComment, > = AbstractInferredStringPropertyWithComment<NotApplicableProperty, T, COMMENT>;

//endregion -------------------- Inferred string property by a value --------------------

//endregion -------------------- Inferred property by a value --------------------
//region -------------------- Default values for a property --------------------

export type DEFAULT_IS_UNKNOWN = false;
export type DEFAULT_AMOUNT = null;
export type DEFAULT_COMMENT = null;

//endregion -------------------- Default values for a property --------------------
//region -------------------- Possible values for a property --------------------

export type Unknown = '?';
export type NotApplicable = 'N/A';
export type PossibleBoolean<B extends boolean = boolean, > = | B | null;
export type PossibleNumber<N extends number = number, > = | N | null;
export type PossibleString<S extends string = string, > = | S | null;

//endregion -------------------- Possible values for a property --------------------
