import file from 'resources/compiled/Mii Costume category (SMM2).json'

import type {LanguageContent}     from 'core/_template/LanguageContent'
import type {PossibleEnglishName} from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {MiiCostumeCategory}  from 'core/miiCostumeCategory/MiiCostumeCategory'
import type {Loader}              from 'util/loader/Loader'

import {isInProduction}              from 'variables'
import {MiiCostumeCategoryContainer} from 'core/miiCostumeCategory/MiiCostumeCategory.container'
import {createNameFromContent}       from 'lang/name/createNameFromContent'

/** @singleton */
export class MiiCostumeCategoryLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, MiiCostumeCategory>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: MiiCostumeCategoryLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, MiiCostumeCategory>

    public load(): ReadonlyMap<PossibleEnglishName, MiiCostumeCategory> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, MiiCostumeCategory>()
        let index = file.length
        while (index-- > 0) {
            const reference = createReference(file[index] as Content,)
            references.set(reference.english as PossibleEnglishName, reference,)
        }

        if (!isInProduction)
            console.info(
                '-------------------- "Mii costume category" has been loaded --------------------\n',
                references,
                '\n-------------------- "Mii costume category" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent {}

function createReference(content: Content,): MiiCostumeCategory {
    return new MiiCostumeCategoryContainer(createNameFromContent(content, 2, false,),)
}
