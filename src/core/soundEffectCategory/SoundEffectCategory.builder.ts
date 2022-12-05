import type {SoundEffectCategory}         from 'core/soundEffectCategory/SoundEffectCategory'
import type {SoundEffectCategoryTemplate} from 'core/soundEffectCategory/SoundEffectCategory.template'
import type {Name}                        from 'lang/name/Name'
import type {Builder}                     from 'util/builder/Builder'

import {TemplateWithNameBuilder}      from 'core/_template/TemplateWithName.builder'
import {SoundEffectCategoryContainer} from 'core/soundEffectCategory/SoundEffectCategory.container'

export class SoundEffectCategoryBuilder
    extends TemplateWithNameBuilder<SoundEffectCategoryTemplate, SoundEffectCategory> {

    public constructor(templateBuilder: Builder<SoundEffectCategoryTemplate>,) {
        super(templateBuilder, 2, false,)
    }

    protected /*static*/ override get _static() {
        return SoundEffectCategoryBuilder
    }

    protected override _build(name: Name<string>,): SoundEffectCategory {
        return new SoundEffectCategoryContainer(name,)
    }

}
