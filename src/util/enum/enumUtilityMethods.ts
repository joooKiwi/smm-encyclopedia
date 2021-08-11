const ordinalMap: Map<object, number> = new Map();

/**
 * Return the last ordinal (number) based on the instance received.
 *
 * @param instance the instance to retrieve the ordinal
 */
export function getLastOrdinalOn<T extends number, >(instance: object,): T {
    return ordinalMap.has(instance)
        ? ordinalMap.set(instance, 0).get(instance) as T
        : ordinalMap.set(instance, ordinalMap.get(instance)! + 1).get(instance) as T;
}
