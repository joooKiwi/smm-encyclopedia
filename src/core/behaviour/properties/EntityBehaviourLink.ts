import type {Entity} from '../../entity/Entity'
import type {NullOr} from '../../../util/types'

export interface EntityBehaviourLink<GROUP extends PossibleGroup = PossibleGroup, ENTITY extends NullOr<Entity> = NullOr<Entity>, > {

    get groupLink(): GROUP

    get entityLink(): ENTITY

}

export type PossibleGroup = NullOr<object>//TODO once there is group, replace the occurrences with NullOr<EntityGroup>
