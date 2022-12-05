import type {EntityCategory}         from 'core/entityCategory/EntityCategory'
import type {EntityCategoryTemplate} from 'core/entityCategory/EntityCategory.template'
import type {Name}                   from 'lang/name/Name'
import type {Builder}                from 'util/builder/Builder'

import {TemplateWithNameBuilder} from 'core/_template/TemplateWithName.builder'
import {EntityCategoryContainer} from 'core/entityCategory/EntityCategory.container'

export class EntityCategoryBuilder
    extends TemplateWithNameBuilder<EntityCategoryTemplate, EntityCategory>
    implements Builder<EntityCategory> {

    public constructor(templateBuilder: Builder<EntityCategoryTemplate>,) {
        super(templateBuilder, 2, true,)
    }

    protected /*static*/ override get _static() {
        return EntityCategoryBuilder
    }

    protected override _build(name: Name<string>,): EntityCategory {
        return new EntityCategoryContainer(name,)
    }

}