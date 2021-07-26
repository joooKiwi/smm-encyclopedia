const ordinalMap: Map<object, number> = new Map();

export function getLastOrdinalOn<T extends number>(instance: object,): T {
    return ordinalMap.get(instance) == null
        ? ordinalMap.set(instance, 0).get(instance) as T
        : ordinalMap.set(instance, ordinalMap.get(instance)! + 1).get(instance) as T;
}