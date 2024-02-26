import type {CollectionHolder} from '@joookiwi/collection'
import {isCollectionHolder}    from '@joookiwi/collection'
import {AssertionError}        from 'assert'

import type {ClassWithReference}                                                                                  from 'core/ClassWithReference'
import type {GameProperty}                                                                                        from 'core/entity/properties/game/GameProperty'
import type {GameStyleProperty}                                                                                   from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {Games}                                                                                               from 'core/game/Games'
import type {GameStyles}                                                                                          from 'core/gameStyle/GameStyles'
import type {EnumerableUsedInRoute, EnumerableWithEnglishName, EnumerableWithNullableAcronym, EnumerableWithType} from 'util/enumerable/Enumerable.types'
import type {CompanionEnumByAcronym}                                                                              from 'util/enumerable/companion/CompanionEnumByAcronym'
import type {CompanionEnumByName}                                                                                 from 'util/enumerable/companion/CompanionEnumByName'
import type {CompanionEnumByType}                                                                                 from 'util/enumerable/companion/CompanionEnumByType'
import type {CompanionEnumByUrlValue}                                                                             from 'util/enumerable/companion/CompanionEnumByUrlValue'
import type {CompanionEnumRetrievableInUrl}                                                                       from 'util/enumerable/companion/CompanionEnumRetrievableInUrl'

import {isInProduction} from 'variables'
import {EMPTY_STRING}   from 'util/emptyVariables'

/**
 * Validate if an {@link ReadonlyArray} is equals to another one.
 *
 * It will validate recursively if every item within the array are equals (whenever the type it is).
 *
 * @param first The first {@link ReadonlyArray} to compare
 * @param second The second {@link ReadonlyArray} to compare
 */
export function isArrayEquals(first: readonly unknown[], second: readonly unknown[],): boolean {
    if (first === second)
        return true
    if (first.length !== second.length)
        return false

    const size = first.length

    for (let i = 0; i < size; i++) {
        const elementInFirst = first[i]
        const elementInSecond = second[i]
        if (elementInFirst instanceof Array && elementInSecond instanceof Array)
            if (!isArrayEquals(elementInFirst, elementInSecond,))
                return false
        if (isCollectionHolder(elementInFirst,) && isCollectionHolder(elementInSecond,))
            if (!isCollectionEquals(elementInFirst, elementInSecond,))
                return false
        if (first[i] !== second[i])
            return false
    }

    return true
}

/**
 * Validate if a {@link CollectionHolder} is equals to another one.
 *
 * It will validate recursively if every item within the array are equals (whenever the type it is).
 *
 * @param first The first {@link CollectionHolder} to compare
 * @param second The second {@link CollectionHolder} to compare
 */
export function isCollectionEquals(first: CollectionHolder<unknown>, second: CollectionHolder<unknown>,): boolean {
    if (first === second)
        return true
    if (first.size !== second.size)
        return false

    const size = first.size

    for (let i = 0; i < size; i++) {
        const elementInFirst = first[i]
        const elementInSecond = second[i]
        if (elementInFirst instanceof Array && elementInSecond instanceof Array)
            if (!isArrayEquals(elementInFirst, elementInSecond,))
                return false
        if (isCollectionHolder(elementInFirst,) && isCollectionHolder(elementInSecond,))
            if (!isCollectionEquals(elementInFirst, elementInSecond,))
                return false
        if (first[i] !== second[i])
            return false
    }

    return true
}

//region -------------------- filter game --------------------

export function intersect<const T, >(first: CollectionHolder<T>, second: readonly T[],): CollectionHolder<T>
export function intersect<const T, >(first: CollectionHolder<T>, second: CollectionHolder<T>,): CollectionHolder<T>
export function intersect<const T, >(first: readonly T[], second: readonly T[],): readonly T[]
export function intersect<const T, >(first: readonly T[], second: CollectionHolder<T>,): readonly T[]
export function intersect<const T, >(first: | CollectionHolder<T> | readonly T[], second: | CollectionHolder<T> | readonly T[],): CollectionHolder<T> | readonly T[] {
    const secondSize = second.length
    return first.filter(it => {
        let index = -1
        while (++index < secondSize)
            if (second.at(index,) === it)
                return true
        return false
    },)
}

//endregion -------------------- filter game --------------------

//region -------------------- filter game --------------------

/**
 * Create a new {@link ReadonlyArray array} that are in the {@link games}
 *
 * @param values The {@link CollectionHolder} to loop over and retrieve them in the {@link Games.get}
 * @param games The {@link CollectionHolder collection} of game to get if they can be used
 */
export function filterGame<const T extends ClassWithReference<GameProperty>, >(values: CollectionHolder<T>, games: CollectionHolder<Games>,): readonly T[]
/**
 * Create a new {@link ReadonlyArray array} that are in the {@link games}
 *
 * @param values The {@link ReadonlyArray} to loop over and retrieve them in the {@link Games.get}
 * @param games The {@link CollectionHolder collection} of game to get if they can be used
 */
