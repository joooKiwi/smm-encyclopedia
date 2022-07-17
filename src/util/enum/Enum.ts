import type {Enumerable}       from './Enumerable';
import type {EnumerableStatic} from './EnumerableStatic';
import type {EnumName}         from './Enum.types';

/**
 * <p>
 *  The first possible instance of an enum implementation using self reference instead of string or number.
 * </p>
 *
 * <p>
 *  Even though it's custom-made, it requires some custom implementation to work properly.
 *  It can have everything that a normal class have.
 *  But everything should be declared in statically in order to work as intended.
 * </p>
 *
 * <code>
 *     class SubEnum extends Enum {
 *
 *         public static readonly SUB_SUB_ENUM_1 = new class extends SubEnum(arguments);
 *         public static readonly SUB_SUB_ENUM_2 = new class extends SubEnum(arguments);
 *         public static readonly SUB_SUB_ENUM_3 = new class extends SubEnum(arguments);
 *         public static readonly SUB_SUB_ENUM_4 = new class extends SubEnum(arguments);
 *
 *         private constructor(argumentsReceived: any,){
 *             super();
 *         }
 *
 *
 *         protected get _static(): StaticReference<SubEnum> {
 *             return SubEnum;
 *         }
 *
 *          public static getValue(value: | null | undefined,): null
 *          public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
 *          public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
 *          public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
 *          public static getValue<S extends PossibleStringValue = PossibleStringValue, >(value: S,): EnumByPossibleString<S>
 *          public static getValue<S extends string = string, >(value: S,): EnumByString<S>
 *          public static getValue<I extends SubEnum = SubEnum, >(instance: I,): I
 *          public static getValue(value: PossibleNonNullableValue,): EveryLanguages
 *          public static getValue(value: PossibleValue,): | SubEnum | null
 *          public static getValue(value: PossibleValue,) {
 *              return Enum.getValueOn(this, value,);
 *          }
 *
 *          public static get values(): EnumArray {
 *              return Enum.getValuesOn(this);
 *          }
 *
 *          public static [Symbol.iterator]() {
 *              return this.values[Symbol.iterator]();
 *          }
 *
 *     }
 * <code/><br/>
 *
 * <p>
 *  Then, with the proper implementation, everything for a class-based enum is present.
 * </p><br/>
 *
 */
