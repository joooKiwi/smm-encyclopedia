import type {PossibleEntityLimitTypeEnglishName}                                                                                         from './EntityLimitTypes.types';
import type {PossibleAcronymEntityLimits, PossibleAlternativeAcronymEntityLimits, PossibleAlternativeEntityLimits, PossibleEntityLimits} from './EntityLimits.types';
import type {PossibleGroupName, SingleEntityName}   from '../entityTypes';
import type {SMM2NameTemplateWithOptionalLanguages} from '../lang/SMM2Name.template';

//region -------------------- Limit types --------------------

//region -------------------- Limit amount types --------------------

interface AbstractLimitAmountTemplate<AMOUNT extends | number | null = | number | null, IS_UNKNOWN extends boolean = boolean, COMMENT extends | string | null = | string | null, > {

    amount: AMOUNT

    isUnknown: IS_UNKNOWN

    comment: COMMENT

}

/**
 * @template
 */
export type LimitAmountTemplate = AbstractLimitAmountTemplate;

/**
 * @template
 */
export type EmptyLimitAmountTemplate = AbstractLimitAmountTemplate<null, false, null>;

//endregion -------------------- Limit amount types --------------------
//region -------------------- Link types --------------------

interface AbstractLinkTemplate<GROUP extends PossibleGroupName | null, ENTITY extends SingleEntityName | null, > {

    groupName: GROUP

    entityName: ENTITY

}

/**
 * @template
 */
export type EmptyLinkTemplate = AbstractLinkTemplate<null, null>;
/**
 * @template
 */
export type LinkTemplate = AbstractLinkTemplate<PossibleGroupName, null> | AbstractLinkTemplate<null, SingleEntityName> | EmptyLinkTemplate;

//endregion -------------------- Link types --------------------

//endregion -------------------- Limit types --------------------

interface AbstractEntityLimitTemplate<ALTERNATIVE extends | PossibleAlternativeEntityLimits | null = | PossibleAlternativeEntityLimits | null,
    TYPE extends | PossibleEntityLimitTypeEnglishName | null = | PossibleEntityLimitTypeEnglishName | null,
    ACRONYM extends | PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits = | PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits,
    LIMIT_AMOUNT extends LimitAmountTemplate = LimitAmountTemplate,
    REGULAR_REFERENCE extends | PossibleEntityLimits | null = | PossibleEntityLimits | null, > {

    references: {
        regular: PossibleEntityLimits | null
        alternative: ALTERNATIVE
    }

    type: TYPE
    acronym: | ACRONYM | null

    limit: LIMIT_AMOUNT

    link: LinkTemplate

    name: SMM2NameTemplateWithOptionalLanguages

}

/**
 * @template
 */
export type EntityLimitTemplate = AbstractEntityLimitTemplate<| PossibleAlternativeEntityLimits | null, PossibleEntityLimitTypeEnglishName, PossibleAcronymEntityLimits, LimitAmountTemplate, null>;
/**
 * @template
 */
export type AlternativeLimitTemplate = AbstractEntityLimitTemplate<null, null, PossibleAlternativeAcronymEntityLimits, EmptyLimitAmountTemplate, PossibleEntityLimits>;
