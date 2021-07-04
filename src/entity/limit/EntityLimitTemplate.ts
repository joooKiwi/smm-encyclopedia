import {PossibleEntityLimitTypeEnglishName} from './EntityLimitTypes';

//region -------------------- Limit types --------------------

/**
 * @template
 */
export interface AcronymAndNameTemplate {
    acronym: null | string
}

/**
 * @template
 */
export interface FullAcronymAndNameTemplate
    extends AcronymAndNameTemplate {
    name: string
}

/**
 * @template
 */
export interface AlternateAcronymAndNameTemplate
    extends AcronymAndNameTemplate {
    name: null | string
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