import type {Entities}                                                                                                                                                                             from 'core/entity/Entities'
import type {EntityImageFile}                                                                                                                                                                      from 'core/entity/file/EntityImageFile'
import type {EditorImageFile}                                                                                                                                                                      from 'core/entity/file/EntityImageFile.editor'
import type {ClearConditionImageFile, ImageName_ClearCondition}                                                                                                                                    from 'core/entity/file/EntityImageFile.clearCondition'
import type {InGameImageFile, InGameSMM2ImageFile, KoopalingImageName, PossibleInGameSMM2ImageFileName, SimpleImageName_SMM1, ImageName_SMM2, DangerousImageFileName}                              from 'core/entity/file/EntityImageFile.inGame'
import type {SimpleImageName_BigMushroom_Unused_SMM1, ImageName_UnusedBigMushroom, ImageName_UnusedSMM1Regular, UnusedSMM1BigMushroomImageFile, UnusedSMM1RegularImageFile, ImageName_Unused_SMM1} from 'core/entity/file/EntityImageFile.unused'
import type {ClearConditionImage}                                                                                                                                                                  from 'core/entity/images/clearCondition/ClearConditionImage'
import type {EditorImage}                                                                                                                                                                          from 'core/entity/images/editor/EditorImage'
import type {InGameImage}                                                                                                                                                                          from 'core/entity/images/inGame/InGameImage'
import type {InGameImage_SMM1}                                                                                                                                                                     from 'core/entity/images/inGame/InGameImage_SMM1'
import type {InGameImage_SMM2}                                                                                                                                                                     from 'core/entity/images/inGame/InGameImage_SMM2'
import type {UniqueImage}                                                                                                                                                                          from 'core/entity/images/unique/UniqueImage'
import type {UnusedImage_BigMushroom}                                                                                                                                                              from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {UnusedImage_Regular}                                                                                                                                                                  from 'core/entity/images/unused/UnusedImage_Regular'

import * as FileCreator                   from 'core/entity/file/fileCreator'
import {ClearConditionImageContainer}     from 'core/entity/images/clearCondition/ClearConditionImage.container'
import {InGameImage_SMM1Container}        from 'core/entity/images/inGame/InGameImage_SMM1.container'
import {InGameImage_SMM2Container}        from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {EmptyUniqueImage}                 from 'core/entity/images/unique/EmptyUniqueImage'
import {UniqueImageContainer}             from 'core/entity/images/unique/UniqueImage.container'
import {UnusedImage_BigMushroomContainer} from 'core/entity/images/unused/UnusedImage_BigMushroom.container'
import {UnusedImage_RegularContainer}     from 'core/entity/images/unused/UnusedImage_Regular.container'
import {GameStyles}                       from 'core/gameStyle/GameStyles'

//region -------------------- Unique images --------------------

//region -------------------- Unique images (interpreted) --------------------

/**
 * Create a simple {@link UniqueImage} from the {@link editorImage} provided
 *
 * @param entity The entity reference (to help debug)
 * @param editorImage The {@link EditorImage} file for the {@link entity}
 * @param clearConditionImage The {@link ClearConditionImage} file for the {@link entity}
 * @param inGameImage The {@link InGameImage} file for the {@link entity}
 * @note It can throw a warning if the images are empty
 */
export function uniqueImageFromEditor(entity: Entities, editorImage: EditorImage, clearConditionImage: ClearConditionImage, inGameImage: InGameImage,): UniqueImage {
    const images = new Map<GameStyles, readonly EntityImageFile[]>()

    const smbImages = editorImage.get(GameStyles.SUPER_MARIO_BROS,)
    if (smbImages.length !== 0)
        images.set(GameStyles.SUPER_MARIO_BROS, smbImages,)

    const smb3Images = editorImage.get(GameStyles.SUPER_MARIO_BROS_3,)
    if (smb3Images.length !== 0)
        images.set(GameStyles.SUPER_MARIO_BROS_3, smb3Images,)

    const smwImages = editorImage.get(GameStyles.SUPER_MARIO_WORLD,)
    if (smwImages.length !== 0)
        images.set(GameStyles.SUPER_MARIO_WORLD, smwImages,)

    const nsmbuImages = editorImage.get(GameStyles.NEW_SUPER_MARIO_BROS_U,)
    if (nsmbuImages.length !== 0)
        images.set(GameStyles.NEW_SUPER_MARIO_BROS_U, nsmbuImages,)

    const sm3dwImages = editorImage.get(GameStyles.SUPER_MARIO_3D_WORLD,)
    if (sm3dwImages.length !== 0)
        images.set(GameStyles.SUPER_MARIO_3D_WORLD, sm3dwImages,)

    if (images.size !== 0)
        return new UniqueImageContainer(editorImage, clearConditionImage, inGameImage, images,)

    console.warn(`The images on the "Entities.${entity.name}" return an empty unique image from the editor,`,)
    return EmptyUniqueImage.get
}

