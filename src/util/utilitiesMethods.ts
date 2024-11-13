import type {CollectionHolder}                            from '@joookiwi/collection'
import type {Array, MutableArray}                         from '@joookiwi/type'
import {forEach as forEach2, isArray, isCollectionHolder} from '@joookiwi/collection'
import {AssertionError}                                   from 'assert'

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

import {isInProduction}            from 'variables'
import {EMPTY_ARRAY, EMPTY_STRING} from 'util/emptyVariables'

//region -------------------- is --------------------

/**
 * Validate if an {@link ReadonlyArray Array} is equals to another one.
 *
 * It will validate recursively if every item within the array are equals (whenever the type it is).
 *
 * @param first The first {@link ReadonlyArray Array} to compare
 * @param second The second {@link ReadonlyArray Array} to compare
 */
export function isArrayEquals(first: Array<unknown>, second: Array<unknown>,): boolean {
    if (first === second)
        return true
    if (first.length !== second.length)
        return false

    const size = first.length

    for (let i = 0; i < size; i++) {
        const elementInFirst = first[i]
        const elementInSecond = second[i]
        if (isArray(elementInFirst,))
            if (isArray(elementInSecond,))
                if (!isArrayEquals(elementInFirst, elementInSecond,))
                    return false
        if (isCollectionHolder(elementInFirst,))
            if (isCollectionHolder(elementInSecond,))
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
        if (isArray(elementInFirst,))
            if (isArray(elementInSecond,))
                if (!isArrayEquals(elementInFirst, elementInSecond,))
                    return false
        if (isCollectionHolder(elementInFirst,))
            if (isCollectionHolder(elementInSecond,))
                if (!isCollectionEquals(elementInFirst, elementInSecond,))
                    return false
        if (first[i] !== second[i])
            return false
    }

    return true
}


/**
 * Define if the value is an empty string or nullable (<b>null</b> / <b>undefined</b>)
 *
 * @param value The value to compare
 */
export function isNullableEmptyString(value: unknown,): value is Nullable<EmptyString> {
    return value === EMPTY_STRING || value == null
}

//endregion -------------------- is --------------------
//region -------------------- for each --------------------

export function forEach<const K, const V,>(values: ReadonlyMap<K, V>, action: (key: K, value: V,) => void,): void {
    for (const [key, value,] of values)
        action(key, value,)
}

//endregion -------------------- for each --------------------
//region -------------------- map --------------------

export function map<const K1, const K2, const V1, const V2, >(values: ReadonlyMap<K1, V1>, transform: (key: K1, value: V1,) => readonly[K2, V2,],): ReadonlyMap<K2, V2> {
    const map = new Map<K2, V2>()
    values.forEach((value, key,) => {
        const transformedValues = transform(key, value,)
        map.set(transformedValues[0], transformedValues[1],)
    },)
    return map
}

export function mapValue<const K, const V1, const V2, >(values: ReadonlyMap<K, V1>, transform: (value: V1,) => V2,): ReadonlyMap<K, V2> {
    const map = new Map<K, V2>()
    values.forEach((value, key,) =>
        map.set(key, transform(value,),),)
    return map
}

export function mapKey<const K1, const K2, const V, >(values: ReadonlyMap<K1, V>, transform: (key: K1,) => K2,): ReadonlyMap<K2, V> {
    const map = new Map<K2, V>()
    values.forEach((value, key,) =>
            map.set(transform(key,), value,),)
    return map
}

//endregion -------------------- map --------------------
//region -------------------- join --------------------

export function join<const T, >(first: | CollectionHolder<T> | Array<T>, second: | CollectionHolder<T> | Array<T>,) {
    const firstSize = first.length
    const secondSize = second.length
    const finalSize = firstSize + secondSize
    const newArray = new Array<T>(finalSize,)

    let index = finalSize
    while (index-- > firstSize)
        newArray[index] = second.at(index,) as T

    while (index-- > 0)
        newArray[index] = first.at(index,) as T

    return newArray
}

//endregion -------------------- join --------------------
//region -------------------- intersect --------------------

export function intersect<const T, >(first: | CollectionHolder<T> | Array<T>, second: | CollectionHolder<T> | Array<T>,) {
    const firstSize = first.length
    if (firstSize === 0)
        return EMPTY_ARRAY

    const secondSize = second.length
    const newArray: MutableArray<T> = []
    let firstIndex = -1
    while (++firstIndex < firstSize) {
        const firstValue = first[firstIndex] as T
        let secondIndex = -1
        while (++secondIndex < secondSize)
            if (second[secondIndex] === firstValue) {
                newArray.push(firstValue,)
                break
            }
    }
    return newArray
}

//endregion -------------------- intersect --------------------
//region -------------------- filter --------------------

/**
 * Create a new {@link ReadonlyArray Array} that are in the {@link games}
 *
 * @param values The {@link CollectionHolder} to loop over and retrieve them in the {@link Games.get}
 * @param games The {@link CollectionHolder Collection} of game to get if they can be used
 */
export function filterGame<const T extends ClassWithReference<GameProperty>, >(values: CollectionHolder<T>, games: CollectionHolder<Games>,): Array<T>
/**
 * Create a new {@link ReadonlyArray Array} that are in the {@link games}
 *
 * @param values The {@link ReadonlyArray Array} to loop over and retrieve them in the {@link Games.get}
 * @param games The {@link CollectionHolder Collection} of game to get if they can be used
 */
