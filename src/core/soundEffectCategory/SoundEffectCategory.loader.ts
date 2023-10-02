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
        let index = file.length
        while (index-- > 0) {
            const reference = new SoundEffectCategoryCreator(createTemplate(file[index] as Content,),).create()
            references.set(reference.english as PossibleEnglishName, reference,)
        }

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
