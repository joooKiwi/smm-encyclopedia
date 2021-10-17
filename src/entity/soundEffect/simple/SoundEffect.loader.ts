import everySoundEffects from '../../../resources/Sound effects.csv';

import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../../lang/Loader.types';
import type {Loader}                                                                 from '../../../util/loader/Loader';
import type {Headers as GamesHeaders, PropertiesArray as GamesPropertyArray}         from '../../game/Loader.types';
import type {PossibleSoundEffectCategoryType, SoundEffectTemplate}                   from './SoundEffect.template';
import type {PossibleSoundEffectsEnglishName}                                        from './SoundEffects.types';
import type {SoundEffect}                                                            from './SoundEffect';

import {CSVLoader}                 from '../../../util/loader/CSVLoader';
import {SoundEffectBuilder}        from './SoundEffect.builder';
import {SoundEffectCategoryLoader} from '../category/SoundEffectCategory.loader';
import {HeaderTypesForConvertor}   from '../../../util/loader/utility/HeaderTypesForConvertor';
import {SMM2NameTemplate}          from '../../lang/SMM2Name.template';

//region -------------------- CSV array related types --------------------

type Headers =
    | GamesHeaders
    | 'category'
    | LanguagesHeaders;
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
            console.log('-------------------- "sound effect" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

//region -------------------- Template related methods & classes --------------------
//TODO Move EMPTY_GREEK & __createNameTemplate() to anew AbstractTemplateCreator

class TemplateCreator {

    static readonly #EMPTY_GREEK = null;

    public static createTemplate(content: PropertiesArray,): | SoundEffectTemplate {
        const languages: LanguagesPropertyArray = [content[3], content[4], content[5], content[6], content[7], content[8], content[9], content[10], content[11], content[12], content[13], content[14], content[15], content[16], content[17], content[18], content[19], content[20], content[21], content[22], content[23],] as LanguagesPropertyArray;

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
            name: this.__createToNameTemplate(languages),
        };
    }

    private static __createToNameTemplate([english, americanEnglish, europeanEnglish, french, canadianFrench, europeanFrench, german, spanish, americanSpanish, europeanSpanish, italian, dutch, portuguese, americanPortuguese, europeanPortuguese, russian, japanese, chinese, traditionalChinese, simplifiedChinese, korean,]: LanguagesPropertyArray,): SMM2NameTemplate {
        return {
            english: {
                simple: english,
                american: americanEnglish,
                european: europeanEnglish,
            },
            french: {
                simple: french,
                canadian: canadianFrench,
                european: europeanFrench,
            },
            german: german,
            spanish: {
                simple: spanish,
                american: americanSpanish,
                european: europeanSpanish,
            },
            italian: italian,
            dutch: dutch,
            portuguese: {
                simple: portuguese,
                american: americanPortuguese,
                european: europeanPortuguese,
            },
            russian: russian,
            chinese: {
                simple: chinese,
                traditional: traditionalChinese,
                simplified: simplifiedChinese,
            },
            japanese: japanese,
            korean: korean,
            greek: this.#EMPTY_GREEK,
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
