import type {Builder}            from '../../util/builder/Builder';
import type {Name}               from '../../lang/name/Name';
import type {MiiCostume}         from './MiiCostume';
import type {MiiCostumeTemplate} from './MiiCostume.template';

import {Games}                   from '../game/Games';
import {MiiCostumeContainer}     from './MiiCostume.container';
import {TemplateWithNameBuilder} from '../_template/TemplateWithName.builder';
import {Versions}                from '../version/Versions';

export class MiiCostumeBuilder
    extends TemplateWithNameBuilder<MiiCostumeTemplate, MiiCostume> {

    public constructor(templateBuilder_or_template: Builder<MiiCostumeTemplate>,) {
        super(templateBuilder_or_template, Games.SUPER_MARIO_MAKER_2, true,);
    }

    protected get _static() {
        return MiiCostumeBuilder;
    }

    public _build(name: Name<string>,): MiiCostume {
        const {category, conditionToUnlockIt: {mode, value}, version} = this.template;

        return new MiiCostumeContainer(name, mode, value,
            () => Versions.getValue(version), () => category,);
    }

}