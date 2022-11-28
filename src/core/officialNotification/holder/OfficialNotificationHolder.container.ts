import type {NullOrNumber}               from '../../../util/types'
import type {OfficialNotificationHolder} from './OfficialNotificationHolder'
import type {OfficialNotifications}      from '../OfficialNotifications'

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
