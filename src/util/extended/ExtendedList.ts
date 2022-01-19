import type {ClassThatCanAddItems}                                                          from './ClassThatCanAddItems';
import type {ClassThatCanBeConvertible}                                                     from './ClassThatCanBeConvertible';
import type {ClassThatCanGetItemsOrIndexes, DefaultIndexIfNotFound, DefaultValueIfNotFound} from './ClassThatCanGetItems';
import type {ClassThatCanRemoveItems}                                                       from './ClassThatCanRemoveItems';
import type {ClassThatCanSearchItemsOrIndexes, VariableReturnValue}                         from './ClassThatCanSearchItems';
import type {ClassThatCanVerifyItems}                                                       from './ClassThatCanVerifyItems';
import type {ClassWithLength}                                                               from './ClassWithLength';
import type {ClassWithTools}                                                                from './ClassWithTools';
import type {ConditionalIntermediate}                                                       from './tools/ConditionalIntermediate';
import type {ExtendedIterable}                                                              from './ExtendedIterable';
import type {ExtendedMap}                                                                   from './ExtendedMap';
import type {ExtendedSet}                                                                   from './ExtendedSet';

export interface ExtendedList<T, LENGTH extends number = number, >
    extends ExtendedIterable<T, number, T>,
        ClassWithLength<LENGTH>,
        ClassThatCanGetItemsOrIndexes<LENGTH, T>, ClassThatCanSearchItemsOrIndexes<LENGTH, T>, ClassThatCanVerifyItems<T>,
        ClassThatCanAddItems<T>, ClassThatCanRemoveItems<T>,
        ClassThatCanBeConvertible<T, number, T>,
        ClassWithTools {

    [index: number]: T

    //region -------------------- Length methods --------------------

    get size(): this['length']

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

    delete(...values: T[]): boolean

    drop(...values: T[]): boolean

    remove(...values: T[]): boolean

    clear(): this

    //endregion -------------------- Removal methods --------------------
    //region -------------------- Loop methods --------------------

    if(callback: (set: this,) => boolean,): ConditionalIntermediate<this>

    range(startingIndex?: number, endingIndex?: number,): | this | ExtendedList<T>


    has(...values: readonly T[]): boolean

    has(...values: readonly any[]): boolean

    includes(...values: readonly T[]): boolean

    includes(...values: readonly any[]): boolean


    get(index: LENGTH,): T

    get(index: any,): | T | DefaultValueIfNotFound


    getIndex(value: T,): LENGTH

    getIndex(value: any,): LENGTH | DefaultIndexIfNotFound


    find<B extends boolean, >(callback: (value: T, index: LENGTH,) => B,): VariableReturnValue<B, T, DefaultValueIfNotFound>

    find<U extends T, >(callback: (value: T, index: LENGTH,) => value is U,): | U | DefaultValueIfNotFound

    find<B extends boolean, U, >(callback: (value: T, index: LENGTH,) => B, callbackIfNotFound: () => U,): VariableReturnValue<B, T, U>

    find<U extends T, V, >(callback: (value: T, index: LENGTH,) => value is U, callbackIfNotFound: () => V,): | U | V

    findIndex<B extends boolean, >(callback: (value: T, index: LENGTH,) => B,): VariableReturnValue<B, LENGTH, DefaultIndexIfNotFound>

    findIndex<U extends LENGTH, >(callback: (value: T, index: LENGTH,) => index is U,): | U | DefaultIndexIfNotFound

    findIndex<B extends boolean, U, >(callback: (value: T, index: LENGTH,) => boolean, callbackIfNotFound: () => U,): VariableReturnValue<B, LENGTH, U>

    findIndex<U extends LENGTH, V, >(callback: (value: T, index: LENGTH,) => index is U, callbackIfNotFound: () => V,): | U | V


    forEach(callback: (value: T, index: LENGTH,) => void,): this

    map<V>(callback: (value: T, index: LENGTH,) => V,): ExtendedList<V, LENGTH>

    //endregion -------------------- Loop methods --------------------
    //region -------------------- Conversion methods --------------------

    get entries(): IterableIterator<readonly [number, T,]>

    get keys(): IterableIterator<number>

    get values(): IterableIterator<T>


    join(separator: string,): string


    toArray(): T[]


    toSet(): Set<T>

    toExtendedSet(): ExtendedSet<T, LENGTH>


    toMap(): Map<LENGTH, T>

    toExtendedMap(): ExtendedMap<LENGTH, T, LENGTH>


    toString(): string

    toLocalString(): string

    //endregion -------------------- Conversion methods --------------------
    //region -------------------- Javascript only methods --------------------

    [Symbol.iterator](): Iterator<T>

    [Symbol.toStringTag](): string

    //endregion -------------------- Javascript only methods --------------------

}
