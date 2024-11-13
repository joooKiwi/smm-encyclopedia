import type {Array, MutableArray, MutableSet, Set} from '@joookiwi/type'

declare global {

    type UndefinedOrArray<T, > =                             | Array<T>        | undefined
    type UndefinedOrSet<T, > =                               | Set<T>          | undefined
    type UndefinedOrMutableArray<T, > =                      | MutableArray<T> | undefined
    type UndefinedOrMutableSet<T, > =                        | MutableSet<T>   | undefined

    type NullOrArray<T, > =                             | Array<T>        | null
    type NullOrSet<T, > =                               | Set<T>          | null
    type NullOrMutableArray<T, > =                      | MutableArray<T> | null
    type NullOrMutableSet<T, > =                        | MutableSet<T>   | null

    type NullableArray<T, > =                             | Array<T>        | null | undefined
    type NullableSet<T, > =                               | Set<T>          | null | undefined
    type NullableMutableArray<T, > =                      | MutableArray<T> | null | undefined
    type NullableMutableSet<T, > =                        | MutableSet<T>   | null | undefined

}
