import type {OfficialNotificationHolder} from './OfficialNotificationHolder';
import type {OfficialNotifications}      from '../OfficialNotifications';

export class OfficialNotificationHolderContainer
    implements OfficialNotificationHolder {

    //region -------------------- Fields --------------------

    readonly #officialNotification;
    readonly #amount;

    //endregion -------------------- Fields --------------------

    constructor(officialNotification: OfficialNotifications, amount: | number | null,) {
        this.#officialNotification = officialNotification;
        this.#amount = amount;
    }

    //region -------------------- Getter methods --------------------

    public get officialNotification(): OfficialNotifications {
        return this.#officialNotification;
    }

    public get amount(): | number | null {
        return this.#amount;
    }

    //endregion -------------------- Getter methods --------------------

}
