import type {SoundEffectCategory}         from 'core/soundEffectCategory/SoundEffectCategory'
import type {SoundEffectCategoryTemplate} from 'core/soundEffectCategory/SoundEffectCategory.template'
import type {Name}                        from 'lang/name/Name'

import {TemplateWithNameCreator}      from 'core/_template/TemplateWithName.creator'
import {SoundEffectCategoryContainer} from 'core/soundEffectCategory/SoundEffectCategory.container'

export class SoundEffectCategoryCreator
    extends TemplateWithNameCreator<SoundEffectCategoryTemplate, SoundEffectCategory> {

    public constructor(template: SoundEffectCategoryTemplate,) {
        super(template, 2, false,)
    }

    protected override _create(name: Name<string>,): SoundEffectCategory {
        return new SoundEffectCategoryContainer(name,)
    }

}
