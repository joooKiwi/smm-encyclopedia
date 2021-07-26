const ordinalMap: Map<object, number> = new Map();

export function getLastOrdinalOn<T extends number>(instance: object,): T {
    if (ordinalMap.get(instance) == null)
        ordinalMap.set(instance, 0);
    ordinalMap.set(instance, ordinalMap.get(instance)! + 1);
    return ordinalMap.get(instance) as T;
}