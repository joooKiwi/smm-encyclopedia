import type {BooleanPropertyWithAmountAndComment}                                                                                                                                                                              from 'core/_properties/PropertyWithAmountAndComment'
import type {BooleanPropertyWithAmount}                                                                                                                                                                                        from 'core/_properties/PropertyWithAmount'
import type {BooleanPropertyWithComment, NumberPropertyWithComment}                                                                                                                                                            from 'core/_properties/PropertyWithComment'
import type {NumberProperty, PossibleBooleanValuesByInferredProperty, PossibleInferredBooleanProperty, PossibleInferredNumberProperty, PossibleInferredStringProperty, PossibleNumberValuesByInferredProperty, StringProperty} from 'core/_properties/Property'

import {PropertyContainer}                            from 'core/_properties/Property.container'
import {BooleanPropertyWithAmountAndCommentContainer} from 'core/_properties/boolean/BooleanPropertyWithAmountAndComment.container'
import {BooleanPropertyWithAmountContainer}           from 'core/_properties/boolean/BooleanPropertyWithAmount.container'
import {BooleanPropertyWithCommentContainer}          from 'core/_properties/boolean/BooleanPropertyWithComment.container'
import {BooleanPropertyWithEverythingContainer}       from 'core/_properties/boolean/BooleanPropertyWithEverything.container'
import {NumberPropertyContainer}                      from 'core/_properties/number/NumberProperty.container'
import {NumberPropertyWithCommentContainer}           from 'core/_properties/number/NumberPropertyWithComment.container'
import {NumberPropertyWithEverythingContainer}        from 'core/_properties/number/NumberPropertyWithEverything.container'
import {StringPropertyContainer}                      from 'core/_properties/string/StringProperty.container'
import {StringPropertyWithCommentContainer}           from 'core/_properties/string/StringPropertyWithComment.container'
import {StringPropertyWithEverythingContainer}        from 'core/_properties/string/StringPropertyWithEverything.container'
import {UNKNOWN_CHARACTER}                            from 'util/commonVariables'

export class PropertyProvider {

    //region -------------------- Predefined properties maps --------------------

    static readonly #BOOLEAN_FROM_STRING_MAP = new Map<string, BooleanPropertyFromString>()
    static readonly #BOOLEAN_FROM_NUMBER_MAP = new Map<number, BooleanPropertyFromNumber>()
    static readonly #STRING_FROM_STRING_MAP = new Map<string, StringPropertyFromString>()
    static readonly #NUMBER_FROM_STRING_MAP = new Map<string, NumberPropertyFromString>()
    static readonly #NUMBER_FROM_NUMBER_MAP = new Map<number, NumberPropertyFromNumber>()

    //endregion -------------------- Predefined properties maps --------------------

    private constructor() {
        throw new EvalError('This class cannot be created')
    }

    public static newNumberContainer<T extends PossibleNumberValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, >(value: T, canBeNotApplicable: CAN_BE_NOT_APPLICABLE,): PossibleInferredNumberProperty<T, CAN_BE_NOT_APPLICABLE, HAVE_A_COMMENT, null>
    public static newNumberContainer<T extends NullOrNumber, CAN_BE_NOT_APPLICABLE extends boolean = boolean, COMMENT extends NullOrString = NullOrString, >(value: T, canBeNotApplicable: CAN_BE_NOT_APPLICABLE, comment: COMMENT,): PossibleInferredNumberProperty<T, CAN_BE_NOT_APPLICABLE, true, COMMENT>
    public static newNumberContainer(value: PossibleNumberValuesByInferredProperty, canBeNotApplicable: boolean, comment?: NullOrString,) {
        return this.#newContainer('number', value, canBeNotApplicable, false, comment,)
    }

    public static newStringContainer<T extends NullOrString, CAN_BE_NOT_APPLICABLE extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, >(value: T, canBeNotApplicable: CAN_BE_NOT_APPLICABLE,): PossibleInferredStringProperty<T, CAN_BE_NOT_APPLICABLE, HAVE_A_COMMENT, null>
    public static newStringContainer<T extends NullOrString, CAN_BE_NOT_APPLICABLE extends boolean = boolean, COMMENT extends NullOrString = NullOrString, >(value: T, canBeNotApplicable: CAN_BE_NOT_APPLICABLE, comment: COMMENT,): PossibleInferredStringProperty<T, CAN_BE_NOT_APPLICABLE, true, COMMENT>
    public static newStringContainer(value: NullOrString, canBeNotApplicable: boolean, comment?: NullOrString,) {
        return this.#newContainer('string', value, canBeNotApplicable, false, comment,)
    }

