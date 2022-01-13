import type {Builder}                 from '../../util/Builder';
import type {Entity}                  from '../entity/Entity';
import type {EntityBehaviour}         from './EntityBehaviour';
import type {EntityBehaviourTemplate} from './EntityBehaviour.template';

import {EntityBehaviourContainer}         from './EntityBehaviour.container';
import {EntityBehaviourIsInOnlyContainer} from './properties/EntityBehaviourIsInOnly.container';
import {TemplateBuilder}                  from '../_template/Template.builder';
import {EntityBehaviourLinkContainer}     from './properties/EntityBehaviourLink.container';

export class EntityBehaviourBuilder
    extends TemplateBuilder<EntityBehaviourTemplate, EntityBehaviour>
    implements Builder<EntityBehaviour> {

    //region -------------------- External object references --------------------

    public static entitiesMap: ReadonlyMap<string, Entity>;

    //endregion -------------------- External object references --------------------

    public constructor(templateBuilder: Builder<EntityBehaviourTemplate>,) {
        super(templateBuilder);
    }

    public build(): EntityBehaviour {
        const template = this.template;
        const {isOnly: isOnlyTemplate, links: linkTemplate,} = template;

        return new EntityBehaviourContainer(
            template.acronym,
            template.translationKey,
            EntityBehaviourIsInOnlyContainer.get(isOnlyTemplate.online, isOnlyTemplate.multiplayer,),
            EntityBehaviourLinkContainer.get(linkTemplate.group, linkTemplate.entity,),
        );
    }

}
