import resource from '../../resources/compiled/Entity limit.json';

import type {AlternativeLimitTemplate, EmptyLimitAmountTemplate, EntityLimitTemplate, LimitAmountTemplate, PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS, PossibleLimitAmount_SMM2} from './EntityLimit.template';
import type {EntityLimit}                                                                                                                                                                         from './EntityLimit';
import type {DefaultNonNullablePropertiesArray as LanguagesPropertyArray}                                                                                                                         from '../../lang/Loader.types';
import type {Loader}                                                                                                                                                                              from '../../util/loader/Loader';
import type {PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName}                                                                                    from './EntityLimits.types';
import type {PossibleEnglishName as PossibleEnglishName_Entity}                                                                                                                                   from '../entity/Entities.types';
import type {PossibleEnglishName as PossibleEnglishName_LimitType}                                                                                                                                from './EntityLimitTypes.types';
import type {PossibleGroupName}                                                                                                                                                                   from '../entityTypes';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {EntityLimitBuilder}      from './EntityLimit.builder';
import {HeaderTypesForConvertor} from '../_util/loader/HeaderTypesForConvertor';

//region -------------------- CSV array related types --------------------

enum Headers {

    alternative,

    type,
    acronym,

    limit_SMM1And3DS, limit_SMM2, limit_comment,

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

    type: | PossibleEnglishName_LimitType | null,
    acronym: | PossibleAcronym | PossibleAlternativeAcronym | null,

    limit_SMM1And3DS: PossibleLimitAmount_SMM1And3DS,
    limit_SMM2: PossibleLimitAmount_SMM2,
    limit_comment: PossibleLimitAmount_Comment,

    link_group: | PossibleGroupName | null,
    link_entity: | PossibleEnglishName_Entity | null,

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

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, EntityLimit, keyof typeof Headers>(resource, convertedContent => new EntityLimitBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyAlternativeAcronym_limit, 'alternative',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleName_limitType, 'type',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleAcronym_limit, 'acronym',)
                .convertToNullableNumberAnd(['?', 'N/A',], 'Limit_SMM1And3DS',)
                .convertToNullableNumberAnd(['?', '10?', '400?', '500?',], 'limit_SMM2',)
                .convertToEmptyableStringAnd(['Crash online if met', 'Per player', 'Per pair', 'Per section',], 'limit_comment',)

                .convertTo(HeaderTypesForConvertor.everyPossibleName_limit, 'english',)

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

    static readonly #EMPTY_LIMIT_AMOUNT_TEMPLATE: EmptyLimitAmountTemplate = {'1And3DS': null, 2: null, comment: null,};
    static readonly #EMPTY_REFERENCES = {
        regular: null,
        alternative: null,
    };

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected override get _headersIndexMap() {
        return Headers;
    }

    public override build(): | EntityLimitTemplate | AlternativeLimitTemplate {
        const type = this._getContent(this._headersIndexMap.type);
        const acronym = this._getContent(this._headersIndexMap.acronym);

        return type == null
            ? this.__createAlternativeLimitTemplate(acronym as PossibleNullableAlternativeAcronym,)
            : this.__createLimitTemplate(type, acronym as PossibleNullableAcronym,);
    }

    private __createLimitTemplate(type: PossibleEnglishName_LimitType, acronym: PossibleNullableAcronym,): EntityLimitTemplate {
        return {

            references: {
                regular: this._getContent(this._headersIndexMap.english) as PossibleEnglishName,
                alternative: this._getContent(this._headersIndexMap.alternative),
            },

            type: type,

            acronym: acronym,

            limit: this.__createLimitAmountTemplate(),

            name: this._createNameTemplate(),

        };
    }

    private __createAlternativeLimitTemplate(acronym: PossibleNullableAlternativeAcronym,): AlternativeLimitTemplate {
        return {

            references: TemplateBuilder.#EMPTY_REFERENCES,

            type: null,
            acronym: acronym,

            limit: TemplateBuilder.#EMPTY_LIMIT_AMOUNT_TEMPLATE,

            name: this._createNameTemplate(),

        };
    }


    private __createLimitAmountTemplate(): LimitAmountTemplate {
        const limit_SMM1 = this._getContent(this._headersIndexMap.limit_SMM1And3DS);
        const limit_SMM2 = this._getContent(this._headersIndexMap.limit_SMM2);

        return limit_SMM1 == null && limit_SMM2 == null
            ? TemplateBuilder.#EMPTY_LIMIT_AMOUNT_TEMPLATE
            : {
                '1And3DS': limit_SMM1,
                2: limit_SMM2,
                comment: this._getContent(this._headersIndexMap.limit_comment),
            };
    }

}
