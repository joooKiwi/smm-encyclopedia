import type {ClassWithNullObjectPattern, EmptyEntityCategoryName} from '../../util/ClassWithNullObjectPattern'
import type {EntityCategory}                                      from './EntityCategory'

import {ClassContainingAName} from '../../lang/name/ClassContainingAName'
import {EmptyStringName}      from '../../lang/name/EmptyStringName'

/**
 * @singleton
 */
export class EmptyEntityCategory
    extends ClassContainingAName<string>
    implements EntityCategory, ClassWithNullObjectPattern<EmptyEntityCategoryName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEntityCategory

    private constructor() {
        super(EmptyStringName.get,)
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public override toString(): EmptyEntityCategoryName {
        return 'Empty entity category'
    }

}
