import file from 'resources/compiled/Entity limit.json'

import type {LanguageContent}                                                                                                                                                from 'core/_template/LanguageContent'
import type {EntityLimit}                                                                                                                                                    from 'core/entityLimit/EntityLimit'
import type {AlternativeLimitTemplate, EmptyLimitAmountTemplate, EntityLimitTemplate, PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS, PossibleLimitAmount_SMM2} from 'core/entityLimit/EntityLimit.template'
import type {PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName}                                                               from 'core/entityLimit/EntityLimits.types'
import type {PossibleEnglishName as PossibleEnglishName_LimitType}                                                                                                           from 'core/entityLimit/EntityLimitTypes.types'
import type {Loader}                                                                                                                                                         from 'util/loader/Loader'

import {isInProduction}     from 'variables'
import * as TemplateMethods from 'core/_template/templateMethods'
import {EntityLimitCreator} from 'core/entityLimit/EntityLimit.creator'

/** @singleton */
export class EntityLimitLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, EntityLimit>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityLimitLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, EntityLimit>

    public load(): ReadonlyMap<PossibleEnglishName, EntityLimit> {
        if (this.#map != null)
            return this.#map

        const references = EntityLimitCreator.references = new Map<PossibleEnglishName, EntityLimit>()
        let index = file.length
        while (index-- > 0) {
            const reference = new EntityLimitCreator(createTemplate(file[index] as Content,),).create()
            references.set(reference.english as PossibleEnglishName, reference,)
        }

        if (!isInProduction)
            console.info(
                '-------------------- "limit" has been loaded --------------------\n',
                references,
                '\n-------------------- "limit" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent {

    readonly alternative: NullOr<PossibleAlternativeEnglishName>

    readonly type: NullOr<PossibleEnglishName_LimitType>
    readonly acronym: NullOr<| PossibleAcronym | PossibleAlternativeAcronym>

    readonly limit_SMM1And3DS: PossibleLimitAmount_SMM1And3DS
    readonly limit_SMM2: PossibleLimitAmount_SMM2
    readonly limit_comment: PossibleLimitAmount_Comment

}


const EMPTY_REFERENCES = {regular: null, alternative: null,}
const EMPTY_LIMIT_AMOUNT_TEMPLATE: EmptyLimitAmountTemplate = {'1And3DS': null, 2: null, comment: null,}

function createTemplate(content: Content,): | EntityLimitTemplate | AlternativeLimitTemplate {
    const type = content.type
    if (type == null)
        return {
            references: EMPTY_REFERENCES,

            type: null,
            acronym: content.acronym as NullOr<PossibleAlternativeAcronym>,

            limit: EMPTY_LIMIT_AMOUNT_TEMPLATE,

            name: TemplateMethods.createNameTemplate(content,),
        } satisfies AlternativeLimitTemplate

    const limit_SMM1 = content.limit_SMM1And3DS
    const limit_SMM2 = content.limit_SMM2
    if (limit_SMM1 == null && limit_SMM2 == null)
        return {
            references: {
                regular: content.english as PossibleEnglishName,
                alternative: content.alternative,
            },

            type: type,

            acronym: content.acronym as NullOr<PossibleAcronym>,

            limit: EMPTY_LIMIT_AMOUNT_TEMPLATE,

            name: TemplateMethods.createNameTemplate(content,),
        } satisfies EntityLimitTemplate
    return {
        references: {
            regular: content.english as PossibleEnglishName,
            alternative: content.alternative,
        },

        type: type,

        acronym: content.acronym as NullOr<PossibleAcronym>,

        limit: {
            '1And3DS': limit_SMM1,
            2: limit_SMM2,
            comment: content.limit_comment,
        },

        name: TemplateMethods.createNameTemplate(content,),
    } satisfies EntityLimitTemplate
}
