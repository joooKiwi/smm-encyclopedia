import resource from '../../resources/compiled/Mii Costume category (SMM2).json';

import type {Loader}                                                         from '../../util/loader/Loader';
import type {MiiCostumeCategory}                                             from './MiiCostumeCategory';
import type {MiiCostumeCategoryTemplate}                                     from './MiiCostumeCategory.template';
import type {PossibleEnglishName}                                            from './MiiCostumeCategories.types';
import type {PropertiesArrayWithOptionalLanguages as LanguagesPropertyArray} from '../../lang/Loader.types';

import {AbstractTemplateBuilder}   from '../_template/AbstractTemplate.builder';
import {CSVLoader}                 from '../../util/loader/CSVLoader';
import {HeaderTypesForConvertor}   from '../_util/loader/HeaderTypesForConvertor';
import {MiiCostumeCategoryBuilder} from './MiiCostumeCategory.builder';

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
    ...LanguagesPropertyArray,
];

//endregion -------------------- Exclusive properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference<{@link MiiCostumeCategories}>
 */
export class MiiCostumeCategoryLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, MiiCostumeCategory>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: MiiCostumeCategoryLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, MiiCostumeCategory>;

    public load(): ReadonlyMap<PossibleEnglishName, MiiCostumeCategory> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, MiiCostumeCategory>();

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, MiiCostumeCategory, keyof typeof Headers>(resource, convertedContent => new MiiCostumeCategoryBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertTo(HeaderTypesForConvertor.everyPossibleName_MiiCostumeCategory, 'english',)

                .onAfterFinalObjectCreated(finalContent =>
                    references.set(finalContent.americanEnglish as PossibleEnglishName, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "Mii costume" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "Mii costume" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<MiiCostumeCategoryTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected override get _headersIndexMap() {
        return Headers;
    }

    public override build(): MiiCostumeCategoryTemplate {
        return {
            name: this._createNameTemplate(),
        };
    }

}