import file from 'resources/compiled/Entity category.json'

import type {LanguageContent}        from 'core/_template/LanguageContent'
import type {PossibleEnglishName}    from 'core/entityCategory/EntityCategories.types'
import type {EntityCategory}         from 'core/entityCategory/EntityCategory'
import type {EntityCategoryTemplate} from 'core/entityCategory/EntityCategory.template'
import type {Loader}                 from 'util/loader/Loader'

import {isInProduction}          from 'variables'
import {AbstractTemplateCreator} from 'core/_template/AbstractTemplate.creator'
import * as TemplateMethods      from 'core/_template/templateMethods'
import {EntityCategoryCreator}   from 'core/entityCategory/EntityCategory.creator'

/**
 * A single class made to handle the loading
 * and the unique creation of every {@link EntityCategory category}.
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
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, EntityCategory>()

            file.map(it => new EntityCategoryCreator(new TemplateCreator(it).create()).create())
                .forEach(it => references.set(it.english as PossibleEnglishName, it,))

            if (!isInProduction)
                console.info(
                    '-------------------- "entity category" has been loaded --------------------\n',
                    references,
                    '\n-------------------- "entity category" has been loaded --------------------',
                )

            this.#map = references
        }
        return this.#map
    }

}


interface Content
    extends LanguageContent {}

class TemplateCreator
    extends AbstractTemplateCreator<EntityCategoryTemplate, Content> {

    public constructor(content: Content,) {
        super(content,)
    }

    public override create(): EntityCategoryTemplate {
        const content = this._content

        return {
            entities: null,
            name: TemplateMethods.createNameTemplate(content,),
        }
    }

}
