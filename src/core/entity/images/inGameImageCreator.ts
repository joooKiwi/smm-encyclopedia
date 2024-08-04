import type {InGameEntityImages}                                                                                                                     from 'core/entity/InGameEntityImages'
import type {InGameSMM2ImageFile, KoopalingImageName, PossibleInGameSMM2ImageFileName, SimpleImageName_SMM1, ImageName_SMM2, DangerousImageFileName} from 'core/entity/file/EntityImageFile.inGame'
import type {InGameImage_SMM1}                                                                                                                       from 'core/entity/images/inGame/InGameImage_SMM1'
import type {InGameImage_SMM2}                                                                                                                       from 'core/entity/images/inGame/InGameImage_SMM2'

import * as FileCreator            from 'core/entity/file/fileCreator'
import {InGameImage_SMM1Container} from 'core/entity/images/inGame/InGameImage_SMM1.container'
import {InGameImage_SMM2Container} from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {GameStyles}                from 'core/gameStyle/GameStyles'

//region -------------------- In game images (SMM1) --------------------

/**
 * Create a simple {@link InGameImage_SMM1} that has only one image for a single {@link gameStyle}
 *
 * @param entity The {@link InGameEntityImages} reference
 * @param name The image identifier name
 * @param gameStyle The image {@link GameStyles}
 */
export function smm1(entity: InGameEntityImages, name: SimpleImageName_SMM1, gameStyle: GameStyles,): InGameImage_SMM1 {
    return new InGameImage_SMM1Container(new Map([[gameStyle, [FileCreator.inGameSMM1Image(entity, name, gameStyle,),],],],),)
}

/**
 * Create a simple {@link InGameImage_SMM1} that has has one image for every {@link GameStyle game style}
 * ({@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3},
 * {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU})
 *
 * @param entity The {@link InGameEntityImages} reference
 * @param name The image identifier name
 */
export function allSmm1(entity: InGameEntityImages, name: SimpleImageName_SMM1,): InGameImage_SMM1 {
    return new InGameImage_SMM1Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.inGameSMM1Image(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.inGameSMM1Image(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.inGameSMM1Image(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.inGameSMM1Image(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
    ],),)
}

//endregion -------------------- In game images (SMM1) --------------------
//region -------------------- In game images (SMM2) --------------------

/**
 * Create a simple {@link InGameImage_SMM2} that is in every 2d style
 * ({@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3},
 * {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU})
 *
 * @param entity The {@link InGameEntityImages} reference
 * @param name The image identifier name
 * @param fileName The image name
 */
export function only2DStyle(entity: InGameEntityImages, name: ImageName_SMM2, fileName: PossibleInGameSMM2ImageFileName,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS, fileName,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS_3, fileName,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_WORLD, fileName,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.inGameImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U, fileName,),],],
    ],))
}

/**
 * Create a simple {@link InGameImage_SMM2} that has only one image for a single {@link gameStyle}
 *
 * @param entity The {@link InGameEntityImages} reference
 * @param name The image identifier name
 * @param gameStyle The image {@link GameStyles}
 * @param fileName The image name
 */
export function all(entity: InGameEntityImages, name: ImageName_SMM2, gameStyle: GameStyles, fileName: PossibleInGameSMM2ImageFileName,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([[gameStyle, [FileCreator.inGameImage(entity, name, gameStyle, fileName,),],],],))
}


/**
 * Create a simple {@link InGameImage_SMM2} that has multiple images for a single {@link gameStyle}
 *
 * @param entity The {@link InGameEntityImages} reference
 * @param name The image identifier name
 * @param gameStyle The image {@link GameStyles}
 * @param fileNames The images' name
 */
export function multiple(entity: InGameEntityImages, name: ImageName_SMM2, gameStyle: GameStyles, fileNames: readonly PossibleInGameSMM2ImageFileName[],): InGameImage_SMM2 {
    const size = fileNames.length
    const newArray = new Array<InGameSMM2ImageFile>(size,)
    let index = size
    while (index-- > 0)
        newArray[index] = FileCreator.inGameImage(entity, name, gameStyle, fileNames[index],)

    return new InGameImage_SMM2Container(new Map([[gameStyle, newArray,],],),)
}

/**
 * Create a simple {@link InGameImage_SMM2} that has multiple images for a multiple {@link gameStyles}
 *
 * @param entity The {@link InGameEntityImages} reference
 * @param name The image identifier name
 * @param gameStyles The image {@link GameStyles}
 * @param fileNames The images' name
 */
