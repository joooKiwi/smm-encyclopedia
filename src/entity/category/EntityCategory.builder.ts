import type {Builder}                      from '../../util/Builder';
import type {EntityCategory}               from './EntityCategory';
import type {EntityCategoryTemplate}       from './EntityCategory.template';
import type {Name}                         from '../../lang/name/Name';
import type {PossibleEntityCategoriesName} from './EntityCategories.types';

import {EntityCategoryContainer} from './EntityCategory.container';
import {Games}                   from '../game/Games';
import {TemplateWithNameBuilder} from '../_template/TemplateWithName.builder';

export class EntityCategoryBuilder
    extends TemplateWithNameBuilder<EntityCategoryTemplate, EntityCategory>
    implements Builder<EntityCategory> {

    //region -------------------- Attributes --------------------

    static readonly #templateMap: Map<PossibleEntityCategoriesName, EntityCategoryTemplate> = new Map();

    //endregion -------------------- Attributes --------------------

    public constructor(templateBuilder: Builder<EntityCategoryTemplate>,) {
        super(templateBuilder, Games.SUPER_MARIO_MAKER_2, true,);
    }

    protected /*static*/ get _templateMap() {
        return EntityCategoryBuilder.#templateMap;
    }

    protected _build(name: Name,): EntityCategory {
        return new EntityCategoryContainer(
            name,
        );
    }
}