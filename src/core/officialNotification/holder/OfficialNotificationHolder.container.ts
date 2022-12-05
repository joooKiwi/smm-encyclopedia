import type {OfficialNotifications}      from 'core/officialNotification/OfficialNotifications'
import type {OfficialNotificationHolder} from 'core/officialNotification/holder/OfficialNotificationHolder'
import type {NullOrNumber}               from 'util/types/nullable'

export class OfficialNotificationHolderContainer
    implements OfficialNotificationHolder {

    //region -------------------- Fields --------------------

    readonly #officialNotification
    readonly #amount

    //endregion -------------------- Fields --------------------

    constructor(officialNotification: OfficialNotifications, amount: NullOrNumber,) {
        this.#officialNotification = officialNotification
        this.#amount = amount
    }

    //region -------------------- Getter methods --------------------

    public get officialNotification(): OfficialNotifications {
        return this.#officialNotification
    }

    public get amount(): NullOrNumber {
        return this.#amount
    }

    //endregion -------------------- Getter methods --------------------

}
