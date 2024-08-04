import type {ClearConditionEntityImages}       from 'core/entity/ClearConditionEntityImages'
import type {ImageName_ClearCondition}                                                                                                                                    from 'core/entity/file/EntityImageFile.clearCondition'
import type {ClearConditionImage}                                                                                                                                                                  from 'core/entity/images/clearCondition/ClearConditionImage'

import * as FileCreator                   from 'core/entity/file/fileCreator'
import {ClearConditionImageContainer}     from 'core/entity/images/clearCondition/ClearConditionImage.container'
import {GameStyles}                       from 'core/gameStyle/GameStyles'

export function clearConditionImages(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],
    ],),)
}


export function clearConditionInSmbImages(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],],),)
}
export function clearConditionInSmb3Images(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],],),)
}
export function clearConditionInSmwImages(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],],),)
}
export function clearConditionInNsmbuImages(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],],),)
}
export function clearConditionInSm3dwImages(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],],),)
}


export function clearConditionInSmbAndSmb3Images(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name,  GameStyles.SUPER_MARIO_BROS_3,),],],
    ],),)
}
export function clearConditionInSmwAndNsmbuImages(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
    ],),)
}


export function clearConditionInNotSmbImages(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],
    ],),)
}
export function clearConditionInNotSmwImages(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],
    ],),)
}
export function clearConditionInNotSm3dwImages(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
    ],),)
}


export function clearConditionInNotSmwAndNsmbuImages(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],
    ],),)
}
export function clearConditionInNotSmwAndSm3dwImages(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
    ],),)
}

export function clearConditionInNotNsmbuAndSm3dwImages(entity: ClearConditionEntityImages, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
    ],),)
}
