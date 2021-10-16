import everySoundEffects from '../../../resources/Sound effects.csv';

import type {HeadersWithOptionalLanguages as LanguagesHeaders, PropertiesArrayWithOptionalLanguages as LanguagesPropertyArray} from '../../../lang/Loader.types';
import type {Loader}                                                                                                           from '../../../util/loader/Loader';
import type {Headers as GamesHeaders, PropertiesArray as GamesPropertyArray}                                                   from '../../game/Loader.types';
import type {PossibleSoundEffectCategoriesEnglishName}                                                                         from '../category/SoundEffectCategories.types';
import type {PossibleSoundEffectsEnglishName}                                                                                  from './SoundEffects.types';
import type {SoundEffect}                                                                                                      from './SoundEffect';
import type {SoundEffectTemplate}                                                                                              from './SoundEffect.template';

import {CSVLoader}                 from '../../../util/loader/CSVLoader';
import {SoundEffectBuilder}        from './SoundEffect.builder';
import {SoundEffectCategoryLoader} from '../category/SoundEffectCategory.loader';
import {HeaderTypesForConvertor}   from '../../../util/loader/utility/HeaderTypesForConvertor';

//region -------------------- CSV array related types --------------------

type Headers =
    | GamesHeaders
    | 'category'
    | LanguagesHeaders;
//region -------------------- Exclusive properties --------------------

type ExclusivePropertiesArray = [
    category: | PossibleSoundEffectCategoriesEnglishName | null
];

//endregion -------------------- Exclusive properties --------------------
type PropertiesArray = [
    ...GamesPropertyArray,
    ...ExclusivePropertiesArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 */
export class SoundEffectLoader
    implements Loader<ReadonlyMap<PossibleSoundEffectsEnglishName, SoundEffect>> {

    static #instance?: SoundEffectLoader;
    #map?: Map<PossibleSoundEffectsEnglishName, SoundEffect>;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }


    public load(): ReadonlyMap<PossibleSoundEffectsEnglishName, SoundEffect> {
        if (this.#map == null) {
            const references = new Map<PossibleSoundEffectsEnglishName, SoundEffect>();

            //region -------------------- Builder initialisation --------------------

            SoundEffectBuilder.categoriesMap = SoundEffectCategoryLoader.get.load();

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, SoundEffect, Headers>(everySoundEffects, convertedContent => new SoundEffectBuilder(TemplateCreator.createTemplate(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertToBoolean('isInSuperMarioMaker1', 'isInSuperMarioMaker2',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleSoundEffectCategoriesNames, 'category',)
                .convertTo(HeaderTypesForConvertor.everyPossibleSoundEffectsNames, 'english',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleSoundEffectsEnglishName, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "sound effect" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    static readonly #EMPTY_GREEK = null;

    public static createTemplate(content: PropertiesArray,): | SoundEffectTemplate {
        return {
            properties: {
                isIn: {
                    game: {
                        1: content[0],
                        2: content[1],
                    },
                },
                category: content[2],
            },
            name: {
                english: {
                    simple: content[3],
                    american: content[4],
                    european: content[5],
                },
                french: {
                    simple: content[6],
                    canadian: content[7],
                    european: content[8],
                },
                german: content[9],
                spanish: {
                    simple: content[10],
                    american: content[11],
                    european: content[12],
                },
                italian: content[13],
                dutch: content[14],
                portuguese: {
                    simple: content[21],
                    american: content[22],
                    european: content[23],
                },
                russian: content[15],
                chinese: {
                    simple: content[16],
                    traditional: content[17],
                    simplified: content[18],
                },
                japanese: content[19],
                korean: content[20],
                greek: this.#EMPTY_GREEK,
            },
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
