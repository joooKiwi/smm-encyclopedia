import type {EnumerableStatic} from './EnumerableStatic';

const ordinalMap: Map<EnumerableStatic, number> = new Map();

/**
 * Return the last ordinal (number) based on the instance received.
 *
 * @param instance the instance to retrieve the ordinal
 */
export function getLastOrdinalOn<O extends number = number, >(instance: EnumerableStatic<O>,): O {
    return ordinalMap.has(instance)
        ? ordinalMap.set(instance, ordinalMap.get(instance)! + 1).get(instance) as O
        : ordinalMap.set(instance, 0).get(instance) as O;
}
