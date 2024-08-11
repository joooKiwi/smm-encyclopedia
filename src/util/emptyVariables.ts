import type {EmptyArray, EmptyMap, EmptyObject, EmptySet, EmptyString} from '@joookiwi/type'

/** An empty string */
export const EMPTY_STRING: EmptyString = Object.freeze('' as const,)

/**
 * An empty array with no values that is not modifiable.
 *
 * @note It is an empty array to ensure any possible values is possible.
 */
export const EMPTY_ARRAY: EmptyArray = Object.freeze([],)
/**
 * An empty array with no values that is not modifiable.
 *
 * @note It is an empty array to ensure any possible values is possible.
 */
export const EMPTY_SET: EmptySet = Object.freeze(new Set<never>(),)

/**
 * An empty {@link Map} with any values that should always return undefined as a value.
 *
 * @note It use "any" as a type to enable every values
 */
export const EMPTY_MAP: EmptyMap = Object.freeze(new Map<any, never>(),)

/** An empty object with nothing (and not modifiable) */
export const EMPTY_OBJECT: EmptyObject = Object.freeze({},)

/** An empty callback*/
export const EMPTY_CALLBACK: () => void = Object.freeze(() => {},)
