import everySoundEffectCategories from '../../../resources/Sound effect categories.csv';

import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../../lang/Loader.types';
import type {Loader}                                                                 from '../../../util/loader/Loader';
import type {SoundEffectCategory}                                                    from './SoundEffectCategory';
import type {SoundEffectCategoryTemplate}                                            from './SoundEffectCategory.template';

import {CSVLoader}                                from '../../../util/loader/CSVLoader';
import {SoundEffectCategoryBuilder}               from './SoundEffectCategory.builder';
import {PossibleSoundEffectCategoriesEnglishName} from './SoundEffectCategories.types';
import {HeaderTypesForConvertor}                  from '../../../util/loader/utility/HeaderTypesForConvertor';

//region -------------------- CSV array related types --------------------

type Headers =
    | LanguagesHeaders;
type PropertiesArray = [
    ...LanguagesPropertyArray,
];

//endregion -------------------- CSV array related types --------------------

export class SoundEffectCategoryLoader
    implements Loader<ReadonlyMap<PossibleSoundEffectCategoriesEnglishName, SoundEffectCategory>> {

    static #instance?: SoundEffectCategoryLoader;
    #map?: Map<PossibleSoundEffectCategoriesEnglishName, SoundEffectCategory>;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    public load(): ReadonlyMap<PossibleSoundEffectCategoriesEnglishName, SoundEffectCategory> {
        if (this.#map == null) {
            const references: Map<PossibleSoundEffectCategoriesEnglishName, SoundEffectCategory> = new Map();

            //region -------------------- CSV Loader --------------------

            const csvLoader = new CSVLoader<PropertiesArray, SoundEffectCategoryBuilder, Headers>(everySoundEffectCategories, convertedContent => new SoundEffectCategoryBuilder(TemplateCreator.createTemplate(convertedContent)))
                .setDefaultConversion('emptyable string')

                .convertTo(HeaderTypesForConvertor.everyPossibleSoundEffectCategoriesNames, 'english',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.englishReference as PossibleSoundEffectCategoriesEnglishName, finalContent.build(),))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "sound effect category" has been loaded --------------------');// temporary console.log
            console.log(csvLoader.content);// temporary console.log
            this.#map = references;
        }
        return this.#map;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    static readonly #EMPTY_PORTUGUESE = {simple: null, european: null, american: null,};
    static readonly #EMPTY_GREEK = null;

    public static createTemplate(content: PropertiesArray,): | SoundEffectCategoryTemplate {
        return {
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
                portuguese: this.#EMPTY_PORTUGUESE,
                russian: content[12],
                chinese: {
                    simple: content[13],
                    traditional: content[14],
                    simplified: content[15],
                },
                japanese: content[16],
                korean: content[17],
                greek: this.#EMPTY_GREEK,
            },
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
