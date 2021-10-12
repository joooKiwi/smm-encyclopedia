export interface ObjectHolder<T> {

    get get(): T

}

export type ValueOrCallbackValue<T> = | T | (() => T);
