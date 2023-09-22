import type {PossibleGroupName}                 from 'core/entityTypes'
import type {PossibleEnglishName as EntityName} from 'core/entity/Entities.types'

export interface EntityBehaviourLinkTemplate {

    group: NullOr<PossibleGroupName>

    entity: NullOr<EntityName>

}
