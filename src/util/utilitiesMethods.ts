import type {CollectionHolder, Enumerable, EnumerableConstructor} from '@joookiwi/enumerable/dist/types'
import {EnumHelper}                                               from '@joookiwi/enumerable'
import {AssertionError}                                           from 'assert'

import type {ClassWithEnglishName} from 'core/ClassWithEnglishName'
import type {ClassWithType}        from 'core/ClassWithType'
import type {ClassWithReference}   from 'core/ClassWithReference'
import type {GameProperty}         from 'core/entity/properties/game/GameProperty'
import type {GameCollection}       from 'util/collection/GameCollection'
import type {Nullable}             from 'util/types/nullable'
import type {EmptyString}          from 'util/types/variables'

import {isInProduction} from 'variables'
import {EMPTY_STRING}   from 'util/emptyVariables'

/**
 * Validate if an array is equals to another one.
 *
 * It will validate recursively if every item within the array are equals (whenever the type it is).
 *
 * @param firstArray
 * @param secondArray
 */
export function isArrayEquals(firstArray: readonly any[], secondArray: readonly any[],): boolean {
    if (firstArray === secondArray)
        return true
    if (firstArray.length !== secondArray.length)
        return false

    const length = firstArray.length

    for (let i = 0; i < length; i++) {
        const elementInFirstArray = firstArray[i]
        const elementInSecondArray = secondArray[i]
        if (elementInFirstArray instanceof Array && elementInSecondArray instanceof Array)
            if (!isArrayEquals(elementInFirstArray, elementInSecondArray,))
                return false
        if (firstArray[i] !== secondArray[i])
            return false
    }

    return true
}

/**
 * Create a new {@link Iterator} based on a {@link CollectionHolder} and a condition
 *
 * @param collection The collection to loop over
 * @param condition A callback that will only yield the value if met
 */
export function newIterator<const T, >(collection: CollectionHolder<T>, condition: (value: T,) => boolean): Iterable<T> {
    const size = collection.size
    return {
        * [Symbol.iterator]() {
            let index = -1
            while (++index < size) {
                const value = collection[index]!
                if (condition(value))
                    yield value
            }
        }
    }
}

/**
 * Create a new {@link IterableIterator} for the type specified that are in the {@link Games} in the {@link games collection}
 *
 * @param games The {@link GameCollection collection} of game to get if they can be used
 * @param iterator The {@link IterableIterator} to loop over and retrieve them in the {@link Games.get}
 */
export function* newIterableIterator<const T extends ClassWithReference<GameProperty>, >(games: GameCollection, iterator: IterableIterator<T>,): IterableIterator<T> {
    const gameSize = games.size

    let value = iterator.next() as IteratorResult<T, T>
    while (!value.done) {
        let gameIndex = -1
        while (++gameIndex < gameSize)
            if (games[gameIndex]!.get(value.value.reference,)) {
                yield value.value
                break
            }
        value = iterator.next()
    }
}

/**
 * Reverse the array fields
 *
 * @param array The array reference to reverse
 * @returns A new reversed array
 */
export function reverse<const T, >(array: readonly T[],): T[] {
    return Array.from({
        * [Symbol.iterator]() {
            let index = array.length
            while (--index >= 0)
                yield array[index]
        },
    },)
}

/**
 * Convert the mutable {@link Array} to a non-null mutable {@link Array}
 *
 * @param mutableArray The mutable array to remove its <b>null</b> values
 */
export function nonNull<const T, >(mutableArray: T[],): NonNullable<T>[]
/**
 * Convert the {@link Array} to a non-null {@link Array}
 *
 * @param array The array to remove its <b>null</b> values
 */
export function nonNull<const T, >(array: readonly T[],): readonly NonNullable<T>[]
/**
 * Convert the mutable {@link Set} to a non-null mutable {@link Set}
 *
 * @param mutableset The mutable set to remove its <b>null</b> values
 */
export function nonNull<const T, >(mutableSet: Set<T>,): Set<NonNullable<T>>
/**
 * Convert the {@link Set} to a non-null {@link Set}
 *
 * @param set The set to remove its <b>null</b> values
 */
export function nonNull<const T, >(set: ReadonlySet<T>,): ReadonlySet<NonNullable<T>>
export function nonNull<const T, >(setOrArray: ReadonlySet<T> | readonly T[],): | ReadonlySet<NonNullable<T>> | readonly T[] {
    if (setOrArray instanceof Array)
        return setOrArray.filter((it): it is NonNullable<T> => it != null)

    const newSet = new Set<NonNullable<T>>()
    setOrArray.forEach(it => {
        if (it == null) return
        newSet.add(it)
    })
    return newSet
}

/**
 * Define if the value is an empty string or nullable (<b>null</b> / <b>undefined</b>)
 *
 * @param value The value to compare
 */
export function isNullableEmptyString(value: unknown,): value is Nullable<EmptyString> {
    return value === EMPTY_STRING || value == null
}

export function assert(condition: boolean, message: string,): asserts condition {
    if (isInProduction)
        return
    if (!condition)
        throw new AssertionError({message: message,})
}

//region -------------------- get value by … --------------------

function getValues<const T extends Enumerable, >(enumerableConstructor: Nullable<EnumerableConstructor<T, any>>,): CollectionHolder<T> {
    return EnumHelper.getCompanion(enumerableConstructor).values
}

export function getValueByEnglishName<const T extends EnumerableWithEnglishName, >(value: Nullable<| T | string>, enumerableConstructor: EnumerableConstructor<T, any>,): T {
    if (value == null)
        throw new TypeError(`No "${enumerableConstructor.name}" could be found by a null name.`)
    if (value instanceof enumerableConstructor)
        return value as T
    const valueFound = getValues(enumerableConstructor).find(it => it.englishName === value)
    if (valueFound == null)
        throw new ReferenceError(`No "${enumerableConstructor.name}" could be found by this value "${value}".`)
    return valueFound
}

export function getValueByType<const T extends EnumerableWithType, >(value: Nullable<| T | string>, enumerableConstructor: EnumerableConstructor<T, any>,): T {
    if (value == null)
        throw new TypeError(`No "${enumerableConstructor.name}" could be found by a null type.`)
    if (value instanceof enumerableConstructor)
        return value as T
    const valueFound = getValues(enumerableConstructor).find(it => it.type === value)
    if (valueFound == null)
        throw new ReferenceError(`No "${enumerableConstructor.name}" could be found by this value "${value}".`)
    return valueFound
}

type EnumerableWithEnglishName = & Enumerable & ClassWithEnglishName<string>
type EnumerableWithType = & Enumerable & ClassWithType<string>

//endregion -------------------- get value by … --------------------
