import type {Entities}                                                                                                                                                                             from 'core/entity/Entities'
import type {EntityImageFile}                                                                                                                                                                      from 'core/entity/file/EntityImageFile'
import type {EditorImageFile, ImageNumber_Editor, ImageNumber_PowerUp_Editor, SimpleImageName_Editor, SimpleImageName_Editor_GroundOrSlope}                                                        from 'core/entity/file/EntityImageFile.editor'
import type {ClearConditionImageFile, ImageName_ClearCondition}                                                                                                                                    from 'core/entity/file/EntityImageFile.clearCondition'
import type {InGameImageFile, InGameSMM2ImageFile, KoopalingImageName, PossibleInGameSMM2ImageFileName, SimpleImageName_SMM1, ImageName_SMM2, DangerousImageFileName}                              from 'core/entity/file/EntityImageFile.inGame'
import type {SimpleImageName_BigMushroom_Unused_SMM1, ImageName_UnusedBigMushroom, ImageName_UnusedSMM1Regular, UnusedSMM1BigMushroomImageFile, UnusedSMM1RegularImageFile, ImageName_Unused_SMM1} from 'core/entity/file/EntityImageFile.unused'
import type {ClearConditionImage}                                                                                                                                                                  from 'core/entity/images/clearCondition/ClearConditionImage'
import type {EditorImage}                                                                                                                                                                          from 'core/entity/images/editor/EditorImage'
import type {PowerUpEditorImage}                                                                                                                                                                   from 'core/entity/images/editor/PowerUpEditorImage'
import type {InGameImage}                                                                                                                                                                          from 'core/entity/images/inGame/InGameImage'
import type {InGameImage_SMM1}                                                                                                                                                                     from 'core/entity/images/inGame/InGameImage_SMM1'
import type {InGameImage_SMM2}                                                                                                                                                                     from 'core/entity/images/inGame/InGameImage_SMM2'
import type {UniqueImage}                                                                                                                                                                          from 'core/entity/images/unique/UniqueImage'
import type {UnusedImage_BigMushroom}                                                                                                                                                              from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {UnusedImage_Regular}                                                                                                                                                                  from 'core/entity/images/unused/UnusedImage_Regular'

import * as FileCreator                   from 'core/entity/file/fileCreator'
import {ClearConditionImageContainer}     from 'core/entity/images/clearCondition/ClearConditionImage.container'
import {EditorImageContainer}             from 'core/entity/images/editor/EditorImage.container'
import {InGameImage_SMM1Container}        from 'core/entity/images/inGame/InGameImage_SMM1.container'
import {InGameImage_SMM2Container}        from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {EmptyUniqueImage}                 from 'core/entity/images/unique/EmptyUniqueImage'
import {UniqueImageContainer}             from 'core/entity/images/unique/UniqueImage.container'
import {UnusedImage_BigMushroomContainer} from 'core/entity/images/unused/UnusedImage_BigMushroom.container'
import {UnusedImage_RegularContainer}     from 'core/entity/images/unused/UnusedImage_Regular.container'
import {GameStyles}                       from 'core/gameStyle/GameStyles'
import {Themes}                           from 'core/theme/Themes'
import {Times}                            from 'core/time/Times'

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
//region -------------------- Editor images --------------------

//region -------------------- Editor images (simple) --------------------

export function editorImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),
        FileCreator.editorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_3D_WORLD,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[2],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[3],],],],),],
        [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[4],],],],),],
    ],),],],),)
}

export function editorInSnowImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.snowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.snowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),
        FileCreator.snowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),
        FileCreator.snowEditorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),
        FileCreator.snowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_3D_WORLD,),

    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.SNOW, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.SNOW, [images[1],],],],),],
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.SNOW, [images[2],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.SNOW, [images[3],],],],),],
        [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.SNOW, [images[4],],],],),],
    ],),],],),)
}

//endregion -------------------- Editor images (simple) --------------------
//region -------------------- Editor images (single) --------------------

export function editorInSmbImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const image = [FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),] as const

    return new EditorImageContainer(image, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, image,],],),],],),],],),)
}
export function editorInSmwImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const image = [FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),] as const

    return new EditorImageContainer(image, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, image,],],),],],),],],),)
}
export function editorInNsmbuImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const image = [FileCreator.editorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),] as const

    return new EditorImageContainer(image, new Map([[Times.DAY, new Map([[GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, image,],],),],],),],],),)
}
export function editorInSm3dwImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const image = [FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_3D_WORLD,),] as const

    return new EditorImageContainer(image, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, image,],],),],],),],],),)
}


export function editorInSmbAndSmb3Images(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
    ],),],],),)
}

export function editorInSmwAndNsmbuImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),
        FileCreator.editorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[1],],],],),],
    ],),],],),)
}


export function editorInNotSmwAndSm3dwImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),
        FileCreator.editorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[2],],],],),],
    ],),],],),)
}

export function editorInNotNsmbuAndSm3dwImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[2],],],],),],
    ],),],],),)
}


export function editorInNotSmwImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),
        FileCreator.editorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_3D_WORLD,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[2],],],],),],
        [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[3],],],],),],
    ],),],],),)
}
export function editorInNotSm3dwImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),
        FileCreator.editorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[2],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[3],],],],),],
    ],),],],),)
}


export function editorInSmb3AndThemeImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor, theme: Themes,): EditorImage {
    const image = [FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, theme,),]

    return new EditorImageContainer(image, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_BROS_3, new Map([[theme, image,],],),],],),],],),)
}
export function editorInSmwAndThemeImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor, theme: Themes,): EditorImage {
    const image = [FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD, theme,),]

    return new EditorImageContainer(image, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_WORLD, new Map([[theme, image,],],),],],),],],),)
}


/**
 * Create a simple {@link EditorImage} that is in every {@link GameStyles game style}, but has a variant
 * in {@link GameStyles.SUPER_MARIO_BROS SMB} and {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}:
 *  - night {@link Themes.GROUND ground}
 *  - day {@link Themes.UNDERGROUND underground}
 *  - night {@link Themes.DESERT desert}
 *  - night {@link Themes.SNOW snow}
 *  - night {@link Themes.SKY sky}
 *  - night {@link Themes.FOREST forest}
 *  - day {@link Themes.GHOST_HOUSE ghost house}
 *  - night {@link Themes.AIRSHIP airship}
 *  - day {@link Themes.CASTLE castle}
 *
 * @param entity The {@link Entities} reference
 * @param name The image name
 * @param number The image number
 */
export function editorInBlueVariantInSmbAndSmb3Images(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),                                    // index 0
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.GROUND,),                // index 1
        FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND,),         // index 2
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,),            // index 3
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.DESERT,),                // index 4
        FileCreator.nightSnowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),                           // index 5
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.SKY,),                   // index 6
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.FOREST,),                // index 7
        FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.GHOST_HOUSE,),         // index 8
        FileCreator.nightAirshipEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),                        // index 9
        FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.CASTLE,),              // index 10

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),                                  // index 11
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.GROUND,),              // index 12
        FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND,),       // index 13
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,),          // index 14
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.DESERT,),              // index 15
        FileCreator.nightSnowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),                         // index 16
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.SKY,),                 // index 17
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.FOREST,),              // index 18
        FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.GHOST_HOUSE,),       // index 19
        FileCreator.nightAirshipEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),                      // index 20
        FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.CASTLE,),            // index 21

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),                                   // index 22

        FileCreator.editorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),                              // index 23

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_3D_WORLD,),                                // index 24
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[0],],],
                [Themes.UNDERGROUND, [images[2],],],
                [Themes.GHOST_HOUSE, [images[8],],],
                [Themes.CASTLE, [images[10],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[11],],],
                [Themes.UNDERGROUND, [images[12],],],
                [Themes.GHOST_HOUSE, [images[19],],],
                [Themes.CASTLE, [images[21],],],
            ],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[22],],],],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[23],],],],),],
            [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[24],],],],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[1],],],
                [Themes.UNDERWATER, [images[3],],],
                [Themes.DESERT, [images[4],],],
                [Themes.SNOW, [images[5],],],
                [Themes.SKY, [images[6],],],
                [Themes.FOREST, [images[7],],],
                [Themes.AIRSHIP, [images[9],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile]>([
                [Themes.GROUND, [images[12],],],
                [Themes.UNDERWATER, [images[14],],],
                [Themes.DESERT, [images[15],],],
                [Themes.SNOW, [images[16],],],
                [Themes.SKY, [images[17],],],
                [Themes.FOREST, [images[18],],],
                [Themes.AIRSHIP, [images[20],],],
            ],),],
        ],),],
    ],),)
}
/**
 * Create a simple {@link EditorImage} that is in every {@link GameStyles game style}, but has a variant
 * in {@link GameStyles.SUPER_MARIO_BROS SMB} and {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}
 * and it is not in {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW}:
 *  - night {@link Themes.GROUND ground}
 *  - day {@link Themes.UNDERGROUND underground}
 *  - night {@link Themes.DESERT desert}
 *  - night {@link Themes.SNOW snow}
 *  - night {@link Themes.SKY sky}
 *  - night {@link Themes.FOREST forest}
 *  - day {@link Themes.GHOST_HOUSE ghost house}
 *  - night {@link Themes.AIRSHIP airship}
 *  - day {@link Themes.CASTLE castle}
 *
 * @param entity The {@link Entities} reference
 * @param name The image name
 * @param number The image number
 */
