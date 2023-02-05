import file from 'resources/compiled/Sound effect category.json'

import type {LanguageContent}             from 'core/_template/LanguageContent'
import type {PossibleEnglishName}         from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {SoundEffectCategory}         from 'core/soundEffectCategory/SoundEffectCategory'
import type {SoundEffectCategoryTemplate} from 'core/soundEffectCategory/SoundEffectCategory.template'
import type {Loader}                      from 'util/loader/Loader'

import {isInProduction}             from 'variables'
import {AbstractTemplateCreator}    from 'core/_template/AbstractTemplate.creator'
import {SoundEffectCategoryCreator} from 'core/soundEffectCategory/SoundEffectCategory.creator'

/**
 * @singleton
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

            file.map(it => new SoundEffectCategoryCreator(new TemplateCreator(it as Content).create()).create())
                .forEach(it => references.set(it.english as PossibleEnglishName, it,))

            if (!isInProduction)
                console.info(
                    '-------------------- "sound effect category" has been loaded --------------------\n',
                    references,
                    '\n-------------------- "sound effect category" has been loaded --------------------'
                )

            this.#map = references
        }
        return this.#map
    }

}


interface Content
    extends LanguageContent {
}

class TemplateCreator
    extends AbstractTemplateCreator<SoundEffectCategoryTemplate, Content> {

    public constructor(content: Content,) {
        super(content,)
    }

    public override create(): SoundEffectCategoryTemplate {
        return {
            name: this._createNameTemplate(),
        }
    }

}
