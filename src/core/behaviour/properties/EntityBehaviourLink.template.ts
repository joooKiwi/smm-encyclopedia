import type {NullOr}                            from '../../../util/types'
import type {PossibleGroupName}                 from '../../entityTypes'
import type {PossibleEnglishName as EntityName} from '../../entity/Entities.types'

export interface EntityBehaviourLinkTemplate {

    group: NullOr<PossibleGroupName>

    entity: NullOr<EntityName>

}
