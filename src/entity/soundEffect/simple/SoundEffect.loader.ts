import everySoundEffects from '../../../resources/Sound effects.csv';

import type {PropertiesArray as LanguagesPropertyArray}            from '../../../lang/Loader.types';
import type {Loader}                                               from '../../../util/loader/Loader';
import type {PropertiesArray as GamesPropertyArray}                from '../../game/Loader.types';
import type {PossibleSoundEffectCategoryType, SoundEffectTemplate} from './SoundEffect.template';
import type {PossibleSoundEffectsEnglishName}                      from './SoundEffects.types';
import type {SoundEffect}                                          from './SoundEffect';

import {AbstractTemplateBuilder}   from '../../_template/AbstractTemplate.builder';
import {CSVLoader}                 from '../../../util/loader/CSVLoader';
import {SoundEffectBuilder}        from './SoundEffect.builder';
import {SoundEffectCategoryLoader} from '../category/SoundEffectCategory.loader';
import {HeaderTypesForConvertor}   from '../../../util/loader/utility/HeaderTypesForConvertor';

//region -------------------- CSV array related types --------------------

enum Headers {

    //region -------------------- Games --------------------

    isInSuperMarioMaker1,
    isInSuperMarioMaker2,

    //endregion -------------------- Games --------------------
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

//region -------------------- Exclusive properties --------------------

type ExclusivePropertiesArray = [
    category: PossibleSoundEffectCategoryType,
];

//endregion -------------------- Exclusive properties --------------------

type PropertiesArray = [
    ...GamesPropertyArray,
    ...ExclusivePropertiesArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- Properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 */
export class SoundEffectLoader
    implements Loader<ReadonlyMap<PossibleSoundEffectsEnglishName, SoundEffect>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleSoundEffectsEnglishName, SoundEffect>;

    public load(): ReadonlyMap<PossibleSoundEffectsEnglishName, SoundEffect> {
        if (this.#map == null) {
            const references = new Map<PossibleSoundEffectsEnglishName, SoundEffect>();

            //region -------------------- Builder initialisation --------------------

            SoundEffectBuilder.categoriesMap = SoundEffectCategoryLoader.get.load();

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, SoundEffect, keyof typeof Headers>(everySoundEffects, convertedContent => new SoundEffectBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertToBoolean('isInSuperMarioMaker1', 'isInSuperMarioMaker2',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleSoundEffectCategoriesNames, 'category',)
                .convertTo(HeaderTypesForConvertor.everyPossibleSoundEffectsNames, 'english',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleSoundEffectsEnglishName, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "sound effect" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "sound effect" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<SoundEffectTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected get _headersIndexMap() {
        return Headers;
    }

    public build(): SoundEffectTemplate {
        return {
            properties: {
                isIn: {
                    game: this._createGameTemplate(),
                },
                category: this._getContent(this._headersIndexMap.category),
            },
            name: this._createNameTemplate(),
        };
    }

}
