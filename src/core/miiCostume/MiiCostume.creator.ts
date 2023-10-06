import {CommonLazy, lazy} from '@joookiwi/lazy'

import type {MiiCostume}         from 'core/miiCostume/MiiCostume'
import type {MiiCostumeTemplate} from 'core/miiCostume/MiiCostume.template'

import {MiiCostumeContainer}               from 'core/miiCostume/MiiCostume.container'
import {MiiCostumeCategories}              from 'core/miiCostumeCategory/MiiCostumeCategories'
import {OfficialNotificationHolderBuilder} from 'core/officialNotification/holder/OfficialNotificationHolder.builder'
import {Versions}                          from 'core/version/Versions'
import {NameBuilderContainer}              from 'lang/name/Name.builder.container'

export function createContent(template: MiiCostumeTemplate,): MiiCostume {
    const version = template.version

    return new MiiCostumeContainer(
        new NameBuilderContainer(template.name, 2, true,).build(),
        lazy(() => new OfficialNotificationHolderBuilder(template.officialNotification,).build(),),
        version == null ? CommonLazy.NULL : lazy(() => Versions.CompanionEnum.get.getValueByName(`v${version}`,),),
        lazy(() => MiiCostumeCategories.CompanionEnum.get.getValueByName(template.category,).reference,),
    )
}
