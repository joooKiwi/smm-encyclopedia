import file from 'resources/compiled/Entity category.json'

import type {LanguageContent}        from 'core/_template/LanguageContent'
import type {PossibleEnglishName}    from 'core/entityCategory/EntityCategories.types'
import type {EntityCategory}         from 'core/entityCategory/EntityCategory'
import type {EntityCategoryTemplate} from 'core/entityCategory/EntityCategory.template'
import type {Loader}                 from 'util/loader/Loader'

import {isInProduction}     from 'variables'
import * as TemplateMethods from 'core/_template/templateMethods'
import {createContent}      from 'core/entityCategory/EntityCategory.creator'

/**
 * A single class made to handle the loading
 * and the unique creation of every {@link EntityCategory}.
 *
 * @singleton
 */
export class EntityCategoryLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, EntityCategory>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityCategoryLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, EntityCategory>

    public load(): ReadonlyMap<PossibleEnglishName, EntityCategory> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, EntityCategory>()
        let index = file.length
        while (index-- > 0) {
            const reference = createContent(createTemplate(file[index] as Content,),)
            references.set(reference.english as PossibleEnglishName, reference,)
        }

        if (!isInProduction)
            console.info(
                '-------------------- "entity category" has been loaded --------------------\n',
                references,
                '\n-------------------- "entity category" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent {}

function createTemplate(content: Content,): EntityCategoryTemplate {
    return {
        entities: null,
        name: TemplateMethods.createNameTemplate(content,),
    }
}
