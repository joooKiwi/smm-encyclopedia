import {lazyOf} from '@joookiwi/lazy'

import {EmptyEntityCategory} from 'core/entityCategory/EmptyEntityCategory'

/** A {@link import('@joookiwi/lazy').Lazy Lazy} instance for the {@link EmptyEntityCategory} */
export const LAZY_EMPTY_ENTITY_CATEGORY = lazyOf(EmptyEntityCategory.get,)