/**
 * Create a simple {@link UniqueImage} from the {@link clearConditionImage} provided
 *
 * @param entity The entity reference (to help debug)
 * @param editorImage The {@link EditorImage} file for the {@link entity}
 * @param clearConditionImage The {@link ClearConditionImage} file for the {@link entity}
 * @param inGameImage The {@link InGameImage} file for the {@link entity}
 * @note It can throw a warning if the images are empty
 */
export function uniqueImageFromClearCondition(entity: Entities, editorImage: EditorImage, clearConditionImage: ClearConditionImage, inGameImage: InGameImage,): UniqueImage {
    const images = clearConditionImage.map

    if (images.size !== 0)
        return new UniqueImageContainer(editorImage, clearConditionImage, inGameImage, images,)

    console.warn(`The images on the "Entities.${entity.name}" return an empty unique image from the clear condition,`,)
    return EmptyUniqueImage.get
}

/**
 * Create a simple {@link UniqueImage} from the {@link inGameImage} provided
 *
 * @param entity The entity reference (to help debug)
 * @param editorImage The {@link EditorImage} file for the {@link entity}
 * @param clearConditionImage The {@link ClearConditionImage} file for the {@link entity}
 * @param inGameImage The {@link InGameImage} file for the {@link entity}
 * @note It can throw a warning if the images are empty
 */
export function uniqueImageFromInGame(entity: Entities, editorImage: EditorImage, clearConditionImage: ClearConditionImage, inGameImage: InGameImage,): UniqueImage {
    const images = new Map<GameStyles, readonly EntityImageFile[]>()

    const smbImages = inGameImage.get(GameStyles.SUPER_MARIO_BROS,)
    if (smbImages.length !== 0)
        images.set(GameStyles.SUPER_MARIO_BROS, smbImages,)

    const smb3Images = inGameImage.get(GameStyles.SUPER_MARIO_BROS_3,)
    if (smb3Images.length !== 0)
        images.set(GameStyles.SUPER_MARIO_BROS_3, smb3Images,)

    const smwImages = inGameImage.get(GameStyles.SUPER_MARIO_WORLD,)
    if (smwImages.length !== 0)
        images.set(GameStyles.SUPER_MARIO_WORLD, smwImages,)

    const nsmbuImages = inGameImage.get(GameStyles.NEW_SUPER_MARIO_BROS_U,)
    if (nsmbuImages.length !== 0)
        images.set(GameStyles.NEW_SUPER_MARIO_BROS_U, nsmbuImages,)

    const sm3dwImages = inGameImage.get(GameStyles.SUPER_MARIO_3D_WORLD,)
    if (sm3dwImages.length !== 0)
        images.set(GameStyles.SUPER_MARIO_3D_WORLD, sm3dwImages,)

    if (images.size !== 0)
        return new UniqueImageContainer(editorImage, clearConditionImage, inGameImage, images,)

    console.warn(`The images on the "Entities.${entity.name}" return an empty unique image from the in game,`,)
    return EmptyUniqueImage.get
}

//endregion -------------------- Unique images (interpreted) --------------------
//region -------------------- Unique images (editor) --------------------

export function uniqueImagesInEditor(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_BROS, image.get(GameStyles.SUPER_MARIO_BROS,),],
        [GameStyles.SUPER_MARIO_BROS_3, image.get(GameStyles.SUPER_MARIO_BROS_3,),],
        [GameStyles.SUPER_MARIO_WORLD, image.get(GameStyles.SUPER_MARIO_WORLD,),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, image.get(GameStyles.NEW_SUPER_MARIO_BROS_U,),],
        [GameStyles.SUPER_MARIO_3D_WORLD, image.get(GameStyles.SUPER_MARIO_3D_WORLD,),],
    ],),)
}


