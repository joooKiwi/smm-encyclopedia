import type {MiiCostumeCategory}         from '../miiCostumeCategory/MiiCostumeCategory'
import type {NameTrait}                  from '../../lang/name/NameTrait'
import type {NameTraitFromACategory}     from '../../lang/name/NameTraitFromACategory'
import type {NullOr, NullOrNumber}       from '../../util/types'
import type {OfficialNotificationHolder} from '../officialNotification/holder/OfficialNotificationHolder'
import type {OfficialNotifications}      from '../officialNotification/OfficialNotifications'
import type {Versions}                   from '../version/Versions'

export interface MiiCostume
    extends NameTrait<string>, NameTraitFromACategory<string, MiiCostumeCategory> {

    //region -------------------- Official notification --------------------

    get officialNotificationContainer(): OfficialNotificationHolder

    get officialNotification(): NullOr<OfficialNotifications>

    get officialNotificationAmount(): NullOrNumber

    //endregion -------------------- Official notification --------------------

    get version(): NullOr<Versions>

}
