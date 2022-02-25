import type {ClassWithNullObjectPattern, EmptyEntityLimitName} from '../../util/ClassWithNullObjectPattern';
import type {EntityLimit}                                      from './EntityLimit';

import {assert}                               from '../../util/utilitiesMethods';
import {ClassContainingANameAndAnAlternative} from '../../lang/name/ClassContainingANameAndAnAlternative';
import {EmptyStringName}                      from '../../lang/name/EmptyStringName';
import {EmptyEntityLimitAmount}               from './properties/EmptyEntityLimitAmount';

/**
 * @singleton
 */
export class EmptyEntityLimit
    extends ClassContainingANameAndAnAlternative<string, string, EmptyEntityLimit>
    implements EntityLimit, ClassWithNullObjectPattern<EmptyEntityLimitName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEntityLimit;

    private constructor() {
        super(EmptyStringName.get, () => this,);
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Type --------------------

    public get type(): never {
        throw assert(false, `No types is compatible with an ${this}.`,);
    }

    //endregion -------------------- Type --------------------
    //region -------------------- Acronym --------------------

    public readonly acronym = null;

    //endregion -------------------- Acronym --------------------
    //region -------------------- Alternative entity limit --------------------

    public readonly alternativeAcronym = null;

    //region -------------------- Limit amount --------------------

    public readonly alternativeLimitContainer = EmptyEntityLimitAmount.get;

    public readonly alternativeAmount = this.alternativeLimitContainer.value;
    public readonly alternativeIsAmountUnknown = this.alternativeLimitContainer.isUnknown;
    public readonly alternativeAmountComment = this.alternativeLimitContainer.comment;

    //endregion -------------------- Limit amount --------------------

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- Limit amount --------------------

    public readonly limitContainer = EmptyEntityLimitAmount.get;

    public readonly amount = this.limitContainer.value;
    public readonly isAmountUnknown = this.limitContainer.isUnknown;
    public readonly amountComment = this.limitContainer.comment;

    //endregion -------------------- Limit amount --------------------

    public toString(): EmptyEntityLimitName {
        return 'Empty entity limit';
    }

}
