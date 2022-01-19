import type {DefaultValueIfNotFound} from './ClassThatCanGetItems';
import type {EntrySet}               from './EntrySet';
import type {ExtendedMap}            from './ExtendedMap';
import type {ExtendedSet}            from './ExtendedSet';
import type {VariableReturnValue}    from './ClassThatCanSearchItems';

import {ConditionalIntermediate} from './tools/ConditionalIntermediate';
import {isArrayEquals}           from '../utilitiesMethods';
import {EntrySetContainer}       from './EntrySet.container';
import {ExtendedSetContainer}    from './ExtendedSet.container';

export class ExtendedMapContainer<K, V, LENGTH extends number = number, >
    implements ExtendedMap<K, V, LENGTH> {

    //region -------------------- Attributes --------------------

    public static DEFAULT_SEPARATOR = ',';
    public static readonly DEFAULT_VALUE_IF_NOT_FOUND: DefaultValueIfNotFound = null;
    public static readonly EMPTY: ExtendedMap<any, never, 0> = new ExtendedMapContainer<any, never, 0>();

    readonly #map: Map<K, EntrySet<K, V>>;
    public defaultSeparator = ExtendedMapContainer.DEFAULT_SEPARATOR;

    //endregion -------------------- Attributes --------------------

    public constructor(iterable?: Iterable<readonly [K, V] | EntrySet<K, V>>,) {
        this.#map = iterable == null
            ? new Map()
            : new Map([...iterable].map((arrayOrEntrySet,) =>
                arrayOrEntrySet instanceof Array
                    ? [arrayOrEntrySet[0], new EntrySetContainer(arrayOrEntrySet[0], arrayOrEntrySet[1],),]
                    : [arrayOrEntrySet.key, new EntrySetContainer(arrayOrEntrySet),]));
    }

    protected get _map(): Map<K, EntrySet<K, V>> {
        return this.#map;
    }

    //region -------------------- Length methods --------------------

    /**
     * @see Map.size
     */
    public get size(): this['length'] {
        return this.length;
    }

    /**
     * @see Map.size
     */
    public get length(): LENGTH {
        return this._map.size as LENGTH;
    }

    //endregion -------------------- Length methods --------------------
    //region -------------------- Addition methods --------------------

    /**
     *
     * @param key
     * @param value
     * @see Map.set
     */
    public set(key: K, value: V,): this {
        this._map.set(key, new EntrySetContainer(key, value,));
        return this;
    }

    /**
     * Add an item to the {@link Map internal Map}.
     *
     * @param values
     * @private
     */
    private __add(...values: readonly (readonly [K, V,])[]): this {
        values.forEach(([key, value,]) => this.set(key, value,));
        return this;
    }

    /**
     *
     * @param values
     * @see Map.set
     */
    public add(...values: readonly (readonly [K, V,])[]): this {
        return this.__add(...values);
    }

    public push = this.add;

    //region -------------------- & Get --------------------

    public addAndGet<V2 extends readonly [K, V,] = readonly [K, V,], >(value: V2,): V2
    public addAndGet<V2 extends (readonly [K, V,])[] = (readonly [K, V,])[], >(...values: V2): V2
    public addAndGet<V2 extends readonly (readonly [K, V,])[] = readonly (readonly [K, V,])[], >(...values: V2): V2
    public addAndGet(...values: (readonly [K, V,])[]) {
        this.add(...values);
        return values.length === 1 ? values[0] : values;
    }

    public pushAndGet = this.addAndGet;

    //endregion -------------------- & Get --------------------

    //endregion -------------------- Addition methods --------------------
    //region -------------------- Removal methods --------------------

    private __delete(...keys: readonly K[]): boolean {
        let everyValuesHasBeenDeleted = this.has(...keys);

        keys.forEach(value => everyValuesHasBeenDeleted = this._map.delete(value));

        return everyValuesHasBeenDeleted;
    }

    /**
     *
     * @param values
     * @see Map.delete
     */
    public delete(...values: K[]): boolean {
        return this.__delete(...values);
    }

    public drop = this.delete;

    public remove = this.delete;


    /**
     * @see Map.clear
     */
    public clear(): this {
        this._map.clear();
        return this;
    }

    //endregion -------------------- Removal methods --------------------
    //region -------------------- Loop methods --------------------

    public if(callback: (map: this,) => boolean,): ConditionalIntermediate<this> {
        return new ConditionalIntermediate(this, () => callback(this,));
    }

    private __has(value: any,): boolean {
        if (value instanceof Array) {
            for (const internalValue of this)
                if (internalValue instanceof Array && isArrayEquals(internalValue, value,))
                    return true;
            return false;
        }
        return this._map.has(value as never);
    }

    /**
     *
     * @param values
     * @see Map.has
     */
    public has(...values: readonly K[]): boolean
    public has(...values: readonly any[]): boolean
    public has(...values: readonly any[]): boolean {
        for (const value of values)
            if (!this.__has(value))
                return false;
        return true;
    }

    public includes = this.has;


    public get(key: K,): V
    public get(key: any,): | V | DefaultValueIfNotFound
    public get(key: any) {
        return this.find(internalKey => internalKey === key);
    }

    public getKey(value: V,): K
    public getKey(value: any,): K | DefaultValueIfNotFound
    public getKey(value: any,) {
        return this.findKey((internalKey, internalValue,) => internalValue === value);
    }

    /**
     *
     * @param callback
     * @see Array.find
     */
    public find<B extends boolean, >(callback: (key: K, value: V,) => B,): VariableReturnValue<B, V, DefaultValueIfNotFound>
    /**
     *
     * @param callback
     * @see Array.find
     */
    public find<U extends V, >(callback: (key: K, value: V,) => value is U,): | U | DefaultValueIfNotFound
    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.find
     */
    public find<B extends boolean, U, >(callback: (key: K, value: V,) => B, callbackIfNotFound: () => U,): VariableReturnValue<B, V, U>
    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.find
     */
    public find<U extends V, V2, >(callback: (key: K, value: V,) => value is U, callbackIfNotFound: () => V2,): | U | V2
    public find(callback: (key: K, value: V,) => boolean, callbackIfNotFound?: () => V,) {
        for (const [key, value,] of this)
            if (callback(key, value,))
                return value;

        return callbackIfNotFound == null
            ? ExtendedMapContainer.DEFAULT_VALUE_IF_NOT_FOUND
            : callbackIfNotFound();
    }

    /**
     *
     * @param callback
     * @see Array.findIndex
     */
    public findKey<B extends boolean, >(callback: (key: K, value: V,) => B,): VariableReturnValue<B, K, DefaultValueIfNotFound>
    /**
     *
     * @param callback
     * @see Array.findIndex
     */
    public findKey<U extends K, >(callback: (key: K, value: V,) => key is U,): | U | DefaultValueIfNotFound
    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.findIndex
     */
    public findKey<B extends boolean, U, >(callback: (key: K, value: V,) => boolean, callbackIfNotFound: () => U,): VariableReturnValue<B, K, U>
    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.findIndex
     */
    public findKey<U extends K, V2, >(callback: (key: K, value: V,) => key is U, callbackIfNotFound: () => V2,): | U | V2
    public findKey(callback: (key: K, value: V,) => boolean, callbackIfNotFound?: () => K,) {
        for (const [key, value,] of this)
            if (callback(key, value,))
                return key;

        return callbackIfNotFound == null
            ? ExtendedMapContainer.DEFAULT_VALUE_IF_NOT_FOUND
            : callbackIfNotFound();
    }

    /**
     *
     * @param callback
     * @see Map.forEach
     */
    public forEach(callback: (key: K, value: V,) => void,): this {
        this._map.forEach(({key, value,},) => callback(key, value,));
        return this;
    }

    /**
     *
     * @param callback
     * @see Array.map
     */
    public map<V2, >(callback: (key: K, value: V,) => V2,): ExtendedMap<K, V2, LENGTH> {
        const newArray = [] as [K, V2][];
        this.forEach((key, value,) => newArray.push([key, callback(key, value,),]));
        return new ExtendedMapContainer<K, V2, number>(newArray) as unknown as ExtendedMap<K, V2, LENGTH>;
    }

    //endregion -------------------- Loop methods --------------------
    //region -------------------- Conversion methods --------------------

    /**
     * @see Map.entries
     */
    public get entries(): IterableIterator<readonly [K, V,]> {
        return [...this._map.entries()].map(([, entry,]) => entry.toArray()).values();
    }

    /**
     * @see Map.keys
     */
    public get keys(): IterableIterator<K> {
        return this._map.keys();
    }

    /**
     * @see Map.values
     */
    public get values(): IterableIterator<V> {
        return [...this._map.values()].map(entry => entry.value).values();
    }


    /**
     *
     * @param separator
     * @see Array.join
     */
    public join(separator: string = this.defaultSeparator,): string {
        return this.toArray().join(separator);
    }


    public toArray(): EntrySet<K, V>[] {
        return [...this._map.values()];
    }

    public toSet(): Set<EntrySet<K, V>> {
        return new Set(this._map.values());
    }

    public toExtendedSet(): ExtendedSet<EntrySet<K, V>, LENGTH> {
        return new ExtendedSetContainer(this._map.values()) as unknown as ExtendedSet<EntrySet<K, V>, LENGTH>;
    }

    public toMap(): Map<K, V> {
        return new Map(this.map((key, value,) => value));
    }

    public toExtendedMap(): ExtendedMap<K, V, LENGTH> {
        return new ExtendedMapContainer(this) as unknown as ExtendedMap<K, V, LENGTH>;
    }


    /**
     * @see Map.toString
     */
    public toString(): string {
        return this._map.toString();
    }

    /**
     * @see Map.toLocalString
     */
    public toLocalString(): string {
        return this._map.toLocaleString();
    }

    //endregion -------------------- Conversion methods --------------------
    //region -------------------- Javascript only methods --------------------

    public [Symbol.iterator](): Iterator<readonly [K, V,]> {
        return [...this._map.values()].map(entry => entry.toArray())[Symbol.iterator]();
    }

    public [Symbol.toStringTag](): string {
        return this._map[Symbol.toStringTag];
    }

    //endregion -------------------- Javascript only methods --------------------

}