export function editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),                                    // index 0
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.GROUND,),                // index 1
        FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND,),         // index 2
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,),            // index 3
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.DESERT,),                // index 4
        FileCreator.nightSnowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),                           // index 5
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.SKY,),                   // index 6
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.FOREST,),                // index 7
        FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.GHOST_HOUSE,),         // index 8
        FileCreator.nightAirshipEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),                        // index 9
        FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS, Themes.CASTLE,),              // index 10

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),                                  // index 11
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.GROUND,),              // index 12
        FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND,),       // index 13
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,),          // index 14
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.DESERT,),              // index 15
        FileCreator.nightSnowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),                         // index 16
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.SKY,),                 // index 17
        FileCreator.nightEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.FOREST,),              // index 18
        FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.GHOST_HOUSE,),       // index 19
        FileCreator.nightAirshipEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),                      // index 20
        FileCreator.editorInThemeImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3, Themes.CASTLE,),            // index 21

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),                                   // index 22

        FileCreator.editorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),                              // index 23
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[0],],],
                [Themes.UNDERGROUND, [images[2],],],
                [Themes.GHOST_HOUSE, [images[8],],],
                [Themes.CASTLE, [images[10],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[11],],],
                [Themes.UNDERGROUND, [images[12],],],
                [Themes.GHOST_HOUSE, [images[19],],],
                [Themes.CASTLE, [images[21],],],
            ],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[22],],],],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[23],],],],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[1],],],
                [Themes.UNDERWATER, [images[3],],],
                [Themes.DESERT, [images[4],],],
                [Themes.SNOW, [images[5],],],
                [Themes.SKY, [images[6],],],
                [Themes.FOREST, [images[7],],],
                [Themes.AIRSHIP, [images[9],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile]>([
                [Themes.GROUND, [images[12],],],
                [Themes.UNDERWATER, [images[14],],],
                [Themes.DESERT, [images[15],],],
                [Themes.SNOW, [images[16],],],
                [Themes.SKY, [images[17],],],
                [Themes.FOREST, [images[18],],],
                [Themes.AIRSHIP, [images[20],],],
            ],),],
        ],),],
    ],),)
}

/**
 * Create a simple {@link EditorImage} that is in every {@link GameStyles game style}, but has a {@link Themes.SNOW snow variant}
 * in {@link GameStyles.SUPER_MARIO_BROS SMB} and {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}
 *
 * @param entity The {@link Entities} reference
 * @param name The image name
 * @param number The image number
 */
export function editorInNightSnowInSmbAndSmb3Images(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),            // index 0
        FileCreator.nightSnowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),   // index 1

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),          // index 2
        FileCreator.nightSnowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,), // index 3

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),           // index 4

        FileCreator.editorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 5

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_3D_WORLD,),        // index 6
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[2],],],],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[4],],],],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[5],],],],),],
            [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[6],],],],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.SNOW, [images[1],],],],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.SNOW, [images[3],],],],),],
        ],),],
    ],),)
}
/**
 * Create a simple {@link EditorImage} that is in every {@link GameStyles game style}, but has a {@link Themes.SNOW snow variant}
 * in {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}
 *
 * @param entity The {@link Entities} reference
 * @param name The image name
 * @param number The image number
 */
export function editorInNightSnowInSmb3Images(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),            // index 0

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),          // index 1
        FileCreator.nightSnowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,), // index 2

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),           // index 3

        FileCreator.editorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 4

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_3D_WORLD,),        // index 5
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[3],],],],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[4],],],],),],
            [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[5],],],],),],
        ],),],
        [Times.NIGHT, new Map([[GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.SNOW, [images[2],],],],),],],),],
    ],),)
}

/**
 * Create a simple {@link EditorImage} that is in every {@link GameStyles game style}, but has a {@link Themes.SNOW snow variant}
 * in {@link GameStyles.SUPER_MARIO_BROS SMB} and {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}
 * and is not in {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW}
 *
 * @param entity The {@link Entities} reference
 * @param name The image name
 * @param number The image number
 */
export function editorInNotSm3dwAndNightSnowInSmbAndSmb3Images(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),            // index 0
        FileCreator.nightSnowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),   // index 1

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),          // index 2
        FileCreator.nightSnowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,), // index 3

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),           // index 4

        FileCreator.editorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 5
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[2],],],],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[4],],],],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[5],],],],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.SNOW, [images[1],],],],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.SNOW, [images[3],],],],),],
        ],),],
    ],),)
}
/**
 * Create a simple {@link EditorImage} that is in every {@link GameStyles game style}, but has a {@link Themes.SNOW snow variant}
 * in {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}
 * and is not in {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW}
 *
 * @param entity The {@link Entities} reference
 * @param name The image name
 * @param number The image number
 */
export function editorInNotSm3dwAndNightSnowInSmb3Images(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_Editor = 0,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),            // index 0

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),          // index 1
        FileCreator.nightSnowEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,), // index 2

        FileCreator.editorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),           // index 3

        FileCreator.editorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 4
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[3],],],],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[4],],],],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.SNOW, [images[2],],],],),],
        ],),],
    ],),)
}

//endregion -------------------- Editor images (single) --------------------
//region -------------------- Editor images (multiple) --------------------

export function multipleEditorImages(entity: Entities, name: SimpleImageName_Editor, numbers: readonly ImageNumber_Editor[],): EditorImage {
    const size = numbers.length
    const totalSize = size * 5
    const images = new Array<EditorImageFile>(totalSize,)
    const smbImages = new Array<EditorImageFile>(size,)
    const smb3Images = new Array<EditorImageFile>(size,)
    const smwImages = new Array<EditorImageFile>(size,)
    const nsmbuImages = new Array<EditorImageFile>(size,)
    const sm3dwImages = new Array<EditorImageFile>(size,)

    let index = size
    let totalIndex = 0
    while (index-- > 0)
        images[totalIndex++] = smbImages[index] = FileCreator.editorImage(entity, name, numbers[index], GameStyles.SUPER_MARIO_BROS,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = smb3Images[index] = FileCreator.editorImage(entity, name, numbers[index], GameStyles.SUPER_MARIO_BROS_3,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = smwImages[index] = FileCreator.editorImage(entity, name, numbers[index], GameStyles.SUPER_MARIO_WORLD,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = nsmbuImages[index] = FileCreator.editorImage(entity, name, numbers[index], GameStyles.NEW_SUPER_MARIO_BROS_U,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = sm3dwImages[index] = FileCreator.editorImage(entity, name, numbers[index], GameStyles.SUPER_MARIO_3D_WORLD,)

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, smbImages,],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, smb3Images,],],),],
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, smwImages,],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, nsmbuImages,],],),],
        [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, sm3dwImages,],],),],
    ],),],],),)
}


export function multipleEditorInSm3dwImages(entity: Entities, name: SimpleImageName_Editor, numbers: readonly ImageNumber_Editor[],): EditorImage {
    const size = numbers.length
    const images = new Array<EditorImageFile>(size,)
    let index = size
    while (index-- > 0)
        images[index] = FileCreator.editorImage(entity, name, numbers[index], GameStyles.SUPER_MARIO_3D_WORLD,)

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, images,],],),],],),],],),)
}


export function multipleEditorInNotSm3dwImages(entity: Entities, name: SimpleImageName_Editor, numbers: readonly ImageNumber_Editor[],): EditorImage {
    const size = numbers.length
    const totalSize = size * 4
    const images = new Array<EditorImageFile>(totalSize,)
    const smbImages = new Array<EditorImageFile>(size,)
    const smb3Images = new Array<EditorImageFile>(size,)
    const smwImages = new Array<EditorImageFile>(size,)
    const nsmbuImages = new Array<EditorImageFile>(size,)

    let index = size
    let totalIndex = 0
    while (index-- > 0)
        images[totalIndex++] = smbImages[index] = FileCreator.editorImage(entity, name, numbers[index], GameStyles.SUPER_MARIO_BROS,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = smb3Images[index] = FileCreator.editorImage(entity, name, numbers[index], GameStyles.SUPER_MARIO_BROS_3,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = smwImages[index] = FileCreator.editorImage(entity, name, numbers[index], GameStyles.SUPER_MARIO_WORLD,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = nsmbuImages[index] = FileCreator.editorImage(entity, name, numbers[index], GameStyles.NEW_SUPER_MARIO_BROS_U,)

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, smbImages,],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, smb3Images,],],),],
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, smwImages,],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, nsmbuImages,],],),],
    ],),],],),)
}

