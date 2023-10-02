import {lazyOf} from '@joookiwi/lazy'

import {EmptyInstrumentProperty} from 'core/entity/properties/instrument/EmptyInstrumentProperty'

/** A simple {@link import('@joookiwi/lazy').Lazy Lazy} instance for the {@link EmptyInstrumentProperty} */
export const LAZY_EMPTY_INSTRUMENT_PROPERTY = lazyOf(EmptyInstrumentProperty.get,)