/**
 * An empty string
 */
export const EMPTY_STRING = '';

/**
 * An empty array with no values that is not modifiable.
 * It use no types since is is only as an empty array.
 */
export const EMPTY_ARRAY = [] as const;

/**
 * An empty {@link Map} with any values that should always return undefined as a value.
 * But it use never to be possible to use it in other types of {@link Map}.
 */
export const EMPTY_MAP = new Map() as Map<any, never> as ReadonlyMap<any, never>;

export const EMPTY_OBJECT = {};