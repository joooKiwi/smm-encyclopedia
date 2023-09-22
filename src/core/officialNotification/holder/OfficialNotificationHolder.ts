import type {OfficialNotifications} from 'core/officialNotification/OfficialNotifications'
import type {ClassWithAmount}       from 'util/ClassWithAmount'

export interface OfficialNotificationHolder
    extends ClassWithAmount {

    get officialNotification(): NullOr<OfficialNotifications>

}
