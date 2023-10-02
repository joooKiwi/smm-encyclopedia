import {lazyOf}                   from '@joookiwi/lazy'

import {EmptySoundEffectCategory} from 'core/soundEffectCategory/EmptySoundEffectCategory'

/** A simple {@link import('@joookiwi/lazy').Lazy Lazy} instance for the {@link EmptySoundEffectCategory} */
export const LAZY_EMPTY_SOUND_EFFECT_CATEGORY = lazyOf(EmptySoundEffectCategory.get,)