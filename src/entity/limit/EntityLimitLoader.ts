import everyThemes from '../../resources/Entities limits.csv';

import type {AlternateAcronymAndNameTemplate, EntityLimitTemplate, FullAcronymAndNameTemplate, LimitAmountTemplate}                      from './EntityLimitTemplate';
import type {EntityLimit}                                                                                                                from './EntityLimit';
import type {PossibleAcronymEntityLimits, PossibleAlternativeAcronymEntityLimits, PossibleAlternativeEntityLimits, PossibleEntityLimits} from './EntityLimits';
import type{PossibleEntityLimitTypeEnglishName}                                                                                          from './EntityLimitTypes';

import {EntityLimits}       from './EntityLimits';
import {EntityLimitTypes}   from './EntityLimitTypes';
import {CallbackCaller}     from '../../util/CallbackCaller';
import {CSVLoader}          from '../../util/loader/CSVLoader';
import {EntityLimitBuilder} from './EntityLimitBuilder';
import {Loader}             from '../../util/Loader';

//region -------------------- CSV array related types --------------------

type PossibleLimitInArray = number | `${number}?` | '?';
type LimitPropertiesArray = [
    acronym_fullName: | PossibleAcronymEntityLimits | null,
    acronym_alternativeName: | PossibleAlternativeAcronymEntityLimits | null,

    type: PossibleEntityLimitTypeEnglishName,

    fullName: PossibleEntityLimits,
    alternativeName: | PossibleAlternativeEntityLimits | null,

    limit: PossibleLimitInArray,
];

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference {@link EntityLimits}
 */
export class EntityLimitLoader
    implements Loader<ReadonlyMap<string, EntityLimit>> {

    static readonly #instance = new EntityLimitLoader();

    readonly #everyLimits: CallbackCaller<Map<string, EntityLimit>>;

    private constructor() {
        this.#everyLimits = new CallbackCaller(() => {
            const finalReferences: Map<string, EntityLimit> = new Map();

            new CSVLoader<LimitPropertiesArray, EntityLimit>(everyThemes, convertedContent => new EntityLimitBuilder(TemplateCreator.createTemplate(convertedContent)).build())
                .convertTo(['nullable string', ...EntityLimits.everyAcronyms,], 'acronym_alternativeName',)
                .convertTo(['nullable string', ...EntityLimits.everyAlternativeAcronyms,], 'acronym_alternativeName',)
                .convertTo(EntityLimitTypes.everyEnglishNames, 'type',)
                .convertTo(EntityLimits.everyEnglishNames, 'fullName')
                .convertTo(['nullable string', ...EntityLimits.everyAlternativeEnglishNames,], 'alternativeName')
                .convertTo(['number', '?', 'string',], 'limit')
                .onFinalObjectCreated(finalContent => finalReferences.set(finalContent.full.name, finalContent,))
                .load();

            console.log('-------------------- entity limit has been loaded --------------------');// temporary console.log
            console.log(finalReferences);// temporary console.log
            return finalReferences;
        });
    }

    public static get get() {
        return this.#instance;
    }


    public load(): Map<string, EntityLimit> {
        return this.#everyLimits.get;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    public static createTemplate(content: LimitPropertiesArray,): EntityLimitTemplate {
        return {
            full: this.__convertAcronymToStringOrArray(content[0], content[3],),
            alternative: this.__convertAcronymToStringOrArray(content[1], content[4],),

            type: content[2],
            limit: this.__convertToLimitTemplate(content[5]),

        };
    }

    private static __convertAcronymToStringOrArray(acronym: PossibleAcronymEntityLimits | null, name: PossibleEntityLimits,): FullAcronymAndNameTemplate
    private static __convertAcronymToStringOrArray(acronym: null, name: null,): null
    private static __convertAcronymToStringOrArray(acronym: PossibleAlternativeAcronymEntityLimits | null, name: PossibleAlternativeEntityLimits | null,): | AlternateAcronymAndNameTemplate | null
    private static __convertAcronymToStringOrArray(acronym: string | null, name: string | null,): | AlternateAcronymAndNameTemplate | FullAcronymAndNameTemplate | null {
        if (acronym == null && name == null)
            return null;
        return {
            // @ts-ignore They are defined the other declarations
            acronym: acronym,
            // @ts-ignore They are defined the other declarations
            name: name,
        };
    }

    private static __convertToLimitTemplate(limit: PossibleLimitInArray,): LimitAmountTemplate {
        switch (typeof limit) {
            case 'number':
                return {
                    amount: limit,
                    isUnknown: false,
                };
            case 'string':
                if (limit === '?')
                    return {
                        amount: null,
                        isUnknown: true,
                    };
                return {
                    amount: Number(limit.substring(0, limit.length - 1)),
                    isUnknown: true
                };
        }
    }

}

//endregion -------------------- Template related methods & classes --------------------
