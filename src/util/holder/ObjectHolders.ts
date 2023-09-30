import type {Lazy}    from '@joookiwi/lazy'
import {lazy, lazyOf} from '@joookiwi/lazy'

import {ValueOrCallback} from 'util/holder/ObjectHolder.types'

export namespace ObjectHolders {

    /**
     * Get a value from a {@link ValueOrCallback} to create a {@link Lazy} instance.
     *
     * This method is temporary in order to change the implementations about the {@link Lazy} creation.
     *
     * @param value The value
     * @temporary
     */
    export function getLazyOn<const T, >(value: ValueOrCallback<T>,): Lazy<T> {
        return value == null || value instanceof Map
            ? lazyOf(value,)
            : value instanceof Function
                ? lazy(value,)
                : lazyOf(value,)
    }

}
