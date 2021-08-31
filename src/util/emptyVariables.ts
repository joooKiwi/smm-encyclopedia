/**
 * An empty string
 */
export const EMPTY_STRING = '';

/**
 * An empty array with no values that is not modifiable.
 * It use the never type to be able to be used in other types of arrays.
 */
export const EMPTY_ARRAY = [] as readonly never[];

/**
 * An empty {@link Map} with any values that should always return undefined as a value.
 * But it use never to be possible to use it in other types of {@link Map}.
 */
export const EMPTY_MAP = new Map() as Map<any, never> as ReadonlyMap<any, never>;

export const EMPTY_OBJECT = {};