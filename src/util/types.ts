export type UndefinedOr<T, > = | T | undefined
export type NullOr<T, > = | T | null
export type Nullable<T, > = | NullOr<T> | UndefinedOr<T>

export type UndefinedOrBoolean = UndefinedOr<boolean>
export type NullOrBoolean = NullOr<boolean>
export type NullableBoolean = Nullable<boolean>

export type UndefinedOrString = UndefinedOr<string>
export type NullOrString = NullOr<string>
export type NullableString = Nullable<string>

export type UndefinedOrNumber = UndefinedOr<number>
export type NullOrNumber = NullOr<number>
export type NullableNumber = Nullable<number>
