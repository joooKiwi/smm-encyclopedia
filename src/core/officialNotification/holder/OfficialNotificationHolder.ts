import type {OfficialNotifications} from 'core/officialNotification/OfficialNotifications'
import type {NullOr, NullOrNumber}  from 'util/types/nullable'

export interface OfficialNotificationHolder {

    get officialNotification(): NullOr<OfficialNotifications>

    get amount(): NullOrNumber

}
