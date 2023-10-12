import {lazy} from '@joookiwi/lazy'

import type {Limit}                                      from 'core/limit/Limit'
import type {ClassWithNullObjectPattern, EmptyLimitName} from 'util/ClassWithNullObjectPattern'

import {EmptyLimitAmount}                     from 'core/limit/properties/EmptyLimitAmount'
import {ClassContainingANameAndAnAlternative} from 'lang/name/ClassContainingANameAndAnAlternative'
import {EmptyStringName}                      from 'lang/name/EmptyStringName'
import {EMPTY_MAP}                            from 'util/emptyVariables'
import {assert}                               from 'util/utilitiesMethods'

/** @singleton */
export class EmptyLimit
    extends ClassContainingANameAndAnAlternative<string, string, EmptyLimit>
    implements Limit, ClassWithNullObjectPattern<EmptyLimitName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyLimit

    private constructor() {
        super(EmptyStringName.get, lazy(() => this,),)
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Type --------------------

    public get type(): never {
        throw assert(false, `No types is compatible with an ${this}.`,)
    }

    //endregion -------------------- Type --------------------
    //region -------------------- Acronym --------------------

    public readonly acronym = null

    //endregion -------------------- Acronym --------------------
    //region -------------------- Alternative entity limit --------------------

    public readonly alternativeAcronym = null

    //region -------------------- Limit amount --------------------

    public readonly alternativeLimitContainer = EmptyLimitAmount.get

    public readonly alternativeLimitContainerInSMM1AndSMM3DS = this.alternativeLimitContainer.limitContainerInSMM1AndSMM3DS
    public readonly alternativeLimitAmountInSMM1AndSMM3DS = this.alternativeLimitContainerInSMM1AndSMM3DS.value
    public readonly isUnknownAlternativeLimitInSMM1AndSMM3DS = this.alternativeLimitContainerInSMM1AndSMM3DS.isUnknown

    public readonly alternativeLimitContainerInSMM2 = this.alternativeLimitContainer.limitContainerInSMM2
    public readonly alternativeLimitAmountInSMM2 = this.alternativeLimitContainerInSMM2.value
    public readonly isUnknownAlternativeLimitInSMM2 = this.alternativeLimitContainerInSMM2.isUnknown

    public readonly alternativeAmountComment = this.alternativeLimitContainer.comment

    //endregion -------------------- Limit amount --------------------

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- Limit amount --------------------

    public readonly limitContainer = EmptyLimitAmount.get

    public readonly limitContainerInSMM1AndSMM3DS = this.limitContainer.limitContainerInSMM1AndSMM3DS
    public readonly limitAmountInSMM1AndSMM3DS = this.limitContainerInSMM1AndSMM3DS.value
    public readonly isUnknownLimitInSMM1AndSMM3DS = this.limitContainerInSMM1AndSMM3DS.isUnknown

    public readonly limitContainerInSMM2 = this.limitContainer.limitContainerInSMM2
    public readonly limitAmountInSMM2 = this.limitContainerInSMM2.value
    public readonly isUnknownLimitInSMM2 = this.limitContainerInSMM2.isUnknown

    public readonly amountComment = this.limitContainer.comment

    //endregion -------------------- Limit amount --------------------
    //region -------------------- Game properties --------------------

    public readonly isInSuperMarioMaker1Or3DS = false
    public readonly isInSuperMarioMaker1 = false
    public readonly isInSuperMarioMakerFor3DS = false
    public readonly isInSuperMarioMaker2 = false

    public toGameMap() {
        return EMPTY_MAP
    }

    //endregion -------------------- Game properties --------------------

    public override toString(): EmptyLimitName {
        return 'Empty limit'
    }

}
