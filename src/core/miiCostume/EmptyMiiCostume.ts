import type {MiiCostume}                                      from 'core/miiCostume/MiiCostume'
import type {ClassWithNullObjectPattern, EmptyMiiCostumeName} from 'util/ClassWithNullObjectPattern'

import {LAZY_EMPTY_MII_COSTUME_CATEGORY}  from 'core/miiCostumeCategory/EmptyMiiCostumeCategory.lazy'
import {MiiCostumeCategory}               from 'core/miiCostumeCategory/MiiCostumeCategory'
import {ClassContainingANameAndACategory} from 'lang/name/ClassContainingANameAndACategory'
import {EmptyStringName}                  from 'lang/name/EmptyStringName'

/** @singleton */
export class EmptyMiiCostume
    extends ClassContainingANameAndACategory<string, string, MiiCostumeCategory>
    implements MiiCostume, ClassWithNullObjectPattern<EmptyMiiCostumeName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyMiiCostume

    private constructor() {
        super(EmptyStringName.get, LAZY_EMPTY_MII_COSTUME_CATEGORY,)
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly officialNotification = null
    public readonly officialNotificationAmount = null

    public readonly version = null

    public override toString(): EmptyMiiCostumeName {
        return 'Empty Mii costume'
    }

}
