import type {Lazy} from '@joookiwi/lazy'
import {lazy}      from '@joookiwi/lazy'

import type {MiiCostume}                 from 'core/miiCostume/MiiCostume'
import type {MiiCostumeTemplate}         from 'core/miiCostume/MiiCostume.template'
import type {Name}                       from 'lang/name/Name'
import type {OfficialNotificationHolder} from 'core/officialNotification/holder/OfficialNotificationHolder'

import {TemplateWithNameCreator}           from 'core/_template/TemplateWithName.creator'
import {MiiCostumeContainer}               from 'core/miiCostume/MiiCostume.container'
import {MiiCostumeCategories}              from 'core/miiCostumeCategory/MiiCostumeCategories'
import {MiiCostumeCategory}                from 'core/miiCostumeCategory/MiiCostumeCategory'
import {OfficialNotificationHolderBuilder} from 'core/officialNotification/holder/OfficialNotificationHolder.builder'
import {Versions}                          from 'core/version/Versions'
import {ObjectHolders}                     from 'util/holder/ObjectHolders'

export class MiiCostumeCreator
    extends TemplateWithNameCreator<MiiCostumeTemplate, MiiCostume> {

    public constructor(template: MiiCostumeTemplate,) {
        super(template, 2, true,)
    }

    //region -------------------- Build helper methods --------------------

    static #createOfficialNotification({officialNotification: officialNotificationName,}: MiiCostumeTemplate,): Lazy<OfficialNotificationHolder> {
        return lazy(() => new OfficialNotificationHolderBuilder(officialNotificationName,).build(),)
    }

    static #createVersion({version,}: MiiCostumeTemplate,): Lazy<NullOr<Versions>> {
        return version == null
            ? ObjectHolders.NULL
            : lazy(() => Versions.getValueByName(version,),)
    }

    static #createCategory({category,}: MiiCostumeTemplate,): Lazy<MiiCostumeCategory> {
        return lazy(() => MiiCostumeCategories.getValueByName(category,).reference,)
    }

    //endregion -------------------- Build helper methods --------------------

    protected override _create(name: Name<string>,): MiiCostume {
        const template = this.template

        return new MiiCostumeContainer(name,
            MiiCostumeCreator.#createOfficialNotification(template,),
            MiiCostumeCreator.#createVersion(template,),
            () => MiiCostumeCreator.#createCategory(template,).value,//FIXME replace with a Lazy instance
        )
    }

}