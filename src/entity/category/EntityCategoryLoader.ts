import everyEntityCategories from "../../resources/Every Super Mario Maker 2 entities properties - Entity categories.csv";

import {CallbackCaller} from "../../util/CallbackCaller";
import CSVLoader from "../../loader/CSVLoader";
import {EntityCategory} from "./EntityCategory";
import {EntityCategoryTemplate} from "./EntityCategoryTemplate";
import {GenericEntityCategory} from "./GenericEntityCategory";
import {Loader} from "../../util/Loader";
import {NameCreator} from "../lang/NameCreator";
import {SMM2NameBuilder} from "../lang/SMM2NameBuilder";

export type CategoryType = 'Terrain' | 'Item' | 'Gizmo' | 'Enemy';

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

/**
 * A single class made to handle the loading
 * and the unique creation of every categories.
 *
 * @singleton
 */
export class EntityCategoryLoader
    implements Loader<Map<string, EntityCategory>> {

    private static readonly instance = new EntityCategoryLoader();

    readonly #everyEntityCategoriesMap: CallbackCaller<Map<string, EntityCategory>>;

    private constructor() {
        this.#everyEntityCategoriesMap = new CallbackCaller(() => {
            const templateMap: Map<string, EntityCategoryTemplate> = new Map();
            const finalReferences: Map<string, EntityCategory> = new Map();

            const csvLoader = new CSVLoader<EntityCategoryPropertiesArray, EntityCategoryTemplate>(everyEntityCategories, convertedContent => TemplateCreator.createTemplate(convertedContent))
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
                .onFinalObjectCreated(finalContent => NameCreator.addEnglishReference(finalContent.name, templateMap, finalContent))
                .onInitialisationEnd(() =>
                    templateMap.forEach((template, englishName) =>
                        finalReferences.set(englishName, new GenericEntityCategory(new SMM2NameBuilder(template.name).build()))));
            console.log(csvLoader.content);
            return finalReferences;
        });
    }

    public static get get() {
        return this.instance;
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