export function multipleInMultiple(entity: InGameEntityImages, name: ImageName_SMM2, gameStyles: readonly GameStyles[], fileNames: readonly PossibleInGameSMM2ImageFileName[],): InGameImage_SMM2 {
    const size1 = gameStyles.length
    const size2 = fileNames.length
    const newArray1 = new Array<[GameStyles, InGameSMM2ImageFile[],]>(size1,)
    let index1 = size1
    while (index1-- > 0) {
        const gameStyle = gameStyles[index1]

        const newArray2 = new Array<InGameSMM2ImageFile>(size2,)
        let index2 = size2
        while (index2-- > 0)
            newArray2[index2] = FileCreator.inGameImage(entity, name, gameStyle, fileNames[index2],)

        newArray1[index1] = [gameStyle, newArray2,]
    }

    return new InGameImage_SMM2Container(new Map(newArray1,),)
}

//endregion -------------------- In game images (SMM2) --------------------
//region -------------------- In game images (SMM2 predefined) --------------------

/**
 * Create an {@link InGameImage_SMM2} for the {@link InGameEntityImages.START_BLOCK "start block"} {@link InGameEntityImages entity}
 *
 * @param entity The {@link InGameEntityImages.START_BLOCK} reference
 */
export function startBlock(entity: InGameEntityImages,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.inGameImage(entity, 'Object - StartBlock', GameStyles.SUPER_MARIO_BROS, 'startblock',),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.inGameImage(entity, 'Object - StartBlock', GameStyles.SUPER_MARIO_BROS_3, 'startblock',),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.inGameImage(entity, 'Object - StartBlock', GameStyles.SUPER_MARIO_WORLD, 'startblock',),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.inGameImage(entity, 'Object - StartBlock', GameStyles.NEW_SUPER_MARIO_BROS_U, 'startblock',),],],
    ],),)
}


/**
 * Create an {@link InGameImage_SMM2} for the {@link InGameEntityImages.WATER water} {@link InGameEntityImages entity}
 *
 * @param entity The {@link InGameEntityImages.WATER} reference
 */
export function water(entity: InGameEntityImages,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_BROS, 'wait.0',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_BROS, 'wait.1',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_BROS, 'wait.2',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_BROS, 'wait.3',),
        ],],
        [GameStyles.SUPER_MARIO_BROS_3, [
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_BROS_3, 'body.0',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_BROS_3, 'body.1',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_BROS_3, 'body.2',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_BROS_3, 'body.3',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_BROS_3, 'top.0',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_BROS_3, 'top.1',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_BROS_3, 'top.2',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_BROS_3, 'top.3',),
        ],],
        [GameStyles.SUPER_MARIO_WORLD, [
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_WORLD, 'body.0',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_WORLD, 'body.1',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_WORLD, 'body.2',),
            FileCreator.inGameImage(entity, 'Object - WaterHalf', GameStyles.SUPER_MARIO_WORLD, 'body.3',),
        ],],
        //NSMBU is a 3D model
    ],),)
}

/**
 * Create an {@link InGameImage_SMM2} for the {@link InGameEntityImages.LAVA lava} or {@link InGameEntityImages.POISON poison} {@link InGameEntityImages entity}
 *
 * @param entity The {@link InGameEntityImages.LAVA} or {@link InGameEntityImages.POISON} reference
 * @param name The name of the images
 */
export function dangerousLiquid(entity: InGameEntityImages, name: DangerousImageFileName,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [
            FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS, 'wait.0',),
            FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS, 'wait.1',),
            FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS, 'wait.2',),
            FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS, 'wait.3',),
        ],],
        [GameStyles.SUPER_MARIO_BROS_3, [
            FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS_3, 'wait.0',),
            FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS_3, 'wait.1',),
            FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS_3, 'wait.2',),
            FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS_3, 'wait.3',),
        ],],
        [GameStyles.SUPER_MARIO_WORLD, [
            FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_WORLD, 'wait.0',),
            FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_WORLD, 'wait.1',),
            FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_WORLD, 'wait.2',),
            FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_WORLD, 'wait.3',),
        ],],
        //NSMBU is a 3D model
    ],),)
}


/**
 * Create an {@link InGameImage_SMM2} for the {@link InGameEntityImages.BABY_BLOOPER "baby blooper"} projectile {@link InGameEntityImages entity}
 *
 * @param entity The {@link InGameEntityImages.BABY_BLOOPER} projectile reference
 */