//endregion -------------------- Editor images (multiple) --------------------
//region -------------------- Editor images (power-up) --------------------

/**
 * Create a simple {@link PowerUpEditorImage} that is in every {@link GameStyles game style}
 *
 * @param entity The entity reference
 * @param name The image name
 * @param number The image number
 */
export function powerUpEditorImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_PowerUp_Editor = 0,): PowerUpEditorImage {
    const images = [
        FileCreator.standalonePowerUpEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),         // index 0
        FileCreator.withMushroomPowerUpEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS,),       // index 1

        FileCreator.standalonePowerUpEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),       // index 2
        FileCreator.withMushroomPowerUpEditorImage(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,),     // index 3

        FileCreator.standalonePowerUpEditorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),        // index 4
        FileCreator.withMushroomPowerUpEditorImage(entity, name, number, GameStyles.SUPER_MARIO_WORLD,),      // index 6

        FileCreator.standalonePowerUpEditorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,),   // index 7
        FileCreator.withMushroomPowerUpEditorImage(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 8

        FileCreator.standalonePowerUpEditorImage(entity, name, number, GameStyles.SUPER_MARIO_3D_WORLD,),     // index 9
        FileCreator.withMushroomPowerUpEditorImage(entity, name, number, GameStyles.SUPER_MARIO_3D_WORLD,),   // index 10
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0], images[1],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[2], images[3],],],],),],
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[4], images[5],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[6], images[7],],],],),],
        [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[8], images[9],],],],),],
    ],),],],),)
}

/**
 * Create a simple {@link PowerUpEditorImage} that is in only the {@link GameStyles.SUPER_MARIO_BROS SMB} {@link GameStyles game style}
 *
 * @param entity The entity reference
 * @param name The image name
 * @param number The image number
 */
export function powerUpEditorInSmbImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_PowerUp_Editor = 0,): PowerUpEditorImage {
    const images = FileCreator.powerUpEditorImages(entity, name, number, GameStyles.SUPER_MARIO_BROS,)

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, images,],],),],],),],],),)
}

/**
 * Create a simple {@link PowerUpEditorImage} that is in only the {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} {@link GameStyles game style}
 *
 * @param entity The entity reference
 * @param name The image name
 * @param number The image number
 */
export function powerUpEditorInSmb3Images(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_PowerUp_Editor = 0,): PowerUpEditorImage {
    const images = FileCreator.powerUpEditorImages(entity, name, number, GameStyles.SUPER_MARIO_BROS_3,)


    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, images,],],),],],),],],),)
}

/**
 * Create a simple {@link PowerUpEditorImage} that is in only the {@link GameStyles.SUPER_MARIO_WORLD SMW} {@link GameStyles game style}
 *
 * @param entity The entity reference
 * @param name The image name
 * @param number The image number
 */
export function powerUpEditorInSmwImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_PowerUp_Editor = 0,): PowerUpEditorImage {
    const images = FileCreator.powerUpEditorImages(entity, name, number, GameStyles.SUPER_MARIO_WORLD,)


    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, images,],],),],],),],],),)
}

/**
 * Create a simple {@link PowerUpEditorImage} that is in only the {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} {@link GameStyles game style}
 *
 * @param entity The entity reference
 * @param name The image name
 * @param number The image number
 */
export function powerUpEditorInNsmbuImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_PowerUp_Editor = 0,): PowerUpEditorImage {
    const images = FileCreator.powerUpEditorImages(entity, name, number, GameStyles.NEW_SUPER_MARIO_BROS_U,)


    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, images,],],),],],),],],),)
}

/**
 * Create a simple {@link PowerUpEditorImage} that is in only the {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} {@link GameStyles game style}
 *
 * @param entity The entity reference
 * @param name The image name
 * @param number The image number
 */
export function powerUpEditorInSm3dwImages(entity: Entities, name: SimpleImageName_Editor, number: ImageNumber_PowerUp_Editor = 0,): PowerUpEditorImage {
    const images = FileCreator.powerUpEditorImages(entity, name, number, GameStyles.SUPER_MARIO_3D_WORLD,)


    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, images,],],),],],),],],),)
}

//endregion -------------------- Editor images (power-up) --------------------
//region -------------------- Editor images (predefined) --------------------

/**
 * Create a simple {@link EditorImage} for the {@link Entities.GROUND ground},
 * {@link Entities.STEEP_SLOPE steep} and {@link Entities.GENTLE_SLOPE gentle} slope {@link Entities entity}
 *
 * @param entity The {@link Entities.GROUND}, {@link Entities.STEEP_SLOPE} or {@link Entities.GENTLE_SLOPE} {@link Entities entity}
 * @param name The image name
 */
export function editorGroundOrSlopeImages(entity: Entities, name: SimpleImageName_Editor_GroundOrSlope,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS,),                                    // index 0
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND,),         // index 1
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,),          // index 2
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS, Themes.DESERT,),              // index 3
        FileCreator.snowEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS,),                                // index 4
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS, Themes.SKY,),                 // index 5
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS, Themes.FOREST,),              // index 6
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS, Themes.GHOST_HOUSE,),         // index 7
        FileCreator.airshipEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS,),                             // index 8
        FileCreator.nightAirshipEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS,),                        // index 9
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS, Themes.CASTLE,),              // index 10

        FileCreator.editorImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3,),                                  // index 11
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND,),       // index 12
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,),        // index 13
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3, Themes.DESERT,),            // index 14
        FileCreator.snowEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3,),                              // index 15
        FileCreator.nightSnowEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3,),                         // index 16
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3, Themes.SKY,),               // index 17
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3, Themes.FOREST,),            // index 18
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3, Themes.GHOST_HOUSE,),       // index 19
        FileCreator.airshipEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3,),                           // index 20
        FileCreator.nightAirshipEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3,),                      // index 21
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3, Themes.CASTLE,),            // index 22
        FileCreator.nightEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_BROS_3, Themes.CASTLE,),              // index 23

        FileCreator.editorImage(entity, name, 0, GameStyles.SUPER_MARIO_WORLD,),                                   // index 24
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERGROUND,),        // index 25
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,),         // index 26
        FileCreator.nightEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,),           // index 27
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_WORLD, Themes.DESERT,),             // index 28
        FileCreator.snowEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_WORLD,),                               // index 29
        FileCreator.nightSnowEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_WORLD,),                          // index 30
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_WORLD, Themes.SKY,),                // index 31
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_WORLD, Themes.FOREST,),             // index 32
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_WORLD, Themes.GHOST_HOUSE,),        // index 33
        FileCreator.airshipEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_WORLD,),                            // index 34
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_WORLD, Themes.CASTLE,),             // index 35

        FileCreator.editorImage(entity, name, 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                              // index 36
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERGROUND,),   // index 37
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERWATER,),    // index 38
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.DESERT,),        // index 39
        FileCreator.snowEditorImage(entity, name, 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                          // index 40
        FileCreator.nightSnowEditorImage(entity, name, 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                     // index 41
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.SKY,),           // index 42
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.FOREST,),        // index 43
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.GHOST_HOUSE,),   // index 44
        FileCreator.airshipEditorImage(entity, name, 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                       // index 45
        FileCreator.nightAirshipEditorImage(entity, name, 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                  // index 46
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.CASTLE,),        // index 47

        FileCreator.editorImage(entity, name, 0, GameStyles.SUPER_MARIO_3D_WORLD,),                                // index 48
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND,),     // index 49
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERWATER,),      // index 50
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.DESERT,),          // index 51
        FileCreator.snowEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_3D_WORLD,),                            // index 52
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.SKY,),             // index 53
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.FOREST,),          // index 54
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.GHOST_HOUSE,),     // index 55
        FileCreator.airshipEditorImage(entity, name, 0, GameStyles.SUPER_MARIO_3D_WORLD,),                         // index 56
        FileCreator.editorInThemeImage(entity, name, 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.CASTLE,),          // index 57
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[0],],],
                [Themes.UNDERGROUND, [images[1],],],
                [Themes.UNDERWATER, [images[2],],],
                [Themes.DESERT, [images[3],],],
                [Themes.SNOW, [images[4],],],
                [Themes.SKY, [images[5],],],
                [Themes.FOREST, [images[6],],],
                [Themes.GHOST_HOUSE, [images[7],],],
                [Themes.AIRSHIP, [images[8],],],
                [Themes.CASTLE, [images[10],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[11],],],
                [Themes.UNDERGROUND, [images[12],],],
                [Themes.UNDERWATER, [images[13],],],
                [Themes.DESERT, [images[14],],],
                [Themes.SNOW, [images[15],],],
                [Themes.SKY, [images[17],],],
                [Themes.FOREST, [images[18],],],
                [Themes.GHOST_HOUSE, [images[19],],],
                [Themes.AIRSHIP, [images[20],],],
                [Themes.CASTLE, [images[22],],],
            ],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[24],],],
                [Themes.UNDERGROUND, [images[25],],],
                [Themes.UNDERWATER, [images[26],],],
                [Themes.DESERT, [images[28],],],
                [Themes.SNOW, [images[29],],],
                [Themes.SKY, [images[31],],],
                [Themes.FOREST, [images[32],],],
                [Themes.GHOST_HOUSE, [images[33],],],
                [Themes.AIRSHIP, [images[34],],],
                [Themes.CASTLE, [images[35],],],
            ],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[36],],],
                [Themes.UNDERGROUND, [images[37],],],
                [Themes.UNDERWATER, [images[38],],],
                [Themes.DESERT, [images[39],],],
                [Themes.SNOW, [images[40],],],
                [Themes.SKY, [images[42],],],
                [Themes.FOREST, [images[43],],],
                [Themes.GHOST_HOUSE, [images[44],],],
                [Themes.AIRSHIP, [images[45],],],
                [Themes.CASTLE, [images[47],],],
            ],),],
            [GameStyles.SUPER_MARIO_3D_WORLD, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[48],],],
                [Themes.UNDERGROUND, [images[49],],],
                [Themes.UNDERWATER, [images[50],],],
                [Themes.DESERT, [images[51],],],
                [Themes.SNOW, [images[52],],],
                [Themes.SKY, [images[53],],],
                [Themes.FOREST, [images[54],],],
                [Themes.GHOST_HOUSE, [images[55],],],
                [Themes.AIRSHIP, [images[56],],],
                [Themes.CASTLE, [images[57],],],
            ],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.AIRSHIP, [images[9],],],],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile]>([
                [Themes.SNOW, [images[16],],],
                [Themes.AIRSHIP, [images[21],],],
                [Themes.CASTLE, [images[23],],],
            ],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map<Themes, [EditorImageFile]>([
                [Themes.UNDERWATER, [images[27],],],
                [Themes.SNOW, [images[30],],],
            ],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map<Themes, [EditorImageFile]>([
                [Themes.SNOW, [images[41],],],
                [Themes.AIRSHIP, [images[46],],],
            ],),],
        ],),],
    ],),)
}

