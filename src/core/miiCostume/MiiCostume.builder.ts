import type {MiiCostume}                 from 'core/miiCostume/MiiCostume'
import type {MiiCostumeTemplate}         from 'core/miiCostume/MiiCostume.template'
import type {Name}                       from 'lang/name/Name'
import type {OfficialNotificationHolder} from 'core/officialNotification/holder/OfficialNotificationHolder'
import type {Builder}                    from 'util/builder/Builder'
import type {ObjectHolder}               from 'util/holder/ObjectHolder'
import type {NullOr}                     from 'util/types/nullable'

import {TemplateWithNameBuilder}           from 'core/_template/TemplateWithName.builder'
import {MiiCostumeContainer}               from 'core/miiCostume/MiiCostume.container'
import {MiiCostumeCategories}              from 'core/miiCostumeCategory/MiiCostumeCategories'
import {MiiCostumeCategory}                from 'core/miiCostumeCategory/MiiCostumeCategory'
import {OfficialNotificationHolderBuilder} from 'core/officialNotification/holder/OfficialNotificationHolder.builder'
import {Versions}                          from 'core/version/Versions'
import {DelayedObjectHolderContainer}      from 'util/holder/DelayedObjectHolder.container'
import {ObjectHolders}                     from 'util/holder/ObjectHolders'

export class MiiCostumeBuilder
    extends TemplateWithNameBuilder<MiiCostumeTemplate, MiiCostume> {

    public constructor(templateBuilder_or_template: Builder<MiiCostumeTemplate>,) {
        super(templateBuilder_or_template, 2, true,)
    }

    //region -------------------- Build helper methods --------------------

    protected /*static*/ override get _static() {
        return MiiCostumeBuilder
    }


    static #createOfficialNotification({officialNotification: officialNotificationName,}: MiiCostumeTemplate,): ObjectHolder<OfficialNotificationHolder> {
        return new DelayedObjectHolderContainer(() => new OfficialNotificationHolderBuilder(officialNotificationName).build())
    }

    static #createVersion({version,}: MiiCostumeTemplate,): ObjectHolder<NullOr<Versions>> {
        return version == null
            ? ObjectHolders.NULL
            : new DelayedObjectHolderContainer(() => Versions.getValueByName(version))
    }

    static #createCategory({category,}: MiiCostumeTemplate,): ObjectHolder<MiiCostumeCategory> {
        return new DelayedObjectHolderContainer(() => MiiCostumeCategories.getValueByName(category).reference)
    }

    //endregion -------------------- Build helper methods --------------------

    public override _build(name: Name<string>,): MiiCostume {
        const template = this.template

        return new MiiCostumeContainer(name,
            MiiCostumeBuilder.#createOfficialNotification(template,),
            MiiCostumeBuilder.#createVersion(template,),
            MiiCostumeBuilder.#createCategory(template,)
        )
    }

}