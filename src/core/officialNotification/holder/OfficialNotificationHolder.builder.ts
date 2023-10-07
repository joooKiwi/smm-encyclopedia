import type {OfficialNotificationHolder}        from 'core/officialNotification/holder/OfficialNotificationHolder'
import type {PossibleEnglishNameWithOnlyAmount} from 'core/officialNotification/OfficialNotifications.types'
import type {Builder}                           from 'util/builder/Builder'

import {OfficialNotifications}              from 'core/officialNotification/OfficialNotifications'
import {EmptyOfficialNotificationHolder}    from 'core/officialNotification/holder/EmptyOfficialNotificationHolder'
import {OfficialNotificationHolderProvider} from 'core/officialNotification/holder/OfficialNotificationHolder.provider'
import {SPACE}                              from 'util/commonVariables'


const NUMBER_ONLY_REGEX = /^\d+$/
const POSSIBLE_EXCLUDED_CASES: readonly OfficialNotifications[] = [OfficialNotifications.RECEIVE_A_LOT_OF_FEEDBACK_1, OfficialNotifications.RECEIVE_A_LOT_OF_FEEDBACK_2,]

/** @deprecated Use a stateless method instead to create retrieve the Official notification */
export class OfficialNotificationHolderBuilder
    implements Builder<OfficialNotificationHolder> {

    readonly #name

    public constructor(name: NullOr<PossibleEnglishNameWithOnlyAmount>,) {
        this.#name = name
    }

    public get name(): NullOr<PossibleEnglishNameWithOnlyAmount> {
        return this.#name
    }

    public build(): OfficialNotificationHolder {
        const name = this.name

        if (name == null)
            return EmptyOfficialNotificationHolder.get

        const officialNotification = OfficialNotifications.CompanionEnum.get.getValueByName(name,)

        if (POSSIBLE_EXCLUDED_CASES.includes(officialNotification,))
            return OfficialNotificationHolderProvider.get.get(name, officialNotification,)

        const numberFoundInOfficialNotificationFound = name.split(SPACE,).find(value => NUMBER_ONLY_REGEX.test(value,),)
        if (numberFoundInOfficialNotificationFound == null)
            return OfficialNotificationHolderProvider.get.get(name, officialNotification,)
        return OfficialNotificationHolderProvider.get.get(name, officialNotification, Number(numberFoundInOfficialNotificationFound,),)
    }

}
