import everySoundEffectCategories from '../../../resources/Sound effect categories.csv';

import type {Headers as LanguagesHeaders, PropertiesArray as LanguagesPropertyArray} from '../../../lang/Loader.types';
import type {Loader}                                                                 from '../../../util/loader/Loader';
import type {PossibleSoundEffectCategoriesEnglishName}                               from './SoundEffectCategories.types';
import type {SoundEffectCategory}                                                    from './SoundEffectCategory';
import type {SoundEffectCategoryTemplate}                                            from './SoundEffectCategory.template';

import {AbstractTemplateCreator}    from '../../AbstractTemplateCreator';
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

            new CSVLoader<PropertiesArray, SoundEffectCategory, Headers>(everySoundEffectCategories, convertedContent => new SoundEffectCategoryBuilder(TemplateCreator.get.createTemplate(convertedContent)).build())
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

/**
 * @singleton
 */
class TemplateCreator
    extends AbstractTemplateCreator<SoundEffectCategoryTemplate, PropertiesArray> {

    //region -------------------- Singleton usage --------------------

    static #instance?: TemplateCreator;

    private constructor() {
        super();
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public createTemplate(content: PropertiesArray,): SoundEffectCategoryTemplate {
        const languages: LanguagesPropertyArray = [content[0], content[1], content[2], content[3], content[4], content[5], content[6], content[7], content[8], content[9], content[10], content[11], content[12], content[13], content[14], content[15], content[16], content[17], content[18], content[19], content[20],] as LanguagesPropertyArray;

        return {
            name: this._createNameTemplate(languages),
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
