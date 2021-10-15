import type {Name}                from '../../../lang/name/Name';
import type {SoundEffect}         from './SoundEffect';
import type {SoundEffectTemplate} from './SoundEffect.template';

import {TemplateBuilderWithName}                  from '../../TemplateBuilderWithName';
import {SoundEffectContainer}                     from './SoundEffect.container';
import {PossibleSoundEffectCategoriesEnglishName} from '../category/SoundEffectCategories.types';
import {SoundEffectCategory}                      from '../category/SoundEffectCategory';
import {SoundEffectPropertyContainer}             from './properties/SoundEffectProperty.container';

export class SoundEffectBuilder
    extends TemplateBuilderWithName<SoundEffectTemplate, SoundEffect> {

    //region -------------------- external object references --------------------

    public static categoriesMap: Map<PossibleSoundEffectCategoriesEnglishName, SoundEffectCategory>;

    //endregion -------------------- external object references --------------------
    //region -------------------- Attributes --------------------

    static readonly #templateMap: Map<string, SoundEffectTemplate> = new Map();

    //endregion -------------------- Attributes --------------------

    public constructor(template: SoundEffectTemplate,) {
        super(template, false,);
    }


    //region -------------------- Build helper methods --------------------

    protected /*static*/ get _templateMap() {
        return SoundEffectBuilder.#templateMap;
    }

    private __createCategory() {
        return SoundEffectBuilder.categoriesMap.get(this.template.properties.category)!;
    }

    private __createProperty() {
        const gameTemplate = this.template.properties.isIn.game;
        return new SoundEffectPropertyContainer(gameTemplate['1'], gameTemplate['2'],);
    }

    //endregion -------------------- Build helper methods --------------------

    protected _build(name: Name,): SoundEffect {
        return new SoundEffectContainer(
            name,
            this.__createCategory(),
            this.__createProperty(),
        );
    }

}
