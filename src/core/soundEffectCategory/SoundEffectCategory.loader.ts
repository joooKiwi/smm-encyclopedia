import file from 'resources/compiled/Sound effect category.json'

import type {LanguageContent}     from 'core/_template/LanguageContent'
import type {PossibleEnglishName} from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {SoundEffectCategory} from 'core/soundEffectCategory/SoundEffectCategory'
import type {Loader}              from 'util/loader/Loader'

import {isInProduction}               from 'variables'
import {SoundEffectCategoryContainer} from 'core/soundEffectCategory/SoundEffectCategory.container'
import {createNameFromContent}        from 'lang/name/createNameFromContent'

/** @singleton */
export class SoundEffectCategoryLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, SoundEffectCategory>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectCategoryLoader

    private constructor() {}

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
            const reference = createReference(file[index] as Content,)
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

function createReference(content: Content,): SoundEffectCategory {
    return new SoundEffectCategoryContainer(createNameFromContent(content, 2, false,),)
}

