import type {Name}                        from '../../../lang/name/Name';
import type {SoundEffectCategory}         from './SoundEffectCategory';
import type {SoundEffectCategoryTemplate} from './SoundEffectCategory.template';

import {SoundEffectCategoryContainer} from './SoundEffectCategory.container';
import {TemplateBuilderWithName}      from '../../TemplateBuilderWithName';

export class SoundEffectCategoryBuilder
    extends TemplateBuilderWithName<SoundEffectCategoryTemplate, SoundEffectCategory> {

    //region -------------------- Attributes --------------------

    static readonly #templateMap: Map<string, SoundEffectCategoryTemplate> = new Map();

    //endregion -------------------- Attributes --------------------

    public constructor(template: SoundEffectCategoryTemplate,) {
        super(template, false,);
    }

    protected /*static*/ get _templateMap() {
        return SoundEffectCategoryBuilder.#templateMap;
    }

    protected _build(name: Name,): SoundEffectCategory {
        return new SoundEffectCategoryContainer(name);
    }

}
