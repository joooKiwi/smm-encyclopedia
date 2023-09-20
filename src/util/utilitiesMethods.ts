import type {CollectionHolder}                  from '@joookiwi/collection'
import type {Enumerable, EnumerableConstructor} from '@joookiwi/enumerable'
import {getCompanion}                           from '@joookiwi/enumerable'
import {AssertionError}                         from 'assert'

import type {ClassWithEnglishName} from 'core/ClassWithEnglishName'
import type {ClassWithType}        from 'core/ClassWithType'
import type {ClassWithReference}   from 'core/ClassWithReference'
import type {GameProperty}         from 'core/entity/properties/game/GameProperty'
import type {GameCollection}       from 'util/collection/GameCollection'

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

//region -------------------- filter game --------------------

/**
 * Create a new {@link ReadonlyArray array} that are in the {@link games}
 *
 * @param values The {@link CollectionHolder} to loop over and retrieve them in the {@link Games.get}
 * @param games The {@link GameCollection collection} of game to get if they can be used
 */
export function filterGame<const T extends ClassWithReference<GameProperty>, >(values: CollectionHolder<T>, games: GameCollection,): readonly T[]
/**
 * Create a new {@link ReadonlyArray array} that are in the {@link games}
 *
 * @param values The {@link ReadonlyArray} to loop over and retrieve them in the {@link Games.get}
 * @param games The {@link GameCollection collection} of game to get if they can be used
 */
export function filterGame<const T extends ClassWithReference<GameProperty>, >(values: readonly T[], games: GameCollection,): readonly T[]
export function filterGame<const T extends ClassWithReference<GameProperty>, >(values: | CollectionHolder<T> | readonly T[], games: GameCollection,): readonly T[] {
    if (values instanceof Array)
        return filterGameByArray(values, games,)
    return filterGameByCollection(values, games,)
}

function filterGameByCollection<const T extends ClassWithReference<GameProperty>, >(values: CollectionHolder<T>, games: GameCollection,): readonly T[] {
    const newArray = [] as T[]
    const gameSize = games.size
    const valuesSize = values.size
    let valuesIndex = -1
    while (++valuesIndex < valuesSize) {
        const value = values.get(valuesIndex,)
        let gameIndex = -1
        while (++gameIndex < gameSize)
            if (games[gameIndex]!.get(value.reference,)) {
                newArray.push(value,)
                break
            }
    }
    return newArray
}

function filterGameByArray<const T extends ClassWithReference<GameProperty>, >(values: readonly T[], games: GameCollection,): readonly T[] {
    const newArray = [] as T[]
    const gameSize = games.size
    const valuesSize = values.length
    let valuesIndex = -1
    while (++valuesIndex < valuesSize) {
        const value = values[valuesIndex]
        let gameIndex = -1
        while (++gameIndex < gameSize)
            if (games[gameIndex]!.get(value.reference,)) {
                newArray.push(value,)
                break
            }
    }
    return newArray
}

//endregion -------------------- filter game --------------------

/**
 * Reverse the array fields
 *
 * @param array The array reference to reverse
 * @returns A new reversed array
 */
export function reverse<const T, >(array: readonly T[],): T[] {
    const size = array.length,
        newArray = new Array(size,)

    let index = array.length
    while (--index >= 0)
        newArray.push(array[index],)
    return newArray
}

/**
 * Convert the {@link Array} to a non-null {@link Array}
 *
 * @param array The array to remove its <b>null</b> values
 */
export function nonNull<const T, >(array: readonly T[],): NonNullable<T>[]
/**
 * Convert the {@link Set} to a non-null {@link Set}
 *
 * @param set The set to remove its <b>null</b> values
 */
export function nonNull<const T, >(set: ReadonlySet<T>,): Set<NonNullable<T>>
export function nonNull<const T, >(setOrArray: ReadonlySet<T> | readonly T[],): | Set<NonNullable<T>> | NonNullable<T>[] {
    if (setOrArray instanceof Array) {
        const size = setOrArray.length,
            newArray = [] as NonNullable<T>[]

        let index = -1
        while (index++ < size) {
            const value = setOrArray[index]
            if (value != null)
                newArray.push(value,)
        }
        if (size === newArray.length)
            return setOrArray as NonNullable<T>[]
        return newArray
    }

    const newSet = new Set<NonNullable<T>>()
    setOrArray.forEach(it => {
        if (it == null) return
        newSet.add(it)
    },)
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
    return getCompanion(enumerableConstructor).values
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
