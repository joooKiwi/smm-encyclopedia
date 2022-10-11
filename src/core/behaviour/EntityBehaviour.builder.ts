import type {Builder}                                   from '../../util/builder/Builder'
import type {Entity}                                    from '../entity/Entity'
import type {EntityBehaviour}                           from './EntityBehaviour'
import type {EntityBehaviourIsInOnly}                   from './properties/EntityBehaviourIsInOnly'
import type {EntityBehaviourLink}                       from './properties/EntityBehaviourLink'
import type {EntityBehaviourLinkTemplate}               from './properties/EntityBehaviourLink.template'
import type {EntityBehaviourTemplate}                   from './EntityBehaviour.template'
import type {IsInOnlyTemplate}                          from './properties/IsInOnlyTemplate'
import type {PossibleEnglishName as PossibleEntityName} from '../entity/Entities.types'
import type {PossibleGroupName}                         from '../entityTypes'

import {DelayedObjectHolderContainer}    from '../../util/holder/DelayedObjectHolder.container'
import {EntityBehaviourContainer}        from './EntityBehaviour.container'
import {EntityBehaviourIsInOnlyProvider} from './properties/EntityBehaviourIsInOnly.provider'
import {EntityBehaviourLinkProvider}     from './properties/EntityBehaviourLink.provider'
import {Import}                          from '../../util/DynamicImporter'
import {ObjectHolders}                   from '../../util/holder/objectHolders'
import {TemplateBuilder}                 from '../_template/Template.builder'

export class EntityBehaviourBuilder
    extends TemplateBuilder<EntityBehaviourTemplate, EntityBehaviour>
    implements Builder<EntityBehaviour> {

    public constructor(templateBuilder: Builder<EntityBehaviourTemplate>,) {
        super(templateBuilder)
    }

    //region -------------------- Builder helper methods --------------------

    static #createIsInOnly({online, multiplayer,}: IsInOnlyTemplate,): EntityBehaviourIsInOnly {
        return EntityBehaviourIsInOnlyProvider.get.get(online, multiplayer,)
    }


    static #getEntityGroupByName(name: PossibleGroupName,): object {
        return {}//TODO implement this methods when the group name is added.
    }

    static #getEntityByName(name: PossibleEntityName,): Entity {
        return Import.Entities.getValue(name).reference
    }

    static #createLinks({group, entity,}: EntityBehaviourLinkTemplate,): EntityBehaviourLink {
        const isGroupNull = group == null
        const isEntityNull = entity == null


        if (isGroupNull && isEntityNull)
            return EntityBehaviourLinkProvider.get.null
        return EntityBehaviourLinkProvider.get.get([group, entity,],
            isGroupNull ? ObjectHolders.NULL : new DelayedObjectHolderContainer(() => EntityBehaviourBuilder.#getEntityGroupByName(group)),
            isEntityNull ? ObjectHolders.NULL : new DelayedObjectHolderContainer(() => this.#getEntityByName(entity)),
        )
    }

    //endregion -------------------- Builder helper methods --------------------

    public build(): EntityBehaviour {
        const template = this.template

        return new EntityBehaviourContainer(
            template.acronym,
            template.translationKey,
            EntityBehaviourBuilder.#createIsInOnly(template.isOnly),
            EntityBehaviourBuilder.#createLinks(template.links),
        )
    }

}
