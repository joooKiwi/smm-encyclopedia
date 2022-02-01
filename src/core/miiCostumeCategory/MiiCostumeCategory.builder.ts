import type {Builder}                    from '../../util/builder/Builder';
import type {MiiCostumeCategory}         from './MiiCostumeCategory';
import type {MiiCostumeCategoryTemplate} from './MiiCostumeCategory.template';
import type {Name}                       from '../../lang/name/Name';

import {Games}                       from '../game/Games';
import {MiiCostumeCategoryContainer} from './MiiCostumeCategory.container';
import {TemplateWithNameBuilder}     from '../_template/TemplateWithName.builder';

export class MiiCostumeCategoryBuilder
    extends TemplateWithNameBuilder<MiiCostumeCategoryTemplate, MiiCostumeCategory> {


    public constructor(templateBuilder_or_template: Builder<MiiCostumeCategoryTemplate>,) {
        super(templateBuilder_or_template, Games.SUPER_MARIO_MAKER_2, false);
    }

    protected get _static() {
        return MiiCostumeCategoryBuilder;
    }


    protected _build(name: Name,): MiiCostumeCategory {
        return new MiiCostumeCategoryContainer(name);
    }

}
