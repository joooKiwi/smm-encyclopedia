import type {ClassWithNullObjectPattern, EmptyMiiCostumeName} from '../../util/ClassWithNullObjectPattern';
import type {MiiCostume}                                      from './MiiCostume';

import {ClassContainingANameAndACategory} from '../../lang/name/ClassContainingANameAndACategory';
import {EmptyMiiCostumeCategory}          from '../miiCostumeCategory/EmptyMiiCostumeCategory';
import {EmptyStringName}                  from '../../lang/name/EmptyStringName';
import {EmptyOfficialNotificationHolder}  from '../officialNotification/holder/EmptyOfficialNotificationHolder';
import {MiiCostumeCategory}               from '../miiCostumeCategory/MiiCostumeCategory';

/**
 * @singleton
 */
export class EmptyMiiCostume
    extends ClassContainingANameAndACategory<string, string, MiiCostumeCategory>
    implements MiiCostume, ClassWithNullObjectPattern<EmptyMiiCostumeName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyMiiCostume;

    private constructor() {
        super(EmptyStringName.get, EmptyMiiCostumeCategory.get,);
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly officialNotificationContainer = EmptyOfficialNotificationHolder.get;
    public readonly officialNotification = this.officialNotificationContainer.officialNotification;
    public readonly officialNotificationAmount = this.officialNotificationContainer.amount;

    public readonly version = null;

    public toString(): EmptyMiiCostumeName {
        return 'Empty Mii costume';
    }

}
