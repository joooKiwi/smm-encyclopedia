import {CommonLazy, lazy} from '@joookiwi/lazy'

import type {EntityBehaviour}             from 'core/behaviour/EntityBehaviour'
import type {EntityBehaviourTemplate}     from 'core/behaviour/EntityBehaviour.template'
import type {EntityBehaviourLink}         from 'core/behaviour/properties/EntityBehaviourLink'
import type {EntityBehaviourLinkTemplate} from 'core/behaviour/properties/EntityBehaviourLink.template'

import {EntityBehaviourContainer}        from 'core/behaviour/EntityBehaviour.container'
import {EntityBehaviourIsInOnlyProvider} from 'core/behaviour/properties/EntityBehaviourIsInOnly.provider'
import {EntityBehaviourLinkProvider}     from 'core/behaviour/properties/EntityBehaviourLink.provider'
import {Import}                          from 'util/DynamicImporter'

export function createContent(template: EntityBehaviourTemplate,): EntityBehaviour {
    return new EntityBehaviourContainer(
        template.acronym,
        template.translationKey,
        EntityBehaviourIsInOnlyProvider.get.get(template.isOnly.online, template.isOnly.multiplayer,),
        createLinks(template.links,),
    )
}

function createLinks(template: EntityBehaviourLinkTemplate,): EntityBehaviourLink {
    const group = template.group
    const entity = template.entity

    if (group == null && entity == null)
        return EntityBehaviourLinkProvider.get.null
    return EntityBehaviourLinkProvider.get.get([group, entity,],
        group == null ? CommonLazy.NULL : lazy(() => ({}),),//TODO implement the get entity by group name once it is implemented
        entity == null ? CommonLazy.NULL : lazy(() => Import.Entities.CompanionEnum.get.getValueByName(entity,).reference,),
    )
}
