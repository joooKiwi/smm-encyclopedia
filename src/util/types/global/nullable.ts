export {}

declare global {

    type UndefinedOr<T, > = | T | undefined
    type NullOr<T, > = | T | null
    type Nullable<T, > = | T | null | undefined
    type NullOrUndefined = | null | undefined

    type UndefinedOrBoolean = UndefinedOr<boolean>
    type NullOrBoolean = NullOr<boolean>
    type NullOrTrue = NullOr<true>
    type NullOrFalse = NullOr<false>
    type NullableBoolean = Nullable<boolean>
    type NullableTrue = Nullable<true>
    type NullableFalse = Nullable<false>

    type UndefinedOrString = UndefinedOr<string>
    type NullOrString = NullOr<string>
    type NullableString = Nullable<string>

    type UndefinedOrNumber = UndefinedOr<number>
    type NullOrNumber = NullOr<number>
    type NullableNumber = Nullable<number>

}
