import {Entity} from '../../simple/Entity';

export interface EntityLimitLink<GROUP_NAME extends object = object,
    ENTITY_NAME extends object = object, > {

    get groupName(): GROUP_NAME

    get entityName(): ENTITY_NAME

}
