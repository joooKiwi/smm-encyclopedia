export interface ObjectHolder<T, > {

    get get(): T

}

type SingleObject<T, > = | T | (() => T)
/**
 * Either the type directly,<br/>
 * A callback returning the object<br/>
 * Or an object holder containing the type eventually.
 */
export type PossibleValueOnObjectHolder<T, > = | SingleObject<T> | ObjectHolder<SingleObject<T>>
