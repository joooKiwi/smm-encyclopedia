import type {NotApplicableProperty, UnknownProperty}                                                              from 'core/_properties/PropertyWithEverything'
import type {NumberPropertyThatCanBeUnknown}                                                                      from 'core/_properties/PropertyThatCanBeUnknown'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount} from 'core/entityLimit/EntityLimit.template'
import type {NullOr}                                                                                              from 'util/types/nullable'
import type {NotApplicable}                                                                                       from 'util/types/variables'

export interface EntityLimitAmount {

    //region -------------------- SMM1 & SMM3DS limit --------------------

    get limitContainerInSMM1AndSMM3DS(): | NumberPropertyThatCanBeUnknown<NullOr<PossibleLimitAmount_SMM1And3DS_Amount>> | NotApplicableProperty | UnknownProperty

    get limitAmountInSMM1AndSMM3DS(): NullOr<PossibleLimitAmount_SMM1And3DS_Amount> | NotApplicable

    get isUnknownLimitInSMM1AndSMM3DS(): boolean

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    get limitContainerInSMM2(): | NumberPropertyThatCanBeUnknown<NullOr<PossibleLimitAmount_SMM2_Amount>> | UnknownProperty

    get limitAmountInSMM2(): NullOr<PossibleLimitAmount_SMM2_Amount>

    get isUnknownLimitInSMM2(): boolean

    //endregion -------------------- SMM2 limit --------------------

    get comment(): PossibleLimitAmount_Comment

}