export abstract class Enum<O extends number = number, N extends string = string, >
    implements Enumerable<O, N> {

    //region -------------------- Enum fields --------------------

    static readonly #DEFAULT_NULL_DEFAULT_ARRAY = [null, null,] as const;
    static readonly #PROTOTYPE_NAME = 'prototype';
    /**
     * <p>
     *  The excluded name from the values of the current enum.
     * </p>
     *
     * <code>
     *      class SubEnum extends Enum {
     *
     *         public static readonly SIMPLE_SUB_SUB_ENUM = new class extends SubEnum(arguments);
     *         public static readonly IGNORED_SUB_SUB_ENUM = new class extends SubEnum(arguments);
     *
     *
     *         protected static readonly _EXCLUDED_NAMES: readonly string[] = ['IGNORED_SUB_SUB_ENUM',];
     *
     *          ...
     *     }
     * </code>
     *
     * @see EnumerableStatic.getValues
     */
    protected static readonly _EXCLUDED_NAMES: readonly string[] = [];
    /**
     * <p>
     *  The parent {@link Enum enum} of the current {@link Enum enum}.<br/>
     * </p>
     *
     * <p>
     *  It is retrieved by the {@link EnumerableStatic.getValue parent getValue} method
     *  in order to call it.
     * </p>
     *
     * <code>
     *      class SubEnum extends ParentEnum {
     *
     *         public static readonly SUB_SUB_ENUM_1 = new class extends SubEnum(arguments);
     *         public static readonly SUB_SUB_ENUM_2 = new class extends SubEnum(arguments);
     *         public static readonly SUB_SUB_ENUM_3 = new class extends SubEnum(arguments);
     *
     *
     *         protected static readonly _PARENT: StaticReference<ParentEnum> = ParentEnum;//optional
     *
     *          ...
     *     }
     * </code>
     *
     * @see EnumerableStatic.getValue
     */
        // @ts-ignore
    protected static readonly _PARENT: EnumerableStatic<any, any> = Enum;
    static readonly #NUMBER_ONLY_REGEX = /^\d+$/;
    /**
     * The default name used for the default value stored by the current instance.
     *
     * @see Enum.getDefaultOn
     * @see Enum.setDefaultOn
     * @see Enum.getNonNullDefaultOn
     * @see Enum.setNonNullDefaultOn
     */
    protected static _DEFAULT_NAME = '_DEFAULT';

    static readonly #LAST_ORDINAL_MAP = new Map<EnumerableStatic, number>();
    static readonly #ORDINAL_MAP = new Map<Enumerable, number>();
    static readonly #NAME_MAP = new Map<Enumerable, string>();
    static readonly #DEFAULT_MAP = new Map<EnumerableStatic, | Enumerable | null>();
    static readonly #VALUES_MAP = new Map<EnumerableStatic, readonly Enumerable[]>();

    #name?: N;
    readonly #ordinal: O;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Enum static methods --------------------

    /**
     * <p>
     *  Initialise everything for the current instance.
     * </p>
     *
     * <p>
     *  It retrieves every values that are not from a getter or setter.
     *  It also ignores the values based on {@link _EXCLUDED_NAMES}.
     * </p>
     *
     * <p>
     *  The initialisation includes:
     *  <ul>
     *      <li>default value</li>
     *      <li>values map</li>
     *      <li>names map</li>
     *      <li>ordinals map</li>
     *  </ul>
     * </p>
     *
     * @param instance the static instance to initialise
     */
    static #initialiseOn(instance: EnumerableStatic,): typeof Enum
    static #initialiseOn(instance: EnumerableStatic & typeof Enum,) {
        const everyProperties = (Object.entries(Object.getOwnPropertyDescriptors(instance))
            .filter(([, property,]) => property.get == null && property.set == null)
            .filter(([name,]) => name !== this.#PROTOTYPE_NAME)
            .filter(([name,]) => !instance._EXCLUDED_NAMES.includes(name))
            .filter(([name,]) => !this.#NUMBER_ONLY_REGEX.test(name))
            .filter(([, property,]) => property.value instanceof instance) as [string, TypedPropertyDescriptor<Enumerable>][])
            .map(([name, property,]) => ([name, property.value!,] as const));

        const defaultElementIndex = everyProperties.findIndex(([name,]) => name === instance._DEFAULT_NAME);
        const defaultElement = defaultElementIndex === -1 ? this.#DEFAULT_NULL_DEFAULT_ARRAY : everyProperties.splice(defaultElementIndex, 1,).at(0) ?? this.#DEFAULT_NULL_DEFAULT_ARRAY;

        this.#VALUES_MAP.set(instance, everyProperties.map(([, enumerable,]) => enumerable));
        this.#DEFAULT_MAP.set(instance, defaultElement[1]);

        everyProperties.forEach(([name, enumerable,], index,) => {
            this.#ORDINAL_MAP.set(enumerable, index,);
            this.#NAME_MAP.set(enumerable, name,);
        });

        return this;
    }

    /**
     * Get the name based on the {@link _static} object.
     *
     * @param instance the instance
     * @see Enum.name
     */
    static #getNameOn<I extends Enumerable, >(instance: I,): I['name']
    static #getNameOn(instance: Enumerable & Enum,) {
        if (!this.#NAME_MAP.has(instance))
            this.#initialiseOn(instance._static);
        return this.#NAME_MAP.get(instance);
    }

    /**
     * Get the last ordinal of the current instance retrieved.
     *
     * @param instance the static instance to retrieve the last ordinal
     * @onlyCalledAtConstruction
     * @see Enum.ordinal
     */
    static #getLastOrdinalOn<I extends Enumerable, >(instance: EnumerableStatic<I['ordinal'], I['name'], I>,): I['ordinal']
    static #getLastOrdinalOn(instance: EnumerableStatic,) {
        const map = this.#LAST_ORDINAL_MAP;
        return map.has(instance)
            ? map.set(instance, map.get(instance)! + 1).get(instance)
            : map.set(instance, 0).get(instance);
    }


    //endregion -------------------- Enum static methods --------------------

    protected constructor() {
        // @ts-ignore
        const staticReference = this._static;
        this.#name = Object.entries(staticReference).find(([, a,]) => a == null)?.[0] as N | undefined;
        Reflect.set(staticReference, this.#ordinal = Enum.#getLastOrdinalOn(staticReference), this,);
    }

    //region -------------------- Enum methods --------------------

    public get name(): N {
        return this.#name ??= Enum.#getNameOn(this);
    }

    public get ordinal(): O {
        return this.#ordinal;
    }

    /**
     * <p>
     *  Get the static instance for a way to retrieve the values
     *  in both {@link name this.name} & {@link ordinal this.ordinal} methods
     *  to get the proper value based on the current instance.
     * </p>
     *
     * <p>
     *  The use of {@link StaticReference} need to be used on the child classes
     *  to ensure another class can extends the child class without any problems.
     * </p>
     *
     * <p> The implementation of this method (in Typescript) is needed like this. </p>
     * <code>
     *     protected get _static(): {@link StaticReference}<SubEnum> {
     *         return SubEnum;
     *     }
     * </code>
     * <p> And for the Javascript directly, it is: </p>
     * <code>
     *     get _static() {
     *         return SubEnum;
     *     }
     * </code>
     *
     * @protected
     * @see StaticReference
     * @see ordinal
     * @see name
     */
    protected abstract get _static(): EnumerableStatic<O, N>;


    public static getDefaultOn<I extends Enumerable, >(instance: EnumerableStatic<I['ordinal'], I['name'], any>,): | I | null
    public static getDefaultOn(instance: EnumerableStatic,) {
        if (!this.#DEFAULT_MAP.has(instance))
            this.#initialiseOn(instance);

        return this.#DEFAULT_MAP.get(instance);
    }

    public static getNonNullDefaultOn<I extends Enumerable, >(instance: EnumerableStatic<I['ordinal'], I['name'], any>,): I
    public static getNonNullDefaultOn(instance: EnumerableStatic,) {
        const defaultValue = this.getDefaultOn(instance);

        if (defaultValue == null)
            throw new ReferenceError(`The reference in the enum ${instance.name} cannot be null.`);

        return defaultValue;
    }

    public static setDefaultOn<I extends Enumerable, IS extends EnumerableStatic<I['ordinal'], I['name'], any>, >(instance: IS, value: | I | string | number | null,): IS
    public static setDefaultOn(instance: EnumerableStatic, value: | Enumerable | string | number | null,) {
        if (!this.#DEFAULT_MAP.has(instance))
            this.#initialiseOn(instance);

        const valueRetrieved = instance.getValue(value);
        if (valueRetrieved !== this.#DEFAULT_MAP.get(instance))
            this.#DEFAULT_MAP.set(instance, valueRetrieved);
        return instance;
    }

    public static setNonNullDefaultOn<I extends Enumerable, IS extends EnumerableStatic<I['ordinal'], I['name'], any>, >(instance: IS, value: | I | string | number | null,): IS
    public static setNonNullDefaultOn(instance: EnumerableStatic, value: | Enumerable | string | number | null,) {
        if (!this.#DEFAULT_MAP.has(instance))
            this.#initialiseOn(instance);

        if (value == null)
            return instance;

        return this.setDefaultOn(instance, value,);
    }

    //region -------------------- GetValue methods --------------------

    /**
     * Get the value by a string.
     *
     *
     * @param value the string value (excluding {@link name})
     * @see Enum.getValueOn
     */
    protected static _getValueByString(value: string,): | Enumerable | null {
        return null;
    }

    /**
     * Get the value by a number.
     *
     * @param value the number value (excluding {@link ordinal})
     * @see Enum.getValueOn
     */
    protected static _getValueByNumber(value: number,): | Enumerable | null {
        return null;
    }

    /**
     * Get the value by an object
     *
     * @param value the boolean value
     * @see Enum.getValueOn
     */
    protected static _getValueByBoolean(value: boolean,): | Enumerable | null {
        return null;
    }

    /**
     * Get the value by an object.
     *
     * @param value the object value (excluding {@link string}, {@link number}, {@link boolean} & {@link Enumerable})
     * @see Enum.getValueOn
     */
    protected static _getValueByObject(value: object,): | Enumerable | null {
        return null;
    }

    /**
     * Get the value by an enumerable that is not the current instance <u> !={@link _static}</u>
     *
     * @param value the enumerable value
     * @see Enum.getValueOn
     */
    protected static _getValueByEnumerable(value: Enumerable,): | Enumerable | null {
        return null;
    }

    /**
     * <p>
     *  Get the enum value of the instance selected.
     *  It does call the value by a selected argument
     *  if the values received are not those handled automatically.
     * </p>
     * <p>
     *  The possible arguments received handled are:
     *  <ol>
     *      <li><i>undefined</i> or <i>null</i></li>
     *      <li>the {@link Enum.ordinal ordinal},</li>
     *      <li>the {@link Enum.name name},</li>
     *      <li>directly as a {@link Enum}</li>
     *      <li>a static {@link Enum._PARENT _PARENT} field</li>
     *  </ol>
     *  And the possible arguments received can be <i>undefined</i>, <i>null</i>,
     *  a <i>{@link String string}</i>, a <i>{@link Number number}</i>
     *  or an {@link Object object}.
     * </p>
     *
     * @param instance the enum instance
     * @param value the value to compare
     * @see Enum._getValueByString
     * @see Enum._getValueByNumber
     * @see Enum._getValueByBoolean
     * @see Enum._getValueByObject
     * @see Enum._getValueByEnumerable
     * @see Enum._PARENT
     */
    public static getValueOn<I extends Enumerable, IS extends EnumerableStatic<I['ordinal'], I['name'], any> = EnumerableStatic<I['ordinal'], I['name'], any>, >(instance: IS, value: | number | I['ordinal'] | string | I['name'] | boolean | I | object | null | undefined,): | I | null
    public static getValueOn<I extends Enum, >(instance: EnumerableStatic & typeof Enum, value: | number | I['ordinal'] | string | I['name'] | boolean | I | object | null | undefined,): | I | null {
        if (value == null)
            return null;

        const parent = instance._PARENT as EnumerableStatic & typeof Enum;
        if (parent !== Enum) {
            const parentValue = Enum.getValueOn(parent, value,) as Enumerable | null;

            if (value instanceof Enum)
                return instance.__getEnumInstanceByThisOrEnumerable(instance, parentValue ?? value);

            if (parentValue == null)
                return null;
            return instance._getValueByEnumerable(parentValue) as | I | null;
        }


        switch (typeof value) {
            case 'string':
                return this.__getEnumInstanceByNameOrIndex(instance, value,)
                    ?? instance._getValueByString(value,) as | I | null;
            case 'number':
                return this.__getEnumInstanceByNameOrIndex(instance, value,)
                    ?? instance._getValueByNumber(value,) as | I | null;
            case 'boolean':
                return this._getValueByBoolean(value) as | I | null;
            default:
                if ('_static' in value)
                    return Enum.__getEnumInstanceByThisOrEnumerable(instance, value,);
                return instance._getValueByObject(value,) as | I | null;
        }
    }

    /**
     * Get the enum instance reflectively and compare the {@link Enum._static} with the instance received.
     *
     * @param instance the enum instance to compare
     * @param nameOrIndex the name or the index
     * @return the enum instance or null
     */
    private static __getEnumInstanceByNameOrIndex<I extends Enum, >(instance: EnumerableStatic, nameOrIndex: | string | number,): | I | null
    private static __getEnumInstanceByNameOrIndex(instance: EnumerableStatic & typeof Enum, nameOrIndex: | string | number,) {
        const value = instance[nameOrIndex] as | Enum | undefined;
        if (value == null)
            return null;
        if (value._static === instance)
            return value;
        return null;
    }

    /**
     * Get the enum instance by a comparison of {@link _static} & the {@link EnumerableStatic instance}.
     * Or by utilising from the current context {@link _getValueByEnumerable}.
     *
     * @param instance the enum instance to compare
     * @param enumerable the enumerable to send or return
     */
    private static __getEnumInstanceByThisOrEnumerable<I extends Enum, >(instance: EnumerableStatic, enumerable: Enumerable,): | I | null
    private static __getEnumInstanceByThisOrEnumerable(instance: EnumerableStatic & typeof Enum, enumerable: Enum,) {
        return enumerable._static === instance
            ? enumerable
            : instance._getValueByEnumerable(enumerable);
    }

    //endregion -------------------- GetValue methods --------------------

    /**
     * Get every value based on the current instance received.
     *
     * @param instance the instance to retrieve every values
     */
    public static getValuesOn<IS extends EnumerableStatic<any, any, any>, >(instance: IS,): IS['values']
    public static getValuesOn(instance: EnumerableStatic,) {
        if (!this.#VALUES_MAP.has(instance))
            this.#initialiseOn(instance);

        return this.#VALUES_MAP.get(instance);
    }

    public get [Symbol.toStringTag](): EnumName {
        return 'Enum';
    }

    //endregion -------------------- Enum methods --------------------

}
