import file from 'resources/compiled/Entity category.json'

import type {Array}     from '@joookiwi/type'
import {forEachByArray} from '@joookiwi/collection'

import type {LanguageContent}     from 'core/_template/LanguageContent'
import type {PossibleEnglishName} from 'core/entityCategory/EntityCategories.types'
import type {EntityCategory}      from 'core/entityCategory/EntityCategory'
import type {Loader}              from 'util/loader/Loader'

import {isInDevelopment}         from 'variables'
import {EntityCategoryContainer} from 'core/entityCategory/EntityCategory.container'
import {createNameFromContent}   from 'lang/name/createNameFromContent'

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

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, EntityCategory>

    public load(): ReadonlyMap<PossibleEnglishName, EntityCategory> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, EntityCategory>()
        forEachByArray(file as Array<Content>, content => {
            const reference = createReference(content,)
            references.set(reference.english as PossibleEnglishName, reference,)
        },)

        if (isInDevelopment)
            console.info(
                '-------------------- "entity category" has been loaded --------------------\n',
                references,
                '\n-------------------- "entity category" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent {

    //region -------------------- Language --------------------

    readonly english: PossibleEnglishName
    readonly americanEnglish: null
    readonly europeanEnglish: null

    readonly french: string
    readonly canadianFrench: null
    readonly europeanFrench: null

    readonly german: string

    readonly spanish: string
    readonly americanSpanish: null
    readonly europeanSpanish: null

    readonly italian: string

    readonly dutch: string

    readonly portuguese: null
    readonly americanPortuguese: null
    readonly europeanPortuguese: null

    readonly russian: string

    readonly japanese: string

    readonly korean: string

    //endregion -------------------- Language --------------------

}

function createReference(content: Content,): EntityCategory {
    return new EntityCategoryContainer(createNameFromContent(content, 2, true,),)
}
