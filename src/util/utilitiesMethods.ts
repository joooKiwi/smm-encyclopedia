import type {ObjectHolder} from './holder/ObjectHolder';

import {AssertionError}               from 'assert';
import {DelayedObjectHolderContainer} from './holder/DelayedObjectHolder.container';

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
        return true;
    if (firstArray.length !== secondArray.length)
        return false;

    const length = firstArray.length;

    for (let i = 0; i < length; i++) {
        const elementInFirstArray = firstArray[i];
        const elementInSecondArray = secondArray[i];
        if (elementInFirstArray instanceof Array && elementInSecondArray instanceof Array)
            if (!isArrayEquals(elementInFirstArray, elementInSecondArray,))
                return false;
        if (firstArray[i] !== secondArray[i])
            return false;
    }

    return true;
}

export function assert(condition: boolean, message: string,): asserts condition {
    if (process.env.NODE_ENV === 'production')
        return;
    if (!condition)
        throw new AssertionError({message: message,});
}

/**
 * A method used to hold a lazy implementation of a specific import.
 * It uses a callback as an argument to delay the importation of the specific importation.
 *
 * @param value the value to delay the importation
 */
export function lazy<T, >(value: () => T,): ObjectHolder<T> {
    return new DelayedObjectHolderContainer(value);
}