export function babyBlooper(entity: InGameEntityImages,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [
            FileCreator.inGameImage(entity, 'Enemy - GessoMini', GameStyles.SUPER_MARIO_BROS, 'wait.0',),
            FileCreator.inGameImage(entity, 'Enemy - GessoMini', GameStyles.SUPER_MARIO_BROS, 'wait.1',),
        ],],
        [GameStyles.SUPER_MARIO_BROS_3, [
            FileCreator.inGameImage(entity, 'Enemy - GessoMini', GameStyles.SUPER_MARIO_BROS_3, 'wait.0',),
            FileCreator.inGameImage(entity, 'Enemy - GessoMini', GameStyles.SUPER_MARIO_BROS_3, 'wait.1',),
        ],],
        [GameStyles.SUPER_MARIO_WORLD, [
            FileCreator.inGameImage(entity, 'Enemy - GessoMini', GameStyles.SUPER_MARIO_WORLD, 'wait.0',),
            FileCreator.inGameImage(entity, 'Enemy - GessoMini', GameStyles.SUPER_MARIO_WORLD, 'wait.1',),
        ],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.inGameImage(entity, 'Enemy - GessoMini', GameStyles.NEW_SUPER_MARIO_BROS_U, 'gesso_mini_Alb.000',),],],
    ],),)
}


/**
 * Create an {@link InGameImage_SMM2} for the {@link InGameEntityImages.LARRY_PROJECTILE Larry}, {@link InGameEntityImages.IGGY_PROJECTILE Iggy},
 * {@link InGameEntityImages.ROY_PROJECTILE Roy}, {@link InGameEntityImages.MORTON_PROJECTILE Morton}
 * or {@link InGameEntityImages.LUDWIG_PROJECTILE Ludwig} projectile {@link InGameEntityImages entity}
 *
 * @param entity The {@link InGameEntityImages.LARRY_PROJECTILE Larry}, {@link InGameEntityImages.IGGY_PROJECTILE Iggy}, {@link InGameEntityImages.ROY_PROJECTILE Roy}, {@link InGameEntityImages.MORTON_PROJECTILE Morton} or {@link InGameEntityImages.LUDWIG_PROJECTILE Ludwig} projectile reference
 * @param name The name of the images
 */
export function koopalingProjectile(entity: InGameEntityImages, name: KoopalingImageName,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS, 'effect.0',),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS_3, 'effect.0',),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_WORLD, 'effect.0',),],],
    ],),)
}

/**
 * Create an {@link InGameImage_SMM2} for the {@link InGameEntityImages.CANDY_RING_THROWN_BY_A_WENDY "candy ring"} {@link InGameEntityImages entity}
 *
 * @param entity The {@link InGameEntityImages.CANDY_RING_THROWN_BY_A_WENDY} reference
 */
export function candyRing(entity: InGameEntityImages,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [
            FileCreator.inGameImage(entity, 'Enemy - Wendy', GameStyles.SUPER_MARIO_BROS, 'ring.0',),
            FileCreator.inGameImage(entity, 'Enemy - Wendy', GameStyles.SUPER_MARIO_BROS, 'ring.1',),
            FileCreator.inGameImage(entity, 'Enemy - Wendy', GameStyles.SUPER_MARIO_BROS, 'ring.2',),
        ],],
        [GameStyles.SUPER_MARIO_BROS_3, [
            FileCreator.inGameImage(entity, 'Enemy - Wendy', GameStyles.SUPER_MARIO_BROS_3, 'ring.0',),
            FileCreator.inGameImage(entity, 'Enemy - Wendy', GameStyles.SUPER_MARIO_BROS_3, 'ring.1',),
            FileCreator.inGameImage(entity, 'Enemy - Wendy', GameStyles.SUPER_MARIO_BROS_3, 'ring.2',),
        ],],
        [GameStyles.SUPER_MARIO_WORLD, [
            FileCreator.inGameImage(entity, 'Enemy - Wendy', GameStyles.SUPER_MARIO_WORLD, 'ring.0',),
            FileCreator.inGameImage(entity, 'Enemy - Wendy', GameStyles.SUPER_MARIO_WORLD, 'ring.1',),
            FileCreator.inGameImage(entity, 'Enemy - Wendy', GameStyles.SUPER_MARIO_WORLD, 'ring.2',),
        ],],
        // [GameStyles.NEW_SUPER_MARIO_BROS_U, [new InGameSMM2ImageFileContainer(entity, 'Wendy', 'Enemy', GameStyles.NEW_SUPER_MARIO_BROS_U, '',),],],
    ],),)
}

/**
 * Create an {@link InGameImage_SMM2} for the {@link InGameEntityImages.MAGIC_BALL_THROWN_BY_A_LEMMY "magic ball"} {@link InGameEntityImages entity}
 *
 * @param entity The {@link InGameEntityImages.MAGIC_BALL_THROWN_BY_A_LEMMY} reference
 */
