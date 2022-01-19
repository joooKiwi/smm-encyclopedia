export interface ClassThatCanGetItems {

}

export interface ClassThatCanGetItemsOrKeys<K, V, >
    extends ClassThatCanGetItems {

    get(key: K,): V

    get(key: any,): | V | DefaultValueIfNotFound


    getKey(value: V,): K

    getKey(value: any,): K | DefaultValueIfNotFound

}

export interface ClassThatCanGetItemsOrIndexes<I extends number, V, >
    extends ClassThatCanGetItems {

    get(index: I,): V

    get(index: any,): | V | DefaultValueIfNotFound


    getIndex(value: V,): I

    getIndex(value: any,): I | DefaultIndexIfNotFound

}

export type DefaultValueIfNotFound = null;
export type DefaultIndexIfNotFound = -1;
