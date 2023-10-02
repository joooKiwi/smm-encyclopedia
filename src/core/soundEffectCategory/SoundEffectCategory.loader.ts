import file from 'resources/compiled/Sound effect category.json'

import type {LanguageContent}             from 'core/_template/LanguageContent'
import type {PossibleEnglishName}         from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {SoundEffectCategory}         from 'core/soundEffectCategory/SoundEffectCategory'
import type {SoundEffectCategoryTemplate} from 'core/soundEffectCategory/SoundEffectCategory.template'
import type {Loader}                      from 'util/loader/Loader'

import {isInProduction}             from 'variables'
import * as TemplateMethods         from 'core/_template/templateMethods'
import {SoundEffectCategoryCreator} from 'core/soundEffectCategory/SoundEffectCategory.creator'

/** @singleton */
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
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, SoundEffectCategory>()

        file.map(it => new SoundEffectCategoryCreator(createTemplate(it as Content,),).create(),)
            .forEach(it => references.set(it.english as PossibleEnglishName, it,))

        if (!isInProduction)
            console.info(
                '-------------------- "sound effect category" has been loaded --------------------\n',
                references,
                '\n-------------------- "sound effect category" has been loaded --------------------'
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent {}

function createTemplate(content: Content,): SoundEffectCategoryTemplate {
    return {name: TemplateMethods.createNameTemplate(content,),}
}
