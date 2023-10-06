import type {SoundEffectCategory}         from 'core/soundEffectCategory/SoundEffectCategory'
import type {SoundEffectCategoryTemplate} from 'core/soundEffectCategory/SoundEffectCategory.template'

import {SoundEffectCategoryContainer} from 'core/soundEffectCategory/SoundEffectCategory.container'
import {NameBuilderContainer}         from 'lang/name/Name.builder.container'

export function createContent(template: SoundEffectCategoryTemplate,): SoundEffectCategory {
    return new SoundEffectCategoryContainer(new NameBuilderContainer(template.name, 2, false,).build(),)
}
