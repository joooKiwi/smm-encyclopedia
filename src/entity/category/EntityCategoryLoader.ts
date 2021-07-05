import everyEntityCategories from '../../resources/Entity categories.csv';

import {CallbackCaller}         from '../../util/CallbackCaller';
import {CSVLoader}              from '../../util/loader/CSVLoader';
import {EntityCategory}         from './EntityCategory';
import {EntityCategoryBuilder}  from './EntityCategoryBuilder';
import {EntityCategoryTemplate} from './EntityCategoryTemplate';
import {Loader}                 from '../../util/Loader';

//region -------------------- CSV array related types --------------------

type EntityCategoryPropertiesArray = [
    //region ---------- Language properties ----------

    english: null | string,
    americanEnglish: null | string,
    europeanEnglish: null | string,

    french: null | string,
    canadianFrench: null | string,
    europeanFrench: null | string,

    german: null | string,

    spanish: null | string,
    americanSpanish: null | string,
    europeanSpanish: null | string,

    italian: null | string,

    dutch: null | string,

    portuguese: null | string,
    americanPortuguese: null | string,
    europeanPortuguese: null | string,

    russian: null | string,

    japanese: null | string,

    chinese: null | string,
    simplifiedChinese: null | string,
    tradionalChinese: null | string,

    korean: null | string,
    //endregion ---------- Language properties ----------
];

//endregion -------------------- CSV array related types --------------------

/**
 * A single class made to handle the loading
 * and the unique creation of every categories.
 *
 * @singleton
 */
export class EntityCategoryLoader
    implements Loader<ReadonlyMap<string, EntityCategory>> {

    static readonly #instance = new EntityCategoryLoader();
    //region -------------------- Attributes --------------------

    readonly #everyEntityCategoriesMap: CallbackCaller<Map<string, EntityCategory>>;

    //endregion -------------------- Attributes --------------------

    private constructor() {
        this.#everyEntityCategoriesMap = new CallbackCaller(() => {
            const finalReferences: Map<string, EntityCategory> = new Map();

            const csvLoader = new CSVLoader<EntityCategoryPropertiesArray, EntityCategoryBuilder>(everyEntityCategories, convertedContent => new EntityCategoryBuilder(TemplateCreator.createTemplate(convertedContent)))
                .convertToEmptyableString(
                    'english', 'americanEnglish', 'europeanEnglish',
                    'french', 'canadianFrench', 'europeanFrench',
                    'german',
                    'spanish', 'americanSpanish', 'europeanSpanish',
                    'dutch', 'italian',
                    'portuguese', 'americanPortuguese', 'europeanPortuguese',
                    'russian', 'japanese',
                    'chinese', 'simplifiedChinese', 'traditionalChinese',
                    'korean',
                )
                .onFinalObjectCreated(finalContent => finalReferences.set(finalContent.englishReference, finalContent.build(),))
                .load();

            console.log('-------------------- entity category has been loaded --------------------');// temporary console.log
            console.log(csvLoader.content);// temporary console.log
            return finalReferences;
        });
    }

    public static get get() {
        return this.#instance;
    }


    public load() {
        return this.#everyEntityCategoriesMap.get;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    public static createTemplate(content: EntityCategoryPropertiesArray): EntityCategoryTemplate {
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
                portuguese: {
                    simple: content[12],
                    american: content[13],
                    european: content[14],
                },
                russian: content[15],
                japanese: content[16],
                chinese: {
                    simple: content[17],
                    simplified: content[18],
                    traditional: content[19],
                },
                korean: content[20],
            },
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
