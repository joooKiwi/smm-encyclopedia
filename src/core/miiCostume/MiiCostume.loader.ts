import resource from '../../resources/Mii Costume (SMM2).csv';

import type {Loader}                                                            from '../../util/loader/Loader';
import type {PossibleEnglishName}                                               from './MiiCostumes.types';
import type {MiiCostume}                                                        from './MiiCostume';
import type {MiiCostumeTemplate, PossibleConditionToUnlockIt, PossibleMode}     from './MiiCostume.template';
import type {PossibleEnglishName as PossibleEnglishName_Category}               from '../miiCostumeCategory/MiiCostumeCategories.types';
import type {PossibleName_SMM2_Number as PossibleMarioMakerVersion_SMM2_Number} from '../version/Versions.types';
import type {PropertiesArrayWithOptionalLanguages as LanguagesPropertyArray}    from '../../lang/Loader.types';

import {CSVLoader}               from '../../util/loader/CSVLoader';
import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {HeaderTypesForConvertor} from '../_util/loader/HeaderTypesForConvertor';
import {MiiCostumeBuilder}       from './MiiCostume.builder';

//region -------------------- CSV array related types --------------------

enum Headers {

    conditionToUnlockIt,
    mode,

    MM2_version,
    category,

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
    greek,

    //endregion -------------------- Languages --------------------

}

//region -------------------- Properties --------------------

type ExclusivePropertiesArray = [

    conditionToUnlockIt: PossibleConditionToUnlockIt,
    mode: PossibleMode,

    MM2_version: | PossibleMarioMakerVersion_SMM2_Number | null,
    category: PossibleEnglishName_Category,

];

type PropertiesArray = [
    ...ExclusivePropertiesArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- Exclusive properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference<{@link MiiCostumes}>
 */
export class MiiCostumeLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, MiiCostume>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: MiiCostumeLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, MiiCostume>;

    public load(): ReadonlyMap<PossibleEnglishName, MiiCostume> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, MiiCostume>();

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, MiiCostume, keyof typeof Headers>(resource, convertedContent => new MiiCostumeBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleMode_MiiCostume, 'mode',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleConditionToUnlockIt_MiiCostume, 'conditionToUnlockIt',)
                .convertToEmptyableStringAnd(['2.0.0', '3.0.0',], 'MM2_version',)
                .convertTo(HeaderTypesForConvertor.everyPossibleName_MiiCostumeCategory, 'category',)

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
    extends AbstractTemplateBuilder<MiiCostumeTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected get _headersIndexMap() {
        return Headers;
    }

    public build(): MiiCostumeTemplate {
        return {
            conditionToUnlockIt: {
                value: this._getContent(this._headersIndexMap.conditionToUnlockIt),
                mode: this._getContent(this._headersIndexMap.mode),
            },
            version: this._getContent(this._headersIndexMap.MM2_version),
            category: this._getContent(this._headersIndexMap.category),
            name: this._createNameTemplate(),
        };
    }

}
