import type {PossibleEntityLimitTypeEnglishName}                                                                                         from './EntityLimitTypes.types';
import type {PossibleAcronymEntityLimits, PossibleAlternativeAcronymEntityLimits, PossibleAlternativeEntityLimits, PossibleEntityLimits} from './EntityLimits.types';

//region -------------------- Limit types --------------------

/**
 * @template
 */
export interface FullAcronymAndNameTemplate {
    acronym: | PossibleAcronymEntityLimits | null
    name: PossibleEntityLimits
}

/**
 * @template
 */
export interface AlternateAcronymAndNameTemplate {
    acronym: | PossibleAlternativeAcronymEntityLimits | null
    name: | PossibleAlternativeEntityLimits | null
}

/**
 * @template
 */
export interface LimitAmountTemplate {
    amount: | number | null
    isUnknown: boolean
}

//endregion -------------------- Limit types --------------------

/**
 * @template
 */
export interface EntityLimitTemplate {

    full: FullAcronymAndNameTemplate
    alternative: | AlternateAcronymAndNameTemplate | null

    type: PossibleEntityLimitTypeEnglishName

    limit: LimitAmountTemplate

}