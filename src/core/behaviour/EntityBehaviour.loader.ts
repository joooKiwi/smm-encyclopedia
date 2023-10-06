import file from 'resources/compiled/Entity behaviour.json'

import type {EntityBehaviour}                          from 'core/behaviour/EntityBehaviour'
import type {EntityBehaviourTemplate}                  from 'core/behaviour/EntityBehaviour.template'
import type {PossibleAcronym, PossibleTranslationKeys} from 'core/behaviour/EntityBehaviours.types'
import type {PossibleGroupName}                        from 'core/entityTypes'
import type {PossibleEnglishName as EntityName}        from 'core/entity/Entities.types'
import type {Loader}                                   from 'util/loader/Loader'

import {isInProduction} from 'variables'
import {createContent}  from 'core/behaviour/EntityBehaviour.creator'

/** @singleton */
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
            const reference = createContent(createTemplate(file[index] as Content,),)
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

function createTemplate(content: Content,): EntityBehaviourTemplate {
    return {
        acronym: content.acronym,
        translationKey: content.translationKey,
        isOnly: {
            online: content.isOnlineOnly,
            multiplayer: content.isMultiplayerOnly,
        },
        links: {
            group: content.link_group,
            entity: content.link_entity,
        },
    }
}
