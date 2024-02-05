export {}

declare global {

    type NullOrUndefined = | null | undefined

    type UndefinedOr<T, > = | T | undefined
    type NullOr<T, > =      | T | null
    type Nullable<T, > =    | T | null | undefined

    type UndefinedOrBoolean =   | boolean   | undefined
    type UndefinedOrTrue =      | true      | undefined
    type UndefinedOrFalse =     | false     | undefined
    type NullOrBoolean =        | boolean   | null
    type NullOrTrue =           | true      | null
    type NullOrFalse =          | false     | null
    type NullableBoolean =      | boolean   | null | undefined
    type NullableTrue =         | true      | null | undefined
    type NullableFalse =        | false     | null | undefined

    type UndefinedOrString = | string | undefined
    type NullOrString =      | string | null
    type NullableString =    | string | null | undefined

    type UndefinedOrNumber =    | number | undefined
    type NullOrNumber =         | number | null
    type NullableNumber =       | number | null | undefined

}
