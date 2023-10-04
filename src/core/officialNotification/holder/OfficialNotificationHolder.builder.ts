import type {OfficialNotificationHolder}        from 'core/officialNotification/holder/OfficialNotificationHolder'
import type {PossibleEnglishNameWithOnlyAmount} from 'core/officialNotification/OfficialNotifications.types'
import type {Builder}                           from 'util/builder/Builder'

import {OfficialNotifications}              from 'core/officialNotification/OfficialNotifications'
import {EmptyOfficialNotificationHolder}    from 'core/officialNotification/holder/EmptyOfficialNotificationHolder'
import {OfficialNotificationHolderProvider} from 'core/officialNotification/holder/OfficialNotificationHolder.provider'
import {SPACE}                              from 'util/commonVariables'

export class OfficialNotificationHolderBuilder
    implements Builder<OfficialNotificationHolder> {

    //region -------------------- Fields --------------------

    static readonly #NUMBER_ONLY_REGEX = /^\d+$/
    static readonly #OFFICIAL_NOTIFICATION_SEPARATOR = SPACE
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

        const officialNotification = OfficialNotifications.CompanionEnum.get.getValueByName(name,)

        if (OfficialNotificationHolderBuilder.#POSSIBLE_EXCLUDED_CASES.includes(officialNotification))
            return OfficialNotificationHolderProvider.get.get(name, officialNotification,)

        const numberFoundInOfficialNotification = Number(name.split(OfficialNotificationHolderBuilder.#OFFICIAL_NOTIFICATION_SEPARATOR)
            .find(value => OfficialNotificationHolderBuilder.#NUMBER_ONLY_REGEX.test(value)) ?? OfficialNotificationHolderBuilder.#NO_NUMBER_FOUND)

        return numberFoundInOfficialNotification === OfficialNotificationHolderBuilder.#NO_NUMBER_FOUND
            ? OfficialNotificationHolderProvider.get.get(name, officialNotification,)
            : OfficialNotificationHolderProvider.get.get(name, officialNotification, numberFoundInOfficialNotification,)

    }

}
