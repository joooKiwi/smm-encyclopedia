import type {EntityLimitAmount}                           from './properties/EntityLimitAmount';
import type {EntityLimitLink}                             from './properties/EntityLimitLink';
import type {EntityLimitTypes}                            from './EntityLimitTypes';
import type {NameTrait}                                   from '../../lang/name/NameTrait';
import type {NameTraitFromAnAlternativeContainer}         from '../../lang/name/NameTraitFromAnAlternativeContainer';
import type {PossibleAcronym, PossibleAlternativeAcronym} from './EntityLimits.types';

export interface EntityLimit<ACRONYM extends PossibleAcronym | PossibleAlternativeAcronym | null = PossibleAcronym | PossibleAlternativeAcronym | null,
    TYPE extends EntityLimitTypes = EntityLimitTypes,
    LIMIT_AMOUNT extends EntityLimitAmount = EntityLimitAmount,
    LINK extends EntityLimitLink = EntityLimitLink, >
    extends NameTrait<string>, NameTraitFromAnAlternativeContainer<string, AlternativeEntityLimit>/*,
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
    //region -------------------- Link --------------------

    get alternativeLinkContainer(): this['alternativeContainer']['linkContainer']


    get alternativeGroupLink(): this['alternativeLinkContainer']['group']


    get alternativeEntityLink(): this['alternativeLinkContainer']['entity']

    //endregion -------------------- Link --------------------

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- Limit amount --------------------

    get limitContainer(): LIMIT_AMOUNT

    get amount(): this['limitContainer']['value']

    get isAmountUnknown(): this['limitContainer']['isUnknown']

    get amountComment(): this['limitContainer']['comment']

    //endregion -------------------- Limit amount --------------------
    //region -------------------- Link --------------------

    get linkContainer(): LINK


    get groupLink(): this['linkContainer']['group']


    get entityLink(): this['linkContainer']['entity']

    //endregion -------------------- Link --------------------

}

export type EntityLimitWithPossibleAlternativeEntityLimit = EntityLimit<| PossibleAcronym | null>;
export type AlternativeEntityLimit = EntityLimit<| PossibleAlternativeAcronym | null, EntityLimitWithPossibleAlternativeEntityLimit['type'], EntityLimitWithPossibleAlternativeEntityLimit['limitContainer'], EntityLimitWithPossibleAlternativeEntityLimit['linkContainer']>;
