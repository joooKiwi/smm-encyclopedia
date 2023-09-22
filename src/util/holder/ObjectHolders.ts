import type {Lazy}    from '@joookiwi/lazy'
import {lazy, lazyOf} from '@joookiwi/lazy'

import {EMPTY_ARRAY as EMPTY_ARRAY2, EMPTY_MAP as EMPTY_MAP2, EMPTY_OBJECT as EMPTY_OBJECT2, EMPTY_STRING as EMPTY_STRING2} from 'util/emptyVariables'
import {ValueOrCallback}                                                                                                    from 'util/holder/ObjectHolder.types'

export namespace ObjectHolders {

    /**
     * Get a value from a {@link ValueOrCallback} to create a {@link Lazy} instance.
     *
     * This method is temporary in order to change the implementations about the {@link Lazy} creation.
     *
     * @param value The value
     * @temporary
     */
    export function getLazyOn<const T,>(value: ValueOrCallback<T>,):Lazy<T>{
        return value == null || value instanceof Map
            ? lazyOf(value,)
            : value instanceof Function
                ? lazy(value,)
                : lazyOf(value,)
    }

    /** A {@link Lazy} instance with a <b>null</b> */
    export const NULL = lazyOf(null,)
    /** A {@link Lazy} instance with true */
    export const TRUE = lazyOf(true,)
    /** A {@link Lazy} instance with false */
    export const FALSE = lazyOf(false,)
    /** A {@link Lazy} instance with an empty {@link String} */
    export const EMPTY_STRING = lazyOf(EMPTY_STRING2,)
    /** A {@link Lazy} instance with an empty {@link Array} */
    export const EMPTY_ARRAY = lazyOf(EMPTY_ARRAY2,)
    /** A {@link Lazy} instance with an empty {@link Map} */
    export const EMPTY_MAP = lazyOf(EMPTY_MAP2,)
    /** A {@link Lazy} instance with an empty {@link Object} */
    export const EMPTY_OBJECT = lazyOf(EMPTY_OBJECT2,)

}
