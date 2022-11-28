import type {NullOr, NullOrNumber}  from '../../../util/types'
import type {OfficialNotifications} from '../OfficialNotifications'

export interface OfficialNotificationHolder {

    get officialNotification(): NullOr<OfficialNotifications>

    get amount(): NullOrNumber

}
