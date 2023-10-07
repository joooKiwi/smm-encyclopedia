import {OfficialNotificationHolder}                                from 'core/officialNotification/holder/OfficialNotificationHolder'
import {ClassWithNullObjectPattern, EmptyOfficialNotificationName} from 'util/ClassWithNullObjectPattern'

/** @singleton */
export class EmptyOfficialNotificationHolder
    implements OfficialNotificationHolder, ClassWithNullObjectPattern<EmptyOfficialNotificationName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyOfficialNotificationHolder

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }


    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    public readonly officialNotification = null
    public readonly amount = null

    //endregion -------------------- Getter methods --------------------

    public toString(): EmptyOfficialNotificationName {
        return 'Empty official notification'
    }

}
