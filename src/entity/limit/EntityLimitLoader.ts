import everyThemes from '../../resources/Entity limits.csv';

import type {AlternativeLimitTemplate, EmptyLimitAmountTemplate, EmptyLinkTemplate, EntityLimitTemplate, LimitAmountTemplate, LinkTemplate}                                                      from './EntityLimit.template';
import type {EntityLimit}                                                                                                                                                                        from './EntityLimit';
import type {Headers as LanguagesHeaders, DefaultNonNullablePropertiesArray as LanguagesPropertyArray, DefaultPropertiesArrayAsFunctionParameter as LanguagePropertiesArrayAsFunctionParameter} from '../../lang/Loader.types';
import type {Loader}                                                                                                                                                                             from '../../util/loader/Loader';
import type {PossibleAcronymEntityLimits, PossibleAlternativeAcronymEntityLimits, PossibleAlternativeEntityLimits, PossibleEntityLimits}                                                         from './EntityLimits.types';
import type {PossibleEntityLimitTypeEnglishName}                                                                                                                                                 from './EntityLimitTypes.types';
import type {PossibleGroupName, SingleEntityName}                                                                                                                                                from '../entityTypes';
import type {SMM2NameTemplate}                                                                                                                                                                   from '../lang/SMM2Name.template';

import {CSVLoader}                                 from '../../util/loader/CSVLoader';
import {EntityLimitBuilder}                        from './EntityLimitBuilder';
import {EntityLimits}                              from './EntityLimits';
import {EntityLimitTypes}                          from './EntityLimitTypes';
import {EntityLoader}                              from '../simple/EntityLoader';

//region -------------------- CSV array related types --------------------

type PossibleLimitNumber = | number | `${number}?` | '?' | null;

type Headers =
    | 'alternative'
    | 'type' | 'acronym'
    | `limit${| '' | '_comment'}`
    | `link_${| 'groupName' | 'entity'}`
    | LanguagesHeaders;

