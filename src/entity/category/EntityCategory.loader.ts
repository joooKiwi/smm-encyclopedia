import everyEntityCategories from '../../resources/Entity categories.csv';

import type {EntityCategory}                                                         from './EntityCategory';
import type {EntityCategoryTemplate}                                                 from './EntityCategory.template';
import type {Loader}                                                                 from '../../util/loader/Loader';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';
import type {PossibleEntityCategoriesName}                                           from './EntityCategories.types';

import {AbstractTemplateCreator} from '../AbstractTemplateCreator';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {EntityCategoryBuilder}   from './EntityCategory.builder';

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

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityCategoryLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEntityCategoriesName, EntityCategory>;

    public load(): ReadonlyMap<PossibleEntityCategoriesName, EntityCategory> {
        if (this.#map == null) {
            const references = new Map<PossibleEntityCategoriesName, EntityCategory>();

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, EntityCategory, Headers>(everyEntityCategories, convertedContent => new EntityCategoryBuilder(TemplateCreator.get.createTemplate(convertedContent)).build())
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

/**
 * @singleton
 */
class TemplateCreator
    extends AbstractTemplateCreator<EntityCategoryTemplate, PropertiesArray> {

    //region -------------------- Singleton usage --------------------

    static #instance?: TemplateCreator;

    private constructor() {
        super();
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public createTemplate(content: PropertiesArray,): EntityCategoryTemplate {
        const languages: LanguagesPropertyArray = [content[0], content[1], content[2], content[3], content[4], content[5], content[6], content[7], content[8], content[9], content[10], content[11], content[12], content[13], content[14], content[15], content[16], content[17], content[18], content[19], content[20],] as LanguagesPropertyArray;

        return {
            entities: null,
            name: this._createNameTemplate(languages),
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
