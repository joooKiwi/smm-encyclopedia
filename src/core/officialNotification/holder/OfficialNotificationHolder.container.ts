import type {ExtendedMap}                  from '../../../util/extended/ExtendedMap';
import type {OfficialNotificationHolder}   from './OfficialNotificationHolder';
import type {OfficialNotifications}        from '../OfficialNotifications';
import {ExtendedMapContainer}              from '../../../util/extended/ExtendedMap.container';
import {PossibleEnglishNameWithOnlyAmount} from '../OfficialNotifications.types';

/**
 * @multiton
 * @provider
 */
export class OfficialNotificationHolderContainer
    implements OfficialNotificationHolder {

    //region -------------------- Attributes --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<Key, OfficialNotificationHolder> = new ExtendedMapContainer();

    readonly #officialNotification;
    readonly #amount;

    //endregion -------------------- Attributes --------------------

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