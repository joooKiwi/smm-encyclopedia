import type {MiiCostumeCategory}         from 'core/miiCostumeCategory/MiiCostumeCategory'
import type {OfficialNotifications}      from 'core/officialNotification/OfficialNotifications'
import type {OfficialNotificationHolder} from 'core/officialNotification/holder/OfficialNotificationHolder'
import type {Versions}                   from 'core/version/Versions'
import type {NameTrait}                  from 'lang/name/NameTrait'
import type {NameTraitFromACategory}     from 'lang/name/NameTraitFromACategory'
import type {NullOr, NullOrNumber}       from 'util/types/nullable'

export interface MiiCostume
    extends NameTrait<string>, NameTraitFromACategory<string, MiiCostumeCategory> {

    //region -------------------- Official notification --------------------

    get officialNotificationContainer(): OfficialNotificationHolder

    get officialNotification(): NullOr<OfficialNotifications>

    get officialNotificationAmount(): NullOrNumber

    //endregion -------------------- Official notification --------------------

    get version(): NullOr<Versions>

}
