import type {OfficialNotifications} from 'core/officialNotification/OfficialNotifications'

export interface OfficialNotificationHolder {

    get officialNotification(): NullOr<OfficialNotifications>

    get amount(): NullOrNumber

}