export function uniqueInSmbImagesInEditor(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([[GameStyles.SUPER_MARIO_BROS, image.get(GameStyles.SUPER_MARIO_BROS,),],],),)
}
export function uniqueInSmb3ImagesInEditor(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([[GameStyles.SUPER_MARIO_BROS_3, image.get(GameStyles.SUPER_MARIO_BROS_3,),],],),)
}
export function uniqueInSmwImagesInEditor(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([[GameStyles.SUPER_MARIO_WORLD, image.get(GameStyles.SUPER_MARIO_WORLD,),],],),)
}
export function uniqueInNsmbuImagesInEditor(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([[GameStyles.NEW_SUPER_MARIO_BROS_U, image.get(GameStyles.NEW_SUPER_MARIO_BROS_U,),],],),)
}
export function uniqueInSm3dwImagesInEditor(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([[GameStyles.SUPER_MARIO_3D_WORLD, image.get(GameStyles.SUPER_MARIO_3D_WORLD,),],],),)
}


export function uniqueInSmbAndSmb3ImagesInEditor(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_BROS, image.get(GameStyles.SUPER_MARIO_BROS,),],
        [GameStyles.SUPER_MARIO_BROS_3, image.get(GameStyles.SUPER_MARIO_BROS_3,),],
    ],),)
}
export function uniqueInSmwAndNsmbuImagesInEditor(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_WORLD, image.get(GameStyles.SUPER_MARIO_WORLD,),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, image.get(GameStyles.NEW_SUPER_MARIO_BROS_U,),],
    ],),)
}


export function uniqueInNotSmwImagesInEditor(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_BROS, image.get(GameStyles.SUPER_MARIO_BROS,),],
        [GameStyles.SUPER_MARIO_BROS_3, image.get(GameStyles.SUPER_MARIO_BROS_3,),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, image.get(GameStyles.NEW_SUPER_MARIO_BROS_U,),],
        [GameStyles.SUPER_MARIO_3D_WORLD, image.get(GameStyles.SUPER_MARIO_3D_WORLD,),],
    ],),)
}
export function uniqueInNotSm3dwImagesInEditor(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_BROS, image.get(GameStyles.SUPER_MARIO_BROS,),],
        [GameStyles.SUPER_MARIO_BROS_3, image.get(GameStyles.SUPER_MARIO_BROS_3,),],
        [GameStyles.SUPER_MARIO_WORLD, image.get(GameStyles.SUPER_MARIO_WORLD,),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, image.get(GameStyles.NEW_SUPER_MARIO_BROS_U,),],
    ],),)
}


export function uniqueInNotNsmbuAndSm3dwImagesInEditor(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_BROS, image.get(GameStyles.SUPER_MARIO_BROS,),],
        [GameStyles.SUPER_MARIO_BROS_3, image.get(GameStyles.SUPER_MARIO_BROS_3,),],
        [GameStyles.SUPER_MARIO_WORLD, image.get(GameStyles.SUPER_MARIO_WORLD,),],
    ],),)
}


/**
 * Create a simple {@link UniqueImage} without the duplicate blue variants
 *
 * @param entity The {@link Entities} reference
 * @see editorInBlueVariantInSmbAndSmb3Images
 */
export function uniqueWithNoBlueVariantDuplicateInSmbAndSmb3Images(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage
    const images = image.all

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_BROS, [images[0], images[1],],],
        [GameStyles.SUPER_MARIO_BROS_3, [images[11], images[12],],],
        [GameStyles.SUPER_MARIO_WORLD, [images[22],],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [images[23],],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [images[24],],],
    ],),)
}

/**
 * Create a simple {@link UniqueImage} without the duplicate blue variants
 * and is not in {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW}
 *
 * @param entity The {@link Entities} reference
 * @see editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images
 */
export function uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(entity: Entities,): UniqueImage<EditorImageFile> {
    const image = entity.editorImage
    const images = image.all

    return new UniqueImageContainer(image, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_BROS, [images[0], images[1],],],
        [GameStyles.SUPER_MARIO_BROS_3, [images[11], images[12],],],
        [GameStyles.SUPER_MARIO_WORLD, [images[22],],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [images[23],],],
    ],),)
}

//endregion -------------------- Unique images (editor) --------------------
//region -------------------- Unique images (clear condition) --------------------

export function uniqueInSmbAndSmb3ImagesInClearCondition(entity: Entities,): UniqueImage<ClearConditionImageFile> {
    const image = entity.clearConditionImage

    return new UniqueImageContainer(entity.editorImage, image, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_BROS, image.get(GameStyles.SUPER_MARIO_BROS,),],
        [GameStyles.SUPER_MARIO_BROS_3, image.get(GameStyles.SUPER_MARIO_BROS_3,),],
    ],),)
}

