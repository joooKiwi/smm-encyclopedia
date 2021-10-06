import {Entity} from '../../simple/Entity';

export interface EntityBehaviourLink {

    get groupLink(): | object | null

    get entityLink(): | Entity | null

}
