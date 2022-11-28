import type {Builder}                           from '../../../util/builder/Builder'
import type {NullOr}                            from '../../../util/types'
import type {OfficialNotificationHolder}        from './OfficialNotificationHolder'
import type {PossibleEnglishNameWithOnlyAmount} from '../OfficialNotifications.types'

import {EmptyOfficialNotificationHolder}    from './EmptyOfficialNotificationHolder'
import {OfficialNotificationHolderProvider} from './OfficialNotificationHolder.provider'
import {OfficialNotifications}              from '../OfficialNotifications'

export class OfficialNotificationHolderBuilder
    implements Builder<OfficialNotificationHolder> {

    //region -------------------- Fields --------------------

    static readonly #NUMBER_ONLY_REGEX = /^\d+$/
    static readonly #OFFICIAL_NOTIFICATION_SEPARATOR = ' '
    static readonly #POSSIBLE_EXCLUDED_CASES: readonly OfficialNotifications[] = [OfficialNotifications.RECEIVE_A_LOT_OF_FEEDBACK_1, OfficialNotifications.RECEIVE_A_LOT_OF_FEEDBACK_2,]
    static readonly #NO_NUMBER_FOUND = -1

    readonly #name

    //endregion -------------------- Fields --------------------

    public constructor(name: NullOr<PossibleEnglishNameWithOnlyAmount>,) {
        this.#name = name
    }

    //region -------------------- Getter methods --------------------

    public get name() {
        return this.#name
    }

    //endregion -------------------- Getter methods --------------------

    public build(): OfficialNotificationHolder {
        const name = this.name

        if (name == null)
            return EmptyOfficialNotificationHolder.get

        const officialNotification = OfficialNotifications.getValueByName(name)

        if (OfficialNotificationHolderBuilder.#POSSIBLE_EXCLUDED_CASES.includes(officialNotification))
            return OfficialNotificationHolderProvider.get.get(name, officialNotification,)

        const numberFoundInOfficialNotification = Number(name.split(OfficialNotificationHolderBuilder.#OFFICIAL_NOTIFICATION_SEPARATOR)
            .find(value => OfficialNotificationHolderBuilder.#NUMBER_ONLY_REGEX.test(value)) ?? OfficialNotificationHolderBuilder.#NO_NUMBER_FOUND)

        return numberFoundInOfficialNotification === OfficialNotificationHolderBuilder.#NO_NUMBER_FOUND
            ? OfficialNotificationHolderProvider.get.get(name, officialNotification,)
            : OfficialNotificationHolderProvider.get.get(name, officialNotification, numberFoundInOfficialNotification,)

    }

}
