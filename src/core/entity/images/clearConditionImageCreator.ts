import type {ClearConditionEntityImages}       from 'core/entity/ClearConditionEntityImages'
import type {ImageName_ClearCondition}                                                                                                                                    from 'core/entity/file/EntityImageFile.clearCondition'
import type {ClearConditionImage}                                                                                                                                                                  from 'core/entity/images/clearCondition/ClearConditionImage'

import * as FileCreator                   from 'core/entity/file/fileCreator'
import {ClearConditionImageContainer}     from 'core/entity/images/clearCondition/ClearConditionImage.container'
import {GameStyles}                       from 'core/gameStyle/GameStyles'

export function all(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],
    ],),)
}


export function onlySmb(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],],),)
}
export function onlySmb3(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],],),)
}
export function onlySmw(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],],),)
}
export function onlyNsmbu(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],],),)
}
export function onlySm3dw(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],],),)
}


export function onlySmbAndSmb3(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name,  GameStyles.SUPER_MARIO_BROS_3,),],],
    ],),)
}
export function onlySmwAndNsmbu(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
    ],),)
}


export function notSmb(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],
    ],),)
}
export function notSmw(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],
    ],),)
}
export function notSm3dw(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
    ],),)
}


export function notSmwAndNsmbu(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],
    ],),)
}
export function notSmwAndSm3dw(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
    ],),)
}

export function notNsmbuAndSm3dw(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
    ],),)
}
