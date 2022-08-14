import {PossibleGroupName}                 from '../../entityTypes';
import {PossibleEnglishName as EntityName} from '../../entity/Entities.types';

export interface EntityBehaviourLinkTemplate {

    group: | PossibleGroupName | null

    entity: | EntityName | null

}
