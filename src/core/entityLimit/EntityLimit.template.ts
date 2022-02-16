import type {NameTemplate}                                                                                     from '../../lang/name/Name.template';
import type {PossibleEnglishName as PossibleEntityLimitTypeEnglishName}                                        from './EntityLimitTypes.types';
import type {PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName} from './EntityLimits.types';
import type {TemplateWithNameTemplate}                                                                         from '../_template/TemplateWithName.template';

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

//endregion -------------------- Limit types --------------------

interface AbstractEntityLimitTemplate<REGULAR_REFERENCE extends | PossibleEnglishName | null = | PossibleEnglishName | null,
    ALTERNATIVE_REFERENCE extends | PossibleAlternativeEnglishName | null = | PossibleAlternativeEnglishName | null,
    TYPE extends | PossibleEntityLimitTypeEnglishName | null = | PossibleEntityLimitTypeEnglishName | null,
    ACRONYM extends | PossibleAcronym | PossibleAlternativeAcronym | null = | PossibleAcronym | PossibleAlternativeAcronym | null,
    LIMIT_AMOUNT extends LimitAmountTemplate = LimitAmountTemplate, >
    extends TemplateWithNameTemplate<NameTemplate> {

    references: {
        regular: REGULAR_REFERENCE
        alternative: ALTERNATIVE_REFERENCE
    }

    type: TYPE
    acronym: ACRONYM

    limit: LIMIT_AMOUNT

    name: NameTemplate

}

/**
 * @template
 */
export type EntityLimitTemplate = AbstractEntityLimitTemplate<PossibleEnglishName, | PossibleAlternativeEnglishName | null, PossibleEntityLimitTypeEnglishName, | PossibleAcronym | null>;
/**
 * @template
 */
export type AlternativeLimitTemplate = AbstractEntityLimitTemplate<null, null, null, | PossibleAlternativeAcronym | null, EmptyLimitAmountTemplate>;
