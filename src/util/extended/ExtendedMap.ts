import type {ClassThatCanAddItems}                               from './ClassThatCanAddItems'
import type {ClassThatCanBeConvertible}                          from './ClassThatCanBeConvertible'
import type {ClassThatCanGetItemsOrKeys, DefaultValueIfNotFound} from './ClassThatCanGetItems'
import type {ClassThatCanRemoveItems}                            from './ClassThatCanRemoveItems'
import type {ClassThatCanSearchItemsOrKeys, VariableReturnValue} from './ClassThatCanSearchItems'
import type {ClassThatCanVerifyItems}                            from './ClassThatCanVerifyItems'
import type {ClassWithLength}                                    from './ClassWithLength'
import type {ClassWithTools}                                     from './ClassWithTools'
import type {ConditionalIntermediate}                            from './tools/ConditionalIntermediate'
import type {EntrySet}                                           from './EntrySet'
import type {ExtendedIterable}                                   from './ExtendedIterable'
import type {ExtendedSet}                                        from './ExtendedSet'

export interface ExtendedMap<K, V, LENGTH extends number = number, >
    extends ExtendedIterable<readonly [K, V,], K, V>,
        ClassWithLength<LENGTH>,
        ClassThatCanGetItemsOrKeys<K, V>, ClassThatCanSearchItemsOrKeys<K, V>, ClassThatCanVerifyItems<K>,
        ClassThatCanAddItems<readonly[K, V,]>, ClassThatCanRemoveItems<K>,
        ClassThatCanBeConvertible<EntrySet<K, V>, K, V>,
        ClassWithTools {

    //region -------------------- Length methods --------------------

    /**
     * @see Map.size
     */
    get size(): this['length']

    /**
     * @see Map.size
     */
    get length(): LENGTH

    //endregion -------------------- Length methods --------------------
    //region -------------------- Addition methods --------------------

    /**
     *
     * @param key
     * @param value
     * @see Map.set
     */
    set(key: K, value: V,): this

    /**
     *
     * @param values
     * @see Map.set
     */
    add(...values: readonly (readonly [K, V,])[]): this

    /**
     *
     * @param values
     * @see Map.set
     */
    push(...values: readonly (readonly [K, V,])[]): this

    //region -------------------- & Get --------------------

    addAndGet<V2 extends readonly [K, V,] = readonly [K, V,], >(value: V2,): V2

    addAndGet<V2 extends (readonly [K, V,])[] = (readonly [K, V,])[], >(...values: V2): V2

    addAndGet<V2 extends readonly (readonly [K, V,])[] = readonly (readonly [K, V,])[], >(...values: V2): V2

    pushAndGet<V2 extends readonly [K, V,] = readonly [K, V,], >(value: V2,): V2

    pushAndGet<V2 extends (readonly [K, V,])[] = (readonly [K, V,])[], >(...values: V2): V2

    pushAndGet<V2 extends readonly (readonly [K, V,])[] = readonly (readonly [K, V,])[], >(...values: V2): V2

    //endregion -------------------- & Get --------------------

    //endregion -------------------- Addition methods --------------------
    //region -------------------- Removal methods --------------------

    /**
     *
     * @param values
     * @see Map.delete
     */
    delete(...values: K[]): boolean

    /**
     *
     * @param values
     * @see Map.delete
     */
    drop(...values: K[]): boolean

    /**
     *
     * @param values
     * @see Map.delete
     */
    remove(...values: K[]): boolean


    /**
     * @see Map.clear
     */
    clear(): this

    //endregion -------------------- Removal methods --------------------
    //region -------------------- Loop methods --------------------

    if(callback: (map: this,) => boolean,): ConditionalIntermediate<this>

    /**
     *
     * @param values
     * @see Map.has
     */
    has(...values: readonly K[]): boolean

    has(...values: readonly any[]): boolean

    /**
     *
     * @param values
     * @see Map.has
     */
    includes(...values: readonly K[]): boolean

    includes(...values: readonly any[]): boolean


    get(key: K,): V

    get(key: any,): | V | DefaultValueIfNotFound

    getKey(value: V,): K

    getKey(value: any,): K | DefaultValueIfNotFound

    /**
     *
     * @param callback
     * @see Array.find
     */
    find<B extends boolean, >(callback: (key: K, value: V,) => B,): VariableReturnValue<B, V, DefaultValueIfNotFound>

    /**
     *
     * @param callback
     * @see Array.find
     */
    find<U extends V, >(callback: (key: K, value: V,) => value is U,): | U | DefaultValueIfNotFound

    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.find
     */
    find<B extends boolean, U, >(callback: (key: K, value: V,) => B, callbackIfNotFound: () => U,): VariableReturnValue<B, V, U>

    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.find
     */
    find<U extends V, V2, >(callback: (key: K, value: V,) => value is U, callbackIfNotFound: () => V2,): | U | V2

    /**
     *
     * @param callback
     * @see Array.findIndex
     */
    findKey<B extends boolean, >(callback: (key: K, value: V,) => B,): VariableReturnValue<B, K, DefaultValueIfNotFound>

    /**
     *
     * @param callback
     * @see Array.findIndex
     */
    findKey<U extends K, >(callback: (key: K, value: V,) => key is U,): | U | DefaultValueIfNotFound

    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.findIndex
     */
    findKey<B extends boolean, U, >(callback: (key: K, value: V,) => boolean, callbackIfNotFound: () => U,): VariableReturnValue<B, K, U>

    /**
     *
     * @param callback
     * @param callbackIfNotFound
     * @see Array.findIndex
     */
    findKey<U extends K, V2, >(callback: (key: K, value: V,) => key is U, callbackIfNotFound: () => V2,): | U | V2

    /**
     *
     * @param callback
     * @see Map.forEach
     */
    forEach(callback: (key: K, value: V,) => void,): this

    /**
     *
     * @param callback
     * @see Array.map
     */
    map<V2, >(callback: (key: K, value: V,) => V2,): ExtendedMap<K, V2, LENGTH>

    //endregion -------------------- Loop methods --------------------
    //region -------------------- Conversion methods --------------------

    /**
     * @see Map.entries
     */
    get entries(): IterableIterator<readonly [K, V,]>

    /**
     * @see Map.keys
     */
    get keys(): IterableIterator<K>

    /**
     * @see Map.values
     */
    get values(): IterableIterator<V>


    /**
     *
     * @param separator
     * @see Array.join
     */
    join(separator: string,): string


    toArray(): EntrySet<K, V>[]

    toSet(): Set<EntrySet<K, V>>

    toExtendedSet(): ExtendedSet<EntrySet<K, V>, LENGTH>

    toMap(): Map<K, V>

    toExtendedMap(): ExtendedMap<K, V, LENGTH>


    /**
     * @see Map.toString
     */
    toString(): string

    /**
     * @see Map.toLocalString
     */
    toLocalString(): string

    //endregion -------------------- Conversion methods --------------------
    //region -------------------- Javascript only methods --------------------

    [Symbol.iterator](): Iterator<readonly [K, V,]>

    [Symbol.toStringTag](): string

    //endregion -------------------- Javascript only methods --------------------

}
