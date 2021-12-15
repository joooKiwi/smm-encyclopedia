/**
 * An empty string
 */
export const EMPTY_STRING = '';

/**
 * An empty array with no values that is not modifiable.
 *
 * @note It is an empty array to ensure any possible values is possible.
 */
export const EMPTY_ARRAY: readonly [] = [];

/**
 * An empty {@link Map} with any values that should always return undefined as a value.
 *
 * @note It use "any" as a type to enable every values
 */
export const EMPTY_MAP: ReadonlyMap<any, never> = new Map<any, never>();

export const EMPTY_OBJECT: Readonly<{}> = {};
