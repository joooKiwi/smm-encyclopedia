import type {Entity} from '../../entity/Entity';

export interface EntityBehaviourLink {

    get groupLink(): | object | null

    get entityLink(): | Entity | null

}