/**
 * Create a simple {@link EditorImage} for the {@link Entities.PIPE pipe} {@link Entities entity}
 *
 * @param entity The {@link Entities.PIPE} {@link Entities entity}
 */
export function editorPipeImages(entity: Entities,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'Dokan', 0, GameStyles.SUPER_MARIO_BROS,),            // index 0
        FileCreator.editorImage(entity, 'Dokan', 1, GameStyles.SUPER_MARIO_BROS,),             // index 1
        FileCreator.editorImage(entity, 'Dokan', 2, GameStyles.SUPER_MARIO_BROS,),             // index 2
        FileCreator.editorImage(entity, 'Dokan', 3, GameStyles.SUPER_MARIO_BROS,),             // index 3

        FileCreator.editorImage(entity, 'Dokan', 0, GameStyles.SUPER_MARIO_BROS_3,),           // index 4
        FileCreator.editorImage(entity, 'Dokan', 1, GameStyles.SUPER_MARIO_BROS_3,),           // index 5
        FileCreator.editorImage(entity, 'Dokan', 2, GameStyles.SUPER_MARIO_BROS_3,),           // index 6
        FileCreator.editorImage(entity, 'Dokan', 3, GameStyles.SUPER_MARIO_BROS_3,),           // index 7
        FileCreator.nightSnowEditorImage(entity, 'Dokan', 0, GameStyles.SUPER_MARIO_BROS_3,),  // index 8
        FileCreator.nightSnowEditorImage(entity, 'Dokan', 1, GameStyles.SUPER_MARIO_BROS_3,),  // index 9
        FileCreator.nightSnowEditorImage(entity, 'Dokan', 2, GameStyles.SUPER_MARIO_BROS_3,),  // index 10
        FileCreator.nightSnowEditorImage(entity, 'Dokan', 3, GameStyles.SUPER_MARIO_BROS_3,),  // index 11

        FileCreator.editorImage(entity, 'Dokan', 0, GameStyles.SUPER_MARIO_WORLD,),            // index 12
        FileCreator.editorImage(entity, 'Dokan', 1, GameStyles.SUPER_MARIO_WORLD,),            // index 13
        FileCreator.editorImage(entity, 'Dokan', 2, GameStyles.SUPER_MARIO_WORLD,),            // index 14
        FileCreator.editorImage(entity, 'Dokan', 3, GameStyles.SUPER_MARIO_WORLD,),            // index 15

        FileCreator.editorImage(entity, 'Dokan', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 16
        FileCreator.editorImage(entity, 'Dokan', 1, GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 17
        FileCreator.editorImage(entity, 'Dokan', 2, GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 18
        FileCreator.editorImage(entity, 'Dokan', 3, GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 19

        FileCreator.editorImage(entity, 'Dokan', 0, GameStyles.SUPER_MARIO_3D_WORLD,),         // index 20
        FileCreator.editorImage(entity, 'Dokan', 1, GameStyles.SUPER_MARIO_3D_WORLD,),         // index 21
        FileCreator.editorImage(entity, 'Dokan', 2, GameStyles.SUPER_MARIO_3D_WORLD,),         // index 22
        FileCreator.editorImage(entity, 'Dokan', 3, GameStyles.SUPER_MARIO_3D_WORLD,),         // index 23
    ] as const

    return new EditorImageContainer(images, new Map([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0], images[1], images[2], images[3],],],],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[4], images[5], images[6], images[7],],],],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[12], images[13], images[14], images[15],],],],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[16], images[17], images[18], images[19],],],],),],
            [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[20], images[21], images[22], images[23],],],],),],
        ],),],
        [Times.NIGHT, new Map([[GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[8], images[9], images[10], images[11],],],],),],],),],
    ],),)
}

/**
 * Create a simple {@link EditorImage} for the {@link Entities.MUSHROOM_PLATFORM "mushroom platform"} {@link Entities entity}
 *
 * @param entity The {@link Entities.MUSHROOM_PLATFORM} {@link Entities entity}
 */
