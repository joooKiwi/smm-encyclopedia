import type {NameTemplate}                                                                                     from '../../lang/name/Name.template';
import type {PossibleEnglishName as PossibleEntityLimitTypeEnglishName}                                        from './EntityLimitTypes.types';
import type {PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName} from './EntityLimits.types';
import type {SimpleGameFrom1And2Template}                                                                      from '../game/SimpleGame.template';
import type {TemplateWithNameTemplate}                                                                         from '../_template/TemplateWithName.template';

//region -------------------- Limit types --------------------

//region -------------------- Limit amount types --------------------

/**
 * @template
 */
export interface LimitAmountTemplate
    extends SimpleGameFrom1And2Template<PossibleLimitAmount_SMM1And3DS, PossibleLimitAmount_SMM2> {

    comment: PossibleLimitAmount_Comment

}

/**
 * @template
 */
export interface EmptyLimitAmountTemplate
    extends LimitAmountTemplate {

    '1And3DS': null

    2: null

    comment: null

}

//endregion -------------------- Limit amount types --------------------

//endregion -------------------- Limit types --------------------

interface AbstractEntityLimitTemplate<REGULAR_REFERENCE extends | PossibleEnglishName | null = | PossibleEnglishName | null,
    ALTERNATIVE_REFERENCE extends | PossibleAlternativeEnglishName | null = | PossibleAlternativeEnglishName | null,
    TYPE extends | PossibleEntityLimitTypeEnglishName | null = | PossibleEntityLimitTypeEnglishName | null,
    ACRONYM extends | PossibleAcronym | PossibleAlternativeAcronym | null = | PossibleAcronym | PossibleAlternativeAcronym | null,
    LIMIT extends LimitAmountTemplate = LimitAmountTemplate, >
    extends TemplateWithNameTemplate<NameTemplate> {

    references: {
        regular: REGULAR_REFERENCE
        alternative: ALTERNATIVE_REFERENCE
    }

    type: TYPE
    acronym: ACRONYM

    limit: LIMIT

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


//region -------------------- Limit amount --------------------

export type PossibleLimitAmount_SMM1And3DS_Amount = | 1 | 2 | 3 | 4 | 5 | 6 | 8
                                                    | 10
                                                    | 100 | 200 | 300 | 400
                                                    | 2000;
export type PossibleLimitAmount_SMM1And3DS = | PossibleLimitAmount_SMM1And3DS_Amount | '?' | 'N/A' | null;

export type PossibleLimitAmount_SMM2_Amount = | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
                                              | 10 | 50
                                              | 100 | 200 | 300 | 400 | 500 | 999
                                              | 1500 | 2000 | 4000;
export type PossibleLimitAmount_SMM2_UnknownAmount_Amount = | 10 | 400 | 500;
export type PossibleLimitAmount_SMM2_UnknownAmount = `${PossibleLimitAmount_SMM2_UnknownAmount_Amount}?`;
export type PossibleLimitAmount_SMM2 = | PossibleLimitAmount_SMM2_Amount | PossibleLimitAmount_SMM2_UnknownAmount | '?' | null;

export type PossibleLimitAmount_Comment = | 'Crash online if met' | `Per ${| 'player' | 'pair' | 'section'}` | null;

//endregion -------------------- Limit amount --------------------