//endregion -------------------- Unique images (clear condition) --------------------
//region -------------------- Unique images (in game) --------------------

export function uniqueInSmbAndSmb3ImagesInInGame(entity: Entities,): UniqueImage<InGameImageFile> {
    const image = entity.inGameImage

    return new UniqueImageContainer(entity.editorImage, entity.clearConditionImage, image, new Map([
        [GameStyles.SUPER_MARIO_BROS, image.get(GameStyles.SUPER_MARIO_BROS,),],
        [GameStyles.SUPER_MARIO_BROS_3, image.get(GameStyles.SUPER_MARIO_BROS_3,),],
    ],),)
}

export function uniqueInNotSm3dwImagesInInGame(entity: Entities,): UniqueImage<InGameImageFile> {
    const image = entity.inGameImage

    return new UniqueImageContainer(entity.editorImage, entity.clearConditionImage, image, new Map([
        [GameStyles.SUPER_MARIO_BROS, image.get(GameStyles.SUPER_MARIO_BROS,),],
        [GameStyles.SUPER_MARIO_BROS_3, image.get(GameStyles.SUPER_MARIO_BROS_3,),],
        [GameStyles.SUPER_MARIO_WORLD, image.get(GameStyles.SUPER_MARIO_WORLD,),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, image.get(GameStyles.NEW_SUPER_MARIO_BROS_U,),],
    ],),)
}

//endregion -------------------- Unique images (in game) --------------------
//region -------------------- Unique images (predefined) --------------------

/**
 * Create a simple {@link UniqueImage} for the {@link Entities.BRIDGE bridge} {@link Entities entity}.
 *
 * The only images removed are the {@link GameStyles.SUPER_MARIO_BROS SMB} {@link Themes.CASTLE castle}
 * and {@link GameStyles.SUPER_MARIO_WORLD SMW} {@link Themes.SKY sky} and {@link Themes.FOREST forest}.
 *
 * @param entity The {@link Entities.BRIDGE} reference
 * @see editorBridgeImages
 */
export function uniqueBridgeImages(entity: Entities,): UniqueImage {
    const editorImage = entity.editorImage
    const images = editorImage.all

    return new UniqueImageContainer(editorImage, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_BROS, [images[0], images[1], images[2], images[3], images[4],],],
        [GameStyles.SUPER_MARIO_BROS_3, [images[6], images[7], images[8],],],
        [GameStyles.SUPER_MARIO_WORLD, [images[9], images[10], images[11], images[12],],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [images[15], images[16], images[17], images[18], images[19], images[20], images[21], images[22], images[23],],],
    ],),)
}

/**
 * Create a simple {@link UniqueImage} for the {@link Entities.BRICK_BLOCK "brick block"} {@link Entities entity}.
 *
 * The only images removed are the {@link GameStyles.SUPER_MARIO_BROS SMB} {@link Themes.GHOST_HOUSE ghost house}.
 *
 * @param entity The {@link Entities.BRICK_BLOCK} reference
 * @see editorBrickBlockImages
 */
export function uniqueBrickBlockImages(entity: Entities,): UniqueImage {
    const editorImage = entity.editorImage
    const images = editorImage.all

    return new UniqueImageContainer(editorImage, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_BROS, [images[0], images[1], images[2], images[3], images[5],],],
        [GameStyles.SUPER_MARIO_BROS_3, [images[6], images[7],],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [images[8],],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [images[9],],],
    ],),)
}

/**
 * Create a simple {@link UniqueImage} for the {@link Entities.CRISTAL_BLOCK "cristal block"} {@link Entities entity}.
 *
 * The only image removed is in the {@link Themes.FOREST forest}.
 *
 * @param entity The {@link Entities.CRISTAL_BLOCK} reference
 * @see editorCristalBlockImages
 */
export function uniqueCristalBlockImages(entity: Entities,): UniqueImage {
    const editorImage = entity.editorImage
    const images = editorImage.all

    return new UniqueImageContainer(editorImage, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_3D_WORLD, [images[0],],],
    ],),)
}

/**
 * Create a simple {@link UniqueImage} for the {@link Entities.HARD_BLOCK "hard block"} {@link Entities entity}.
 *
 * The only images removed are:
 * - {@link GameStyles.SUPER_MARIO_BROS SMB} → night {@link Themes.UNDERGROUND underground},
 * {@link Themes.GHOST_HOUSE ghost house} & {@link Themes.CASTLE castle}
 * - {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} → {@link Themes.SNOW snow}
 * - {@link GameStyles.SUPER_MARIO_WORLD SWM} → {@link Themes.AIRSHIP airship} & night {@link Themes.CASTLE castle}
 * - {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} → {@link Themes.UNDERWATER underwater}, {@link Themes.SNOW snow},
 * {@link Themes.SKY sky}, {@link Themes.FOREST forest} & {@link Themes.CASTLE castle}
 *
 * @param entity The {@link Entities.HARD_BLOCK} reference
 * @see editorHardBlockImages
 */
