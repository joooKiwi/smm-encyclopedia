import type {EntityLimitAmount}                           from './properties/EntityLimitAmount';
import type {EntityLimitTypes}                            from './EntityLimitTypes';
import type {EveryLanguages}                              from '../../lang/EveryLanguages';
import type {NameTrait}                                   from '../../lang/name/NameTrait';
import type {NameTraitFromAnAlternativeContainer}         from '../../lang/name/NameTraitFromAnAlternativeContainer';
import type {PossibleAcronym, PossibleAlternativeAcronym} from './EntityLimits.types';

export interface EntityLimit<ACRONYM extends PossibleAcronym | PossibleAlternativeAcronym | null = PossibleAcronym | PossibleAlternativeAcronym | null,
    TYPE extends EntityLimitTypes = EntityLimitTypes,
    LIMIT_AMOUNT extends EntityLimitAmount = EntityLimitAmount,>
    extends NameTrait, NameTraitFromAnAlternativeContainer<AlternativeEntityLimit>/*,
        ClassWithNullableAcronym<PossibleAcronymEntityLimits>,
        ClassWithEnglishName<PossibleEntityLimits>*/ {

    get type(): TYPE

    get acronym(): ACRONYM

    //region -------------------- Alternative entity limit --------------------

    get alternativeAcronym(): this['alternativeContainer']['acronym']

    //region -------------------- Limit amount --------------------

    get alternativeAmount(): this['alternativeContainer']['amount']

    get alternativeIsAmountUnknown(): this['alternativeContainer']['isAmountUnknown']

    get alternativeAmountComment(): this['alternativeContainer']['amountComment']

    //endregion -------------------- Limit amount --------------------

    toAlternativeNameMap(): ReadonlyMap<EveryLanguages, string>

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- Limit amount --------------------

    get limitContainer(): LIMIT_AMOUNT

    get amount(): this['limitContainer']['value']

    get isAmountUnknown(): this['limitContainer']['isUnknown']

    get amountComment(): this['limitContainer']['comment']

    //endregion -------------------- Limit amount --------------------

}

export type EntityLimitWithPossibleAlternativeEntityLimit = EntityLimit<| PossibleAcronym | null>;
export type AlternativeEntityLimit = EntityLimit<| PossibleAlternativeAcronym | null, EntityLimitWithPossibleAlternativeEntityLimit['type'], EntityLimitWithPossibleAlternativeEntityLimit['limitContainer']>;
