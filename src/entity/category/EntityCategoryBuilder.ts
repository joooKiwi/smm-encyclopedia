import type {Builder}                from '../../util/Builder';
import type {EntityCategory}         from './EntityCategory';
import type {EntityCategoryTemplate} from './EntityCategory.template';
import type {Name}                   from '../../lang/name/Name';

import {GenericEntityCategory}   from './GenericEntityCategory';
import {TemplateBuilderWithName} from '../TemplateBuilderWithName';

export class EntityCategoryBuilder
    extends TemplateBuilderWithName<EntityCategoryTemplate, EntityCategory>
    implements Builder<EntityCategory> {

    //region -------------------- Attributes --------------------

    static readonly #templateMap: Map<string, EntityCategoryTemplate> = new Map();

    //endregion -------------------- Attributes --------------------

    public constructor(template: EntityCategoryTemplate,) {
        super(template, true,);
    }

    protected /*static*/ get _templateMap() {
        return EntityCategoryBuilder.#templateMap;
    }

    protected _build(name: Name,): EntityCategory {
        return new GenericEntityCategory(
            name,
        );
    }
}