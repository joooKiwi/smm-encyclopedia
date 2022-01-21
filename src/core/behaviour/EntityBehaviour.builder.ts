import type {Builder}                 from '../../util/builder/Builder';
import type {EntityBehaviour}         from './EntityBehaviour';
import type {EntityBehaviourTemplate} from './EntityBehaviour.template';

import {EntityBehaviourContainer}         from './EntityBehaviour.container';
import {EntityBehaviourIsInOnlyContainer} from './properties/EntityBehaviourIsInOnly.container';
import {TemplateBuilder}                  from '../_template/Template.builder';
import {EntityBehaviourLinkContainer}     from './properties/EntityBehaviourLink.container';

export class EntityBehaviourBuilder
    extends TemplateBuilder<EntityBehaviourTemplate, EntityBehaviour>
    implements Builder<EntityBehaviour> {

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
