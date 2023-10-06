import type {MiiCostumeCategory}         from 'core/miiCostumeCategory/MiiCostumeCategory'
import type {MiiCostumeCategoryTemplate} from 'core/miiCostumeCategory/MiiCostumeCategory.template'

import {MiiCostumeCategoryContainer} from 'core/miiCostumeCategory/MiiCostumeCategory.container'
import {NameBuilderContainer}        from 'lang/name/Name.builder.container'

export function createContent(template: MiiCostumeCategoryTemplate,): MiiCostumeCategory {
    return new MiiCostumeCategoryContainer(new NameBuilderContainer(template.name, 2, false,).build(),)
}
