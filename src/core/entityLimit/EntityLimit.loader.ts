import file from 'resources/compiled/Entity limit.json'

import type {LanguageContent}                                                                                                                                                                     from 'core/_template/LanguageContent'
import type {EntityLimit}                                                                                                                                                                         from 'core/entityLimit/EntityLimit'
import type {AlternativeLimitTemplate, EmptyLimitAmountTemplate, EntityLimitTemplate, LimitAmountTemplate, PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS, PossibleLimitAmount_SMM2} from 'core/entityLimit/EntityLimit.template'
import type {PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName}                                                                                    from 'core/entityLimit/EntityLimits.types'
import type {PossibleEnglishName as PossibleEnglishName_LimitType}                                                                                                                                from 'core/entityLimit/EntityLimitTypes.types'
import type {Loader}                                                                                                                                                                              from 'util/loader/Loader'

import {isInProduction}          from 'variables'
import {AbstractTemplateCreator} from 'core/_template/AbstractTemplate.creator'
import {EntityLimitCreator}      from 'core/entityLimit/EntityLimit.creator'

/** @singleton */
export class EntityLimitLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, EntityLimit>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityLimitLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, EntityLimit>

    public load(): ReadonlyMap<PossibleEnglishName, EntityLimit> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, EntityLimit>()

            //region -------------------- Builder initialisation --------------------

            EntityLimitCreator.references = references

            //endregion -------------------- Builder initialisation --------------------

            file.map(it => new EntityLimitCreator(new TemplateCreator(it as Content).create()).create())
                .forEach(it => references.set(it.english as PossibleEnglishName, it,))

            if (!isInProduction)
                console.info(
                    '-------------------- "limit" has been loaded --------------------\n',
                    references,
                    '\n-------------------- "limit" has been loaded --------------------',
                )

            this.#map = references
        }
        return this.#map
    }

}


interface Content
    extends LanguageContent {

    alternative: NullOr<PossibleAlternativeEnglishName>

    type: NullOr<PossibleEnglishName_LimitType>
    acronym: NullOr<| PossibleAcronym | PossibleAlternativeAcronym>

    limit_SMM1And3DS: PossibleLimitAmount_SMM1And3DS
    limit_SMM2: PossibleLimitAmount_SMM2
    limit_comment: PossibleLimitAmount_Comment

}

class TemplateCreator
    extends AbstractTemplateCreator<| EntityLimitTemplate | AlternativeLimitTemplate, Content> {

    static readonly #EMPTY_LIMIT_AMOUNT_TEMPLATE: EmptyLimitAmountTemplate = {'1And3DS': null, 2: null, comment: null,}
    static readonly #EMPTY_REFERENCES = {
        regular: null,
        alternative: null,
    }

    public constructor(content: Content,) {
        super(content,)
    }

    public override create(): | EntityLimitTemplate | AlternativeLimitTemplate {
        const content = this._content,
            type = content.type,
            acronym = content.acronym

        return type == null
            ? this.#createAlternativeLimitTemplate(acronym as NullOr<PossibleAlternativeAcronym>,)
            : this.#createLimitTemplate(type, acronym as NullOr<PossibleAcronym>,)
    }

    #createLimitTemplate(type: PossibleEnglishName_LimitType, acronym: NullOr<PossibleAcronym>,): EntityLimitTemplate {
        const content = this._content

        return {
            references: {
                regular: content.english as PossibleEnglishName,
                alternative: content.alternative,
            },

            type: type,

            acronym: acronym,

            limit: this.#createLimitAmountTemplate(),

            name: this._createNameTemplate(),
        }
    }

    #createAlternativeLimitTemplate(acronym: NullOr<PossibleAlternativeAcronym>,): AlternativeLimitTemplate {
        return {
            references: TemplateCreator.#EMPTY_REFERENCES,

            type: null,
            acronym: acronym,

            limit: TemplateCreator.#EMPTY_LIMIT_AMOUNT_TEMPLATE,

            name: this._createNameTemplate(),
        }
    }


    #createLimitAmountTemplate(): LimitAmountTemplate {
        const content = this._content,
            limit_SMM1 = content.limit_SMM1And3DS,
            limit_SMM2 = content.limit_SMM2

        return limit_SMM1 == null && limit_SMM2 == null
            ? TemplateCreator.#EMPTY_LIMIT_AMOUNT_TEMPLATE
            : {
                '1And3DS': limit_SMM1,
                2: limit_SMM2,
                comment: content.limit_comment,
            }
    }

}
