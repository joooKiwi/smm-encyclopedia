import type {DefaultIndexIfNotFound, DefaultValueIfNotFound, ExtendedList, VariableReturnValue} from './ExtendedList';

import {ConditionalIntermediate} from './tools/ConditionalIntermediate';
import {isArrayEquals}           from '../utilitiesMethods';

export class ExtendedSet<T, LENGTH extends number = number, >
    implements ExtendedList<T, LENGTH> {

    //region -------------------- Attributes --------------------

    public static DEFAULT_SEPARATOR = ',';
    public static DEFAULT_STARTING_INDEX = 0;
    public static readonly DEFAULT_VALUE_IF_NOT_FOUND: DefaultValueIfNotFound = null;
    public static readonly DEFAULT_INDEX_IF_NOT_FOUND: DefaultIndexIfNotFound = -1;

    readonly #set: Set<T>;
    #indexMapReference: T[];
    public defaultStartingIndex = ExtendedSet.DEFAULT_STARTING_INDEX;
    public defaultSeparator = ExtendedSet.DEFAULT_SEPARATOR;

    [index: number]: T;

    //endregion -------------------- Attributes --------------------

    public constructor(values?: Iterable<T> | null | undefined,) {
        this.#set = new Set(values);
        this.#indexMapReference = new Array(...values ?? []);
    }

    protected get _set(): Set<T> {
        return this.#set;
    }

    private get __array(): T[] {
        return this.#indexMapReference;
    }

    //region -------------------- Length methods --------------------

    /**
     * @see Set.size
     */
    public get size(): this['length'] {
        return this.length;
    }

    /**
     * @see Set.size
     */
    public get length(): LENGTH {
        return this._set.size as LENGTH;
    }

    //endregion -------------------- Length methods --------------------
    //region -------------------- Addition methods --------------------

    /**
     * Add an item to the {@link Set internal Set} and the {@link indexMapReference internal indexMapReference}.
     * It also add reflectively the index to the class itself.
     * @param values
     * @private
     */
    private __add(...values: readonly T[]): this {
        values.forEach(value => this._set.add(value));
        this.__array.push(...values);
        this.forEach((value, index,) => this[index] = value);
        return this;
    }

    /**
     *
     * @param values
     * @see Set.add
     */
    public add(...values: readonly T[]): this {
        return this.__add(...values);
    }

    public push = this.add;

    //region -------------------- & Get --------------------

    public addAndGet<V extends T = T, >(value: V,): V
    public addAndGet<V extends T[] = T[], >(...values: V): V
    public addAndGet<V extends readonly T[] = readonly T[], >(...values: V): V
    public addAndGet(...values: T[]) {
        this.add(...values);
        return values.length === 1 ? values[0] : values;
    }

    public pushAndGet = this.addAndGet;

    //endregion -------------------- & Get --------------------

    //endregion -------------------- Addition methods --------------------
    //region -------------------- Removal methods --------------------

    private __delete(...values: readonly T[]): boolean {
        const oldLength = this.length;
        let everyValuesHasBeenDeleted = true;

        values.forEach(value => everyValuesHasBeenDeleted = this._set.delete(value));
        this.#indexMapReference = this.__array.filter(value => !values.includes(value));

        this.forEach((value, index,) => {
            if (index > oldLength)
                Reflect.deleteProperty(this, index,);
            this[index] = value;
        });
        return everyValuesHasBeenDeleted;
    }

    /**
     *
     * @param values
     * @see Set.delete
     */
    public delete(...values: T[]): boolean {
        return this.__delete(...values);
    }

    public drop = this.delete;

    public remove = this.delete;


    /**
     * @see Set.clear
     */
    public clear(): this {
        this._set.clear();
        return this;
    }

    //endregion -------------------- Removal methods --------------------
    //region -------------------- Loop methods --------------------

    public if(callback: (set: this,) => boolean,): ConditionalIntermediate<this> {
        return new ConditionalIntermediate(this, () => callback(this,));
    }

    public range(startingIndex?: number, endingIndex?: number,): | this | ExtendedSet<T> {
        const defaultStartingValue = this.defaultStartingIndex;
        const defaultLength = this.length;
        startingIndex ??= defaultStartingValue;
        endingIndex ??= defaultLength;

        return startingIndex === defaultStartingValue && endingIndex === defaultLength
            ? this
            : new ExtendedSet(this.__array.filter((value, index,) => index > startingIndex! && index < endingIndex!));
    }


    private __has(value: T,): boolean {
        if (value instanceof Array) {
            for (const internalValue of this)
                if (internalValue instanceof Array && isArrayEquals(internalValue, value,))
                    return true;
            return false;
        }
        return this._set.has(value);
    }

    /**
     *
     * @param values
     * @see Set.has
     * @see Array.includes
     */
    public has(...values: readonly T[]): boolean {
        for (const value of values)
            if (!this.__has(value))
                return false;
        return true;
    }

    public includes = this.has;

    public get(value: T,): LENGTH
    public get(value: any,): | LENGTH | DefaultIndexIfNotFound
    public get(value: any) {
        return this.findIndex(internalValue => internalValue === value);
    }

    public getIndex(value: LENGTH,): T
    public getIndex(value: number,): T | DefaultValueIfNotFound
    public getIndex(index: number,) {
        return this.find((internalValue, internalIndex,) => internalIndex === index);
    }


    /**
     *
     * @param callback
     * @see Array.find
     */
    public find<B extends boolean, >(callback: (value: T, index: LENGTH, set: this,) => B,): VariableReturnValue<B, T, DefaultValueIfNotFound>
    /**
     *
     * @param callback
     * @see Array.find
     */
    public find<U extends T, >(callback: (value: T, index: LENGTH, set: this,) => value is U,): | U | DefaultValueIfNotFound
    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.find
     */
    public find<B extends boolean, U, >(callback: (value: T, index: LENGTH, set: this,) => B, callbackIfNotFound: () => U,): VariableReturnValue<B, T, U>
    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.find
     */
    public find<U extends T, V, >(callback: (value: T, index: LENGTH, set: this,) => value is U, callbackIfNotFound: () => V,): | U | V
    public find(callback: (value: T, index: LENGTH, set: this,) => boolean, callbackIfNotFound?: () => T,) {
        const valueFound = this.__array.find((value, index,) => callback(value, index as LENGTH, this,));
        return valueFound != null
            ? valueFound
            : callbackIfNotFound == null
                ? ExtendedSet.DEFAULT_VALUE_IF_NOT_FOUND
                : callbackIfNotFound();
    }

    /**
     *
     * @param callback
     * @see Array.findIndex
     */
    public findIndex<B extends boolean, >(callback: (value: T, index: LENGTH, set: this,) => B,): VariableReturnValue<B, LENGTH, DefaultIndexIfNotFound>
    /**
     *
     * @param callback
     * @see Array.findIndex
     */
    public findIndex<U extends LENGTH, >(callback: (value: T, index: LENGTH, set: this,) => index is U,): | U | DefaultIndexIfNotFound
    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.findIndex
     */
    public findIndex<B extends boolean, U, >(callback: (value: T, index: LENGTH, set: this,) => boolean, callbackIfNotFound: () => U,): VariableReturnValue<B, LENGTH, U>
    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.findIndex
     */
    public findIndex<U extends LENGTH, V, >(callback: (value: T, index: LENGTH, set: this,) => index is U, callbackIfNotFound: () => V,): | U | V
    public findIndex(callback: (value: T, index: LENGTH, set: this,) => boolean, callbackIfNotFound?: () => LENGTH,) {
        const valueFound = this.__array.findIndex((value, index,) => callback(value, index as LENGTH, this,));
        return valueFound != null
            ? valueFound
            : callbackIfNotFound == null
                ? ExtendedSet.DEFAULT_INDEX_IF_NOT_FOUND
                : callbackIfNotFound();
    }


    /**
     *
     * @param callback
     * @see Array.forEach
     */
    public forEach(callback: (value: T, index: LENGTH, set: this,) => void,): void {
        this.__array.forEach((value, index,) => callback(value, index as LENGTH, this,));
    }

    /**
     *
     * @param callback
     * @see Array.map
     */
    public map<V>(callback: (value: T, index: LENGTH, set: this,) => V,): ExtendedSet<V> {
        return new ExtendedSet(this.__array.map((value, index) => callback(value, index as LENGTH, this,)));
    }

    //endregion -------------------- Loop methods --------------------
    //region -------------------- Conversion methods --------------------

    /**
     * @see Array.entries
     */
    public get entries(): IterableIterator<[number, T,]> {
        return this.__array.entries();
    }

    /**
     * @see Array.keys
     */
    public get keys(): IterableIterator<number> {
        return this.__array.keys();
    }

    /**
     * @see Set.values
     */
    public get values(): IterableIterator<T> {
        return this._set.values();
    }


    /**
     *
     * @param separator
     * @see Array.join
     */
    public join(separator: string = this.defaultSeparator,): string {
        return this.__array.join(separator);
    }


    public toArray(): T[] {
        return [...this];
    }

    public toSet(): Set<T> {
        return new Set(this);
    }

    public toExtendedSet(): ExtendedSet<T> {
        return new ExtendedSet(this);
    }

    public toMap(): Map<number, T> {
        return new Map(this.map((value, index,) => {
            return [index, value,];
        }));
    }


    /**
     * @see Array.toString
     */
    public toString(): string {
        return this.__array.toString();
    }

    /**
     * @see Array.toLocalString
     */
    public toLocalString(): string {
        return this.__array.toLocaleString();
    }

    //endregion -------------------- Conversion methods --------------------
    //region -------------------- Javascript only methods --------------------

    public [Symbol.iterator](): Iterator<T> {
        return this._set[Symbol.iterator]();
    }

    public [Symbol.toStringTag](): string {
        return this._set[Symbol.toStringTag];
    }

    //endregion -------------------- Javascript only methods --------------------

}
