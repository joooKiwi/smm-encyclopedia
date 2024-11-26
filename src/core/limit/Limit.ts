import type {NullOr, NullOrNumber, NullOrString} from '@joookiwi/type'

import type {ClassWithNullableAcronym}                                                                                                      from 'core/ClassWithAcronym'
import type {ClassWithType}                                                                                                                 from 'core/ClassWithType'
import type {GameProperty}                                                                                                                  from 'core/entity/properties/game/GameProperty'
import type {AlternativeLimit}                                                                                                              from 'core/limit/AlternativeLimit'
import type {PossibleAcronym, PossibleAlternativeAcronym}                                                                                   from 'core/limit/Limits.types'
import type {LimitTypes}                                                                                                                    from 'core/limit/LimitTypes'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount, PossibleLimitDescription} from 'core/limit/loader.types'
import type {NameTrait}                                                                                                                     from 'lang/name/NameTrait'
import type {NameTraitFromAnAlternativeContainer}                                                                                           from 'lang/name/NameTraitFromAnAlternativeContainer'

export interface Limit
    extends NameTrait<string>, NameTraitFromAnAlternativeContainer<string, AlternativeLimit>,
        ClassWithNullableAcronym<PossibleAcronym>/*,
        ClassWithEnglishName<PossibleLimits>*/,
        ClassWithType<LimitTypes>,
        GameProperty {

    readonly alternativeAcronym: NullOrString<PossibleAlternativeAcronym>

    readonly limitAmountInSMM1AndSMM3DS: NullOr<| PossibleLimitAmount_SMM1And3DS_Amount | NotApplicable>
    readonly isUnknownLimitInSMM1AndSMM3DS: boolean

    readonly limitAmountInSMM2: NullOrNumber<PossibleLimitAmount_SMM2_Amount>
    readonly isUnknownLimitInSMM2: boolean

    readonly amountComment: NullOrString<PossibleLimitAmount_Comment>

    readonly description: PossibleLimitDescription

    readonly isInSuperMarioMaker1Or3DS: boolean
    readonly isInSuperMarioMaker2: true

}
