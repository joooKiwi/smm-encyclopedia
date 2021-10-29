import type {PossibleComment}                                                                                                                                                                                                                                          from './ClassWithComment';
import type {NumberProperty, PossibleBooleanValuesByInferredProperty, PossibleInferredBooleanProperty, PossibleInferredNumberProperty, PossibleInferredStringProperty, PossibleNumberValuesByInferredProperty, PossibleStringValuesByInferredProperty, StringProperty} from './Property';
import type {BooleanPropertyWithAmountAndComment}                                                                                                                                                                                                                      from './PropertyWithAmountAndComment';
import type {BooleanPropertyWithAmount}                                                                                                                                                                                                                                from './PropertyWithAmount';
import type {BooleanPropertyWithComment, NumberPropertyWithComment}                                                                                                                                                                                                    from './PropertyWithComment';

import {BooleanPropertyWithAmountAndCommentContainer} from './boolean/BooleanPropertyWithAmountAndComment.container';
import {BooleanPropertyWithAmountContainer}           from './boolean/BooleanPropertyWithAmount.container';
import {BooleanPropertyWithCommentContainer}          from './boolean/BooleanPropertyWithComment.container';
import {BooleanPropertyWithEverythingContainer}       from './boolean/BooleanPropertyWithEverything.container';
import {NumberPropertyWithCommentContainer}           from './number/NumberPropertyWithComment.container';
import {NumberPropertyWithEverythingContainer}        from './number/NumberPropertyWithEverything.container';
import {NumberPropertyContainer}                      from './number/NumberProperty.container';
import {PropertyContainer}                            from './Property.container';
import {StringPropertyContainer}                      from './string/StringProperty.container';
import {StringPropertyWithCommentContainer}           from './string/StringPropertyWithComment.container';
import {StringPropertyWithEverythingContainer}        from './string/StringPropertyWithEverything.container';

export class PropertyProvider {

    //region -------------------- Predefined properties maps --------------------

    static readonly #BOOLEAN_FROM_STRING_MAP = new Map<string, BooleanPropertyFromString>();
    static readonly #BOOLEAN_FROM_NUMBER_MAP = new Map<number, BooleanPropertyFromNumber>();
    static readonly #STRING_FROM_STRING_MAP = new Map<string, StringPropertyFromString>();
    static readonly #NUMBER_FROM_STRING_MAP = new Map<string, NumberPropertyFromString>();
    static readonly #NUMBER_FROM_NUMBER_MAP = new Map<number, NumberPropertyFromNumber>();

    //endregion -------------------- Predefined properties maps --------------------

    private constructor() {
        throw new EvalError('This class cannot be created');
    }

    public static newNumberContainer<T extends PossibleNumberValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, >(value: T, canBeNotApplicable: CAN_BE_NOT_APPLICABLE,): PossibleInferredNumberProperty<T, CAN_BE_NOT_APPLICABLE, HAVE_A_COMMENT, null>
    public static newNumberContainer<T extends | number | null, CAN_BE_NOT_APPLICABLE extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >(value: T, canBeNotApplicable: CAN_BE_NOT_APPLICABLE, comment: COMMENT,): PossibleInferredNumberProperty<T, CAN_BE_NOT_APPLICABLE, true, COMMENT>
    public static newNumberContainer(value: PossibleNumberValuesByInferredProperty, canBeNotApplicable: boolean, comment?: PossibleComment,) {
        return this.__newContainer('number', value, canBeNotApplicable, false, comment,);
    }

    public static newStringContainer<T extends PossibleStringValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, >(value: T, canBeNotApplicable: CAN_BE_NOT_APPLICABLE,): PossibleInferredStringProperty<T, CAN_BE_NOT_APPLICABLE, HAVE_A_COMMENT, null>
    public static newStringContainer<T extends PossibleStringValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >(value: T, canBeNotApplicable: CAN_BE_NOT_APPLICABLE, comment: COMMENT,): PossibleInferredStringProperty<T, CAN_BE_NOT_APPLICABLE, true, COMMENT>
    public static newStringContainer(value: PossibleStringValuesByInferredProperty, canBeNotApplicable: boolean, comment?: PossibleComment,) {
        return this.__newContainer('string', value, canBeNotApplicable, false, comment,);
    }

    public static newBooleanContainer<T extends PossibleBooleanValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, DOES_HAVE_AN_AMOUNT extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, >(value: T, canBeNotApplicable: CAN_BE_NOT_APPLICABLE, doesHaveAnAmount: DOES_HAVE_AN_AMOUNT,): PossibleInferredBooleanProperty<T, CAN_BE_NOT_APPLICABLE, DOES_HAVE_AN_AMOUNT, HAVE_A_COMMENT, null>
    // @ts-ignore
    public static newBooleanContainer<T extends | boolean | number | null, CAN_BE_NOT_APPLICABLE extends boolean = boolean, DOES_HAVE_AN_AMOUNT extends boolean = boolean, COMMENT extends PossibleComment = PossibleComment, >(value: T, canBeNotApplicable: CAN_BE_NOT_APPLICABLE, doesHaveAnAmount: DOES_HAVE_AN_AMOUNT, comment: COMMENT,): PossibleInferredBooleanProperty<T, CAN_BE_NOT_APPLICABLE, DOES_HAVE_AN_AMOUNT, true, COMMENT>
    public static newBooleanContainer(value: PossibleBooleanValuesByInferredProperty, canBeNotApplicable: boolean, doesHaveAnAmount: boolean, comment?: PossibleComment,) {
        return this.__newContainer('boolean', value, canBeNotApplicable, doesHaveAnAmount, comment,);
    }

