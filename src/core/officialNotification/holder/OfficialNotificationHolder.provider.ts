import type {OfficialNotifications}             from 'core/officialNotification/OfficialNotifications'
import type {PossibleEnglishNameWithOnlyAmount} from 'core/officialNotification/OfficialNotifications.types'
import type {OfficialNotificationHolder} from 'core/officialNotification/holder/OfficialNotificationHolder'
import type {ProviderWithExplicitKey}    from 'util/provider/ProviderWithExplicitKey'

import {OfficialNotificationHolderContainer} from 'core/officialNotification/holder/OfficialNotificationHolder.container'
import {AbstractProvider}                    from 'util/provider/AbstractProvider'

/** @singleton */
export class OfficialNotificationHolderProvider
    extends AbstractProvider<Key, OfficialNotificationHolder>
    implements ProviderWithExplicitKey<OfficialNotificationHolder, Key, ArgumentsReceived> {

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
    public get(key: Key, officialNotification: OfficialNotifications, amount: NullOrNumber = null,): OfficialNotificationHolder {
        const everyContainer = this.everyContainers
        if (!everyContainer.has(key,))
            everyContainer.set(key, new OfficialNotificationHolderContainer(officialNotification, amount,),)
        return everyContainer.get(key,)!
    }
}

type Key = PossibleEnglishNameWithOnlyAmount
type ArgumentsReceived = readonly [
    officialNotification: OfficialNotifications,
    amount: NullOrNumber,
]