export function filterGame<const T extends ClassWithReference<GameProperty>, >(values: readonly T[], games: CollectionHolder<Games>,): readonly T[]
export function filterGame<const T extends ClassWithReference<GameProperty>, >(values: | CollectionHolder<T> | readonly T[], games: CollectionHolder<Games>,): readonly T[] {
    if (values instanceof Array)
        return filterGameByArray(values, games,)
    return filterGameByCollection(values, games,)
}

function filterGameByCollection<const T extends ClassWithReference<GameProperty>, >(values: CollectionHolder<T>, games: CollectionHolder<Games>,): readonly T[] {
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

function filterGameByArray<const T extends ClassWithReference<GameProperty>, >(values: readonly T[], games: CollectionHolder<Games>,): readonly T[] {
    const newArray = [] as T[]
    const size = games.size
    const valuesSize = values.length
    let valuesIndex = -1
    while (++valuesIndex < valuesSize) {
        const value = values[valuesIndex]
        let index = -1
        while (++index < size)
            if (games[index]!.get(value.reference,)) {
                newArray.push(value,)
                break
            }
    }
    return newArray
}

//endregion -------------------- filter game --------------------
//region -------------------- filter game style --------------------

export function filterGameStyle<const T extends ClassWithReference<GameStyleProperty>, >(values: readonly T[], gameStyles: CollectionHolder<GameStyles>,): readonly T[] {
    const newArray = [] as T[]
    const size = gameStyles.size
    const valuesSize = values.length
    let valuesIndex = -1
    while (++valuesIndex < valuesSize) {
        const value = values[valuesIndex]
        let index = -1
        while (++index < size)
            if (gameStyles[index]!.get(value.reference,)) {
                newArray.push(value,)
                break
            }
    }
    return newArray
}

//endregion -------------------- filter game style --------------------

/**
 * Reverse the array fields
 *
 * @param array The array reference to reverse
 * @returns A new reversed array
 */
export function reverse<const T, >(array: readonly T[],): T[] {
    const size = array.length
    const newArray = new Array(size,)

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
        const size = setOrArray.length
        const newArray = [] as NonNullable<T>[]

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

export function getValueByEnglishName<const T extends EnumerableWithEnglishName, >(value: Nullable<| T | string>, companionEnum: CompanionEnumByName<T, any>,): T {
    if (value == null)
        throw new TypeError(`No "${companionEnum.instance.name}" could be found by a null name.`,)
    if (value instanceof companionEnum.instance)
        return value as T
    const valueFound = companionEnum.values.find(it => it.englishName === value,)
    if (valueFound == null)
        throw new ReferenceError(`No "${companionEnum.instance.name}" could be found by this value "${value}".`,)
    return valueFound
}

export function getValueByAcronym<const T extends EnumerableWithNullableAcronym, >(value: Nullable<| T | string>, companionEnum: CompanionEnumByAcronym<T, any>,): T {
    if (value == null)
        throw new TypeError(`No "${companionEnum.instance.name}" could be found by a null acronym.`,)
    if (value instanceof companionEnum.instance)
        return value as T
    const valueFound = companionEnum.values.find(it => it.acronym === value,)
    if (valueFound == null)
        throw new ReferenceError(`No "${companionEnum.instance.name}" could be found by this value "${value}".`,)
    return valueFound
}

export function getValueByType<const T extends EnumerableWithType<unknown>, >(value: Nullable<| T | T['type']>, companionEnum: CompanionEnumByType<T['type'], T, any>,): T {
    if (value == null)
        throw new TypeError(`No "${companionEnum.instance.name}" could be found by a null type.`,)
    if (value instanceof companionEnum.instance)
        return value as T
    const valueFound = companionEnum.values.find(it => it.type === value,)
    if (valueFound == null)
        throw new ReferenceError(`No "${companionEnum.instance.name}" could be found by this value "${value}".`,)
    return valueFound
}

export function getValueByUrlValue<const T extends EnumerableUsedInRoute, >(value: Nullable<| T | string>, companionEnum: CompanionEnumByUrlValue<T, any>,): T {
    if (value == null)
        throw new TypeError(`No "${companionEnum.instance.name}" could be found by a null url value.`,)
    if (value instanceof companionEnum.instance)
        return value as T
    const valueFound = companionEnum.values.find(it => it.urlValue === value,)
    if (valueFound == null)
        throw new ReferenceError(`No "${companionEnum.instance.name}" could be found by this value "${value}".`,)
    return valueFound
}

export function getValueInUrl<const T extends EnumerableUsedInRoute, >(url: string, companionEnum: CompanionEnumRetrievableInUrl<T, any>,): NullOr<T> {
    if (!companionEnum.URL_REGEX.test(url,))
        return null

    const lowerCasedUrl = url.toLowerCase()
    const prefix = companionEnum.PREFIX?.toLowerCase() ?? EMPTY_STRING
    const valueFound = companionEnum.values.find(it =>
        lowerCasedUrl.includes(`/${prefix}${it.urlValue.toLowerCase()}/`,),)
    if (valueFound == null)
        throw new ReferenceError(`No "${companionEnum.instance.name}" was found by the url "${url}".`,)
    return valueFound
}

//endregion -------------------- get value by … --------------------
