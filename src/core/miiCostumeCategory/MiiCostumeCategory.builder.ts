import type {MiiCostumeCategory}         from 'core/miiCostumeCategory/MiiCostumeCategory'
import type {MiiCostumeCategoryTemplate} from 'core/miiCostumeCategory/MiiCostumeCategory.template'
import type {Name}                       from 'lang/name/Name'
import type {Builder}                    from 'util/builder/Builder'

import {TemplateWithNameBuilder}     from 'core/_template/TemplateWithName.builder'
import {Games}                       from 'core/game/Games'
import {MiiCostumeCategoryContainer} from 'core/miiCostumeCategory/MiiCostumeCategory.container'

export class MiiCostumeCategoryBuilder
    extends TemplateWithNameBuilder<MiiCostumeCategoryTemplate, MiiCostumeCategory> {


    public constructor(templateBuilder_or_template: Builder<MiiCostumeCategoryTemplate>,) {
        super(templateBuilder_or_template, Games.SUPER_MARIO_MAKER_2, false,)
    }

    protected /*static*/ override get _static() {
        return MiiCostumeCategoryBuilder
    }


    protected override _build(name: Name<string>,): MiiCostumeCategory {
        return new MiiCostumeCategoryContainer(name)
    }

}
