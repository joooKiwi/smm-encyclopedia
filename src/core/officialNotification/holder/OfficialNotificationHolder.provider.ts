import type {PossibleEnglishNameWithOnlyAmount} from '../OfficialNotifications.types'
import type {OfficialNotifications}             from '../OfficialNotifications'
import type {OfficialNotificationHolder}        from './OfficialNotificationHolder'
import type {ProviderWithKey}                   from '../../../util/provider/ProviderWithKey'

import {AbstractProvider}                    from '../../../util/provider/AbstractProvider'
import {OfficialNotificationHolderContainer} from './OfficialNotificationHolder.container'

/**
 * @singleton
 */
export class OfficialNotificationHolderProvider
    extends AbstractProvider<Key, OfficialNotificationHolder>
    implements ProviderWithKey<OfficialNotificationHolder, Key, ArgumentsReceived> {

    //region -------------------- Singleton usage --------------------

    static #instance?: OfficialNotificationHolderProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    /**
     * Get (or create) an {@link OfficialNotificationHolder} with a <b>null</b> amount.
     *
     * @param key the key to associate the instance
     * @param officialNotification The {@link OfficialNotifications} instance
     */
    public get(key: Key, officialNotification: OfficialNotifications,): OfficialNotificationHolder
    /**
     * Get (or create) an {@link OfficialNotificationHolder} with a specified amount.
     *
     * @param key the key to associate the instance
     * @param officialNotification The {@link OfficialNotifications} instance
     * @param amount The amount associated to the official notification (it should not be null)
     */
    public get(key: Key, officialNotification: OfficialNotifications, amount: number,): OfficialNotificationHolder
    public get(key: Key, ...argumentsReceived: ArgumentsReceived | ArgumentsReceived_Simplified): OfficialNotificationHolder {
        if (argumentsReceived.length === 1)
            // @ts-ignore
            return this.get(key, argumentsReceived[0], null,)

        return this.everyContainers.if(map => map.has(key))
            .isNotMet(map => map.set(key, new OfficialNotificationHolderContainer(argumentsReceived[0], argumentsReceived[1],)))
            .get(key)
    }
}

type Key = PossibleEnglishNameWithOnlyAmount
type ArgumentsReceived = readonly [
    officialNotification: OfficialNotifications,
    amount: | number | null,
]
type ArgumentsReceived_Simplified = readonly [OfficialNotifications,]