export function uniqueHardBlockImages(entity: Entities,): UniqueImage {
    const editorImage = entity.editorImage
    const images = editorImage.all

    return new UniqueImageContainer(editorImage, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_BROS, [images[0], images[1], images[3], images[4], images[5], images[7],],],
        [GameStyles.SUPER_MARIO_BROS_3, [images[9], images[11],],],
        [GameStyles.SUPER_MARIO_WORLD, [images[12], images[13],],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [images[16], images[17],],],
    ],),)
}

/**
 * Create a simple {@link UniqueImage} for the {@link Entities.SPIKE_BALL "spike ball"} {@link Entities entity}
 * without the duplicate blue variant
 *
 * @param entity The {@link Entities.SPIKE_BALL} reference
 * @see editorSpikeBallImages
 * @see uniqueWithNoBlueVariantDuplicateInSmbAndSmb3Images
 */
export function uniqueSpikeBallImages(entity: Entities,): UniqueImage {
    const editorImage = entity.editorImage
    const images = editorImage.all

    return new UniqueImageContainer(editorImage, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_BROS, [images[0], images[1],],],
        [GameStyles.SUPER_MARIO_BROS_3, [images[10], images[11],],],
        [GameStyles.SUPER_MARIO_WORLD, [images[12],],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [images[21],],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [images[22],],],
    ],),)
}

/**
 * Create a simple {@link UniqueImage} for the {@link Entities.TREE tree} {@link Entities entity}.
 *
 * It removes the {@link Themes.FOREST forest} theme only.
 *
 * @param entity The {@link Entities.TREE} reference
 * @see editorTreeImages
 */
export function uniqueTreeImages(entity: Entities,): UniqueImage {
    const editorImage = entity.editorImage
    const images = editorImage.all

    return new UniqueImageContainer(editorImage, entity.clearConditionImage, entity.inGameImage, new Map([
        [GameStyles.SUPER_MARIO_3D_WORLD, [images[0], images[1], images[2], images[3], images[4],],],
    ],),)
}

//endregion -------------------- Unique images (predefined) --------------------

//endregion -------------------- Unique images --------------------
//region -------------------- Clear condition images --------------------

export function clearConditionImages(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],
    ],),)
}


export function clearConditionInSmbImages(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],],),)
}
export function clearConditionInSmb3Images(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],],),)
}
export function clearConditionInSmwImages(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],],),)
}
export function clearConditionInNsmbuImages(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],],),)
}
export function clearConditionInSm3dwImages(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([[GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],],),)
}


export function clearConditionInSmbAndSmb3Images(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name,  GameStyles.SUPER_MARIO_BROS_3,),],],
    ],),)
}
export function clearConditionInSmwAndNsmbuImages(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
    ],),)
}


export function clearConditionInNotSmbImages(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],
    ],),)
}
export function clearConditionInNotSmwImages(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],
    ],),)
}
export function clearConditionInNotSm3dwImages(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
    ],),)
}


export function clearConditionInNotSmwAndNsmbuImages(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_3D_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),],],
    ],),)
}
export function clearConditionInNotSmwAndSm3dwImages(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.clearConditionImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
    ],),)
}

/**
 *
 * @param entity
 * @param name
 */
export function clearConditionInNotNsmbuAndSm3dwImages(entity: Entities, name: ImageName_ClearCondition,): ClearConditionImage {
    return new ClearConditionImageContainer(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.clearConditionImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
    ],),)
}

//endregion -------------------- Clear condition images --------------------
//region -------------------- In game images --------------------

//region -------------------- In game images (SMM1) --------------------

/**
 * Create a simple {@link InGameImage_SMM1} that has only one image for a single {@link gameStyle}
 *
 * @param entity The {@link Entities} reference
 * @param name The image identifier name
 * @param gameStyle The image {@link GameStyles}
 */
export function singleInGameSMM1Images(entity: Entities, name: SimpleImageName_SMM1, gameStyle: GameStyles,): InGameImage_SMM1 {
    return new InGameImage_SMM1Container(new Map([[gameStyle, [FileCreator.inGameSMM1Image(entity, name, gameStyle,),],],],),)
}

