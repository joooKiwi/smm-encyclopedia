import {lazyOf} from '@joookiwi/lazy'

import {EmptyEntityLimit} from 'core/entityLimit/EmptyEntityLimit'

/** A simple {@link import('@joookiwi/lazy').Lazy Lazy} instance for the {@link EmptyEntityLimit} */
export const LAZY_EMPTY_ENTITY_LIMIT = lazyOf(EmptyEntityLimit.get,)