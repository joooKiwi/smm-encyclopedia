import type {DefaultIndexIfNotFound, DefaultValueIfNotFound} from './ClassThatCanGetItems'
import type {ExtendedSet}                                    from './ExtendedSet'
import type {ExtendedMap}                                    from './ExtendedMap'
import type {VariableReturnValue}                            from './ClassThatCanSearchItems'

import {ConditionalIntermediate} from './tools/ConditionalIntermediate'
import {isArrayEquals}           from '../utilitiesMethods'
import {ExtendedMapContainer}    from './ExtendedMap.container'

export class ExtendedSetContainer<T, LENGTH extends number = number, >
    implements ExtendedSet<T, LENGTH> {

    //region -------------------- Fields --------------------

    public static DEFAULT_SEPARATOR = ','
    public static DEFAULT_STARTING_INDEX = 0
    public static readonly DEFAULT_VALUE_IF_NOT_FOUND: DefaultValueIfNotFound = null
    public static readonly DEFAULT_INDEX_IF_NOT_FOUND: DefaultIndexIfNotFound = -1
    public static readonly EMPTY: ExtendedSet<never, 0> = new ExtendedSetContainer()

    readonly #set: Set<T>
    #indexMapReference: T[]
    public defaultStartingIndex = ExtendedSetContainer.DEFAULT_STARTING_INDEX
    public defaultSeparator = ExtendedSetContainer.DEFAULT_SEPARATOR;

    [index: number]: T

    //endregion -------------------- Fields --------------------

    public constructor(values?: Iterable<T> | null | undefined,) {
        this.#set = new Set(values)
        this.#indexMapReference = new Array(...values ?? [])
    }

    protected get _set(): Set<T> {
        return this.#set
    }

    get #array(): T[] {
        return this.#indexMapReference
    }

    //region -------------------- Length methods --------------------

    public get size(): this['length'] {
        return this.length
    }

    /**
     * @see Set.size
     */
    public get length(): LENGTH {
        return this._set.size as LENGTH
    }

    //endregion -------------------- Length methods --------------------
    //region -------------------- Addition methods --------------------

    /**
     * Add an item to the {@link Set internal Set} and the {@link this.indexMapReference internal indexMapReference}.
     * It also adds reflectively the index to the class itself.
     * @param values
     */
    #add(...values: readonly T[]): this {
        const oldLength = this.length

        values.forEach(value => this._set.add(value))
        this.#indexMapReference = [...new Set([...this.#array, ...values,])]

        this.forEach((value, index,) => {
            if (index > oldLength)
                Reflect.deleteProperty(this, index,)
            else
                this[index] = value
        })
        return this
    }

    /**
     *
     * @param values
     * @see Set.add
     */
    public add(...values: readonly T[]): this {
        return this.#add(...values)
    }

    public push = this.add

    //region -------------------- & Get --------------------

    public addAndGet<V extends T = T, >(value: V,): V
    public addAndGet<V extends T[] = T[], >(...values: V): V
    public addAndGet<V extends readonly T[] = readonly T[], >(...values: V): V
    public addAndGet(...values: T[]) {
        this.add(...values)
        return values.length === 1 ? values[0] : values
    }

    public pushAndGet = this.addAndGet

    //endregion -------------------- & Get --------------------

    //endregion -------------------- Addition methods --------------------
    //region -------------------- Removal methods --------------------

    #delete(...values: readonly T[]): boolean {
        const oldLength = this.length
        let everyValuesHasBeenDeleted = this.has(...values)

        values.forEach(value => everyValuesHasBeenDeleted = this._set.delete(value))
        this.#indexMapReference = this.#array.filter(value => !values.includes(value))

        values.forEach((value, index,) => {
            if (index > oldLength)
                Reflect.deleteProperty(this, index,)
            else
                this[index] = value
        })
        return everyValuesHasBeenDeleted
    }

    /**
     *
     * @param values
     * @see Set.delete
     */
    public delete(...values: T[]): boolean {
        return this.#delete(...values)
    }

    public drop = this.delete

    public remove = this.delete


    /**
     * @see Set.clear
     */
    public clear(): this {
        this._set.clear()
        return this
    }

    //endregion -------------------- Removal methods --------------------
    //region -------------------- Loop methods --------------------

    public if(callback: (set: this,) => boolean,): ConditionalIntermediate<this> {
        return new ConditionalIntermediate(this, () => callback(this,))
    }

    public range(startingIndex?: number, endingIndex?: number,): | this | ExtendedSet<T> {
        const defaultStartingValue = this.defaultStartingIndex
        const defaultLength = this.length
        startingIndex ??= defaultStartingValue
        endingIndex ??= defaultLength

        return startingIndex === defaultStartingValue && endingIndex === defaultLength
            ? this
            : new ExtendedSetContainer(this.#array.filter((value, index,) => index > startingIndex! && index < endingIndex!))
    }


    #has(value: any,): boolean {
        if (value instanceof Array) {
            for (const internalValue of this)
                if (internalValue instanceof Array && isArrayEquals(internalValue, value,))
                    return true
            return false
        }
        return this._set.has(value)
    }

    /**
     *
     * @param values
     * @see Set.has
     * @see Array.includes
     */
    public has(...values: readonly T[]): boolean
    public has(...values: readonly any[]): boolean
    public has(...values: readonly T[]): boolean {
        for (const value of values)
            if (!this.#has(value))
                return false
        return true
    }

    public includes = this.has

    public get(index: LENGTH,): T
    public get(index: any,): | T | DefaultValueIfNotFound
    public get(index: any,) {
        return this.find((internalValue, internalIndex,) => internalIndex === index)
    }

    public getIndex(value: T,): LENGTH
    public getIndex(value: any,): LENGTH | DefaultIndexIfNotFound
    public getIndex(value: any,) {
        return this.findIndex(internalValue => internalValue === value)
    }


    /**
     *
     * @param callback
     * @see Array.find
     */
    public find<B extends boolean, >(callback: (value: T, index: LENGTH,) => B,): VariableReturnValue<B, T, DefaultValueIfNotFound>
    /**
     *
     * @param callback
     * @see Array.find
     */
    public find<U extends T, >(callback: (value: T, index: LENGTH,) => value is U,): | U | DefaultValueIfNotFound
    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.find
     */
    public find<B extends boolean, U, >(callback: (value: T, index: LENGTH,) => B, callbackIfNotFound: () => U,): VariableReturnValue<B, T, U>
    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.find
     */
    public find<U extends T, V, >(callback: (value: T, index: LENGTH,) => value is U, callbackIfNotFound: () => V,): | U | V
    public find(callback: (value: T, index: LENGTH,) => boolean, callbackIfNotFound?: () => T,) {
        const valueFound = this.#array.find((value, index,) => callback(value, index as LENGTH,))
        return valueFound != null
            ? valueFound
            : callbackIfNotFound == null
                ? ExtendedSetContainer.DEFAULT_VALUE_IF_NOT_FOUND
                : callbackIfNotFound()
    }

    /**
     *
     * @param callback
     * @see Array.findIndex
     */
    public findIndex<B extends boolean, >(callback: (value: T, index: LENGTH,) => B,): VariableReturnValue<B, LENGTH, DefaultIndexIfNotFound>
    /**
     *
     * @param callback
     * @see Array.findIndex
     */
    public findIndex<U extends LENGTH, >(callback: (value: T, index: LENGTH,) => index is U,): | U | DefaultIndexIfNotFound
    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.findIndex
     */
    public findIndex<B extends boolean, U, >(callback: (value: T, index: LENGTH,) => boolean, callbackIfNotFound: () => U,): VariableReturnValue<B, LENGTH, U>
    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.findIndex
     */
    public findIndex<U extends LENGTH, V, >(callback: (value: T, index: LENGTH,) => index is U, callbackIfNotFound: () => V,): | U | V
    public findIndex(callback: (value: T, key: LENGTH,) => boolean, callbackIfNotFound?: () => LENGTH,) {
        const valueFound = this.#array.findIndex((value, index,) => callback(value, index as LENGTH,))
        return valueFound != null
            ? valueFound
            : callbackIfNotFound == null
                ? ExtendedSetContainer.DEFAULT_INDEX_IF_NOT_FOUND
                : callbackIfNotFound()
    }

    /**
     *
     * @param callback
     * @see Array.forEach
     */
    public forEach(callback: (value: T, index: LENGTH,) => void,): this {
        this.#array.forEach((value, index,) => callback(value, index as LENGTH,))
        return this
    }

    /**
     *
     * @param callback
     * @see Array.map
     */
    public map<V>(callback: (value: T, index: LENGTH,) => V,): ExtendedSet<V, LENGTH> {
        return new ExtendedSetContainer(this.#array.map((value, index,) => callback(value, index as LENGTH,))) as unknown as ExtendedSet<V, LENGTH>
    }

    //endregion -------------------- Loop methods --------------------
    //region -------------------- Conversion methods --------------------

    /**
     * @see Array.entries
     */
    public get entries(): IterableIterator<readonly [number, T,]> {
        return this.#array.entries()
    }

    /**
     * @see Array.keys
     */
    public get keys(): IterableIterator<number> {
        return this.#array.keys()
    }

    /**
     * @see Set.values
     */
    public get values(): IterableIterator<T> {
        return this._set.values()
    }


    /**
     *
     * @param separator
     * @see Array.join
     */
    public join(separator: string = this.defaultSeparator,): string {
        return this.#array.join(separator)
    }

    //region -------------------- Convertor methods --------------------

    public toArray(): T[] {
        return [...this]
    }


    public toSet(): Set<T> {
        return new Set(this)
    }

    public toExtendedSet(): ExtendedSet<T, LENGTH> {
        return new ExtendedSetContainer(this)
    }


    public toMap(): Map<LENGTH, T> {
        return new Map(this.map((value, index,) => [index, value,]))
    }

    public toExtendedMap(): ExtendedMap<LENGTH, T, LENGTH> {
        return new ExtendedMapContainer(this.toMap()) as unknown as ExtendedMap<LENGTH, T, LENGTH>
    }

    //endregion -------------------- Convertor methods --------------------

    /**
     * @see Array.toString
     */
    public toString(): string {
        return this.#array.toString()
    }

    /**
     * @see Array.toLocalString
     */
    public toLocaleString(): string {
        return this.#array.toLocaleString()
    }

    //endregion -------------------- Conversion methods --------------------
    //region -------------------- Javascript only methods --------------------

    public [Symbol.iterator](): Iterator<T> {
        return this._set[Symbol.iterator]()
    }

    public [Symbol.toStringTag](): string {
        return this._set[Symbol.toStringTag]
    }

    //endregion -------------------- Javascript only methods --------------------

}
