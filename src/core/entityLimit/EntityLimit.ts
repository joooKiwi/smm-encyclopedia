import type {EntityLimitAmount}                           from './properties/EntityLimitAmount';
import type {EntityLimitTypes}                            from './EntityLimitTypes';
import type {NameTrait}                                   from '../../lang/name/NameTrait';
import type {NameTraitFromAnAlternativeContainer}         from '../../lang/name/NameTraitFromAnAlternativeContainer';
import type {PossibleAcronym, PossibleAlternativeAcronym} from './EntityLimits.types';

export interface EntityLimit<ACRONYM extends PossibleAcronym | PossibleAlternativeAcronym | null = PossibleAcronym | PossibleAlternativeAcronym | null,
    TYPE extends EntityLimitTypes = EntityLimitTypes,
    LIMIT_AMOUNT extends EntityLimitAmount = EntityLimitAmount,>
    extends NameTrait<string>, NameTraitFromAnAlternativeContainer<string, AlternativeEntityLimit>/*,
        ClassWithNullableAcronym<PossibleAcronymEntityLimits>,
        ClassWithEnglishName<PossibleEntityLimits>*/ {

    get type(): TYPE

    get acronym(): ACRONYM

    //region -------------------- Alternative entity limit --------------------

    get alternativeAcronym(): this['alternativeContainer']['acronym']

    //region -------------------- Limit amount --------------------

    get alternativeLimitContainer(): this['alternativeContainer']['limitContainer']

    //region -------------------- SMM1 & SMM3DS limit --------------------

    get alternativeLimitContainerInSMM1AndSMM3DS(): this['alternativeLimitContainer']['limitContainerInSMM1AndSMM3DS']

    get alternativeLimitAmountInSMM1AndSMM3DS(): this['alternativeLimitContainerInSMM1AndSMM3DS']['value']

    get isUnknownAlternativeLimitInSMM1AndSMM3DS(): this['alternativeLimitContainerInSMM1AndSMM3DS']['isUnknown']

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    get alternativeLimitContainerInSMM2(): this['alternativeLimitContainer']['limitContainerInSMM2']

    get alternativeLimitAmountInSMM2(): this['alternativeLimitContainerInSMM2']['value']

    get isUnknownAlternativeLimitInSMM2(): this['alternativeLimitContainerInSMM2']['isUnknown']

    //endregion -------------------- SMM2 limit --------------------

    get alternativeAmountComment(): this['alternativeLimitContainer']['comment']

    //endregion -------------------- Limit amount --------------------

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- Limit amount --------------------

    get limitContainer(): LIMIT_AMOUNT

    //region -------------------- SMM1 & SMM3DS limit --------------------

    get limitContainerInSMM1AndSMM3DS(): this['limitContainer']['limitContainerInSMM1AndSMM3DS']

    get limitAmountInSMM1AndSMM3DS(): this['limitContainerInSMM1AndSMM3DS']['value']

    get isUnknownLimitInSMM1AndSMM3DS(): this['limitContainerInSMM1AndSMM3DS']['isUnknown']

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    get limitContainerInSMM2(): this['limitContainer']['limitContainerInSMM2']

    get limitAmountInSMM2(): this['limitContainerInSMM2']['value']

    get isUnknownLimitInSMM2(): this['limitContainerInSMM2']['isUnknown']

    //endregion -------------------- SMM2 limit --------------------

    get amountComment(): this['limitContainer']['comment']

    //endregion -------------------- Limit amount --------------------

}

export type EntityLimitWithPossibleAlternativeEntityLimit = EntityLimit<| PossibleAcronym | null>;
export type AlternativeEntityLimit = EntityLimit<| PossibleAlternativeAcronym | null, EntityLimitWithPossibleAlternativeEntityLimit['type'], EntityLimitWithPossibleAlternativeEntityLimit['limitContainer']>;
