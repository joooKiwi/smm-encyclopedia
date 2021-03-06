import type {ExtendedMap}                       from '../../../util/extended/ExtendedMap';
import type {OfficialNotificationHolder}        from './OfficialNotificationHolder';
import type {OfficialNotifications}             from '../OfficialNotifications';
import type {PossibleEnglishNameWithOnlyAmount} from '../OfficialNotifications.types';

import {ExtendedMapContainer} from '../../../util/extended/ExtendedMap.container';

/**
 * @multiton
 * @provider
 */
export class OfficialNotificationHolderContainer
    implements OfficialNotificationHolder {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<Key, OfficialNotificationHolder> = new ExtendedMapContainer();

    readonly #officialNotification;
    readonly #amount;

    //endregion -------------------- Fields --------------------

    private constructor(officialNotification: OfficialNotifications, amount: | number | null,) {
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
    //region -------------------- Provider / Multiton method --------------------

    public static get(key: Key, ...argumentsReceived: ArgumentsReceived): OfficialNotificationHolder {
        if (argumentsReceived.length === 1)
            return this.get(key, argumentsReceived[0], null,);

        return this.#EVERY_CONTAINERS.if(map => map.has(key))
            .isNotMet(map => map.set(key, new this(argumentsReceived[0], argumentsReceived[1],)))
            .get(key);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type Key = PossibleEnglishNameWithOnlyAmount;
type ArgumentsReceived = | readonly [OfficialNotifications,]
                         | readonly [OfficialNotifications, number,]
                         | readonly [OfficialNotifications, null,];