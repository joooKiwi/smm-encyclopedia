import type {EntityCategory}         from 'core/entityCategory/EntityCategory'
import type {EntityCategoryTemplate} from 'core/entityCategory/EntityCategory.template'
import type {Name}                   from 'lang/name/Name'

import {TemplateWithNameCreator} from 'core/_template/TemplateWithName.creator'
import {EntityCategoryContainer} from 'core/entityCategory/EntityCategory.container'

export class EntityCategoryCreator
    extends TemplateWithNameCreator<EntityCategoryTemplate, EntityCategory> {

    public constructor(template: EntityCategoryTemplate,) {
        super(template, 2, true,)
    }

    protected override _create(name: Name<string>,): EntityCategory {
        return new EntityCategoryContainer(name,)
    }

}