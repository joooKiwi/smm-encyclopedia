import everySoundEffectCategories from '../../../resources/Sound effect categories.csv';

import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../../lang/Loader.types';
import type {Loader}                                                                 from '../../../util/loader/Loader';
import type {PossibleSoundEffectCategoriesEnglishName}                               from './SoundEffectCategories.types';
import type {SoundEffectCategory}                                                    from './SoundEffectCategory';
import type {SoundEffectCategoryTemplate}                                            from './SoundEffectCategory.template';
import type {SMM2NameTemplate}                                                       from '../../lang/SMM2Name.template';

import {CSVLoader}                  from '../../../util/loader/CSVLoader';
import {SoundEffectCategoryBuilder} from './SoundEffectCategory.builder';
import {HeaderTypesForConvertor}    from '../../../util/loader/utility/HeaderTypesForConvertor';

//region -------------------- CSV array related types --------------------

type Headers =
    | LanguagesHeaders;
type PropertiesArray = [
    ...LanguagesPropertyArray,
];

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 */
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
            const references = new Map<PossibleSoundEffectCategoriesEnglishName, SoundEffectCategory>();

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, SoundEffectCategory, Headers>(everySoundEffectCategories, convertedContent => new SoundEffectCategoryBuilder(TemplateCreator.createTemplate(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertTo(HeaderTypesForConvertor.everyPossibleSoundEffectCategoriesNames, 'english',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleSoundEffectCategoriesEnglishName, finalContent,))
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

//region -------------------- Template related methods & classes --------------------
//TODO Move EMPTY_GREEK & __createNameTemplate() to anew AbstractTemplateCreator

class TemplateCreator {

    static readonly #EMPTY_GREEK = null;

    public static createTemplate(content: PropertiesArray,): | SoundEffectCategoryTemplate {
        const languages: LanguagesPropertyArray = [content[0], content[1], content[2], content[3], content[4], content[5], content[6], content[7], content[8], content[9], content[10], content[11], content[12], content[13], content[14], content[15], content[16], content[17], content[18], content[19], content[20],] as LanguagesPropertyArray;

        return {
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