export function magicBall(entity: InGameEntityImages,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.inGameImage(entity, 'Enemy - Lemmy', GameStyles.SUPER_MARIO_BROS, 'ball.0',),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.inGameImage(entity, 'Enemy - Lemmy', GameStyles.SUPER_MARIO_BROS_3, 'ball.0',),],],
        [GameStyles.SUPER_MARIO_WORLD, [
            FileCreator.inGameImage(entity, 'Enemy - Lemmy', GameStyles.SUPER_MARIO_WORLD, 'ball.0',),
            FileCreator.inGameImage(entity, 'Enemy - Lemmy', GameStyles.SUPER_MARIO_WORLD, 'ball_specular',),
        ],],
        // [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.inGameSMM2Image(entity, 'Enemy - Lemmy', GameStyles.NEW_SUPER_MARIO_BROS_U, 'lemmy_ball',),],],
    ],),)
}

/**
 * Create an {@link InGameImage_SMM2} for the {@link InGameEntityImages.MORTON_GROUND_PROJECTILE "Morton ground projectile"} {@link InGameEntityImages entity}
 *
 * @param entity The {@link InGameEntityImages.MORTON_GROUND_PROJECTILE} reference
 */
export function mortonGroundProjectile(entity: InGameEntityImages,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [
            FileCreator.inGameImage(entity, 'Enemy - Morton', GameStyles.SUPER_MARIO_BROS, 'fire.0',),
            FileCreator.inGameImage(entity, 'Enemy - Morton', GameStyles.SUPER_MARIO_BROS, 'fire.1',),
        ],],
        [GameStyles.SUPER_MARIO_BROS_3, [
            FileCreator.inGameImage(entity, 'Enemy - Morton', GameStyles.SUPER_MARIO_BROS_3, 'fire.0',),
            FileCreator.inGameImage(entity, 'Enemy - Morton', GameStyles.SUPER_MARIO_BROS_3, 'fire.1',),
            //Has unused fire.2 for SMB3
        ],],
        [GameStyles.SUPER_MARIO_WORLD, [
            FileCreator.inGameImage(entity, 'Enemy - Morton', GameStyles.SUPER_MARIO_WORLD, 'fire.0',),
            FileCreator.inGameImage(entity, 'Enemy - Morton', GameStyles.SUPER_MARIO_WORLD, 'fire.1',),
        ],],
        // [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.inGameSMM2Image(entity, 'Enemy - Morton', GameStyles.NEW_SUPER_MARIO_BROS_U, '',),],],
    ],),)
}

/**
 * Create an {@link InGameImage_SMM2} for the {@link InGameEntityImages.LARRY_WAND Larry}, {@link InGameEntityImages.IGGY_WAND Iggy},
 * {@link InGameEntityImages.WENDY_WAND Wendy}, {@link InGameEntityImages.LEMMY_WAND Lemmy},
 * {@link InGameEntityImages.ROY_WAND Roy}, {@link InGameEntityImages.MORTON_WAND Morton}
 * or {@link InGameEntityImages.LUDWIG_WAND Ludwig} wand {@link InGameEntityImages entity}
 *
 * @param entity The {@link InGameEntityImages.LARRY_WAND Larry}, {@link InGameEntityImages.IGGY_WAND Iggy}, {@link InGameEntityImages.WENDY_WAND Wendy}, {@link InGameEntityImages.LEMMY_WAND Lemmy}, {@link InGameEntityImages.ROY_WAND Roy}, {@link InGameEntityImages.MORTON_WAND Morton} or {@link InGameEntityImages.LUDWIG_WAND Ludwig} wand reference
 * @param name The name of the images
 */
export function koopalingWand(entity: InGameEntityImages, name: KoopalingImageName,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS, 'wand',),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS_3, 'wand',),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_WORLD, 'wand',),],],
        // [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.inGameSMM2Image(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U, `${fileName.toLowercase()}_magic_wand`,),],],
    ],),)
}


/**
 * Create an {@link InGameImage_SMM2} for the {@link InGameEntityImages.BUBBLE bubble} {@link InGameEntityImages entity}
 *
 * @param entity The {@link InGameEntityImages.BUBBLE} reference
 */
export function bubble(entity: InGameEntityImages,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.inGameImage(entity, 'Object - Balloon', GameStyles.SUPER_MARIO_BROS, 'balloon.0',),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.inGameImage(entity, 'Object - Balloon', GameStyles.SUPER_MARIO_BROS_3, 'balloon.0',),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.inGameImage(entity, 'Object - Balloon', GameStyles.SUPER_MARIO_WORLD, 'balloon.0',),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [
            FileCreator.inGameImage(entity, 'Object - Balloon', GameStyles.NEW_SUPER_MARIO_BROS_U, 'balloon.0',),
            FileCreator.inGameImage(entity, 'Object - Balloon', GameStyles.NEW_SUPER_MARIO_BROS_U, 'balloon2.0',),
        ],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.inGameImage(entity, 'Object - Balloon', GameStyles.SUPER_MARIO_3D_WORLD, 'TractorBubble_Alb',),],],
    ],),)
}

//endregion -------------------- In game images (SMM2 predefined) --------------------