type ExclusivePropertyArray = [

    alternative: | PossibleAlternativeEntityLimits | null,

    type: | PossibleEntityLimitTypeEnglishName | null,
    acronym: | PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits | null,

    limit: PossibleLimitNumber,
    limit_comment: | string | null,

    link_groupName: | PossibleGroupName | null,
    link_entity: | SingleEntityName | null,

];
type PropertiesArray = [
    ...ExclusivePropertyArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReferenceVia<{@link EntityLimitBuilder}, {@link EntityLimits}>
 * @recursiveReference<{@link EntityLimits}>
 */
export class EntityLimitLoader
    implements Loader<ReadonlyMap<string, EntityLimit>> {

    static readonly #instance = new EntityLimitLoader();

    #everyLimitsMap?: Map<string, EntityLimit>;

    private constructor() {
    }

    public static get get() {
        return this.#instance;
    }


    public load(): Map<string, EntityLimit> {
        if (this.#everyLimitsMap == null) {
            const references: Map<PossibleEntityLimits, EntityLimit> = new Map();

            //region -------------------- Builder initialisation --------------------

            EntityLimitBuilder.references = references;
            EntityLimitBuilder.entitiesMap = EntityLoader.get.load();

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, EntityLimit, Headers>(everyThemes, convertedContent => new EntityLimitBuilder(TemplateCreator.createTemplate(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertToEmptyableStringAnd(EntityLimits.everyAlternativeAcronyms, 'alternative',)
                .convertToEmptyableStringAnd(EntityLimitTypes.everyEnglishNames, 'type',)
                .convertToEmptyableStringAnd([...EntityLimits.everyAcronyms, ...EntityLimits.everyAlternativeAcronyms,], 'acronym',)
                .convertToNullableNumberAnd(['?', 'string',], 'limit')
                .convertToEmptyableString('link_groupName')//TODO change to every group name
                .convertToEmptyableString('link_entity',)//TODO change to every entity name

                .convertTo([...EntityLimits.everyEnglishNames, ...EntityLimits.everyAlternativeEnglishNames,], 'english')

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.nameContainer.english as PossibleEntityLimits, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- entity limit has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log

            this.#everyLimitsMap = references;
        }
        return this.#everyLimitsMap;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    public static readonly EMPTY_LIMIT_AMOUNT_TEMPLATE: EmptyLimitAmountTemplate = {
        amount: null,
        isUnknown: false,
        comment: null,
    };
    public static readonly EMPTY_LINK_TEMPLATE: EmptyLinkTemplate = {
        groupName: null,
        entityName: null,
    };

    static readonly #EMPTY_PORTUGUESE = {simple: null, european: null, american: null,};

    public static createTemplate(content: PropertiesArray,): | EntityLimitTemplate | AlternativeLimitTemplate {
        const type = content[1];
        const acronym = content[2];
        const groupNameAndEntitiesName = [content[5], content[6],] as const;
        const languages = [content[7], content[8], content[9], content[10], content[11], content[12], content[13], content[14], content[15], content[16], content[17], content[18], content[19], content[20], content[21], content[22], content[23], content[24],] as LanguagePropertiesArrayAsFunctionParameter;

        return type == null
            ? this.__createAlternativeLimitTemplate(acronym, groupNameAndEntitiesName, languages,)
            : this.__createLimitTemplate(content, type, acronym, groupNameAndEntitiesName, languages,);
    }

    private static __createLimitTemplate(content: PropertiesArray, type: PossibleEntityLimitTypeEnglishName, acronym: | PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits | null, groupNameAndEntitiesName: readonly [| PossibleGroupName | null, | SingleEntityName | null,], languages: LanguagePropertiesArrayAsFunctionParameter,): EntityLimitTemplate {
        return {

            references: {
                regular: languages[0] as PossibleEntityLimits,
                alternative: content[0],
            },

            type: type,

            acronym: acronym as PossibleAcronymEntityLimits,

            limit: this.__convertToLimitTemplate(content[3], content[4],),

            link: this.__convertToLinkTemplate(...groupNameAndEntitiesName,),

            name: this.__convertToNameTemplate(languages,),

        };
    }

    private static __createAlternativeLimitTemplate(acronym: | PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits | null, groupNameAndEntitiesName: | readonly [| PossibleGroupName | null, | SingleEntityName | null,], languages: LanguagePropertiesArrayAsFunctionParameter,): AlternativeLimitTemplate {
        return {
            references: {
                regular: null,
                alternative: null,
            },

            type: null,
            acronym: acronym as PossibleAlternativeAcronymEntityLimits,

            limit: this.EMPTY_LIMIT_AMOUNT_TEMPLATE,

            link: this.__convertToLinkTemplate(...groupNameAndEntitiesName,),

            name: this.__convertToNameTemplate(languages,),

        };
    }


    private static __convertToLimitTemplate(limit: PossibleLimitNumber, limitComment: | string | null,): LimitAmountTemplate {
        switch (typeof limit) {
            case 'number':
                return {
                    amount: limit,
                    isUnknown: false,
                    comment: limitComment,
                };
            case 'string':
                if (limit === '?')
                    return {
                        amount: null,
                        isUnknown: true,
                        comment: limitComment,
                    };
                return {
                    amount: Number(limit.substring(0, limit.length - 1)),
                    isUnknown: true,
                    comment: limitComment,
                };
        }
        return this.EMPTY_LIMIT_AMOUNT_TEMPLATE;
    }

    private static __convertToLinkTemplate(groupName: | PossibleGroupName | null, entity: | SingleEntityName | null,): LinkTemplate {
        if (entity == null && groupName == null)
            return this.EMPTY_LINK_TEMPLATE;
        if (entity == null)
            return {
                groupName: groupName,
                entityName: null,
            };
        return {
            groupName: null,
            entityName: entity,
        };
    }

    private static __convertToNameTemplate([english, americanEnglish, europeanEnglish, french, canadianFrench, europeanFrench, german, spanish, americanSpanish, europeanSpanish, italian, dutch, russian, chinese, simplifiedChinese, traditionalChinese, japanese, korean,]: LanguagePropertiesArrayAsFunctionParameter,): SMM2NameTemplate {
        return {
            english: {
                simple: english,
                american: americanEnglish,
                european: europeanEnglish,
            },
            french: {
                simple: french,
                canadian: canadianFrench,
                european: europeanFrench,
            },
            german: german,
            spanish: {
                simple: spanish,
                american: americanSpanish,
                european: europeanSpanish,
            },
            italian: italian,
            dutch: dutch,
            portuguese: this.#EMPTY_PORTUGUESE,
            russian: russian,
            chinese: {
                simple: chinese,
                simplified: simplifiedChinese,
                traditional: traditionalChinese,
            },
            japanese: japanese,
            korean: korean,
        };
    }
}

//endregion -------------------- Template related methods & classes --------------------
