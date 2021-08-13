import everyEntityCategories from '../../resources/Entity categories.csv';

import type {EntityCategory}                                                         from './EntityCategory';
import type {EntityCategoryTemplate}                                                 from './EntityCategoryTemplate';
import type {Loader}                                                                 from '../../util/loader/Loader';
import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../lang/Loader.types';

import {CallbackCaller}        from '../../util/CallbackCaller';
import {CSVLoader}             from '../../util/loader/CSVLoader';
import {EntityCategoryBuilder} from './EntityCategoryBuilder';

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
    implements Loader<ReadonlyMap<string, EntityCategory>> {

    static readonly #instance = new EntityCategoryLoader();
    //region -------------------- Attributes --------------------

    readonly #everyEntityCategoriesMap: CallbackCaller<Map<string, EntityCategory>>;

    //endregion -------------------- Attributes --------------------

    private constructor() {
        this.#everyEntityCategoriesMap = new CallbackCaller(() => {
            const finalReferences: Map<string, EntityCategory> = new Map();

            const csvLoader = new CSVLoader<PropertiesArray, EntityCategoryBuilder, Headers>(everyEntityCategories, convertedContent => new EntityCategoryBuilder(TemplateCreator.createTemplate(convertedContent)))
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
                .onAfterFinalObjectCreated(finalContent => finalReferences.set(finalContent.englishReference, finalContent.build(),))
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

    public static createTemplate(content: PropertiesArray): EntityCategoryTemplate {
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
