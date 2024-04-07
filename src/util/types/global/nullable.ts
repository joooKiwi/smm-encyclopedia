export {}

declare global {

    type NullOrUndefined = | null | undefined

    type UndefinedOr<T, > = | T | undefined
    type NullOr<T, > =      | T | null
    type Nullable<T, > =    | T | null | undefined

    type UndefinedOrBoolean<T extends boolean = boolean, > = | T              | undefined
    type UndefinedOrTrue<T extends true = true, > =          | T              | undefined
    type UndefinedOrFalse<T extends false = false, > =       | T              | undefined
    type UndefinedOrString<T extends string = string, > =    | T              | undefined
    type UndefinedOrNumber<T extends number = number, > =    | T              | undefined
    type UndefinedOrBigInt<T extends bigint = bigint, > =    | T              | undefined
    type UndefinedOrArray<T, > =                             | readonly T[]   | undefined
    type UndefinedOrSet<T, > =                               | ReadonlySet<T> | undefined
    type UndefinedOrMutableArray<T, > =                      | T[]            | undefined
    type UndefinedOrMutableSet<T, > =                        | Set<T>         | undefined

    type NullOrBoolean<T extends boolean = boolean, > = | T              | null
    type NullOrTrue<T extends true = true, > =          | T              | null
    type NullOrFalse<T extends false = false, > =       | T              | null
    type NullOrString<T extends string = string, > =    | T              | null
    type NullOrNumber<T extends number = number, > =    | T              | null
    type NullOrBigInt<T extends bigint = bigint, > =    | T              | null
    type NullOrArray<T, > =                             | readonly T[]   | null
    type NullOrSet<T, > =                               | ReadonlySet<T> | null
    type NullOrMutableArray<T, > =                      | T[]            | null
    type NullOrMutableSet<T, > =                        | Set<T>         | null

    type NullableBoolean<T extends boolean = boolean, > = | T              | null | undefined
    type NullableTrue<T extends true = true, > =          | T              | null | undefined
    type NullableFalse<T extends false = false, > =       | T              | null | undefined
    type NullableString<T extends string = string, > =    | T              | null | undefined
    type NullableNumber<T extends number = number, > =    | T              | null | undefined
    type NullableBigInt<T extends bigint = bigint, > =    | T              | null | undefined
    type NullableArray<T, > =                             | readonly T[]   | null | undefined
    type NullableSet<T, > =                               | ReadonlySet<T> | null | undefined
    type NullableMutableArray<T, > =                      | T[]            | null | undefined
    type NullableMutableSet<T, > =                        | Set<T>         | null | undefined

}
