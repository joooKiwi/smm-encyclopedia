import type {Builder}            from '../../util/builder/Builder';
import type {Name}               from '../../lang/name/Name';
import type {MiiCostume}         from './MiiCostume';
import type {MiiCostumeTemplate} from './MiiCostume.template';

import {Games}                        from '../game/Games';
import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolderContainer';
import {MiiCostumeCategories}         from '../miiCostumeCategory/MiiCostumeCategories';
import {MiiCostumeContainer}          from './MiiCostume.container';
import {ObjectHolders}                from '../../util/holder/objectHolders';
import {TemplateWithNameBuilder}      from '../_template/TemplateWithName.builder';
import {Versions}                     from '../version/Versions';

export class MiiCostumeBuilder
    extends TemplateWithNameBuilder<MiiCostumeTemplate, MiiCostume> {

    public constructor(templateBuilder_or_template: Builder<MiiCostumeTemplate>,) {
        super(templateBuilder_or_template, Games.SUPER_MARIO_MAKER_2, true,);
    }

    protected get _static() {
        return MiiCostumeBuilder;
    }

    public _build(name: Name,): MiiCostume {
        const {category, conditionToUnlockIt: {mode, value,}, version,} = this.template;

        return new MiiCostumeContainer(name, mode, value,
            version == null ? ObjectHolders.NULL : new DelayedObjectHolderContainer(() => Versions.getValue(version)),
            new DelayedObjectHolderContainer(() => MiiCostumeCategories.getValue(category).reference),);
    }

}