import type {Builder}                 from '../../util/Builder';
import type {DebugEntityReferences}   from '../simple/EntityLoader';
import type {EntityBehaviour}         from './EntityBehaviour';
import type {EntityBehaviourTemplate} from './EntityBehaviour.template';

import {EntityBehaviourContainer}         from './EntityBehaviourContainer';
import {EntityBehaviourIsInOnlyContainer} from './properties/EntityBehaviourIsInOnlyContainer';
import {TemplateBuilder}                  from '../TemplateBuilder';
import {EntityBehaviourLinkContainer}     from './properties/EntityBehaviourLinkContainer';

export class EntityBehaviourBuilder
    extends TemplateBuilder<EntityBehaviourTemplate, EntityBehaviour>
    implements Builder<EntityBehaviour> {

    //region ---------- external object references ----------

    public static entitiesMap: Map<string, DebugEntityReferences>;

    //endregion ---------- external object references ----------

    public constructor(template: EntityBehaviourTemplate,) {
        super(template);
    }

    public build(): EntityBehaviour {
        const {isOnly: isOnlyTemplate, links: linkTemplate,} = this.template;

        return new EntityBehaviourContainer(
            this.template.acronym,
            this.template.translationKey,
            EntityBehaviourIsInOnlyContainer.get(isOnlyTemplate.online, isOnlyTemplate.multiplayer,),
            EntityBehaviourLinkContainer.get(linkTemplate.group, linkTemplate.entity,),
        );
    }

}