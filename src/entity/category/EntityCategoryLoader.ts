import CSVLoader from "../../loader/CSVLoader";
import {EntityCategory} from "./EntityCategory";
import everyEntityCategories from "../../resources/Every Super Mario Maker 2 entities properties - Entity categories.csv";
import {EntityCategoryTemplate} from "./EntityCategoryTemplate";
import {GenericEntityCategory} from "./GenericEntityCategory";
import {SMM2NameBuilder} from "../lang/SMM2NameBuilder";
import {SMM2NameTemplate} from "../lang/SMM2NameTemplate";
import {CallbackCaller} from "../../util/CallbackCaller";

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
export class EntityCategoryLoader {

    private static readonly instance = new EntityCategoryLoader();

    readonly #everyEntityCategoriesMap: CallbackCaller<Map<string, EntityCategory>>;

    private constructor() {
        this.#everyEntityCategoriesMap = new CallbackCaller(() => {
            const templateMap: Map<string, EntityCategoryTemplate> = new Map();
            const finalReferences: Map<string, EntityCategory> = new Map();

            const csvLoader = new CSVLoader<EntityCategoryPropertiesArray, EntityCategoryTemplate>(everyEntityCategories, convertedContent => TemplateCreator.createTemplate(convertedContent))
                .convertToEmptyableString(
                    'japanese',
                    'english', 'americanEnglish', 'europeanEnglish',
                    'spanish', 'americanSpanish', 'europeanSpanish',
                    'french', 'canadianFrench', 'europeanFrench',
                    'dutch', 'german', 'italian',
                    'portuguese', 'americanPortuguese', 'europeanPortuguese',
                    'russian', 'korean',
                    'chinese', 'simplifiedChinese', 'traditionalChinese',
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
                japanese: content[0],
                english: {
                    simple: content[1],
                    american: content[2],
                    european: content[3],
                },
                spanish: {
                    simple: content[4],
                    american: content[5],
                    european: content[6],
                },
                french: {
                    simple: content[7],
                    canadian: content[8],
                    european: content[9],
                },
                dutch: content[10],
                german: content[11],
                italian: content[12],
                portuguese: {
                    simple: content[13],
                    american: content[14],
                    european: content[15],
                },
                russian: content[16],
                korean: content[17],
                chinese: {
                    simple: content[18],
                    simplified: content[19],
                    traditional: content[20],
                },
            }
        };
    }

}

class NameCreator {

    private static __testName(name: SMM2NameTemplate): void {
        //README since some references are still not complete, they are in comment
        if (name.english.simple === null && (name.english.american === null || name.english.european === null))
            throw new ReferenceError(`The english name ("${name.english.simple}") can either have a single english name or both "american"("${name.english.american}") and "european"("${name.english.european}") name separated.`);
        // if (name.french.simple === null && (name.french.canadian === null || name.french.european === null))
        //     throw new ReferenceError(`The french name ("${name.french.simple}") can either have a single french name or both "canadian"("${name.french.canadian}") and "european"("${name.french.european}") name separated.`);
        // if (name.spanish.simple === null && (name.spanish.american === null || name.spanish.european === null))
        //     throw new ReferenceError(`The spanish name ("${name.spanish.simple}") can either have a single spanish name or both "american"("${name.spanish.american}") and "european"("${name.spanish.european}") name separated.`);
        // if (name.portuguese.simple === null && (name.portuguese.simplified === null || name.portuguese.traditional === null))
        //     throw new ReferenceError(`The portuguese name ("${name.portuguese.simple}") can either have a single portuguese name or both "american"("${name.portuguese.american}") and "european"("${name.portuguese.european}") name separated.`);
        // if (name.chinese.simple === null && (name.chinese.simplified === null || name.chinese.traditional === null))
        //     throw new ReferenceError(`The chinese name ("${name.chinese.simple}") can either have a single chinese name or both "simplified"("${name.chinese.simplified}") and "traditional"("${name.chinese.traditional}") name separated.`);
    }

    public static addEnglishReference(name: SMM2NameTemplate, englishNames: Map<string, EntityCategoryTemplate>, template: EntityCategoryTemplate,): void {
        this.__testName(name);
        const englishReferenceName = name.english.simple ?? name.english.american;
        if (englishReferenceName == null)
            throw new ReferenceError('No english name can be null since they are used as a key for the references.');
        if (englishNames.get(englishReferenceName) !== undefined)
            throw new ReferenceError(`The english name ("${englishReferenceName}") can't be used as a reference since there is already another value.`);
        englishNames.set(englishReferenceName, template,);
    }

}

//endregion -------------------- Template related methods & classes --------------------
