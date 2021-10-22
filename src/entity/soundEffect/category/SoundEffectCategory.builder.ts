import type {Builder}                                  from '../../../util/Builder';
import type {Name}                                     from '../../../lang/name/Name';
import type {PossibleSoundEffectCategoriesEnglishName} from './SoundEffectCategories.types';
import type {SoundEffectCategory}                      from './SoundEffectCategory';
import type {SoundEffectCategoryTemplate}              from './SoundEffectCategory.template';

import {Games}                        from '../../game/Games';
import {SoundEffectCategoryContainer} from './SoundEffectCategory.container';
import {TemplateWithNameBuilder}      from '../../_template/TemplateWithName.builder';

export class SoundEffectCategoryBuilder
    extends TemplateWithNameBuilder<SoundEffectCategoryTemplate, SoundEffectCategory> {

    //region -------------------- Attributes --------------------

    static readonly #templateMap: Map<PossibleSoundEffectCategoriesEnglishName, SoundEffectCategoryTemplate> = new Map();

    //endregion -------------------- Attributes --------------------

    public constructor(templateBuilder: Builder<SoundEffectCategoryTemplate>,) {
        super(templateBuilder, Games.SUPER_MARIO_MAKER_2, false,);
    }

    protected /*static*/ get _templateMap() {
        return SoundEffectCategoryBuilder.#templateMap;
    }

    protected _build(name: Name,): SoundEffectCategory {
        return new SoundEffectCategoryContainer(name);
    }

}
