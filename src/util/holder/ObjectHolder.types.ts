/**
 * Either the type directly,<br/>
 * A callback returning the object<br/>
 *
 * @deprecated Use either the value, callback or even the {@link Lazy} directly
 */
export type ValueOrCallback<T, > = | T | (() => T)
