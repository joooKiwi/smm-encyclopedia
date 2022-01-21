import type {Builder}                     from '../../util/builder/Builder';
import type {Name}                        from '../../lang/name/Name';
import type {SoundEffectCategory}         from './SoundEffectCategory';
import type {SoundEffectCategoryTemplate} from './SoundEffectCategory.template';

import {Games}                        from '../game/Games';
import {SoundEffectCategoryContainer} from './SoundEffectCategory.container';
import {TemplateWithNameBuilder}      from '../_template/TemplateWithName.builder';

export class SoundEffectCategoryBuilder
    extends TemplateWithNameBuilder<SoundEffectCategoryTemplate, SoundEffectCategory> {

    public constructor(templateBuilder: Builder<SoundEffectCategoryTemplate>,) {
        super(templateBuilder, Games.SUPER_MARIO_MAKER_2, false,);
    }

    protected get _static() {
        return SoundEffectCategoryBuilder;
    }

    protected _build(name: Name,): SoundEffectCategory {
        return new SoundEffectCategoryContainer(name);
    }

}