export function editorMushroomPlatformImages(entity: Entities,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_BROS,),                                    // index 0
        FileCreator.editorImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_BROS,),                                    // index 1
        FileCreator.editorImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_BROS,),                                    // index 2
        FileCreator.editorInThemeImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,),          // index 3
        FileCreator.editorInThemeImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,),          // index 4
        FileCreator.editorInThemeImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,),          // index 5
        FileCreator.snowEditorImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_BROS,),                                // index 6
        FileCreator.snowEditorImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_BROS,),                                // index 7
        FileCreator.snowEditorImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_BROS,),                                // index 8
        FileCreator.nightSnowEditorImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_BROS,),                           // index 9
        FileCreator.nightSnowEditorImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_BROS,),                           // index 10
        FileCreator.nightSnowEditorImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_BROS,),                           // index 11
        FileCreator.airshipEditorImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_BROS,),                             // index 12
        FileCreator.airshipEditorImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_BROS,),                             // index 13
        FileCreator.airshipEditorImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_BROS,),                             // index 14

        FileCreator.editorImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_BROS_3,),                                  // index 15
        FileCreator.editorImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_BROS_3,),                                  // index 16
        FileCreator.editorImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_BROS_3,),                                  // index 17
        FileCreator.editorInThemeImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,),        // index 18
        FileCreator.editorInThemeImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,),        // index 19
        FileCreator.editorInThemeImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,),        // index 20
        FileCreator.snowEditorImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_BROS_3,),                              // index 21
        FileCreator.snowEditorImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_BROS_3,),                              // index 22
        FileCreator.snowEditorImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_BROS_3,),                              // index 23
        FileCreator.nightSnowEditorImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_BROS_3,),                         // index 24
        FileCreator.nightSnowEditorImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_BROS_3,),                         // index 25
        FileCreator.nightSnowEditorImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_BROS_3,),                         // index 26
        FileCreator.airshipEditorImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_BROS_3,),                           // index 27
        FileCreator.airshipEditorImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_BROS_3,),                           // index 28
        FileCreator.airshipEditorImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_BROS_3,),                           // index 29

        FileCreator.editorImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_WORLD,),                                   // index 30
        FileCreator.editorImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_WORLD,),                                   // index 31
        FileCreator.editorImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_WORLD,),                                   // index 32
        FileCreator.editorInThemeImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,),         // index 33
        FileCreator.editorInThemeImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,),         // index 34
        FileCreator.editorInThemeImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,),         // index 35
        FileCreator.snowEditorImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_WORLD,),                               // index 36
        FileCreator.snowEditorImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_WORLD,),                               // index 37
        FileCreator.snowEditorImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_WORLD,),                               // index 38
        FileCreator.nightSnowEditorImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_WORLD,),                          // index 39
        FileCreator.nightSnowEditorImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_WORLD,),                          // index 40
        FileCreator.nightSnowEditorImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_WORLD,),                          // index 41
        FileCreator.airshipEditorImage(entity, 'GroundMushroom', 0, GameStyles.SUPER_MARIO_WORLD,),                            // index 42
        FileCreator.airshipEditorImage(entity, 'GroundMushroom', 1, GameStyles.SUPER_MARIO_WORLD,),                            // index 43
        FileCreator.airshipEditorImage(entity, 'GroundMushroom', 2, GameStyles.SUPER_MARIO_WORLD,),                            // index 44

        FileCreator.editorImage(entity, 'GroundMushroom', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                              // index 45
        FileCreator.editorImage(entity, 'GroundMushroom', 1, GameStyles.NEW_SUPER_MARIO_BROS_U,),                              // index 46
        FileCreator.editorImage(entity, 'GroundMushroom', 2, GameStyles.NEW_SUPER_MARIO_BROS_U,),                              // index 47
        FileCreator.editorInThemeImage(entity, 'GroundMushroom', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERWATER,),    // index 48
        FileCreator.editorInThemeImage(entity, 'GroundMushroom', 1, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERWATER,),    // index 49
        FileCreator.editorInThemeImage(entity, 'GroundMushroom', 2, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERWATER,),    // index 50
        FileCreator.snowEditorImage(entity, 'GroundMushroom', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                          // index 51
        FileCreator.snowEditorImage(entity, 'GroundMushroom', 1, GameStyles.NEW_SUPER_MARIO_BROS_U,),                          // index 52
        FileCreator.snowEditorImage(entity, 'GroundMushroom', 2, GameStyles.NEW_SUPER_MARIO_BROS_U,),                          // index 53
        FileCreator.nightSnowEditorImage(entity, 'GroundMushroom', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                     // index 54
        FileCreator.nightSnowEditorImage(entity, 'GroundMushroom', 1, GameStyles.NEW_SUPER_MARIO_BROS_U,),                     // index 55
        FileCreator.nightSnowEditorImage(entity, 'GroundMushroom', 2, GameStyles.NEW_SUPER_MARIO_BROS_U,),                     // index 56
        FileCreator.airshipEditorImage(entity, 'GroundMushroom', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                       // index 57
        FileCreator.airshipEditorImage(entity, 'GroundMushroom', 1, GameStyles.NEW_SUPER_MARIO_BROS_U,),                       // index 58
        FileCreator.airshipEditorImage(entity, 'GroundMushroom', 2, GameStyles.NEW_SUPER_MARIO_BROS_U,),                       // index 59
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile, EditorImageFile, EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile, EditorImageFile, EditorImageFile,]>([
                [Themes.GROUND, [images[0], images[1], images[2],],],
                [Themes.UNDERWATER, [images[3], images[4], images[5],],],
                [Themes.SNOW, [images[6], images[7], images[8],],],
                [Themes.AIRSHIP, [images[12], images[13], images[14],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile, EditorImageFile, EditorImageFile,]>([
                [Themes.GROUND, [images[15], images[16], images[17],],],
                [Themes.UNDERWATER, [images[18], images[19], images[20],],],
                [Themes.SNOW, [images[21], images[22], images[23],],],
                [Themes.AIRSHIP, [images[27], images[28], images[29],],],
            ],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map<Themes, [EditorImageFile, EditorImageFile, EditorImageFile,]>([
                [Themes.GROUND, [images[30], images[31], images[32],],],
                [Themes.UNDERWATER, [images[33], images[34], images[35],],],
                [Themes.SNOW, [images[36], images[37], images[38],],],
                [Themes.AIRSHIP, [images[42], images[43], images[44],],],
            ],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map<Themes, [EditorImageFile, EditorImageFile, EditorImageFile,]>([
                [Themes.GROUND, [images[45], images[46], images[47],],],
                [Themes.UNDERWATER, [images[48], images[49], images[50],],],
                [Themes.SNOW, [images[51], images[52], images[53],],],
                [Themes.AIRSHIP, [images[57], images[58], images[59],],],
            ],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.SNOW, [images[9], images[10], images[11],],],],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.SNOW, [images[24], images[25], images[26],],],],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.SNOW, [images[39], images[40], images[41],],],],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.SNOW, [images[54], images[55], images[56],],],],),],
        ],),],
    ],),)
}

/**
 * Create a simple {@link EditorImage} for the {@link Entities.SEMISOLID_PLATFORM "semisolid platform"} {@link Entities entity}
 *
 * @param entity The {@link Entities.SEMISOLID_PLATFORM} {@link Entities entity}
 */
