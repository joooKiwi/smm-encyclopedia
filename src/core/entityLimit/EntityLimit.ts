import type {ClassWithNullableAcronym}                                                                            from 'core/ClassWithAcronym'
import type {ClassWithType}                                                                                       from 'core/ClassWithType'
import type {PropertyThatCanBeUnknown}                                                                            from 'core/_properties/PropertyThatCanBeUnknown'
import type {NotApplicableProperty, UnknownProperty}                                                              from 'core/_properties/PropertyWithEverything'
import type {GameProperty}                                                                                        from 'core/entity/properties/game/GameProperty'
import type {PossibleAcronym, PossibleAlternativeAcronym}                                                         from 'core/entityLimit/EntityLimits.types'
import type {EntityLimitTypes}                                                                                    from 'core/entityLimit/EntityLimitTypes'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount} from 'core/entityLimit/loader.types'
import type {EntityLimitAmount}                                                                                   from 'core/entityLimit/properties/EntityLimitAmount'
import type {NameTrait}                                                                                           from 'lang/name/NameTrait'
import type {NameTraitFromAnAlternativeContainer}                                                                 from 'lang/name/NameTraitFromAnAlternativeContainer'

export interface EntityLimit
    extends NameTrait<string>, NameTraitFromAnAlternativeContainer<string, AlternativeEntityLimit>,
        ClassWithNullableAcronym<| PossibleAcronym | PossibleAlternativeAcronym>/*,
        ClassWithEnglishName<PossibleEntityLimits>*/,
        ClassWithType<EntityLimitTypes>,
        GameProperty {

    //region -------------------- Alternative entity limit --------------------

    get alternativeAcronym(): NullOr<PossibleAlternativeAcronym>

    get alternativeLimitContainer(): EntityLimitAmount

    get alternativeAmountComment(): PossibleLimitAmount_Comment

    //region -------------------- SMM1 & SMM3DS limit --------------------

    get alternativeLimitContainerInSMM1AndSMM3DS(): this['alternativeLimitContainer']['limitContainerInSMM1AndSMM3DS']

    get alternativeLimitAmountInSMM1AndSMM3DS(): | NullOr<PossibleLimitAmount_SMM1And3DS_Amount> | NotApplicable

    get isUnknownAlternativeLimitInSMM1AndSMM3DS(): boolean

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    get alternativeLimitContainerInSMM2(): this['alternativeLimitContainer']['limitContainerInSMM2']

    get alternativeLimitAmountInSMM2(): NullOr<PossibleLimitAmount_SMM2_Amount>

    get isUnknownAlternativeLimitInSMM2(): boolean

    //endregion -------------------- SMM2 limit --------------------

    //endregion -------------------- Alternative entity limit --------------------

    get limitContainer(): EntityLimitAmount

    get amountComment(): PossibleLimitAmount_Comment

    //region -------------------- SMM1 & SMM3DS limit --------------------

    get limitContainerInSMM1AndSMM3DS(): | PropertyThatCanBeUnknown<NullOr<PossibleLimitAmount_SMM1And3DS_Amount>> | NotApplicableProperty | UnknownProperty

    get limitAmountInSMM1AndSMM3DS(): | NullOr<PossibleLimitAmount_SMM1And3DS_Amount> | NotApplicable

    get isUnknownLimitInSMM1AndSMM3DS(): boolean

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    get limitContainerInSMM2(): | PropertyThatCanBeUnknown<NullOr<PossibleLimitAmount_SMM2_Amount>> | UnknownProperty

    get limitAmountInSMM2(): NullOr<PossibleLimitAmount_SMM2_Amount>

    get isUnknownLimitInSMM2(): boolean

    //endregion -------------------- SMM2 limit --------------------


    get isInSuperMarioMaker1Or3DS(): boolean

}

export interface EntityLimitWithPossibleAlternativeEntityLimit
    extends EntityLimit {

    get acronym(): NullOr<PossibleAcronym>

}

export interface AlternativeEntityLimit
    extends EntityLimit {

    get acronym(): NullOr<PossibleAlternativeAcronym>

}
