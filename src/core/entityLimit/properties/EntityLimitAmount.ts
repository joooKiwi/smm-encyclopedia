import type {PropertyThatCanBeUnknown}                                                                            from 'core/_properties/PropertyThatCanBeUnknown'
import type {NotApplicableProperty, UnknownProperty}                                                              from 'core/_properties/PropertyWithEverything'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount} from 'core/entityLimit/loader.types'
import type {ClassWithComment}                                                                                    from 'util/ClassWithComment'

export interface EntityLimitAmount
    extends ClassWithComment<PossibleLimitAmount_Comment> {

    //region -------------------- SMM1 & SMM3DS limit --------------------

    get limitContainerInSMM1AndSMM3DS(): | PropertyThatCanBeUnknown<NullOr<PossibleLimitAmount_SMM1And3DS_Amount>> | NotApplicableProperty | UnknownProperty

    get limitAmountInSMM1AndSMM3DS(): NullOr<PossibleLimitAmount_SMM1And3DS_Amount> | NotApplicable

    get isUnknownLimitInSMM1AndSMM3DS(): boolean

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    get limitContainerInSMM2(): | PropertyThatCanBeUnknown<NullOr<PossibleLimitAmount_SMM2_Amount>> | UnknownProperty

    get limitAmountInSMM2(): NullOr<PossibleLimitAmount_SMM2_Amount>

    get isUnknownLimitInSMM2(): boolean

    //endregion -------------------- SMM2 limit --------------------

}
