import type {Builder}                     from '../../util/builder/Builder'
import type {Name}                        from '../../lang/name/Name'
import type {SoundEffectCategory}         from './SoundEffectCategory'
import type {SoundEffectCategoryTemplate} from './SoundEffectCategory.template'

import {Games}                        from '../game/Games'
import {SoundEffectCategoryContainer} from './SoundEffectCategory.container'
import {TemplateWithNameBuilder}      from '../_template/TemplateWithName.builder'

export class SoundEffectCategoryBuilder
    extends TemplateWithNameBuilder<SoundEffectCategoryTemplate, SoundEffectCategory> {

    public constructor(templateBuilder: Builder<SoundEffectCategoryTemplate>,) {
        super(templateBuilder, Games.SUPER_MARIO_MAKER_2, false,)
    }

    protected /*static*/ override get _static() {
        return SoundEffectCategoryBuilder
    }

    protected override _build(name: Name<string>,): SoundEffectCategory {
        return new SoundEffectCategoryContainer(name,)
    }

}
