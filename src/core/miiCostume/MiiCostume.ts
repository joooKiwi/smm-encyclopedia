import type {NullOr, NullOrNumber} from '@joookiwi/type'

import type {MiiCostumeCategory}     from 'core/miiCostumeCategory/MiiCostumeCategory'
import type {OfficialNotifications}  from 'core/officialNotification/OfficialNotifications'
import type {Versions}               from 'core/version/Versions'
import type {NameTrait}              from 'lang/name/NameTrait'
import type {NameTraitFromACategory} from 'lang/name/NameTraitFromACategory'

export interface MiiCostume
    extends NameTrait<string>, NameTraitFromACategory<string, MiiCostumeCategory> {

    get officialNotification(): NullOr<OfficialNotifications>

    get officialNotificationAmount(): NullOrNumber


    get version(): NullOr<Versions>

}
