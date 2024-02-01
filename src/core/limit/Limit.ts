import type {ClassWithNullableAcronym}                                                                            from 'core/ClassWithAcronym'
import type {ClassWithType}                                                                                       from 'core/ClassWithType'
import type {PropertyThatCanBeUnknown}                                                                            from 'core/_properties/PropertyThatCanBeUnknown'
import type {NotApplicableProperty, NullProperty, UnknownProperty}                                                from 'core/_properties/PropertyWithEverything'
import type {GameProperty}                                                                                        from 'core/entity/properties/game/GameProperty'
import type {PossibleAcronym, PossibleAlternativeAcronym}                                                         from 'core/limit/Limits.types'
import type {LimitTypes}                                                                                          from 'core/limit/LimitTypes'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount} from 'core/limit/loader.types'
import type {NameTrait}                                                                                           from 'lang/name/NameTrait'
import type {NameTraitFromAnAlternativeContainer}                                                                 from 'lang/name/NameTraitFromAnAlternativeContainer'

export interface Limit
    extends NameTrait<string>, NameTraitFromAnAlternativeContainer<string, AlternativeLimit>,
        ClassWithNullableAcronym<| PossibleAcronym | PossibleAlternativeAcronym>/*,
        ClassWithEnglishName<PossibleLimits>*/,
        ClassWithType<LimitTypes>,
        GameProperty {

    //region -------------------- Alternative entity limit --------------------

    get alternativeAcronym(): NullOr<PossibleAlternativeAcronym>

    get alternativeAmountComment(): PossibleLimitAmount_Comment

    //region -------------------- SMM1 & SMM3DS limit --------------------

    get alternativeLimitContainerInSMM1AndSMM3DS(): | PropertyThatCanBeUnknown<PossibleLimitAmount_SMM1And3DS_Amount> | NullProperty | NotApplicableProperty | UnknownProperty

    get alternativeLimitAmountInSMM1AndSMM3DS(): | NullOr<PossibleLimitAmount_SMM1And3DS_Amount> | NotApplicable

    get isUnknownAlternativeLimitInSMM1AndSMM3DS(): boolean

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    get alternativeLimitContainerInSMM2(): | PropertyThatCanBeUnknown<PossibleLimitAmount_SMM2_Amount> | NullProperty | UnknownProperty

    get alternativeLimitAmountInSMM2(): NullOr<PossibleLimitAmount_SMM2_Amount>

    get isUnknownAlternativeLimitInSMM2(): boolean

    //endregion -------------------- SMM2 limit --------------------

    //endregion -------------------- Alternative entity limit --------------------

    get amountComment(): PossibleLimitAmount_Comment

    //region -------------------- SMM1 & SMM3DS limit --------------------

    get limitContainerInSMM1AndSMM3DS(): | PropertyThatCanBeUnknown<PossibleLimitAmount_SMM1And3DS_Amount> | NullProperty | NotApplicableProperty | UnknownProperty

    get limitAmountInSMM1AndSMM3DS(): | NullOr<PossibleLimitAmount_SMM1And3DS_Amount> | NotApplicable

    get isUnknownLimitInSMM1AndSMM3DS(): boolean

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    get limitContainerInSMM2(): | PropertyThatCanBeUnknown<PossibleLimitAmount_SMM2_Amount> | NullProperty | UnknownProperty

    get limitAmountInSMM2(): NullOr<PossibleLimitAmount_SMM2_Amount>

    get isUnknownLimitInSMM2(): boolean

    //endregion -------------------- SMM2 limit --------------------


    get isInSuperMarioMaker1Or3DS(): boolean

}

export interface LimitWithPossibleAlternativeLimit
    extends Limit {

    get acronym(): NullOr<PossibleAcronym>

}

export interface AlternativeLimit
    extends Limit {

    get acronym(): NullOr<PossibleAlternativeAcronym>

}
