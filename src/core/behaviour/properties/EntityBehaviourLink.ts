import type {Entity} from '../../entity/Entity'

export interface EntityBehaviourLink<GROUP extends PossibleGroup = PossibleGroup, ENTITY extends PossibleEntity = PossibleEntity, > {

    get groupLink(): GROUP

    get entityLink(): ENTITY

}

export type PossibleGroup = | object | null
export type PossibleEntity = | Entity | null