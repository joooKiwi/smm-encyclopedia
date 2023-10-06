import file from 'resources/compiled/Entity behaviour.json'

import {CommonLazy, lazy} from '@joookiwi/lazy'

import type {EntityBehaviour}                          from 'core/behaviour/EntityBehaviour'
import type {PossibleAcronym, PossibleTranslationKeys} from 'core/behaviour/EntityBehaviours.types'
import type {EntityBehaviourLink}                      from 'core/behaviour/properties/EntityBehaviourLink'
import type {PossibleGroupName}                        from 'core/entityTypes'
import type {PossibleEnglishName as EntityName}        from 'core/entity/Entities.types'
import type {Loader}                                   from 'util/loader/Loader'

import {isInProduction}                  from 'variables'
import {EntityBehaviourContainer}        from 'core/behaviour/EntityBehaviour.container'
import {EntityBehaviourIsInOnlyProvider} from 'core/behaviour/properties/EntityBehaviourIsInOnly.provider'
import {EntityBehaviourLinkProvider}     from 'core/behaviour/properties/EntityBehaviourLink.provider'
import {Import}                          from 'util/DynamicImporter'

/**
 * @dependsOn<{@link EntityLoader}>
 * @singleton
 */
export class EntityBehaviourLoader
    implements Loader<ReadonlyMap<PossibleTranslationKeys, EntityBehaviour>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityBehaviourLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleTranslationKeys, EntityBehaviour>

    public load(): ReadonlyMap<PossibleTranslationKeys, EntityBehaviour> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleTranslationKeys, EntityBehaviour>()
        let index = file.length
        while (index-- > 0) {
            const reference = createContent(file[index] as Content,)
            references.set(reference.translationKey, reference,)
        }

        if (!isInProduction)
            console.info(
                '-------------------- "entity behaviour" has been loaded --------------------\n',
                references,
                '\n-------------------- "entity behaviour" has been loaded --------------------',
            )// temporary console.lo

        return this.#map = references
    }

}


interface Content {

    acronym: PossibleAcronym
    translationKey: PossibleTranslationKeys

    isOnlineOnly: boolean
    isMultiplayerOnly: boolean

    link_group: NullOr<PossibleGroupName>
    link_entity: NullOr<EntityName>

}

function createContent(content: Content,): EntityBehaviour {
    return new EntityBehaviourContainer(
        content.acronym,
        content.translationKey,
        EntityBehaviourIsInOnlyProvider.get.get(content.isOnlineOnly, content.isMultiplayerOnly,),
        createLinks(content,),
    )
}

function createLinks(content: Content,): EntityBehaviourLink {
    const group = content.link_group
    const entity = content.link_entity

    if (group == null && entity == null)
        return EntityBehaviourLinkProvider.get.null
    return EntityBehaviourLinkProvider.get.get([group, entity,],
        group == null ? CommonLazy.NULL : lazy(() => ({}),),//TODO implement the get entity by group name once it is implemented
        entity == null ? CommonLazy.NULL : lazy(() => Import.EntityLoader.get.load().get(entity,)!,),
    )
}
