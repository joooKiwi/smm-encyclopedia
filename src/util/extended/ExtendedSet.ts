import type {DefaultIndexIfNotFound, DefaultValueIfNotFound} from 'util/extended/ClassThatCanGetItems'
import type {VariableReturnValue}                            from 'util/extended/ClassThatCanSearchItems'
import type {ExtendedList}                                   from 'util/extended/ExtendedList'
import type {ExtendedMap}                                    from 'util/extended/ExtendedMap'
import type {ConditionalIntermediate}                        from 'util/extended/tools/ConditionalIntermediate'

export interface ExtendedSet<T, LENGTH extends number = number, >
    extends ExtendedList<T, LENGTH> {

    [index: number]: T

    //region -------------------- Length methods --------------------

    /**
     * @see Set.size
     */
    get size(): this['length']

    /**
     * @see Set.size
     */
    get length(): LENGTH

    //endregion -------------------- Length methods --------------------
    //region -------------------- Addition methods --------------------

    add(...values: readonly T[]): this

    push(...values: readonly T[]): this

    //region -------------------- & Get --------------------

    addAndGet<V extends T = T, >(value: V,): V

    addAndGet<V extends T[] = T[], >(...values: V): V

    addAndGet<V extends readonly T[] = readonly T[], >(...values: V): V

    pushAndGet<V extends T = T, >(value: V,): V

    pushAndGet<V extends T[] = T[], >(...values: V): V

    pushAndGet<V extends readonly T[] = readonly T[], >(...values: V): V

    //endregion -------------------- & Get --------------------

    //endregion -------------------- Addition methods --------------------
    //region -------------------- Removal methods --------------------

    /**
     *
     * @param values
     * @see Set.delete
     */
    delete(...values: T[]): boolean

    drop(...values: T[]): boolean

    remove(...values: T[]): boolean

    /**
     * @see Set.clear
     */
    clear(): this

    //endregion -------------------- Removal methods --------------------
    //region -------------------- Loop methods --------------------

    if(callback: (set: this,) => boolean,): ConditionalIntermediate<this>

    range(startingIndex?: number, endingIndex?: number,): | this | ExtendedSet<T>


    /**
     *
     * @param values
     * @see Set.has
     * @see Array.includes
     */
    has(...values: readonly T[]): boolean

    has(...values: readonly any[]): boolean

    includes(...values: readonly T[]): boolean

    includes(...values: readonly any[]): boolean


    get(index: LENGTH,): T

    get(index: any,): | T | DefaultValueIfNotFound


    getIndex(value: T,): LENGTH

    getIndex(value: any,): LENGTH | DefaultIndexIfNotFound


    /**
     *
     * @param callback
     * @see Array.find
     */
    find<B extends boolean, >(callback: (value: T, index: LENGTH,) => B,): VariableReturnValue<B, T, DefaultValueIfNotFound>

    /**
     *
     * @param callback
     * @see Array.find
     */
    find<U extends T, >(callback: (value: T, index: LENGTH,) => value is U,): | U | DefaultValueIfNotFound

    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.find
     */
    find<B extends boolean, U, >(callback: (value: T, index: LENGTH,) => B, callbackIfNotFound: () => U,): VariableReturnValue<B, T, U>

    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.find
     */
    find<U extends T, V, >(callback: (value: T, index: LENGTH,) => value is U, callbackIfNotFound: () => V,): | U | V

    /**
     *
     * @param callback
     * @see Array.findIndex
     */
    findIndex<B extends boolean, >(callback: (value: T, index: LENGTH,) => B,): VariableReturnValue<B, LENGTH, DefaultIndexIfNotFound>

    /**
     *
     * @param callback
     * @see Array.findIndex
     */
    findIndex<U extends LENGTH, >(callback: (value: T, index: LENGTH,) => index is U,): | U | DefaultIndexIfNotFound

    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.findIndex
     */
    findIndex<B extends boolean, U, >(callback: (value: T, index: LENGTH,) => boolean, callbackIfNotFound: () => U,): VariableReturnValue<B, LENGTH, U>

    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.findIndex
     */
    findIndex<U extends LENGTH, V, >(callback: (value: T, index: LENGTH,) => index is U, callbackIfNotFound: () => V,): | U | V


    /**
     *
     * @param callback
     * @see Array.forEach
     */
    forEach(callback: (value: T, index: LENGTH,) => void,): this

    /**
     *
     * @param callback
     * @see Array.map
     */
    map<V>(callback: (value: T, index: LENGTH,) => V,): ExtendedSet<V, LENGTH>

    //endregion -------------------- Loop methods --------------------
    //region -------------------- Conversion methods --------------------

    /**
     * @see Array.entries
     */
    get entries(): IterableIterator<readonly [number, T,]>

    /**
     * @see Array.keys
     */
    get keys(): IterableIterator<number>

    /**
     * @see Set.values
     */
    get values(): IterableIterator<T>


    /**
     *
     * @param separator
     * @see Array.join
     */
    join(separator: string,): string


    toArray(): T[]


    toSet(): Set<T>

    toExtendedSet(): ExtendedSet<T, LENGTH>


    toMap(): Map<LENGTH, T>

    toExtendedMap(): ExtendedMap<LENGTH, T, LENGTH>


    /**
     * @see Array.toString
     */
    toString(): string

    /**
     * @see Array.toLocalString
     */
    toLocaleString(): string

    //endregion -------------------- Conversion methods --------------------
    //region -------------------- Javascript only methods --------------------

    [Symbol.iterator](): Iterator<T>

    [Symbol.toStringTag](): string

    //endregion -------------------- Javascript only methods --------------------

}
