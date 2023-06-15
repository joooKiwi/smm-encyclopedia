import type {EntityLimit}                                      from 'core/entityLimit/EntityLimit'
import type {ClassWithNullObjectPattern, EmptyEntityLimitName} from 'util/ClassWithNullObjectPattern'

import {EmptyEntityLimitAmount}               from 'core/entityLimit/properties/EmptyEntityLimitAmount'
import {ClassContainingANameAndAnAlternative} from 'lang/name/ClassContainingANameAndAnAlternative'
import {EmptyStringName}                      from 'lang/name/EmptyStringName'
import {EMPTY_MAP}                            from 'util/emptyVariables'
import {assert}                               from 'util/utilitiesMethods'

/**
 * @singleton
 */
export class EmptyEntityLimit
    extends ClassContainingANameAndAnAlternative<string, string, EmptyEntityLimit>
    implements EntityLimit, ClassWithNullObjectPattern<EmptyEntityLimitName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEntityLimit

    private constructor() {
        super(EmptyStringName.get, () => this,)
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

    public readonly alternativeLimitContainer = EmptyEntityLimitAmount.get

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

    public readonly limitContainer = EmptyEntityLimitAmount.get

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

    public override toString(): EmptyEntityLimitName {
        return 'Empty entity limit'
    }

}
