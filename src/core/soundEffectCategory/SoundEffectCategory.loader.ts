import resource from 'resources/compiled/Sound effect category.json'

import type {PossibleEnglishName}                       from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {SoundEffectCategory}                       from 'core/soundEffectCategory/SoundEffectCategory'
import type {SoundEffectCategoryTemplate}               from 'core/soundEffectCategory/SoundEffectCategory.template'
import type {PropertiesArray as LanguagesPropertyArray} from 'lang/Loader.types'
import type {Loader}                                    from 'util/loader/Loader'

import {AbstractTemplateBuilder}    from 'core/_template/AbstractTemplate.builder'
import {HeaderTypesForConvertor}    from 'core/_util/loader/HeaderTypesForConvertor'
import {SoundEffectCategoryBuilder} from 'core/soundEffectCategory/SoundEffectCategory.builder'
import {CSVLoader}                  from 'util/loader/CSVLoader'

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
]

//endregion -------------------- Properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference<{@link SoundEffectCategories}>
 */
export class SoundEffectCategoryLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, SoundEffectCategory>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectCategoryLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, SoundEffectCategory>

    public load(): ReadonlyMap<PossibleEnglishName, SoundEffectCategory> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, SoundEffectCategory>()

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, SoundEffectCategory, keyof typeof Headers>(resource, convertedContent => new SoundEffectCategoryBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertTo(HeaderTypesForConvertor.everyPossibleName_soundEffectCategory, 'english',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleEnglishName, finalContent,))
                .load()

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "sound effect category" has been loaded --------------------')// temporary console.log
            console.log(references)// temporary console.log
            console.log('-------------------- "sound effect category" has been loaded --------------------')// temporary console.log

            this.#map = references
        }
        return this.#map
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<SoundEffectCategoryTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content,)
    }

    protected override get _headersIndexMap() {
        return Headers
    }

    public override build(): SoundEffectCategoryTemplate {
        return {
            name: this._createNameTemplate(),
        }
    }

}