    public static newBooleanContainer<T extends PossibleBooleanValuesByInferredProperty, CAN_BE_NOT_APPLICABLE extends boolean = boolean, DOES_HAVE_AN_AMOUNT extends boolean = boolean, HAVE_A_COMMENT extends boolean = boolean, >(value: T, canBeNotApplicable: CAN_BE_NOT_APPLICABLE, doesHaveAnAmount: DOES_HAVE_AN_AMOUNT,): PossibleInferredBooleanProperty<T, CAN_BE_NOT_APPLICABLE, DOES_HAVE_AN_AMOUNT, HAVE_A_COMMENT, null>
    // @ts-ignore
    public static newBooleanContainer<T extends NullOr<| boolean | number>, CAN_BE_NOT_APPLICABLE extends boolean = boolean, DOES_HAVE_AN_AMOUNT extends boolean = boolean, COMMENT extends NullOrString = NullOrString, >(value: T, canBeNotApplicable: CAN_BE_NOT_APPLICABLE, doesHaveAnAmount: DOES_HAVE_AN_AMOUNT, comment: COMMENT,): PossibleInferredBooleanProperty<T, CAN_BE_NOT_APPLICABLE, DOES_HAVE_AN_AMOUNT, true, COMMENT>
    public static newBooleanContainer(value: PossibleBooleanValuesByInferredProperty, canBeNotApplicable: boolean, doesHaveAnAmount: boolean, comment?: NullOrString,) {
        return this.#newContainer('boolean', value, canBeNotApplicable, doesHaveAnAmount, comment,)
    }

    static #newContainer(type: | 'string' | 'boolean' | 'number', value: Nullable<| boolean | string | number>, canBeNotApplicable: boolean, doesHaveAnAmount: boolean, comment: NullableString = null,) {
        if (value == null)
            return canBeNotApplicable ? PropertyContainer.NOT_APPLICABLE_CONTAINER : PropertyContainer.NULL_CONTAINER
        if (value === UNKNOWN_CHARACTER) {
            if (comment == null)
                return PropertyContainer.UNKNOWN_CONTAINER
            switch (type) {
                case 'string':
                    return new StringPropertyWithEverythingContainer('', true, null, comment,)
                case 'boolean':
                    return new BooleanPropertyWithEverythingContainer(false, true, null, comment,)
                case 'number':
                    return new NumberPropertyWithEverythingContainer(NaN, true, null, comment)
            }
        }

        switch (type) {
            case 'boolean':
                switch (typeof value) {
                    case 'string':
                        return this.#getOrSetMap<string, BooleanPropertyFromString>(
                            value,
                            this.#BOOLEAN_FROM_STRING_MAP,
                            value => doesHaveAnAmount
                                ? new BooleanPropertyWithAmountAndCommentContainer(true, 1, value,)
                                : new BooleanPropertyWithCommentContainer(true, value,),
                        )
                    case 'boolean':
                        return doesHaveAnAmount
                            ? value ? PropertyContainer.TRUE_WITH_AMOUNT_CONTAINER : PropertyContainer.FALSE_WITH_AMOUNT_CONTAINER
                            : value ? PropertyContainer.TRUE_CONTAINER : PropertyContainer.FALSE_CONTAINER
                    case 'number':
                        return this.#getOrSetMap<number, BooleanPropertyFromNumber>(
                            value,
                            this.#BOOLEAN_FROM_NUMBER_MAP, value => comment == null ? new BooleanPropertyWithAmountContainer(true, value,) : new BooleanPropertyWithAmountAndCommentContainer(true, value, comment,),)
                }
                throw new ReferenceError(`The boolean container cannot be created with this value "${value}".`)
            case 'string':
                if (typeof value == 'string')
                    return this.#getOrSetMap<string, StringPropertyFromString>(value, this.#STRING_FROM_STRING_MAP, value => comment == null ? new StringPropertyContainer(value,) : new StringPropertyWithCommentContainer(value, comment,),)
                throw new TypeError(`The string container cannot have a value from a number or a boolean (${value})`)
            case 'number':
                switch (typeof value) {
                    case 'string':
                        return this.#getOrSetMap<string, NumberPropertyFromString>(value, this.#NUMBER_FROM_STRING_MAP, value => new NumberPropertyWithCommentContainer(null, value,),)
                    case 'number':
                        return this.#getOrSetMap<number, NumberPropertyFromNumber>(value, this.#NUMBER_FROM_NUMBER_MAP, value => comment == null ? new NumberPropertyContainer(value,) : new NumberPropertyWithCommentContainer(value, comment,),)
                }
                throw new ReferenceError(`The number container cannot be created with the value "${value}".`)
        }
        throw new TypeError(`The ${type} container could not be created with the value "${value}".`)
    }

    static #getOrSetMap<K, V, MAP extends Map<K, V> = Map<K, V>, >(key: K, map: MAP, callbackToCreateNew: (key: K,) => V,): V {
        if (!map.has(key))
            map.set(key, callbackToCreateNew(key))
        return map.get(key)!
    }

}

type BooleanPropertyFromString<S extends string = string, > = BooleanPropertyWithComment<true, S>
type BooleanPropertyFromNumber<N extends number = number, COMMENT extends NullOrString = null, > = COMMENT extends null ? BooleanPropertyWithAmount<true, N> : BooleanPropertyWithAmountAndComment<true, N, COMMENT>
type StringPropertyFromString<S extends string = string, COMMENT extends NullOrString = null, > = COMMENT extends null ? StringProperty<S> : StringPropertyWithCommentContainer<S, COMMENT>
type NumberPropertyFromNumber<COMMENT extends NullOrString = null, > = COMMENT extends null ? NumberProperty : NumberPropertyWithComment<null, COMMENT>
type NumberPropertyFromString<S extends string = string, > = NumberPropertyWithComment<null, S>