export function filterGame<const T extends ClassWithReference<GameProperty>, >(values: Array<T>, games: CollectionHolder<Games>,): Array<T>
export function filterGame<const T extends ClassWithReference<GameProperty>, >(values: | CollectionHolder<T> | Array<T>, games: CollectionHolder<Games>,) {
    const valuesSize = values.length
    if (valuesSize === 0)
        return EMPTY_ARRAY

    const gameSize = games.size
    if (gameSize === 0)
        return isArray(values,) ? values : values.toArray()

    const newArray: MutableArray<T> = []
    forEach2(values, value => {
        for (const it of games)
            if (it.get(value.reference,)) {
                newArray.push(value,)
                break
            }
    },)
    return newArray
}

/**
 * Create a new {@link ReadonlyArray Array} that are in the {@link gameStyles}
 *
 * @param values The {@link CollectionHolder Collection} to loop over and retrieve them in the {@link GameStyles.get}
 * @param games The {@link CollectionHolder Collection} of game to get if they can be used
 */
export function filterGameStyle<const T extends ClassWithReference<GameStyleProperty>, >(values: CollectionHolder<T>, gameStyles: CollectionHolder<GameStyles>,): Array<T>
/**
 * Create a new {@link ReadonlyArray Array} that are in the {@link gameStyles}
 *
 * @param values The {@link ReadonlyArray Array} to loop over and retrieve them in the {@link GameStyles.get}
 * @param games The {@link CollectionHolder Collection} of game to get if they can be used
 */
export function filterGameStyle<const T extends ClassWithReference<GameStyleProperty>, >(values: Array<T>, gameStyles: CollectionHolder<GameStyles>,): Array<T>
export function filterGameStyle<const T extends ClassWithReference<GameStyleProperty>, >(values: | CollectionHolder<T> | Array<T>, gameStyles: CollectionHolder<GameStyles>,) {
    const valuesSize = values.length
    if (valuesSize === 0)
        return EMPTY_ARRAY

    const gameSize = gameStyles.size
    if (gameSize === 0)
        return isArray(values,) ? values : values.toArray()

    const newArray: MutableArray<T> = []
    forEach2(values, value => {
        for (const it of gameStyles)
            if (it.get(value.reference,)) {
                newArray.push(value,)
                break
            }
    },)
    return newArray
}

//endregion -------------------- filter --------------------
//region -------------------- assert --------------------

export function assert(condition: boolean, message: string,): asserts condition {
    if (isInProduction)
        return
    if (!condition)
        throw new AssertionError({message: message,},)
}

//endregion -------------------- assert --------------------
//region -------------------- get value by … --------------------

export function getValueByEnglishName<const T extends EnumerableWithEnglishName, >(value: Nullable<| NoInfer<T> | string>, companionEnum: CompanionEnumByName<T, any>,): T {
    if (value == null)
        throw new TypeError(`No "${companionEnum.instance.name}" could be found by a null name.`,)
    if (value instanceof companionEnum.instance)
        return value as T
    const valueFound = companionEnum.values.findFirstOrNull(it => it.englishName === value,)
    if (valueFound == null)
        throw new ReferenceError(`No "${companionEnum.instance.name}" could be found by this value "${value}".`,)
    return valueFound
}

export function getValueByAcronym<const T extends EnumerableWithNullableAcronym, >(value: Nullable<| NoInfer<T> | string>, companionEnum: CompanionEnumByAcronym<T, any>,): T {
    if (value == null)
        throw new TypeError(`No "${companionEnum.instance.name}" could be found by a null acronym.`,)
    if (value instanceof companionEnum.instance)
        return value as T
    const valueFound = companionEnum.values.findFirstOrNull(it => it.acronym === value,)
    if (valueFound == null)
        throw new ReferenceError(`No "${companionEnum.instance.name}" could be found by this value "${value}".`,)
    return valueFound
}

export function getValueByType<const T extends EnumerableWithType<unknown>, >(value: Nullable<NoInfer<| T | T['type']>>, companionEnum: CompanionEnumByType<T['type'], T, any>,): T {
    if (value == null)
        throw new TypeError(`No "${companionEnum.instance.name}" could be found by a null type.`,)
    if (value instanceof companionEnum.instance)
        return value as T
    const valueFound = companionEnum.values.findFirstOrNull(it => it.type === value,)
    if (valueFound == null)
        throw new ReferenceError(`No "${companionEnum.instance.name}" could be found by this value "${value}".`,)
    return valueFound
}

export function getValueByUrlValue<const T extends EnumerableUsedInRoute, >(value: Nullable<| NoInfer<T> | string>, companionEnum: CompanionEnumByUrlValue<T, any>,): T {
    if (value == null)
        throw new TypeError(`No "${companionEnum.instance.name}" could be found by a null url value.`,)
    if (value instanceof companionEnum.instance)
        return value as T
    const valueFound = companionEnum.values.findFirstOrNull(it => it.urlValue === value,)
    if (valueFound == null)
        throw new ReferenceError(`No "${companionEnum.instance.name}" could be found by this value "${value}".`,)
    return valueFound
}

export function getValueInUrl<const T extends EnumerableUsedInRoute, >(url: string, companionEnum: CompanionEnumRetrievableInUrl<T, any>,): NullOr<T> {
    if (!companionEnum.URL_REGEX.test(url,))
        return null

    const lowerCasedUrl = url.toLowerCase()
    const prefix = companionEnum.PREFIX?.toLowerCase() ?? EMPTY_STRING
    const valueFound = companionEnum.values.findFirstOrNull(it =>
        lowerCasedUrl.includes(`/${prefix}${it.urlValue.toLowerCase()}/`,),)
    if (valueFound == null)
        throw new ReferenceError(`No "${companionEnum.instance.name}" was found by the url "${url}".`,)
    return valueFound
}

//endregion -------------------- get value by … --------------------
