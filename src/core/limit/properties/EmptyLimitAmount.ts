import type {LimitAmount}                                      from 'core/limit/properties/LimitAmount'
import type {ClassWithNullObjectPattern, EmptyLimitAmountName} from 'util/ClassWithNullObjectPattern'

import {PropertyContainer} from 'core/_properties/Property.container'

/** @singleton */
export class EmptyLimitAmount
    implements LimitAmount, ClassWithNullObjectPattern<EmptyLimitAmountName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyLimitAmount

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    public readonly limitContainerInSMM1AndSMM3DS = PropertyContainer.NULL_CONTAINER
    public readonly limitAmountInSMM1AndSMM3DS = this.limitContainerInSMM1AndSMM3DS.value
    public readonly isUnknownLimitInSMM1AndSMM3DS = this.limitContainerInSMM1AndSMM3DS.isUnknown

    public readonly limitContainerInSMM2 = PropertyContainer.NULL_CONTAINER
    public readonly limitAmountInSMM2 = this.limitContainerInSMM2.value
    public readonly isUnknownLimitInSMM2 = this.limitContainerInSMM2.isUnknown

    public readonly comment = null

    //endregion -------------------- Getter methods --------------------

    public toString(): EmptyLimitAmountName {
        return 'Empty limit (amount)'
    }

}
