import {lazy} from '@joookiwi/lazy'

import type {AlternativeLimit, Limit}                    from 'core/limit/Limit'
import type {ClassWithNullObjectPattern, EmptyLimitName} from 'util/ClassWithNullObjectPattern'

import {ClassContainingANameAndAnAlternative} from 'lang/name/ClassContainingANameAndAnAlternative'
import {EmptyStringName}                      from 'lang/name/EmptyStringName'
import {NOT_APPLICABLE}                       from 'util/commonVariables'
import {Empty}                                from 'util/emptyVariables'
import {assert}                               from 'util/utilitiesMethods'

import EMPTY_MAP = Empty.EMPTY_MAP

/** @singleton */
export class EmptyLimit
    extends ClassContainingANameAndAnAlternative<string, string, EmptyLimit>
    implements Limit,
        AlternativeLimit,
        ClassWithNullObjectPattern<EmptyLimitName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyLimit

    private constructor() {
        super(EmptyStringName.get, lazy(() => this,),)
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    public get type(): never {
        throw assert(false, `No types is compatible with an ${this}.`,)
    }


    public readonly acronym = null

    public readonly limitAmountInSMM1AndSMM3DS = NOT_APPLICABLE
    public readonly isUnknownLimitInSMM1AndSMM3DS = false

    public readonly limitAmountInSMM2 = null
    public readonly isUnknownLimitInSMM2 = false

    public readonly amountComment = null


    public readonly alternativeAcronym = null

    public readonly alternativeLimitAmountInSMM1AndSMM3DS = NOT_APPLICABLE
    public readonly isUnknownAlternativeLimitInSMM1AndSMM3DS = false

    public readonly alternativeLimitAmountInSMM2 = null
    public readonly isUnknownAlternativeLimitInSMM2 = false

    public readonly alternativeAmountComment = null


    public readonly isInSuperMarioMaker1Or3DS = false
    public readonly isInSuperMarioMaker1 = false
    public readonly isInSuperMarioMakerFor3DS = false
    public readonly isInSuperMarioMaker2 = false

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap() {
        return EMPTY_MAP
    }

    //endregion -------------------- Convertor methods --------------------

    public override toString(): EmptyLimitName {
        return 'Empty limit'
    }

}
