import everyEntityCategories from '../../resources/Entity categories.csv';

import type {EntityCategory}                                                         from './EntityCategory';
import type {EntityCategoryTemplate}                                                 from './EntityCategory.template';
import type {Loader}                                                                 from '../../util/loader/Loader';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';
import type {PossibleEntityCategoriesName}                                           from './EntityCategories.types';

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

class TemplateCreator {

    static readonly #EMPTY_PORTUGUESE = {simple: null, european: null, american: null,};
    static readonly #EMPTY_GREEK = null;

    public static createTemplate(content: PropertiesArray,): EntityCategoryTemplate {
        return {
            entities: null,
            name: {
                english: {
                    simple: content[0],
                    american: content[1],
                    european: content[2],
                },
                french: {
                    simple: content[3],
                    canadian: content[4],
                    european: content[5],
                },
                german: content[6],
                spanish: {
                    simple: content[7],
                    american: content[8],
                    european: content[9],
                },
                italian: content[10],
                dutch: content[11],
                portuguese: this.#EMPTY_PORTUGUESE,
                russian: content[12],
                japanese: content[13],
                chinese: {
                    simple: content[14],
                    traditional: content[15],
                    simplified: content[16],
                },
                korean: content[17],
                greek: this.#EMPTY_GREEK,
            },
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
