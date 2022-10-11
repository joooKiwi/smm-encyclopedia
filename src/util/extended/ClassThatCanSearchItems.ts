import type {DefaultIndexIfNotFound, DefaultValueIfNotFound} from './ClassThatCanGetItems'

export interface ClassThatCanSearchItems {

}

export interface ClassThatCanSearchItemsOrKeys<K, V, >
    extends ClassThatCanSearchItems {

    find<B extends boolean, >(callback: (key: K, value: V,) => B,): VariableReturnValue<B, V, DefaultValueIfNotFound>

    find<U extends V, >(callback: (key: K, value: V,) => value is U,): | U | DefaultValueIfNotFound

    find<B extends boolean, U, >(callback: (key: K, value: V,) => B, callbackIfNotFound: () => U,): VariableReturnValue<B, V, U>

    find<U extends V, V2, >(callback: (key: K, value: V,) => value is U, callbackIfNotFound: () => V2,): | U | V2


    findKey<B extends boolean, >(callback: (key: K, value: V,) => B,): VariableReturnValue<B, K, DefaultValueIfNotFound>

    findKey<U extends K, >(callback: (key: K, value: V,) => key is U,): | U | DefaultValueIfNotFound

    findKey<B extends boolean, U, >(callback: (key: K, value: V,) => B, callbackIfNotFound: () => U,): VariableReturnValue<B, K, U>

    findKey<U extends K, V2, >(callback: (key: K, value: V,) => key is U, callbackIfNotFound: () => V2,): | U | V2

}

export interface ClassThatCanSearchItemsOrIndexes<I extends number, V, >
    extends ClassThatCanSearchItems {

    find<B extends boolean, >(callback: (value: V, index: I,) => B,): VariableReturnValue<B, V, DefaultValueIfNotFound>

    find<U extends V, >(callback: (value: V, index: I,) => value is U,): | U | DefaultValueIfNotFound

    find<B extends boolean, U, >(callback: (value: V, index: I,) => B, callbackIfNotFound: () => U,): VariableReturnValue<B, V, U>

    find<U extends V, V2, >(callback: (value: V, index: I,) => value is U, callbackIfNotFound: () => V2,): | U | V2


    findIndex<B extends boolean, >(callback: (value: V, key: I,) => B,): VariableReturnValue<B, I, DefaultIndexIfNotFound>

    findIndex<U extends I, >(callback: (value: V, index: I,) => index is U,): | U | DefaultValueIfNotFound

    findIndex<B extends boolean, U, >(callback: (value: V, key: I,) => B, callbackIfNotFound: () => U,): VariableReturnValue<B, I, U>

    find<U extends I, V2, >(callback: (value: V, index: I,) => index is U, callbackIfNotFound: () => V2,): | U | V2

}

export type VariableReturnValue<B extends boolean, V1, V2, > = B extends true ? V1 : B extends false ? V2 : | V1 | V2