/**
 * Create a simple {@link InGameImage_SMM1} that has has one image for every {@link GameStyle game style}
 * ({@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3},
 * {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU})
 *
 * @param entity The {@link Entities} reference
 * @param name The image identifier name
 */
export function singleInGameInAllStyleSMM1Images(entity: Entities, name: SimpleImageName_SMM1,): InGameImage_SMM1 {
    return new InGameImage_SMM1Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.inGameSMM1Image(entity, name, GameStyles.SUPER_MARIO_BROS,),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.inGameSMM1Image(entity, name, GameStyles.SUPER_MARIO_BROS_3,),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.inGameSMM1Image(entity, name, GameStyles.SUPER_MARIO_WORLD,),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.inGameSMM1Image(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),],],
    ],),)
}

//endregion -------------------- In game images (SMM1) --------------------
//region -------------------- In game images (SMM2) --------------------

// export function inGameImages(entity: Entities, name: ImageName_SMM2, images: readonly (readonly [GameStyles, readonly PossibleInGameSMM2ImageFileName[],])[],) {
//     const size1 = images.length
//     const imagesCreated = new Array<[GameStyles, InGameSMM2ImageFile[],]>(size1,)
//     let index1 = size1
//     while (index1-- > 0) {
//         const gameStyle = images[index1][0]
//         const simpleImages = images[index1][1]
//
//         const size2 = simpleImages.length
//         const imagesCreated2 = new Array<InGameSMM2ImageFile>(size2,)
//         let index2 = size2
//         while (index2-- > 0)
//             imagesCreated2[index2] = FileCreator.inGameSMM2Image(entity, name, gameStyle, simpleImages[index2],)
//
//         imagesCreated[index1] = [gameStyle, imagesCreated2,]
//     }
//
//     return new InGameImage_SMM2Container(new Map(imagesCreated,),)
// }


/**
 * Create a simple {@link InGameImage_SMM2} that is in every 2d style
 * ({@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3},
 * {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU})
 *
 * @param entity The {@link Entities} reference
 * @param name The image identifier name
 * @param fileName The image name
 */
export function singleInGameIn2DStyleImages(entity: Entities, name: ImageName_SMM2, fileName: PossibleInGameSMM2ImageFileName,): InGameImage_SMM2 {
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
 * @param entity The {@link Entities} reference
 * @param name The image identifier name
 * @param gameStyle The image {@link GameStyles}
 * @param fileName The image name
 */
export function singleInGameImages(entity: Entities, name: ImageName_SMM2, gameStyle: GameStyles, fileName: PossibleInGameSMM2ImageFileName,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([[gameStyle, [FileCreator.inGameImage(entity, name, gameStyle, fileName,),],],],))
}


/**
 * Create a simple {@link InGameImage_SMM2} that has multiple images for a single {@link gameStyle}
 *
 * @param entity The {@link Entities} reference
 * @param name The image identifier name
 * @param gameStyle The image {@link GameStyles}
 * @param fileNames The images' name
 */
export function multipleInGameImages(entity: Entities, name: ImageName_SMM2, gameStyle: GameStyles, fileNames: readonly PossibleInGameSMM2ImageFileName[],): InGameImage_SMM2 {
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
 * @param entity The {@link Entities} reference
 * @param name The image identifier name
 * @param gameStyles The image {@link GameStyles}
 * @param fileNames The images' name
 */
export function multipleInGameInMultipleStyleImages(entity: Entities, name: ImageName_SMM2, gameStyles: readonly GameStyles[], fileNames: readonly PossibleInGameSMM2ImageFileName[],): InGameImage_SMM2 {
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
 * Create an {@link InGameImage_SMM2} for the {@link Entities.START_BLOCK "start block"} {@link Entities entity}
 *
 * @param entity The {@link Entities.START_BLOCK} reference
 */
export function inGameStartBlockImages(entity: Entities,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.inGameImage(entity, 'Object - StartBlock', GameStyles.SUPER_MARIO_BROS, 'startblock',),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.inGameImage(entity, 'Object - StartBlock', GameStyles.SUPER_MARIO_BROS_3, 'startblock',),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.inGameImage(entity, 'Object - StartBlock', GameStyles.SUPER_MARIO_WORLD, 'startblock',),],],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.inGameImage(entity, 'Object - StartBlock', GameStyles.NEW_SUPER_MARIO_BROS_U, 'startblock',),],],
    ],),)
}


