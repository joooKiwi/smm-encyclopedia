import type {MiiCostumeCategory}                                      from './MiiCostumeCategory'
import type {ClassWithNullObjectPattern, EmptyMiiCostumeCategoryName} from '../../util/ClassWithNullObjectPattern'

import {ClassContainingAName} from '../../lang/name/ClassContainingAName'
import {EmptyStringName}      from '../../lang/name/EmptyStringName'

export class EmptyMiiCostumeCategory
    extends ClassContainingAName<string>
    implements MiiCostumeCategory, ClassWithNullObjectPattern<EmptyMiiCostumeCategoryName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyMiiCostumeCategory

    private constructor() {
        super(EmptyStringName.get,)
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public override toString(): EmptyMiiCostumeCategoryName {
        return 'Empty Mii costume category'
    }

}