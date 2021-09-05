import type {PossibleEntityLimitTypeEnglishName}                                                                                         from './EntityLimitTypes.types';
import type {PossibleAcronymEntityLimits, PossibleAlternativeAcronymEntityLimits, PossibleAlternativeEntityLimits, PossibleEntityLimits} from './EntityLimits.types';
import type {PossibleGroupName, SingleEntityName}                                                                                        from '../entityTypes';
import type {SMM2NameTemplate}                                                                                                           from '../lang/SMM2Name.template';

//region -------------------- Limit types --------------------

/**
 * @template
 */
export interface LimitAmountTemplate {

    amount: | number | null

    isUnknown: boolean

    comment: | string | null

}

/**
 * @template
 */
export interface EmptyLimitAmountTemplate
    extends LimitAmountTemplate {

    amount: null

    isUnknown: false

    comment: null

}

/**
 * @template
 */
export interface LinkTemplate {

    groupName: | PossibleGroupName | null

    entitiesName: | readonly [] | readonly [SingleEntityName,] | readonly [SingleEntityName, SingleEntityName,]

}

//endregion -------------------- Limit types --------------------

interface AbstractEntityLimitTemplate<ALTERNATIVE extends | PossibleAlternativeEntityLimits | null,
    TYPE extends | PossibleEntityLimitTypeEnglishName | null,
    ACRONYM extends string,
    LIMIT_AMOUNT extends LimitAmountTemplate,
    REGULAR_REFERENCE extends | PossibleEntityLimits | null, > {

    references: {
        regular: PossibleEntityLimits | null
        alternative: ALTERNATIVE
    }

    type: TYPE
    acronym: | ACRONYM | null

    limit: LIMIT_AMOUNT

    link: LinkTemplate

    name: SMM2NameTemplate

}

/**
 * @template
 */
export type EntityLimitTemplate = AbstractEntityLimitTemplate<| PossibleAlternativeEntityLimits | null, PossibleEntityLimitTypeEnglishName, PossibleAcronymEntityLimits, LimitAmountTemplate, null>;
/**
 * @template
 */
export type AlternativeLimitTemplate = AbstractEntityLimitTemplate<null, null, PossibleAlternativeAcronymEntityLimits, EmptyLimitAmountTemplate, PossibleEntityLimits>;
