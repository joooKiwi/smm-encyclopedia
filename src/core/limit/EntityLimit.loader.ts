import everyThemes from '../../resources/Entity limits.csv';

import type {AlternativeLimitTemplate, EmptyLimitAmountTemplate, EmptyLinkTemplate, EntityLimitTemplate, LimitAmountTemplate, LinkTemplate} from './EntityLimit.template';
import type {EntityLimit}                                                                                                                   from './EntityLimit';
import type {DefaultNonNullablePropertiesArray as LanguagesPropertyArray}                                                                   from '../../lang/Loader.types';
import type {Loader}                                                                                                                        from '../../util/loader/Loader';
import type {PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName}                              from './EntityLimits.types';
import type {PossibleEnglishName as PossibleEntityLimitTypeEnglishName}                                                                     from './EntityLimitTypes.types';
import type {PossibleGroupName, SingleEntityName}                                                                                           from '../entityTypes';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {EntityLimitBuilder}      from './EntityLimit.builder';
import {EntityLoader}            from '../entity/Entity.loader';
import {HeaderTypesForConvertor} from '../_util/loader/HeaderTypesForConvertor';

//region -------------------- CSV array related types --------------------

type PossibleLimitNumber = | number | `${number}?` | '?' | null;

enum Headers {

    alternative,

    type,
    acronym,

    limit, limit_comment,

    link_group, link_entity,

    //region -------------------- Languages --------------------

    english, americanEnglish, europeanEnglish,
    french, canadianFrench, europeanFrench,
    german,
    spanish, americanSpanish, europeanSpanish,
    italian,
    dutch,
    portuguese, americanPortuguese, europeanPortuguese,
    russian,
    japanese,
    chinese, traditionalChinese, simplifiedChinese,
    korean,

    //endregion -------------------- Languages --------------------

}

//region -------------------- Properties --------------------

type ExclusivePropertyArray = [

    alternative: | PossibleAlternativeEnglishName | null,

    type: | PossibleEntityLimitTypeEnglishName | null,
    acronym: | PossibleAcronym | PossibleAlternativeAcronym | null,

    limit: PossibleLimitNumber,
    limit_comment: | string | null,

    link_group: | PossibleGroupName | null,
    link_entity: | SingleEntityName | null,

];
type PropertiesArray = [
    ...ExclusivePropertyArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- Properties --------------------

//endregion -------------------- CSV array related types --------------------
//region -------------------- Private types --------------------

type PossibleNullableAlternativeAcronym = | PossibleAlternativeAcronym | null;
type PossibleNullableAcronym = | PossibleAcronym | null;

//endregion -------------------- Private types --------------------

/**
 * @singleton
 * @recursiveReferenceVia<{@link EntityLimitBuilder}, {@link EntityLimits}>
 * @recursiveReference<{@link EntityLimits}>
 */
export class EntityLimitLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, EntityLimit>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityLimitLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, EntityLimit>;

    public load(): ReadonlyMap<PossibleEnglishName, EntityLimit> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, EntityLimit>();

            //region -------------------- Builder initialisation --------------------

            EntityLimitBuilder.references = references;
            EntityLimitBuilder.entitiesMap = EntityLoader.get.load();

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, EntityLimit, keyof typeof Headers>(everyThemes, convertedContent => new EntityLimitBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyAlternativeLimitAcronyms, 'alternative',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleLimitTypesNames, 'type',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleLimitsAcronyms, 'acronym',)
                .convertToNullableNumberAnd(['?', 'string',], 'limit',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleGroupNames, 'link_group',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleEntityNames, 'link_entity',)

                .convertTo(HeaderTypesForConvertor.everyPossibleLimitsNames, 'english',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleEnglishName, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "entity limit" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "entity limit" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<| EntityLimitTemplate | AlternativeLimitTemplate, PropertiesArray, typeof Headers> {

    static readonly #EMPTY_LIMIT_AMOUNT_TEMPLATE: EmptyLimitAmountTemplate = {
        amount: null,
        isUnknown: false,
        comment: null,
    };
    static readonly #EMPTY_LINK_TEMPLATE: EmptyLinkTemplate = {
        groupName: null,
        entityName: null,
    };
    static readonly #EMPTY_REFERENCES = {
        regular: null,
        alternative: null,
    };

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected get _headersIndexMap() {
        return Headers;
    }

    public build(): | EntityLimitTemplate | AlternativeLimitTemplate {
        const type = this._getContent(this._headersIndexMap.type);
        const acronym = this._getContent(this._headersIndexMap.acronym);

        return type == null
            ? this.__createAlternativeLimitTemplate(acronym as PossibleNullableAlternativeAcronym,)
            : this.__createLimitTemplate(type, acronym as PossibleNullableAcronym,);
    }

    private __createLimitTemplate(type: PossibleEntityLimitTypeEnglishName, acronym: PossibleNullableAcronym,): EntityLimitTemplate {
        return {

            references: {
                regular: this._getContent(this._headersIndexMap.english) as PossibleEnglishName,
                alternative: this._getContent(this._headersIndexMap.alternative),
            },

            type: type,

            acronym: acronym,

            limit: this.__createLimitAmountTemplate(),

            link: this.__createLinkTemplate(),

            name: this._createNameTemplate(),

        };
    }

    private __createAlternativeLimitTemplate(acronym: PossibleNullableAlternativeAcronym,): AlternativeLimitTemplate {
        return {

            references: TemplateBuilder.#EMPTY_REFERENCES,

            type: null,
            acronym: acronym,

            limit: TemplateBuilder.#EMPTY_LIMIT_AMOUNT_TEMPLATE,

            link: this.__createLinkTemplate(),

            name: this._createNameTemplate(),

        };
    }


    private __createLimitAmountTemplate(): LimitAmountTemplate {
        const limit = this._getContent(this._headersIndexMap.limit);
        const comment = this._getContent(this._headersIndexMap.limit_comment);

        switch (typeof limit) {
            case 'number':
                return {
                    amount: limit,
                    isUnknown: false,
                    comment: comment,
                };
            case 'string':
                if (limit === '?')
                    return {
                        amount: null,
                        isUnknown: true,
                        comment: comment,
                    };
                return {
                    amount: Number(limit.substring(0, limit.length - 1)),
                    isUnknown: true,
                    comment: comment,
                };
            default:
                return TemplateBuilder.#EMPTY_LIMIT_AMOUNT_TEMPLATE;
        }
    }

    private __createLinkTemplate(): LinkTemplate {
        const entity = this._getContent(this._headersIndexMap.link_entity);
        const group = this._getContent(this._headersIndexMap.link_group);

        if (entity == null && group == null)
            return TemplateBuilder.#EMPTY_LINK_TEMPLATE;
        if (entity == null)
            return {
                groupName: group,
                entityName: null,
            };
        return {
            groupName: null,
            entityName: entity,
        };
    }

}
