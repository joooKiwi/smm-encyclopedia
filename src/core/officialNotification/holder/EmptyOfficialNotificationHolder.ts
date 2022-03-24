import {OfficialNotificationHolder}                                from './OfficialNotificationHolder';
import {ClassWithNullObjectPattern, EmptyOfficialNotificationName} from '../../../util/ClassWithNullObjectPattern';

/**
 * @singleton
 */
export class EmptyOfficialNotificationHolder
    implements OfficialNotificationHolder, ClassWithNullObjectPattern<EmptyOfficialNotificationName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyOfficialNotificationHolder;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }


    //endregion -------------------- Singleton usage --------------------

    public readonly officialNotification = null;
    public readonly amount = null;

    public toString(): EmptyOfficialNotificationName {
        return 'Empty official notification';
    }

}
