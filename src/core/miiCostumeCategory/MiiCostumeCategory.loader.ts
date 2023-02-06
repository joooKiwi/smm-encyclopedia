import file from 'resources/compiled/Mii Costume category (SMM2).json'

import type {LanguageContent}            from 'core/_template/LanguageContent'
import type {PossibleEnglishName}        from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {MiiCostumeCategory}         from 'core/miiCostumeCategory/MiiCostumeCategory'
import type {MiiCostumeCategoryTemplate} from 'core/miiCostumeCategory/MiiCostumeCategory.template'
import type {Loader}                     from 'util/loader/Loader'

import {isInProduction}            from 'variables'
import {AbstractTemplateCreator}   from 'core/_template/AbstractTemplate.creator'
import {MiiCostumeCategoryCreator} from 'core/miiCostumeCategory/MiiCostumeCategory.creator'

/**
 * @singleton
 */
export class MiiCostumeCategoryLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, MiiCostumeCategory>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: MiiCostumeCategoryLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, MiiCostumeCategory>

    public load(): ReadonlyMap<PossibleEnglishName, MiiCostumeCategory> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, MiiCostumeCategory>()

            file.map(it => new MiiCostumeCategoryCreator(new TemplateCreator(it as Content).create()).create())
                .forEach(it => references.set(it.english as PossibleEnglishName, it,))

            if (!isInProduction)
                console.info(
                    '-------------------- "Mii costume" has been loaded --------------------\n',
                    references,
                    '\n-------------------- "Mii costume" has been loaded --------------------',
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
    extends AbstractTemplateCreator<MiiCostumeCategoryTemplate, Content> {

    public constructor(content: Content,) {
        super(content,)
    }

    public override create(): MiiCostumeCategoryTemplate {
        return {
            name: this._createNameTemplate(),
        }
    }

}