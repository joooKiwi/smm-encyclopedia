import type {MiiCostumeCategory}         from '../miiCostumeCategory/MiiCostumeCategory';
import type {NameTrait}                  from '../../lang/name/NameTrait';
import type {OfficialNotificationHolder} from '../officialNotification/holder/OfficialNotificationHolder';
import type {OfficialNotifications}      from '../officialNotification/OfficialNotifications';
import type {Versions}                   from '../version/Versions';

export interface MiiCostume
    extends NameTrait<string> {

    //region -------------------- Official notification --------------------

    get officialNotificationContainer(): OfficialNotificationHolder

    get officialNotification(): | OfficialNotifications | null

    get officialNotificationAmount(): | number | null

    //endregion -------------------- Official notification --------------------

    get version(): | Versions | null

    get category(): MiiCostumeCategory

}