export function editorSemisolidPlatformImages(entity: Entities,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS,),                                    // index 0
        FileCreator.editorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS,),                                    // index 1
        FileCreator.editorImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS,),                                    // index 2
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND,),         // index 3
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND,),         // index 4
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND,),         // index 5
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,),          // index 6
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,),          // index 7
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,),          // index 8
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS, Themes.DESERT,),              // index 9
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS, Themes.DESERT,),              // index 10
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS, Themes.DESERT,),              // index 11
        FileCreator.snowEditorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS,),                                // index 12
        FileCreator.snowEditorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS,),                                // index 13
        FileCreator.snowEditorImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS,),                                // index 14
        FileCreator.nightSnowEditorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS,),                           // index 15
        FileCreator.nightSnowEditorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS,),                           // index 16
        FileCreator.nightSnowEditorImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS,),                           // index 17
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS, Themes.SKY,),                 // index 18
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS, Themes.SKY,),                 // index 19
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS, Themes.SKY,),                 // index 20
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS, Themes.FOREST,),              // index 21
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS, Themes.FOREST,),              // index 22
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS, Themes.FOREST,),              // index 23
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS, Themes.GHOST_HOUSE,),         // index 24
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS, Themes.GHOST_HOUSE,),         // index 25
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS, Themes.GHOST_HOUSE,),         // index 26
        FileCreator.airshipEditorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS,),                             // index 27
        FileCreator.airshipEditorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS,),                             // index 28
        FileCreator.airshipEditorImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS,),                             // index 29
        FileCreator.nightAirshipEditorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS,),                        // index 30
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS, Themes.CASTLE,),              // index 31
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS, Themes.CASTLE,),              // index 32
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS, Themes.CASTLE,),              // index 33

        FileCreator.editorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS_3,),                                  // index 34
        FileCreator.editorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS_3,),                                  // index 35
        FileCreator.editorImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS_3,),                                  // index 36
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND,),       // index 37
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND,),       // index 38
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND,),       // index 39
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,),        // index 40
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,),        // index 41
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,),        // index 42
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS_3, Themes.DESERT,),            // index 43
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.DESERT,),            // index 44
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS_3, Themes.DESERT,),            // index 45
        FileCreator.snowEditorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS_3,),                              // index 46
        FileCreator.snowEditorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS_3,),                              // index 47
        FileCreator.snowEditorImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS_3,),                              // index 48
        FileCreator.nightSnowEditorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS_3,),                         // index 49
        FileCreator.nightSnowEditorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS_3,),                         // index 50
        FileCreator.nightSnowEditorImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS_3,),                         // index 51
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS_3, Themes.SKY,),               // index 52
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.SKY,),               // index 53
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS_3, Themes.SKY,),               // index 54
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS_3, Themes.FOREST,),            // index 55
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.FOREST,),            // index 56
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS_3, Themes.FOREST,),            // index 57
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS_3, Themes.GHOST_HOUSE,),       // index 58
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.GHOST_HOUSE,),       // index 59
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS_3, Themes.GHOST_HOUSE,),       // index 60
        FileCreator.airshipEditorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS_3,),                           // index 61
        FileCreator.airshipEditorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS_3,),                           // index 62
        FileCreator.airshipEditorImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS_3,),                           // index 63
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_BROS_3, Themes.CASTLE,),            // index 64
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.CASTLE,),            // index 65
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_BROS_3, Themes.CASTLE,),            // index 66

        FileCreator.editorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_WORLD,),                                   // index 67
        FileCreator.editorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_WORLD,),                                   // index 68
        FileCreator.editorImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_WORLD,),                                   // index 69
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERGROUND,),        // index 70
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERGROUND,),        // index 71
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERGROUND,),        // index 72
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,),         // index 73
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,),         // index 74
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,),         // index 75
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_WORLD, Themes.DESERT,),             // index 76
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_WORLD, Themes.DESERT,),             // index 77
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_WORLD, Themes.DESERT,),             // index 78
        FileCreator.snowEditorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_WORLD,),                               // index 79
        FileCreator.snowEditorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_WORLD,),                               // index 80
        FileCreator.snowEditorImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_WORLD,),                               // index 81
        FileCreator.nightSnowEditorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_WORLD,),                          // index 82
        FileCreator.nightSnowEditorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_WORLD,),                          // index 83
        FileCreator.nightSnowEditorImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_WORLD,),                          // index 84
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_WORLD, Themes.SKY,),                // index 85
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_WORLD, Themes.SKY,),                // index 86
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_WORLD, Themes.SKY,),                // index 87
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_WORLD, Themes.FOREST,),             // index 88
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_WORLD, Themes.FOREST,),             // index 89
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_WORLD, Themes.FOREST,),             // index 90
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_WORLD, Themes.GHOST_HOUSE,),        // index 91
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_WORLD, Themes.GHOST_HOUSE,),        // index 92
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_WORLD, Themes.GHOST_HOUSE,),        // index 93
        FileCreator.airshipEditorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_WORLD,),                            // index 94
        FileCreator.airshipEditorImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_WORLD,),                            // index 95
        FileCreator.airshipEditorImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_WORLD,),                            // index 96
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_WORLD, Themes.CASTLE,),             // index 97
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.SUPER_MARIO_WORLD, Themes.CASTLE,),             // index 98
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.SUPER_MARIO_WORLD, Themes.CASTLE,),             // index 99

        FileCreator.editorImage(entity, 'GroundBox', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                              // index 100
        FileCreator.editorImage(entity, 'GroundBox', 1, GameStyles.NEW_SUPER_MARIO_BROS_U,),                              // index 101
        FileCreator.editorImage(entity, 'GroundBox', 2, GameStyles.NEW_SUPER_MARIO_BROS_U,),                              // index 102
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERGROUND,),   // index 103
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERGROUND,),   // index 104
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERGROUND,),   // index 105
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERWATER,),    // index 106
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERWATER,),    // index 107
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERWATER,),    // index 108
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.DESERT,),        // index 109
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.DESERT,),        // index 110
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.DESERT,),        // index 111
        FileCreator.snowEditorImage(entity, 'GroundBox', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                          // index 112
        FileCreator.snowEditorImage(entity, 'GroundBox', 1, GameStyles.NEW_SUPER_MARIO_BROS_U,),                          // index 113
        FileCreator.snowEditorImage(entity, 'GroundBox', 2, GameStyles.NEW_SUPER_MARIO_BROS_U,),                          // index 114
        FileCreator.nightSnowEditorImage(entity, 'GroundBox', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                     // index 115
        FileCreator.nightSnowEditorImage(entity, 'GroundBox', 1, GameStyles.NEW_SUPER_MARIO_BROS_U,),                     // index 116
        FileCreator.nightSnowEditorImage(entity, 'GroundBox', 2, GameStyles.NEW_SUPER_MARIO_BROS_U,),                     // index 117
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.SKY,),           // index 118
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.SKY,),           // index 119
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.SKY,),           // index 120
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.FOREST,),        // index 121
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.FOREST,),        // index 122
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.FOREST,),        // index 123
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.GHOST_HOUSE,),   // index 124
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.GHOST_HOUSE,),   // index 125
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.GHOST_HOUSE,),   // index 126
        FileCreator.airshipEditorImage(entity, 'GroundBox', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                       // index 127
        FileCreator.airshipEditorImage(entity, 'GroundBox', 1, GameStyles.NEW_SUPER_MARIO_BROS_U,),                       // index 128
        FileCreator.airshipEditorImage(entity, 'GroundBox', 2, GameStyles.NEW_SUPER_MARIO_BROS_U,),                       // index 129
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.CASTLE,),        // index 130
        FileCreator.editorInThemeImage(entity, 'GroundBox', 1, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.CASTLE,),        // index 131
        FileCreator.editorInThemeImage(entity, 'GroundBox', 2, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.CASTLE,),        // index 132

        FileCreator.editorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_3D_WORLD,),                                // index 133
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND,),     // index 134
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERWATER,),      // index 135
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.DESERT,),          // index 136
        FileCreator.snowEditorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_3D_WORLD,),                            // index 137
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.SKY,),             // index 138
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.FOREST,),          // index 139
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.GHOST_HOUSE,),     // index 140
        FileCreator.airshipEditorImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_3D_WORLD,),                         // index 141
        FileCreator.editorInThemeImage(entity, 'GroundBox', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.CASTLE,),          // index 142
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, EditorImageFile[]>>>([
        [Times.DAY, new Map<GameStyles, Map<Themes, EditorImageFile[]>>([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile, EditorImageFile, EditorImageFile,]>([
                [Themes.GROUND, [images[0], images[1], images[2],],],
                [Themes.UNDERGROUND, [images[3], images[4], images[5],],],
                [Themes.UNDERWATER, [images[6], images[7], images[8],],],
                [Themes.DESERT, [images[9], images[10], images[11],],],
                [Themes.SNOW, [images[12], images[13], images[14],],],
                [Themes.SKY, [images[18], images[19], images[20],],],
                [Themes.FOREST, [images[21], images[22], images[23],],],
                [Themes.GHOST_HOUSE, [images[24], images[25], images[26],],],
                [Themes.AIRSHIP, [images[27], images[28], images[29],],],
                [Themes.CASTLE, [images[31], images[32], images[33],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile, EditorImageFile, EditorImageFile,]>([
                [Themes.GROUND, [images[34], images[35], images[36],],],
                [Themes.UNDERGROUND, [images[37], images[38], images[39],],],
                [Themes.UNDERWATER, [images[40], images[41], images[42],],],
                [Themes.DESERT, [images[43], images[44], images[45],],],
                [Themes.SNOW, [images[46], images[47], images[48],],],
                [Themes.SKY, [images[52], images[53], images[54],],],
                [Themes.FOREST, [images[55], images[56], images[57],],],
                [Themes.GHOST_HOUSE, [images[58], images[59], images[60],],],
                [Themes.AIRSHIP, [images[61], images[62], images[63],],],
                [Themes.CASTLE, [images[64], images[65], images[66],],],
            ],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map<Themes, [EditorImageFile, EditorImageFile, EditorImageFile,]>([
                [Themes.GROUND, [images[67], images[68], images[69],],],
                [Themes.UNDERGROUND, [images[70], images[71], images[72],],],
                [Themes.UNDERWATER, [images[73], images[74], images[75],],],
                [Themes.DESERT, [images[76], images[77], images[78],],],
                [Themes.SNOW, [images[79], images[80], images[81],],],
                [Themes.SKY, [images[85], images[86], images[87],],],
                [Themes.FOREST, [images[88], images[89], images[90],],],
                [Themes.GHOST_HOUSE, [images[91], images[92], images[93],],],
                [Themes.AIRSHIP, [images[94], images[95], images[96],],],
                [Themes.CASTLE, [images[97], images[98], images[99],],],
            ],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map<Themes, [EditorImageFile, EditorImageFile, EditorImageFile,]>([
                [Themes.GROUND, [images[100], images[101], images[102],],],
                [Themes.UNDERGROUND, [images[103], images[104], images[105],],],
                [Themes.UNDERWATER, [images[106], images[107], images[108],],],
                [Themes.DESERT, [images[109], images[110], images[111],],],
                [Themes.SNOW, [images[112], images[113], images[114],],],
                [Themes.SKY, [images[118], images[119], images[120],],],
                [Themes.FOREST, [images[121], images[122], images[123],],],
                [Themes.GHOST_HOUSE, [images[124], images[125], images[126],],],
                [Themes.AIRSHIP, [images[127], images[128], images[129],],],
                [Themes.CASTLE, [images[130], images[131], images[132],],],
            ],),],
            [GameStyles.SUPER_MARIO_3D_WORLD, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[133],],],
                [Themes.UNDERGROUND, [images[134],],],
                [Themes.UNDERWATER, [images[135],],],
                [Themes.DESERT, [images[136],],],
                [Themes.SNOW, [images[137],],],
                [Themes.SKY, [images[138],],],
                [Themes.FOREST, [images[139],],],
                [Themes.GHOST_HOUSE, [images[140],],],
                [Themes.AIRSHIP, [images[141],],],
                [Themes.CASTLE, [images[142],],],
            ],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, EditorImageFile[]>([
                [Themes.SNOW, [images[15], images[16], images[17],],],
                [Themes.AIRSHIP, [images[30],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.SNOW, [images[49], images[50], images[51],],],],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.SNOW, [images[82], images[83], images[84],],],],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.SNOW, [images[115], images[116], images[117],],],],),],
        ],),],
    ],),)
}

