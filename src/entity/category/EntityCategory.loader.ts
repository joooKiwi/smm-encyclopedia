import everyEntityCategories from '../../resources/Entity categories.csv';

import type {EntityCategory}                            from './EntityCategory';
import type {EntityCategoryTemplate}                    from './EntityCategory.template';
import type {Loader}                                    from '../../util/loader/Loader';
import type {PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';
import type {PossibleEntityCategoriesName}              from './EntityCategories.types';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {EntityCategoryBuilder}   from './EntityCategory.builder';

//region -------------------- CSV array related types --------------------

enum Headers {

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

type PropertiesArray = [
    ...LanguagesPropertyArray
];

//endregion -------------------- Properties --------------------

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

            new CSVLoader<PropertiesArray, EntityCategory, keyof typeof Headers>(everyEntityCategories, convertedContent => new EntityCategoryBuilder(new TemplateBuilder(convertedContent)).build())
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

class TemplateBuilder
    extends AbstractTemplateBuilder<EntityCategoryTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected get _headersIndexMap() {
        return Headers;
    }

    public build(): EntityCategoryTemplate {
        return {
            entities: null,
            name: this._createNameTemplate(),
        };
    }

}