import everyEntityCategories from '../../resources/Entity categories.csv';

import type {EntityCategory}                                                         from './EntityCategory';
import type {EntityCategoryTemplate}                                                 from './EntityCategory.template';
import type {Loader}                                                                 from '../../util/loader/Loader';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';
import type {PossibleEntityCategoriesName}                                           from './EntityCategories.types';
import type {SMM2NameTemplate}                                                       from '../lang/SMM2Name.template';

import {CSVLoader}             from '../../util/loader/CSVLoader';
import {EntityCategoryBuilder} from './EntityCategory.builder';

//region -------------------- CSV array related types --------------------

type Headers = LanguagesHeaders;
type PropertiesArray = [
    ...LanguagesPropertyArray
];

//endregion -------------------- CSV array related types --------------------

/**
 * A single class made to handle the loading
 * and the unique creation of every categories.
 *
 * @singleton
 */
export class EntityCategoryLoader
    implements Loader<ReadonlyMap<PossibleEntityCategoriesName, EntityCategory>> {

    static #instance?: EntityCategoryLoader;
    #map?: Map<PossibleEntityCategoriesName, EntityCategory>;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }


    public load(): ReadonlyMap<PossibleEntityCategoriesName, EntityCategory> {
        if (this.#map == null) {
            const references = new Map<PossibleEntityCategoriesName, EntityCategory>();

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, EntityCategory, Headers>(everyEntityCategories, convertedContent => new EntityCategoryBuilder(TemplateCreator.createTemplate(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleEntityCategoriesName, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "entity category" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "entity category" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

//region -------------------- Template related methods & classes --------------------
//TODO Move EMPTY_GREEK & __createNameTemplate() to anew AbstractTemplateCreator

class TemplateCreator {

    static readonly #EMPTY_GREEK = null;

    public static createTemplate(content: PropertiesArray,): EntityCategoryTemplate {
        const languages: LanguagesPropertyArray = [content[0], content[1], content[2], content[3], content[4], content[5], content[6], content[7], content[8], content[9], content[10], content[11], content[12], content[13], content[14], content[15], content[16], content[17], content[18], content[19], content[20],] as LanguagesPropertyArray;

        return {
            entities: null,
            name: this.__createNameTemplate(languages),
        };
    }

    private static __createNameTemplate([english, americanEnglish, europeanEnglish, french, canadianFrench, europeanFrench, german, spanish, americanSpanish, europeanSpanish, italian, dutch, portuguese, americanPortuguese, europeanPortuguese, russian, japanese, chinese, traditionalChinese, simplifiedChinese, korean,]: LanguagesPropertyArray,): SMM2NameTemplate {
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
            portuguese: {
                simple: portuguese,
                american: americanPortuguese,
                european: europeanPortuguese,
            },
            russian: russian,
            chinese: {
                simple: chinese,
                traditional: traditionalChinese,
                simplified: simplifiedChinese,
            },
            japanese: japanese,
            korean: korean,
            greek: this.#EMPTY_GREEK,
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
