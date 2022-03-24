import type {Builder}                    from '../../util/builder/Builder';
import type {MiiCostume}                 from './MiiCostume';
import type {MiiCostumeTemplate}         from './MiiCostume.template';
import type {Name}                       from '../../lang/name/Name';
import type {ObjectHolder}               from '../../util/holder/ObjectHolder';
import type {OfficialNotificationHolder} from '../officialNotification/holder/OfficialNotificationHolder';

import {Games}                             from '../game/Games';
import {DelayedObjectHolderContainer}      from '../../util/holder/DelayedObjectHolder.container';
import {MiiCostumeCategories}              from '../miiCostumeCategory/MiiCostumeCategories';
import {MiiCostumeContainer}               from './MiiCostume.container';
import {ObjectHolders}                     from '../../util/holder/objectHolders';
import {OfficialNotificationHolderBuilder} from '../officialNotification/holder/OfficialNotificationHolder.builder';
import {TemplateWithNameBuilder}           from '../_template/TemplateWithName.builder';
import {Versions}                          from '../version/Versions';
import {MiiCostumeCategory}                from '../miiCostumeCategory/MiiCostumeCategory';

export class MiiCostumeBuilder
    extends TemplateWithNameBuilder<MiiCostumeTemplate, MiiCostume> {

    public constructor(templateBuilder_or_template: Builder<MiiCostumeTemplate>,) {
        super(templateBuilder_or_template, Games.SUPER_MARIO_MAKER_2, true,);
    }

    //region -------------------- Build helper methods --------------------

    protected get _static() {
        return MiiCostumeBuilder;
    }


    private static __createOfficialNotification({officialNotification: officialNotificationName,}: MiiCostumeTemplate,): ObjectHolder<OfficialNotificationHolder> {
        return new DelayedObjectHolderContainer(() => new OfficialNotificationHolderBuilder(officialNotificationName).build());
    }

    private static __createVersion({version,}: MiiCostumeTemplate,): ObjectHolder<Versions | null> {
        return version == null
            ? ObjectHolders.NULL
            : new DelayedObjectHolderContainer(() => Versions.getValue(version));
    }

    private static __createCategory({category,}: MiiCostumeTemplate,): ObjectHolder<MiiCostumeCategory> {
        return new DelayedObjectHolderContainer(() => MiiCostumeCategories.getValue(category).reference);
    }

    //endregion -------------------- Build helper methods --------------------

    public _build(name: Name<string>,): MiiCostume {
        const template = this.template;

        return new MiiCostumeContainer(name,
            MiiCostumeBuilder.__createOfficialNotification(template,),
            MiiCostumeBuilder.__createVersion(template,),
            MiiCostumeBuilder.__createCategory(template,)
        );
    }

}