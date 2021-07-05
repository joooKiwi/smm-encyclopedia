import everyThemes from '../../resources/Entities limits.csv';

import {AlternateAcronymAndNameTemplate, EntityLimitTemplate, FullAcronymAndNameTemplate, LimitAmountTemplate}                                    from './EntityLimitTemplate';
import {CallbackCaller}                                                                                                                           from '../../util/CallbackCaller';
import {CSVLoader}                                                                                                                                from '../../util/loader/CSVLoader';
import {EntityLimit}                                                                                                                              from './EntityLimit';
import {EntityLimitBuilder}                                                                                                                       from './EntityLimitBuilder';
import {EntityLimitTypes, PossibleEntityLimitTypeEnglishName}                                                                                     from './EntityLimitTypes';
import {EntityLimits, PossibleAcronymEntityLimits, PossibleAlternativeAcronymEntityLimits, PossibleAlternativeEntityLimits, PossibleEntityLimits} from './EntityLimits';
import {Loader}                                                                                                                                   from '../../util/Loader';

//region -------------------- CSV array related types --------------------

type PossibleLimitInArray = number | `${number}?` | '?';
type LimitPropertiesArray = [
    acronym_fullName: null | PossibleAcronymEntityLimits,
    acronym_alternativeName: null | PossibleAlternativeAcronymEntityLimits,

    type: PossibleEntityLimitTypeEnglishName,

    fullName: PossibleEntityLimits,
    alternativeName: null | PossibleAlternativeEntityLimits,

    limit: PossibleLimitInArray,
];

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference {@link EntityLimits}
 */
export class EntityLimitLoader
    implements Loader<Map<string, EntityLimit>> {

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

            console.log(finalReferences);
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

    public static createTemplate(content: LimitPropertiesArray): EntityLimitTemplate {
        return {
            full: this.__convertAcronymToStringOrArray(content[0], content[3],),
            alternative: this.__convertAcronymToStringOrArray(content[1], content[4],),

            type: content[2],
            limit: this.__convertToLimitTemplate(content[5]),

        };
    }

    private static __convertAcronymToStringOrArray(acronym: PossibleAcronymEntityLimits | null, name: PossibleEntityLimits): FullAcronymAndNameTemplate
    private static __convertAcronymToStringOrArray(acronym: null, name: null): null
    private static __convertAcronymToStringOrArray(acronym: PossibleAlternativeAcronymEntityLimits | null, name: PossibleAlternativeEntityLimits | null): AlternateAcronymAndNameTemplate | null
    private static __convertAcronymToStringOrArray(acronym: string | null, name: string | null): AlternateAcronymAndNameTemplate | FullAcronymAndNameTemplate | null {
        if (acronym == null && name == null)
            return null;
        return {
            // @ts-ignore They are defined the other declarations
            acronym: acronym,
            // @ts-ignore They are defined the other declarations
            name: name,
        };
    }

    private static __convertToLimitTemplate(limit: PossibleLimitInArray): LimitAmountTemplate {
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
