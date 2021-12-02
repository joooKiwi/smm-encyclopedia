import everySoundEffectCategories from '../../../resources/Sound effect categories.csv';

import type {PropertiesArray as LanguagesPropertyArray} from '../../../lang/Loader.types';
import type {Loader}                                    from '../../../util/loader/Loader';
import type {PossibleEnglishName}                       from './SoundEffectCategories.types';
import type {SoundEffectCategory}                       from './SoundEffectCategory';
import type {SoundEffectCategoryTemplate}               from './SoundEffectCategory.template';

import {AbstractTemplateBuilder}    from '../../_template/AbstractTemplate.builder';
import {CSVLoader}                  from '../../../util/loader/CSVLoader';
import {SoundEffectCategoryBuilder} from './SoundEffectCategory.builder';
import {HeaderTypesForConvertor}    from '../../_util/loader/HeaderTypesForConvertor';

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
    greek,

    //endregion -------------------- Languages --------------------

}

//region -------------------- Properties --------------------

type PropertiesArray = [
    ...LanguagesPropertyArray,
];

//endregion -------------------- Properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 */
export class SoundEffectCategoryLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, SoundEffectCategory>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectCategoryLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, SoundEffectCategory>;

    public load(): ReadonlyMap<PossibleEnglishName, SoundEffectCategory> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, SoundEffectCategory>();

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, SoundEffectCategory, keyof typeof Headers>(everySoundEffectCategories, convertedContent => new SoundEffectCategoryBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertTo(HeaderTypesForConvertor.everyPossibleSoundEffectCategoriesNames, 'english',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleEnglishName, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "sound effect category" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "sound effect category" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<SoundEffectCategoryTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected get _headersIndexMap() {
        return Headers;
    }

    public build(): SoundEffectCategoryTemplate {
        return {
            name: this._createNameTemplate(),
        };
    }

}