/**
 * Create an {@link InGameImage_SMM2} for the {@link Entities.WATER water} {@link Entities entity}
 *
 * @param entity The {@link Entities.WATER} reference
 */
export function inGameWaterImages(entity: Entities,): InGameImage_SMM2 {
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
 * Create an {@link InGameImage_SMM2} for the {@link Entities.LAVA lava} or {@link Entities.POISON poison} {@link Entities entity}
 *
 * @param entity The {@link Entities.LAVA} or {@link Entities.POISON} reference
 * @param name The name of the images
 */
export function inGameDangerousLiquidImages(entity: Entities, name: DangerousImageFileName,): InGameImage_SMM2 {
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
 * Create an {@link InGameImage_SMM2} for the {@link Entities.BABY_BLOOPER "baby blooper"} projectile {@link Entities entity}
 *
 * @param entity The {@link Entities.BABY_BLOOPER} projectile reference
 */
export function inGameBabyBlooperProjectileImages(entity: Entities,): InGameImage_SMM2 {
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
 * Create an {@link InGameImage_SMM2} for the {@link Entities.LARRY_PROJECTILE Larry}, {@link Entities.IGGY_PROJECTILE Iggy},
 * {@link Entities.ROY_PROJECTILE Roy}, {@link Entities.MORTON_PROJECTILE Morton}
 * or {@link Entities.LUDWIG_PROJECTILE Ludwig} projectile {@link Entities entity}
 *
 * @param entity The {@link Entities.LARRY_PROJECTILE Larry}, {@link Entities.IGGY_PROJECTILE Iggy}, {@link Entities.ROY_PROJECTILE Roy}, {@link Entities.MORTON_PROJECTILE Morton} or {@link Entities.LUDWIG_PROJECTILE Ludwig} projectile reference
 * @param name The name of the images
 */
export function inGameKoopalingProjectileImages(entity: Entities, name: KoopalingImageName,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS, 'effect.0',),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS_3, 'effect.0',),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_WORLD, 'effect.0',),],],
    ],),)
}

/**
 * Create an {@link InGameImage_SMM2} for the {@link Entities.CANDY_RING_THROWN_BY_A_WENDY "candy ring"} {@link Entities entity}
 *
 * @param entity The {@link Entities.CANDY_RING_THROWN_BY_A_WENDY} reference
 */
export function inGameCandyRingImages(entity: Entities,): InGameImage_SMM2 {
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
 * Create an {@link InGameImage_SMM2} for the {@link Entities.MAGIC_BALL_THROWN_BY_A_LEMMY "magic ball"} {@link Entities entity}
 *
 * @param entity The {@link Entities.MAGIC_BALL_THROWN_BY_A_LEMMY} reference
 */
export function inGameMagicBallImages(entity: Entities,): InGameImage_SMM2 {
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
 * Create an {@link InGameImage_SMM2} for the {@link Entities.MORTON_GROUND_PROJECTILE "Morton ground projectile"} {@link Entities entity}
 *
 * @param entity The {@link Entities.MORTON_GROUND_PROJECTILE} reference
 */
export function inGameMortonGroundProjectileImages(entity: Entities,): InGameImage_SMM2 {
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
 * Create an {@link InGameImage_SMM2} for the {@link Entities.LARRY_WAND Larry}, {@link Entities.IGGY_WAND Iggy},
 * {@link Entities.WENDY_WAND Wendy}, {@link Entities.LEMMY_WAND Lemmy},
 * {@link Entities.ROY_WAND Roy}, {@link Entities.MORTON_WAND Morton}
 * or {@link Entities.LUDWIG_WAND Ludwig} wand {@link Entities entity}
 *
 * @param entity The {@link Entities.LARRY_WAND Larry}, {@link Entities.IGGY_WAND Iggy}, {@link Entities.WENDY_WAND Wendy}, {@link Entities.LEMMY_WAND Lemmy}, {@link Entities.ROY_WAND Roy}, {@link Entities.MORTON_WAND Morton} or {@link Entities.LUDWIG_WAND Ludwig} wand reference
 * @param name The name of the images
 */
export function inGameKoopalingWandImages(entity: Entities, name: KoopalingImageName,): InGameImage_SMM2 {
    return new InGameImage_SMM2Container(new Map([
        [GameStyles.SUPER_MARIO_BROS, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS, 'wand',),],],
        [GameStyles.SUPER_MARIO_BROS_3, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_BROS_3, 'wand',),],],
        [GameStyles.SUPER_MARIO_WORLD, [FileCreator.inGameImage(entity, name, GameStyles.SUPER_MARIO_WORLD, 'wand',),],],
        // [GameStyles.NEW_SUPER_MARIO_BROS_U, [FileCreator.inGameSMM2Image(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U, `${fileName.toLowercase()}_magic_wand`,),],],
    ],),)
}


