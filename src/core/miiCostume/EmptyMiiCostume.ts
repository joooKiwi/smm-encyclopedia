import type {ClassWithNullObjectPattern, EmptyMiiCostumeName} from '../../util/ClassWithNullObjectPattern';
import type {MiiCostume}                                      from './MiiCostume';

import {ClassContainingAName}            from '../../lang/name/ClassContainingAName';
import {EmptyMiiCostumeCategory}         from '../miiCostumeCategory/EmptyMiiCostumeCategory';
import {EmptyStringName}                 from '../../lang/name/EmptyStringName';
import {EmptyOfficialNotificationHolder} from '../officialNotification/holder/EmptyOfficialNotificationHolder';

/**
 * @singleton
 */
export class EmptyMiiCostume
    extends ClassContainingAName<string>
    implements MiiCostume, ClassWithNullObjectPattern<EmptyMiiCostumeName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyMiiCostume;

    private constructor() {
        super(EmptyStringName.get,);
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly officialNotificationContainer = EmptyOfficialNotificationHolder.get;
    public readonly officialNotification = this.officialNotificationContainer.officialNotification;
    public readonly officialNotificationAmount = this.officialNotificationContainer.amount;

    public readonly version = null;
    public readonly category = EmptyMiiCostumeCategory.get;

    public toString(): EmptyMiiCostumeName {
        return 'Empty Mii costume';
    }

}