/**
 * Create a simple {@link EditorImage} for the {@link Entities.BRIDGE bridge} {@link Entities entity}
 *
 * @param entity The {@link Entities.BRIDGE} {@link Entities entity}
 */
export function editorBridgeImages(entity: Entities,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_BROS,),                                    // index 0
        FileCreator.snowEditorImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_BROS,),                                // index 1
        FileCreator.nightSnowEditorImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_BROS,),                           // index 2
        FileCreator.editorInThemeImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_BROS, Themes.GHOST_HOUSE,),         // index 3
        FileCreator.airshipEditorImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_BROS,),                             // index 4
        FileCreator.editorInThemeImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_BROS, Themes.CASTLE,),              // index 5

        FileCreator.editorImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_BROS_3,),                                  // index 6
        FileCreator.snowEditorImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_BROS_3,),                              // index 7
        FileCreator.nightSnowEditorImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_BROS_3,),                         // index 8

        FileCreator.editorImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_WORLD,),                                   // index 9
        FileCreator.editorInThemeImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_WORLD, Themes.DESERT,),             // index 10
        FileCreator.snowEditorImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_WORLD,),                               // index 11
        FileCreator.nightSnowEditorImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_WORLD,),                          // index 12
        FileCreator.editorInThemeImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_WORLD, Themes.SKY,),                // index 13
        FileCreator.editorInThemeImage(entity, 'Bridge', 0, GameStyles.SUPER_MARIO_WORLD, Themes.FOREST,),             // index 14

        FileCreator.editorImage(entity, 'Bridge', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                              // index 15
        FileCreator.editorInThemeImage(entity, 'Bridge', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERGROUND,),   // index 16
        FileCreator.editorInThemeImage(entity, 'Bridge', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERWATER,),    // index 17
        FileCreator.snowEditorImage(entity, 'Bridge', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                          // index 18
        FileCreator.nightSnowEditorImage(entity, 'Bridge', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                     // index 19
        FileCreator.editorInThemeImage(entity, 'Bridge', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.FOREST,),        // index 20
        FileCreator.editorInThemeImage(entity, 'Bridge', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.GHOST_HOUSE,),   // index 21
        FileCreator.airshipEditorImage(entity, 'Bridge', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                       // index 22
        FileCreator.editorInThemeImage(entity, 'Bridge', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.CASTLE,),        // index 23
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[0],],],
                [Themes.SNOW, [images[1],],],
                [Themes.GHOST_HOUSE, [images[3],],],
                [Themes.AIRSHIP, [images[4],],],
                [Themes.CASTLE, [images[5],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[6],],],
                [Themes.SNOW, [images[8],],],
            ],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[9],],],
                [Themes.DESERT, [images[10],],],
                [Themes.SNOW, [images[11],],],
                [Themes.SKY, [images[13],],],
                [Themes.FOREST, [images[14],],],
            ],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[15],],],
                [Themes.UNDERGROUND, [images[16],],],
                [Themes.UNDERWATER, [images[17],],],
                [Themes.SNOW, [images[18],],],
                [Themes.FOREST, [images[20],],],
                [Themes.GHOST_HOUSE, [images[21],],],
                [Themes.AIRSHIP, [images[22],],],
                [Themes.CASTLE, [images[23],],],
            ],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.SNOW, [images[2],],],],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.SNOW, [images[7],],],],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.SNOW, [images[12],],],],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.SNOW, [images[19],],],],),],
        ],),],
    ],),)
}

/**
 * Create a simple {@link EditorImage} for the {@link Entities.BRICK_BLOCK "brick block"} {@link Entities entity}
 *
 * @param entity The {@link Entities.BRICK_BLOCK} {@link Entities entity}
 */
export function editorBrickBlockImages(entity: Entities,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'RengaBlock', 0, GameStyles.SUPER_MARIO_BROS,),                            // index 0
        FileCreator.editorInThemeImage(entity, 'RengaBlock', 0, GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND,), // index 1
        FileCreator.snowEditorImage(entity, 'RengaBlock', 0, GameStyles.SUPER_MARIO_BROS,),                        // index 2
        FileCreator.nightSnowEditorImage(entity, 'RengaBlock', 0, GameStyles.SUPER_MARIO_BROS,),                   // index 3
        FileCreator.editorInThemeImage(entity, 'RengaBlock', 0, GameStyles.SUPER_MARIO_BROS, Themes.GHOST_HOUSE,), // index 4
        FileCreator.editorInThemeImage(entity, 'RengaBlock', 0, GameStyles.SUPER_MARIO_BROS, Themes.CASTLE,),      // index 5

        FileCreator.editorImage(entity, 'RengaBlock', 0, GameStyles.SUPER_MARIO_BROS_3,),                          // index 6
        FileCreator.nightSnowEditorImage(entity, 'RengaBlock', 0, GameStyles.SUPER_MARIO_BROS_3,),                 // index 7

        FileCreator.editorImage(entity, 'RengaBlock', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                      // index 8

        FileCreator.editorImage(entity, 'RengaBlock', 0, GameStyles.SUPER_MARIO_3D_WORLD,),                        // index 9
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[0],],],
                [Themes.UNDERGROUND, [images[1],],],
                [Themes.SNOW, [images[2],],],
                [Themes.GHOST_HOUSE, [images[4],],],
                [Themes.CASTLE, [images[5],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[6],],],],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[8],],],],),],
            [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[9],],],],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.SNOW, [images[3],],],],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.SNOW, [images[7],],],],),],
        ],),],
    ],),)
}

/**
 * Create a simple {@link EditorImage} for the {@link Entities.CRISTAL_BLOCK "cristal block"} {@link Entities entity}
 *
 * @param entity The {@link Entities.CRISTAL_BLOCK} {@link Entities entity}
 */
export function editorCristalBlockImages(entity: Entities,): EditorImage {
    const images = [
        FileCreator.editorInThemeImage(entity, 'RengaBlock', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND,),
        FileCreator.editorInThemeImage(entity, 'RengaBlock', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.FOREST,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_3D_WORLD, new Map<Themes, [EditorImageFile,]>([
        [Themes.UNDERGROUND, [images[0],],],
        [Themes.FOREST, [images[1],],],
    ],),],],),],],),)
}

/**
 * Create a simple {@link EditorImage} for the {@link Entities.HARD_BLOCK "hard block"} {@link Entities entity}
 *
 * @param entity The {@link Entities.HARD_BLOCK} {@link Entities entity}
 */
export function editorHardBlockImages(entity: Entities,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_BROS,),                                  // index 0
        FileCreator.editorInThemeImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND,),       // index 1
        FileCreator.nightEditorImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND,),         // index 2
        FileCreator.editorInThemeImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,),        // index 3
        FileCreator.snowEditorImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_BROS,),                              // index 4
        FileCreator.nightSnowEditorImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_BROS,),                         // index 5
        FileCreator.editorInThemeImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_BROS, Themes.GHOST_HOUSE,),       // index 6
        FileCreator.airshipEditorImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_BROS,),                           // index 7
        FileCreator.editorInThemeImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_BROS, Themes.CASTLE,),            // index 8

        FileCreator.editorImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_BROS_3,),                                // index 9
        FileCreator.snowEditorImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_BROS_3,),                            // index 10
        FileCreator.nightSnowEditorImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_BROS_3,),                       // index 11

        FileCreator.editorImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_WORLD,),                                 // index 12
        FileCreator.editorInThemeImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_WORLD, Themes.GHOST_HOUSE,),      // index 13
        FileCreator.airshipEditorImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_WORLD,),                          // index 14
        FileCreator.nightAirshipEditorImage(entity, 'HardBlock', 0, GameStyles.SUPER_MARIO_WORLD,),                     // index 15

        FileCreator.editorImage(entity, 'HardBlock', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                            // index 16
        FileCreator.editorInThemeImage(entity, 'HardBlock', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERGROUND,), // index 17
        FileCreator.editorInThemeImage(entity, 'HardBlock', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERWATER,),  // index 18
        FileCreator.snowEditorImage(entity, 'HardBlock', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                        // index 19
        FileCreator.editorInThemeImage(entity, 'HardBlock', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.SKY,),         // index 20
        FileCreator.editorInThemeImage(entity, 'HardBlock', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.FOREST,),      // index 21
        FileCreator.editorInThemeImage(entity, 'HardBlock', 0, GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.CASTLE,),      // index 22
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[0],],],
                [Themes.UNDERGROUND, [images[1],],],
                [Themes.UNDERWATER, [images[3],],],
                [Themes.SNOW, [images[4],],],
                [Themes.GHOST_HOUSE, [images[6],],],
                [Themes.AIRSHIP, [images[7],],],
                [Themes.CASTLE, [images[8],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[9],],],
                [Themes.SNOW, [images[10],],],
            ],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[12],],],
                [Themes.GHOST_HOUSE, [images[13],],],
                [Themes.AIRSHIP, [images[14],],],
            ],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[16],],],
                [Themes.UNDERGROUND, [images[17],],],
                [Themes.UNDERWATER, [images[18],],],
                [Themes.SNOW, [images[19],],],
                [Themes.SKY, [images[20],],],
                [Themes.FOREST, [images[21],],],
                [Themes.CASTLE, [images[22],],],
            ],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile,]>([
                [Themes.UNDERGROUND, [images[2],],],
                [Themes.SNOW, [images[5],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.SNOW, [images[11],],],],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.AIRSHIP, [images[15],],],],),],
        ],),],
    ],),)
}