/**
 * Create an {@link InGameImage_SMM2} for the {@link Entities.BUBBLE bubble} {@link Entities entity}
 *
 * @param entity The {@link Entities.BUBBLE} reference
 */
export function inGameBubbleImages(entity: Entities,): InGameImage_SMM2 {
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

//endregion -------------------- In game images --------------------
//region -------------------- Unused images --------------------

export function unusedRegularSMM1Images(entity: Entities, name: ImageName_Unused_SMM1, images: readonly (readonly [GameStyles, readonly ImageName_UnusedSMM1Regular[],])[]): UnusedImage_Regular {
    const size1 = images.length
    const newArray1 = new Array<[GameStyles, [UnusedSMM1RegularImageFile,][],]>(size1,)
    let index1 = size1
    while (index1-- > 0) {
        const gameStyle = images[index1][0]
        const simpleImages = images[index1][1]

        const size2 = simpleImages.length
        const newArray2 = new Array<[UnusedSMM1RegularImageFile,]>(size2,)
        let index2 = size2
        while (index2-- > 0)
            newArray2[index2] = [FileCreator.unusedSmm1RegularImage(entity, name, gameStyle, simpleImages[index2],),]
        newArray1[index1] = [gameStyle, newArray2,]
    }

    return new UnusedImage_RegularContainer(new Map(newArray1,),)
}

export function unusedRegularInMultipleStyleSMM1Images(entity: Entities, name: ImageName_Unused_SMM1, gameStyles: readonly GameStyles[], fileNames: readonly ImageName_UnusedSMM1Regular[],): UnusedImage_Regular {
    const size1 = gameStyles.length
    const size2 = fileNames.length
    const newArray1 = new Array<[GameStyles, [UnusedSMM1RegularImageFile,][],]>(size1,)
    let index1 = size1
    while (index1-- > 0) {
        const gameStyle = gameStyles[index1]

        const newArray2 = new Array<[UnusedSMM1RegularImageFile,]>(size2,)
        let index2 = size2
        while (index2-- > 0)
            newArray2[index2] = [FileCreator.unusedSmm1RegularImage(entity, name, gameStyle, fileNames[index2],),]
        newArray1[index1] = [gameStyle, newArray2,]
    }

    return new UnusedImage_RegularContainer(new Map(newArray1,),)
}

export function singleUnusedRegularSMM1Images(entity: Entities, name: ImageName_Unused_SMM1, gameStyle: GameStyles, fileNames: readonly ImageName_UnusedSMM1Regular[],): UnusedImage_Regular {
    const size = fileNames.length
    const newArray = new Array<[UnusedSMM1RegularImageFile,]>(size,)
    let index = size
    while (index-- > 0)
        newArray[index] = [FileCreator.unusedSmm1RegularImage(entity, name, gameStyle, fileNames[index],),]

    return new UnusedImage_RegularContainer(new Map([[gameStyle, newArray,],],),)
}


export function unusedBigMushroomImages(entity: Entities, name: SimpleImageName_BigMushroom_Unused_SMM1, imageNames: readonly (readonly ImageName_UnusedBigMushroom[])[],): UnusedImage_BigMushroom {
    const size1 = imageNames.length
    const newArray1 = new Array<UnusedSMM1BigMushroomImageFile[]>(size1,)
    let index1 = size1
    while (index1-- > 0) {
        const simpleImages = imageNames[index1]

        const size2 = simpleImages.length
        const newArray2 = new Array<UnusedSMM1BigMushroomImageFile>(size2,)
        let index2 = size2
        while (index2-- > 0)
            newArray2[index2] = FileCreator.unusedBigMushroomImage(entity, name, simpleImages[index2],)
        newArray1[index1] = newArray2
    }

    return new UnusedImage_BigMushroomContainer(newArray1,)
}

export function singleUnusedBigMushroomImages(entity: Entities, name: SimpleImageName_BigMushroom_Unused_SMM1, imageName: ImageName_UnusedBigMushroom,): UnusedImage_BigMushroom {
    return new UnusedImage_BigMushroomContainer([[FileCreator.unusedBigMushroomImage(entity, name, imageName,),],],)
}

//endregion -------------------- Unused images --------------------
