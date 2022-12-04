import type {NotApplicableProperty, UnknownProperty}                                                              from 'core/_properties/PropertyWithEverything'
import type {NumberPropertyThatCanBeUnknown}                                                                      from 'core/_properties/PropertyThatCanBeUnknown'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount} from 'core/entityLimit/EntityLimit.template'
import type {NullOr}                                                                                              from 'util/types/nullable'

export interface EntityLimitAmount {

    //region -------------------- SMM1 & SMM3DS limit --------------------

    get limitContainerInSMM1AndSMM3DS(): | NumberPropertyThatCanBeUnknown<NullOr<PossibleLimitAmount_SMM1And3DS_Amount>> | NotApplicableProperty | UnknownProperty

    get limitAmountInSMM1AndSMM3DS(): this['limitContainerInSMM1AndSMM3DS']['value']

    get isUnknownLimitInSMM1AndSMM3DS(): this['limitContainerInSMM1AndSMM3DS']['isUnknown']

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    get limitContainerInSMM2(): | NumberPropertyThatCanBeUnknown<NullOr<PossibleLimitAmount_SMM2_Amount>> | UnknownProperty

    get limitAmountInSMM2(): this['limitContainerInSMM2']['value']

    get isUnknownLimitInSMM2(): this['limitContainerInSMM2']['isUnknown']

    //endregion -------------------- SMM2 limit --------------------

    get comment(): PossibleLimitAmount_Comment

}