/**
 * Create a simple {@link EditorImage} for the {@link Entities.CLOUD_BLOCK "cloud block"}  {@link Entities entity}
 *
 * @param entity The {@link Entities.CLOUD_BLOCK} {@link Entities entity}
 */
export function editorCloudBlockImages(entity: Entities,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'KumoBlock', 0, GameStyles.SUPER_MARIO_BROS,),                                    // index 0
        FileCreator.editorInThemeImage(entity, 'KumoBlock', 0, GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,),          // index 1
        FileCreator.nightSnowEditorImage(entity, 'KumoBlock', 0, GameStyles.SUPER_MARIO_BROS,),                           // index 2

        FileCreator.editorImage(entity, 'KumoBlock', 0, GameStyles.SUPER_MARIO_BROS_3,),                                  // index 3
        FileCreator.editorInThemeImage(entity, 'KumoBlock', 0, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,),        // index 4
        FileCreator.nightSnowEditorImage(entity, 'KumoBlock', 0, GameStyles.SUPER_MARIO_BROS_3,),                         // index 5

        FileCreator.editorImage(entity, 'KumoBlock', 0, GameStyles.SUPER_MARIO_WORLD,),                                   // index 6
        FileCreator.editorInThemeImage(entity, 'KumoBlock', 0, GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,),         // index 7

        FileCreator.editorImage(entity, 'KumoBlock', 0, GameStyles.NEW_SUPER_MARIO_BROS_U,),                              // index 8

        FileCreator.editorImage(entity, 'KumoBlock', 0, GameStyles.SUPER_MARIO_3D_WORLD,),                                // index 9
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[0],],],
                [Themes.UNDERWATER, [images[1],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[3],],],
                [Themes.UNDERWATER, [images[4],],],
            ],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[6],],],
                [Themes.UNDERWATER, [images[7],],],
            ],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[8],],],],),],
            [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[9],],],],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.SNOW, [images[2],],],],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.SNOW, [images[5],],],],),],
        ],),],
    ],),)
}

/**
 * Create a simple {@link EditorImage} for the {@link Entities.CHEEP_CHEEP "cheep cheep"}  {@link Entities entity}
 *
 * @param entity The {@link Entities.CHEEP_CHEEP} {@link Entities entity}
 */
export function editorCheepCheepImages(entity: Entities,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'Pukupuku', 0, GameStyles.SUPER_MARIO_BROS,),       // index 0
        FileCreator.editorImage(entity, 'Pukupuku', 1, GameStyles.SUPER_MARIO_BROS,),       // index 1

        FileCreator.editorImage(entity, 'Pukupuku', 0, GameStyles.SUPER_MARIO_BROS_3,),     // index 2
        FileCreator.editorImage(entity, 'Pukupuku', 1, GameStyles.SUPER_MARIO_BROS_3,),     // index 3

        FileCreator.editorImage(entity, 'Pukupuku', 1, GameStyles.SUPER_MARIO_WORLD,),      // index 4

        FileCreator.editorImage(entity, 'Pukupuku', 1, GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 5

        FileCreator.editorImage(entity, 'Pukupuku', 0, GameStyles.SUPER_MARIO_3D_WORLD,),   // index 6
        FileCreator.editorImage(entity, 'Pukupuku', 1, GameStyles.SUPER_MARIO_3D_WORLD,),   // index 7
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0], images[1],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[2], images[3],],],],),],
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[4],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[5],],],],),],
        [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[6], images[7]],],],),],
    ],),],],),)
}

/**
 * Create a simple {@link EditorImage} for the {@link Entities.SPIKE_BALL "spike ball"}  {@link Entities entity}
 *
 * @param entity The {@link Entities.SPIKE_BALL} {@link Entities entity}
 */
export function editorSpikeBallImages(entity: Entities,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS,),                              // index 0
        FileCreator.nightEditorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS, Themes.GROUND,),          // index 1
        FileCreator.editorInThemeImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND,),   // index 2
        FileCreator.editorInThemeImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,),    // index 3
        FileCreator.nightEditorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS, Themes.DESERT,),          // index 4
        FileCreator.nightEditorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS, Themes.SKY,),             // index 5
        FileCreator.nightEditorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS, Themes.FOREST,),          // index 6
        FileCreator.editorInThemeImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS, Themes.GHOST_HOUSE,),   // index 7
        FileCreator.nightAirshipEditorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS,),                  // index 8
        FileCreator.editorInThemeImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS, Themes.CASTLE,),        // index 9

        FileCreator.editorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS_3,),                            // index 10
        FileCreator.nightEditorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.GROUND,),        // index 11
        FileCreator.editorInThemeImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND,), // index 12
        FileCreator.editorInThemeImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,),  // index 13
        FileCreator.nightEditorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.DESERT,),        // index 14
        FileCreator.nightEditorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.SKY,),           // index 15
        FileCreator.nightEditorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.FOREST,),        // index 16
        FileCreator.editorInThemeImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.GHOST_HOUSE,), // index 17
        FileCreator.nightAirshipEditorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS_3,),                // index 18
        FileCreator.editorInThemeImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_BROS_3, Themes.CASTLE,),      // index 19

        FileCreator.editorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_WORLD,),                             // index 20

        FileCreator.editorImage(entity, 'Gabon', 1, GameStyles.NEW_SUPER_MARIO_BROS_U,),                        // index 21

        FileCreator.editorImage(entity, 'Gabon', 1, GameStyles.SUPER_MARIO_3D_WORLD,),                          // index 22
    ] as const

    return new EditorImageContainer(images, new Map<Times, Map<GameStyles, Map<Themes, [EditorImageFile,]>>>([
        [Times.DAY, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[0],],],
                [Themes.UNDERGROUND, [images[2],],],
                [Themes.UNDERWATER, [images[3],],],
                [Themes.GHOST_HOUSE, [images[7],],],
                [Themes.CASTLE, [images[9],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[10],],],
                [Themes.UNDERGROUND, [images[12],],],
                [Themes.UNDERWATER, [images[13],],],
                [Themes.GHOST_HOUSE, [images[17],],],
                [Themes.CASTLE, [images[19],],],
            ],),],
            [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[20],],],],),],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[21],],],],),],
            [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[22],],],],),],
        ],),],
        [Times.NIGHT, new Map([
            [GameStyles.SUPER_MARIO_BROS, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[1],],],
                [Themes.DESERT, [images[4],],],
                [Themes.SKY, [images[5],],],
                [Themes.FOREST, [images[6],],],
                [Themes.AIRSHIP, [images[8],],],
            ],),],
            [GameStyles.SUPER_MARIO_BROS_3, new Map<Themes, [EditorImageFile,]>([
                [Themes.GROUND, [images[11],],],
                [Themes.DESERT, [images[14],],],
                [Themes.SKY, [images[15],],],
                [Themes.FOREST, [images[16],],],
                [Themes.AIRSHIP, [images[18],],],
            ],),],
        ],),],
    ],),)
}

/**
 * Create a simple {@link EditorImage} for the {@link Entities.TREE tree}  {@link Entities entity}
 *
 * @param entity The {@link Entities.TREE} {@link Entities entity}
 */
export function editorTreeImages(entity: Entities,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'BellTree', 0, GameStyles.SUPER_MARIO_3D_WORLD,),
        FileCreator.editorInThemeImage(entity, 'BellTree', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND,),
        FileCreator.editorInThemeImage(entity, 'BellTree', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERWATER,),
        FileCreator.editorInThemeImage(entity, 'BellTree', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.DESERT,),
        FileCreator.editorInThemeImage(entity, 'BellTree', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.SNOW,),
        FileCreator.editorInThemeImage(entity, 'BellTree', 0, GameStyles.SUPER_MARIO_3D_WORLD, Themes.FOREST,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, images,],],),],],),],],),)
}

//endregion -------------------- Editor images (predefined) --------------------

//endregion -------------------- Editor images --------------------
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
