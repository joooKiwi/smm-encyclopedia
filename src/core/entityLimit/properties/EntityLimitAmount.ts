import type {NotApplicableProperty, UnknownProperty}                                                        from '../../_properties/PropertyWithEverything';
import type {NumberPropertyThatCanBeUnknown}                                                                from '../../_properties/PropertyThatCanBeUnknown';
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1_Amount, PossibleLimitAmount_SMM2_Amount} from '../EntityLimit.template';

export interface EntityLimitAmount {

    //region -------------------- SMM1 & SMM3DS limit --------------------

    get limitContainerInSMM1AndSMM3DS(): | NumberPropertyThatCanBeUnknown<PossibleLimitAmount_SMM1_Amount | null> | NotApplicableProperty | UnknownProperty

    get limitAmountInSMM1AndSMM3DS(): this['limitContainerInSMM1AndSMM3DS']['value']

    get isUnknownLimitInSMM1AndSMM3DS(): this['limitContainerInSMM1AndSMM3DS']['isUnknown']

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    get limitContainerInSMM2(): | NumberPropertyThatCanBeUnknown<PossibleLimitAmount_SMM2_Amount | null> | UnknownProperty

    get limitAmountInSMM2(): this['limitContainerInSMM2']['value']

    get isUnknownLimitInSMM2(): this['limitContainerInSMM2']['isUnknown']

    //endregion -------------------- SMM2 limit --------------------

    get comment(): PossibleLimitAmount_Comment

}
