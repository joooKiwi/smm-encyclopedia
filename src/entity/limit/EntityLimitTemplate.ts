import {PossibleEntityLimitTypeEnglishName}                                                                                         from './EntityLimitTypes';
import {PossibleAcronymEntityLimits, PossibleAlternativeAcronymEntityLimits, PossibleAlternativeEntityLimits, PossibleEntityLimits} from './EntityLimits';

//region -------------------- Limit types --------------------

/**
 * @template
 */
export interface FullAcronymAndNameTemplate {
    acronym: null | PossibleAcronymEntityLimits
    name: PossibleEntityLimits
}

/**
 * @template
 */
export interface AlternateAcronymAndNameTemplate {
    acronym: null | PossibleAlternativeAcronymEntityLimits
    name: null | PossibleAlternativeEntityLimits
}

/**
 * @template
 */
export interface LimitAmountTemplate {
    amount: null | number
    isUnknown: boolean
}

//endregion -------------------- Limit types --------------------

/**
 * @template
 */
export interface EntityLimitTemplate {

    full: FullAcronymAndNameTemplate
    alternative: null | AlternateAcronymAndNameTemplate

    type: PossibleEntityLimitTypeEnglishName

    limit: LimitAmountTemplate

}