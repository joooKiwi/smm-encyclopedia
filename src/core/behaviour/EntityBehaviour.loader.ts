import file from 'resources/compiled/Entity behaviour.json'

import type {Array, NullOrString} from '@joookiwi/type'
import {forEachByArray}           from '@joookiwi/collection'
import {CommonLazy, lazy}         from '@joookiwi/lazy'

import type {EntityBehaviour}                          from 'core/behaviour/EntityBehaviour'
import type {PossibleAcronym, PossibleTranslationKeys} from 'core/behaviour/EntityBehaviours.types'
import type {PossibleGroupName}                        from 'core/entityTypes'
import type {PossibleEnglishName as EntityName}        from 'core/entity/Entities.types'
import type {Loader}                                   from 'util/loader/Loader'

import {isInProduction}           from 'variables'
import {EntityBehaviourContainer} from 'core/behaviour/EntityBehaviour.container'
import {Import}                   from 'util/DynamicImporter'

/**
 * @dependsOn<{@link EntityLoader}>
 * @singleton
 */
export class EntityBehaviourLoader
    implements Loader<ReadonlyMap<PossibleTranslationKeys, EntityBehaviour>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityBehaviourLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: ReadonlyMap<PossibleTranslationKeys, EntityBehaviour>

    public load(): ReadonlyMap<PossibleTranslationKeys, EntityBehaviour> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleTranslationKeys, EntityBehaviour>()
        forEachByArray(file as Array<Content>, content => {
            const reference = createReference(content,)
            references.set(reference.translationKey, reference,)
        },)

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

    link_group: NullOrString<PossibleGroupName>
    link_entity: NullOrString<EntityName>

}

function createReference(content: Content,): EntityBehaviour {
    const group = content.link_group
    const entity = content.link_entity

    return new EntityBehaviourContainer(
        content.acronym,
        content.translationKey,
        content.isOnlineOnly, content.isMultiplayerOnly,
        group == null ? CommonLazy.NULL : lazy(() => ({}),),//TODO implement the get entity by group name once it is implemented
        entity == null ? CommonLazy.NULL : lazy(() => Import.EntityLoader.get.load().get(entity,)!,),
    )
}
