import type {Entity} from 'core/entity/Entity'
import type {NullOr} from 'util/types/nullable'

export interface EntityBehaviourLink<GROUP extends PossibleGroup = PossibleGroup, ENTITY extends NullOr<Entity> = NullOr<Entity>, > {

    get groupLink(): GROUP

    get entityLink(): ENTITY

}

export type PossibleGroup = NullOr<object>//TODO once there is group, replace the occurrences with NullOr<EntityGroup>
