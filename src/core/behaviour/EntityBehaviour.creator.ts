import type {PossibleGroupName}                         from 'core/entityTypes'
import type {EntityBehaviour}                           from 'core/behaviour/EntityBehaviour'
import type {EntityBehaviourTemplate}                   from 'core/behaviour/EntityBehaviour.template'
import type {EntityBehaviourIsInOnly}                   from 'core/behaviour/properties/EntityBehaviourIsInOnly'
import type {EntityBehaviourLink}                       from 'core/behaviour/properties/EntityBehaviourLink'
import type {EntityBehaviourLinkTemplate}               from 'core/behaviour/properties/EntityBehaviourLink.template'
import type {IsInOnlyTemplate}                          from 'core/behaviour/properties/IsInOnlyTemplate'
import type {PossibleEnglishName as PossibleEntityName} from 'core/entity/Entities.types'
import type {Entity}                                    from 'core/entity/Entity'

import {TemplateCreator}          from 'core/_template/Template.creator'
import {EntityBehaviourContainer} from 'core/behaviour/EntityBehaviour.container'
import {EntityBehaviourIsInOnlyProvider} from 'core/behaviour/properties/EntityBehaviourIsInOnly.provider'
import {EntityBehaviourLinkProvider}     from 'core/behaviour/properties/EntityBehaviourLink.provider'
import {Import}                          from 'util/DynamicImporter'
import {DelayedObjectHolderContainer}    from 'util/holder/DelayedObjectHolder.container'
import {ObjectHolders}                   from 'util/holder/ObjectHolders'

export class EntityBehaviourCreator
    extends TemplateCreator<EntityBehaviourTemplate, EntityBehaviour> {

    public constructor(template: EntityBehaviourTemplate,) {
        super(template)
    }

    //region -------------------- Builder helper methods --------------------

    static #createIsInOnly({online, multiplayer,}: IsInOnlyTemplate,): EntityBehaviourIsInOnly {
        return EntityBehaviourIsInOnlyProvider.get.get(online, multiplayer,)
    }


    static #getEntityGroupByName(name: PossibleGroupName,): object {
        return {}//TODO implement this methods when the group name is added.
    }

    static #getEntityByName(name: PossibleEntityName,): Entity {
        return Import.Entities.getValueByName(name).reference
    }

    static #createLinks({group, entity,}: EntityBehaviourLinkTemplate,): EntityBehaviourLink {
        const isGroupNull = group == null
        const isEntityNull = entity == null


        if (isGroupNull && isEntityNull)
            return EntityBehaviourLinkProvider.get.null
        return EntityBehaviourLinkProvider.get.get([group, entity,],
            isGroupNull ? ObjectHolders.NULL : new DelayedObjectHolderContainer(() => EntityBehaviourCreator.#getEntityGroupByName(group)),
            isEntityNull ? ObjectHolders.NULL : new DelayedObjectHolderContainer(() => this.#getEntityByName(entity)),
        )
    }

    //endregion -------------------- Builder helper methods --------------------

    public create(): EntityBehaviour {
        const template = this.template

        return new EntityBehaviourContainer(
            template.acronym,
            template.translationKey,
            EntityBehaviourCreator.#createIsInOnly(template.isOnly),
            EntityBehaviourCreator.#createLinks(template.links),
        )
    }

}