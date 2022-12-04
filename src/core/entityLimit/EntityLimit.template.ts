import type {TemplateWithNameTemplate}                                                                         from 'core/_template/TemplateWithName.template'
import type {PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName} from 'core/entityLimit/EntityLimits.types'
import type {PossibleEnglishName as PossibleEntityLimitTypeEnglishName}                                        from 'core/entityLimit/EntityLimitTypes.types'
import type {SimpleGameFrom1And2Template}                                                                      from 'core/game/SimpleGame.template'
import type {NameTemplate}                                                                                     from 'lang/name/Name.template'
import type {NullOr}                                                                                           from 'util/types/nullable'

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

interface AbstractEntityLimitTemplate<REGULAR_REFERENCE extends NullOr<PossibleEnglishName> = NullOr<PossibleEnglishName>,
    ALTERNATIVE_REFERENCE extends NullOr<PossibleAlternativeEnglishName> = NullOr<PossibleAlternativeEnglishName>,
    TYPE extends NullOr<PossibleEntityLimitTypeEnglishName> = NullOr<PossibleEntityLimitTypeEnglishName>,
    ACRONYM extends NullOr<| PossibleAcronym | PossibleAlternativeAcronym> = NullOr<| PossibleAcronym | PossibleAlternativeAcronym>,
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
export type EntityLimitTemplate = AbstractEntityLimitTemplate<PossibleEnglishName, NullOr<PossibleAlternativeEnglishName>, PossibleEntityLimitTypeEnglishName, NullOr<PossibleAcronym>>
/**
 * @template
 */
export type AlternativeLimitTemplate = AbstractEntityLimitTemplate<null, null, null, NullOr<PossibleAlternativeAcronym>, EmptyLimitAmountTemplate>


//region -------------------- Limit amount --------------------

export type PossibleLimitAmount_SMM1And3DS_Amount = | 1 | 2 | 3 | 4 | 5 | 6 | 8
                                                    | 10
                                                    | 100 | 200 | 300 | 400
                                                    | 2000
export type PossibleLimitAmount_SMM1And3DS = NullOr<| PossibleLimitAmount_SMM1And3DS_Amount | '?' | 'N/A'>

export type PossibleLimitAmount_SMM2_Amount = | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
                                              | 10 | 50
                                              | 100 | 200 | 300 | 400 | 500 | 999
                                              | 1500 | 2000 | 4000
export type PossibleLimitAmount_SMM2_UnknownAmount_Amount = | 10 | 400 | 500
export type PossibleLimitAmount_SMM2_UnknownAmount = `${PossibleLimitAmount_SMM2_UnknownAmount_Amount}?`
export type PossibleLimitAmount_SMM2 = NullOr<| PossibleLimitAmount_SMM2_Amount | PossibleLimitAmount_SMM2_UnknownAmount | '?'>

export type PossibleLimitAmount_Comment = NullOr<| 'Crash online if met' | `Per ${| 'player' | 'pair' | 'section'}`>

//endregion -------------------- Limit amount --------------------
