import type {Enumerable}       from './Enumerable';
import type {EnumerableStatic} from './EnumerableStatic';
import type {EnumName}         from './Enum.types';

export abstract class Enum<O extends number = number, N extends string = string, >
    implements Enumerable<O, N> {

    //region -------------------- Enum attributes --------------------

    static readonly #DEFAULT_NULL_DEFAULT_ARRAY = [null, null,] as const;
    static readonly #PROTOTYPE_NAME = 'prototype';
    public static readonly EXCLUDED_NAMES: string[] = [];
    protected static _DEFAULT_NAME = '_DEFAULT';

    static readonly #ORDINAL_MAP = new Map<Enumerable, number>();
    static readonly #NAME_MAP = new Map<Enumerable, string>();
    static readonly #DEFAULT_MAP = new Map<EnumerableStatic, | Enumerable | null>();
    static readonly #VALUES_MAP = new Map<EnumerableStatic, readonly Enumerable[]>();

    #name?: N;
    #ordinal?: O;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Enum static methods --------------------

    private static __initialiseOn(instance: EnumerableStatic,): typeof Enum
    private static __initialiseOn(instance: EnumerableStatic & typeof Enum,) {
        const everyProperties = (Object.entries(Object.getOwnPropertyDescriptors(instance))
            .filter(([, property,]) => property.get == null && property.set == null)
            .filter(([name,]) => name !== this.#PROTOTYPE_NAME)
            .filter(([name,]) => !instance.EXCLUDED_NAMES.includes(name))
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

    private static __getNameOn<I extends Enumerable, >(instance: I,): I['name']
    private static __getNameOn(instance: Enumerable & Enum,) {
        if (!this.#NAME_MAP.has(instance))
            this.__initialiseOn(instance._static);
        return this.#NAME_MAP.get(instance);
    }

    private static __getOrdinalOn<I extends Enumerable, >(instance: I,): I['ordinal']
    private static __getOrdinalOn(instance: Enumerable & Enum,) {
        if (!this.#ORDINAL_MAP.has(instance))
            this.__initialiseOn(instance._static);
        return this.#ORDINAL_MAP.get(instance);
    }


    //endregion -------------------- Enum static methods --------------------

    protected constructor() {
    }

    //region -------------------- Enum methods --------------------

    public get name(): N {
        return this.#name ??= Enum.__getNameOn(this);
    }

    public get ordinal(): O {
        return this.#ordinal ??= Enum.__getOrdinalOn(this);
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
            this.__initialiseOn(instance);

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
            this.__initialiseOn(instance);

        const valueRetrieved = instance.getValue(value);
        if (valueRetrieved !== this.#DEFAULT_MAP.get(instance))
            this.#DEFAULT_MAP.set(instance, valueRetrieved);
        return instance;
    }

    public static setNonNullDefaultOn<I extends Enumerable, IS extends EnumerableStatic<I['ordinal'], I['name'], any>, >(instance: IS, value: | I | string | number | null,): IS
    public static setNonNullDefaultOn(instance: EnumerableStatic, value: | Enumerable | string | number | null,) {
        if (!this.#DEFAULT_MAP.has(instance))
            this.__initialiseOn(instance);

        if (value == null)
            return instance;

        return this.setDefaultOn(instance, value,);
    }

    public static getValuesOn<IS extends EnumerableStatic<any, any, any>, >(instance: IS,): IS['values']
    public static getValuesOn(instance: EnumerableStatic,) {
        if (!this.#VALUES_MAP.has(instance))
            this.__initialiseOn(instance);

        return this.#VALUES_MAP.get(instance);
    }

    public [Symbol.toStringTag](): EnumName {
        return 'Enum';
    }

    //endregion -------------------- Enum methods --------------------

}