    private static __newContainer(type: | 'string' | 'boolean' | 'number', value: boolean | string | number | null, canBeNotApplicable: boolean, doesHaveAnAmount: boolean, comment: | string | null = null,) {
        if (value == null)
            return canBeNotApplicable ? PropertyContainer.NOT_APPLICABLE_CONTAINER : PropertyContainer.NULL_CONTAINER;
        if (value === PropertyContainer.UNKNOWN) {
            if (comment == null)
                return PropertyContainer.UNKNOWN_CONTAINER;
            switch (type) {
                case 'string':
                    return new StringPropertyWithEverythingContainer('', true, null, comment,);
                case 'boolean':
                    return new BooleanPropertyWithEverythingContainer(false, true, null, comment,);
                case 'number':
                    return new NumberPropertyWithEverythingContainer(NaN, true, null, comment);
            }
        }

        switch (type) {
            case 'boolean':
                switch (typeof value) {
                    case 'string':
                        return this.__getOrSetMap<string, BooleanPropertyFromString>(
                            value,
                            this.#BOOLEAN_FROM_STRING_MAP,
                            value => doesHaveAnAmount
                                ? new BooleanPropertyWithAmountAndCommentContainer(true, 1, value,)
                                : new BooleanPropertyWithCommentContainer(true, value,),
                        );
                    case 'boolean':
                        return doesHaveAnAmount
                            ? value ? PropertyContainer.TRUE_WITH_AMOUNT_CONTAINER : PropertyContainer.FALSE_WITH_AMOUNT_CONTAINER
                            : value ? PropertyContainer.TRUE_CONTAINER : PropertyContainer.FALSE_CONTAINER;
                    case 'number':
                        return this.__getOrSetMap<number, BooleanPropertyFromNumber>(
                            value,
                            this.#BOOLEAN_FROM_NUMBER_MAP, value => comment == null ? new BooleanPropertyWithAmountContainer(true, value,) : new BooleanPropertyWithAmountAndCommentContainer(true, value, comment,),);
                }
                throw new ReferenceError(`The boolean container cannot be created with this value "${value}".`);
            case 'string':
                if (typeof value == 'string')
                    return this.__getOrSetMap<string, StringPropertyFromString>(value, this.#STRING_FROM_STRING_MAP, value => comment == null ? new StringPropertyContainer(value,) : new StringPropertyWithCommentContainer(value, comment,),);
                throw new TypeError(`The string container cannot have a value from a number or a boolean (${value})`);
            case 'number':
                switch (typeof value) {
                    case 'string':
                        return this.__getOrSetMap<string, NumberPropertyFromString>(value, this.#NUMBER_FROM_STRING_MAP, value => new NumberPropertyWithCommentContainer(null, value,),);
                    case 'number':
                        return this.__getOrSetMap<number, NumberPropertyFromNumber>(value, this.#NUMBER_FROM_NUMBER_MAP, value => comment == null ? new NumberPropertyContainer(value,) : new NumberPropertyWithCommentContainer(value, comment,),);
                }
                throw new ReferenceError(`The number container cannot be created with the value "${value}".`);
        }
        throw new TypeError(`The ${type} container could not be created with the value "${value}".`);
    }

    private static __getOrSetMap<K, V, MAP extends Map<K, V> = Map<K, V>, >(key: K, map: MAP, callbackToCreateNew: (key: K,) => V,): V {
        if (!map.has(key))
            map.set(key, callbackToCreateNew(key));
        return map.get(key)!;
    }

}

type BooleanPropertyFromString<S extends string = string, > = BooleanPropertyWithComment<true, S>;
type BooleanPropertyFromNumber<N extends number = number, COMMENT extends PossibleComment = null, > = COMMENT extends null ? BooleanPropertyWithAmount<true, N> : BooleanPropertyWithAmountAndComment<true, N, COMMENT>;
type StringPropertyFromString<S extends string = string, COMMENT extends PossibleComment = null, > = COMMENT extends null ? StringProperty<S> : StringPropertyWithCommentContainer<S, COMMENT>;
type NumberPropertyFromNumber<COMMENT extends PossibleComment = null, > = COMMENT extends null ? NumberProperty : NumberPropertyWithComment<null, COMMENT>;
type NumberPropertyFromString<S extends string = string, > = NumberPropertyWithComment<null, S>;
