import type {MiiCostumeCategory}         from 'core/miiCostumeCategory/MiiCostumeCategory'
import type {MiiCostumeCategoryTemplate} from 'core/miiCostumeCategory/MiiCostumeCategory.template'
import type {Name}                       from 'lang/name/Name'

import {TemplateWithNameCreator}     from 'core/_template/TemplateWithName.creator'
import {MiiCostumeCategoryContainer} from 'core/miiCostumeCategory/MiiCostumeCategory.container'

export class MiiCostumeCategoryCreator
    extends TemplateWithNameCreator<MiiCostumeCategoryTemplate, MiiCostumeCategory> {


    public constructor(template: MiiCostumeCategoryTemplate,) {
        super(template, 2, false,)
    }

    protected override _create(name: Name<string>,): MiiCostumeCategory {
        return new MiiCostumeCategoryContainer(name)
    }

}
