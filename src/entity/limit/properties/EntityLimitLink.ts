import {Entity} from '../../simple/Entity';

export interface EntityLimitLink<GROUP_NAME extends object = object,
    ENTITIES extends EntityLimitLinkOfEntities = EntityLimitLinkOfEntities, > {

    get groupName(): GROUP_NAME


    get entities(): ENTITIES

    get entity1(): ENTITIES[0]

    get entity2(): ENTITIES[1]

}

export type EntityLimitLinkOfEntities = readonly [] | readonly [Entity,] | readonly [Entity, Entity,];
