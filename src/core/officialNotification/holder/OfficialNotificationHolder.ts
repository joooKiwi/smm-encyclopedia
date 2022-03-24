import type {OfficialNotifications} from '../OfficialNotifications';

export interface OfficialNotificationHolder {

    get officialNotification(): | OfficialNotifications | null

    get amount(): | number | null

}
