export interface ObjectHolder<T> {

    get get(): T

}

export type ObjectReceived<T> = T extends Function ? (() => T) : (| T | (() => T));
