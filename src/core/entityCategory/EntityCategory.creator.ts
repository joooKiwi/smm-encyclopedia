import type {EntityCategory}         from 'core/entityCategory/EntityCategory'
import type {EntityCategoryTemplate} from 'core/entityCategory/EntityCategory.template'

import {EntityCategoryContainer} from 'core/entityCategory/EntityCategory.container'
import {NameBuilderContainer}    from 'lang/name/Name.builder.container'

export function createContent(template: EntityCategoryTemplate,): EntityCategory {
    return new EntityCategoryContainer(new NameBuilderContainer(template.name, 2, true,).build(),)
}
