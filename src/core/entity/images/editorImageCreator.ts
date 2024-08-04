import type {EditorImageFile, ImageName_Editor, ImageName_Editor_PowerUp, ImageNumber_Editor_WithBlueVariant, SimpleImageName_Editor_GroundOrSlope, SimpleImageName_Editor_WithBlueVariant} from 'core/entity/file/EntityImageFile.editor'
import type {EditorImage}                                                                                                                                                                   from 'core/entity/images/editor/EditorImage'
import type {PowerUpEditorImage}                                                                                                                                                            from 'core/entity/images/editor/PowerUpEditorImage'

import * as FileCreator       from 'core/entity/file/fileCreator'
import {EditorImageContainer} from 'core/entity/images/editor/EditorImage.container'
import {GameStyles}           from 'core/gameStyle/GameStyles'
import {Themes}               from 'core/theme/Themes'
import {Times}                from 'core/time/Times'
import {EditorEntityImages}   from 'core/entity/EditorEntityImages'

//region -------------------- Editor images (simple) --------------------

export function editorImages(entity: EditorEntityImages, name: ImageName_Editor,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),
        FileCreator.editorImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[2],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[3],],],],),],
        [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[4],],],],),],
    ],),],],),)
}

export function editorInSnowImages(entity: EditorEntityImages, name: ImageName_Editor,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),
        FileCreator.editorImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),

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

export function editorInSmbImages(entity: EditorEntityImages, name: ImageName_Editor, theme: Themes = Themes.GROUND,): EditorImage {
    const image = [FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS,),] as const

    return new EditorImageContainer(image, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_BROS, new Map([[theme, image,],],),],],),],],),)
}
export function editorInSmb3Images(entity: EditorEntityImages, name: ImageName_Editor, theme: Themes = Themes.GROUND,): EditorImage {
    const image = [FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),] as const

    return new EditorImageContainer(image, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_BROS_3, new Map([[theme, image,],],),],],),],],),)
}
export function editorInSmwImages(entity: EditorEntityImages, name: ImageName_Editor, theme: Themes = Themes.GROUND,): EditorImage {
    const image = [FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),] as const

    return new EditorImageContainer(image, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_WORLD, new Map([[theme, image,],],),],],),],],),)
}
export function editorInNsmbuImages(entity: EditorEntityImages, name: ImageName_Editor, theme: Themes = Themes.GROUND,): EditorImage {
    const image = [FileCreator.editorImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),] as const

    return new EditorImageContainer(image, new Map([[Times.DAY, new Map([[GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[theme, image,],],),],],),],],),)
}
export function editorInSm3dwImages(entity: EditorEntityImages, name: ImageName_Editor, theme: Themes = Themes.GROUND,): EditorImage {
    const image = [FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),] as const

    return new EditorImageContainer(image, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_3D_WORLD, new Map([[theme, image,],],),],],),],],),)
}


export function editorInSmbAndSmb3Images(entity: EditorEntityImages, name: ImageName_Editor,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
    ],),],],),)
}

export function editorInSmwAndNsmbuImages(entity: EditorEntityImages, name: ImageName_Editor,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),
        FileCreator.editorImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[1],],],],),],
    ],),],],),)
}


export function editorInNotSmwAndSm3dwImages(entity: EditorEntityImages, name: ImageName_Editor,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),
        FileCreator.editorImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[2],],],],),],
    ],),],],),)
}

export function editorInNotNsmbuAndSm3dwImages(entity: EditorEntityImages, name: ImageName_Editor,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[2],],],],),],
    ],),],],),)
}


export function editorInNotSmwImages(entity: EditorEntityImages, name: ImageName_Editor,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),
        FileCreator.editorImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[2],],],],),],
        [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, [images[3],],],],),],
    ],),],],),)
}
export function editorInNotSm3dwImages(entity: EditorEntityImages, name: ImageName_Editor,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),
        FileCreator.editorImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, [images[0],],],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, [images[1],],],],),],
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, [images[2],],],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, [images[3],],],],),],
    ],),],],),)
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
 * @param entity The {@link EditorEntityImages} reference
 * @param name The image name
 * @param number The image number
 */
export function editorInBlueVariantInSmbAndSmb3Images<const NUMBER extends ImageNumber_Editor_WithBlueVariant, >(entity: EditorEntityImages, name: SimpleImageName_Editor_WithBlueVariant<NUMBER>, number: NUMBER,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, `${name}_0${number}`, GameStyles.SUPER_MARIO_BROS,),                  // index 0
        FileCreator.editorImage(entity, `${name}_plain_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),      // index 1
        FileCreator.editorImage(entity, `${name}_underground_0${number}`, GameStyles.SUPER_MARIO_BROS,),      // index 2
        FileCreator.editorImage(entity, `${name}_water_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),      // index 3
        FileCreator.editorImage(entity, `${name}_desert_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),     // index 4
        FileCreator.editorImage(entity, `${name}_snow_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),       // index 5
        FileCreator.editorImage(entity, `${name}_athletic_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),   // index 6
        FileCreator.editorImage(entity, `${name}_woods_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),      // index 7
        FileCreator.editorImage(entity, `${name}_hauntedhouse_0${number}`, GameStyles.SUPER_MARIO_BROS,),     // index 8
        FileCreator.editorImage(entity, `${name}_airship_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),    // index 9
        FileCreator.editorImage(entity, `${name}_castle_0${number}`, GameStyles.SUPER_MARIO_BROS,),           // index 10

        FileCreator.editorImage(entity, `${name}_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),                // index 11
        FileCreator.editorImage(entity, `${name}_plain_night_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),    // index 12
        FileCreator.editorImage(entity, `${name}_underground_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),    // index 13
        FileCreator.editorImage(entity, `${name}_water_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),          // index 14
        FileCreator.editorImage(entity, `${name}_desert_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),         // index 15
        FileCreator.editorImage(entity, `${name}_snow_night_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),     // index 16
        FileCreator.editorImage(entity, `${name}_athletic_night_0${number}`, GameStyles.SUPER_MARIO_BROS_3,), // index 17
        FileCreator.editorImage(entity, `${name}_woods_night_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),    // index 18
        FileCreator.editorImage(entity, `${name}_hauntedhouse_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),   // index 19
        FileCreator.editorImage(entity, `${name}_airship_night_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),  // index 20
        FileCreator.editorImage(entity, `${name}_castle_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),         // index 21

        FileCreator.editorImage(entity, `${name}_0${number}`, GameStyles.SUPER_MARIO_WORLD,),                 // index 22

        FileCreator.editorImage(entity, `${name}_0${number}`, GameStyles.NEW_SUPER_MARIO_BROS_U,),            // index 23

        FileCreator.editorImage(entity, `${name}_0${number}`, GameStyles.SUPER_MARIO_3D_WORLD,),              // index 24
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
 * @param entity The {@link EditorEntityImages} reference
 * @param name The image name
 * @param number The image number
 */
export function editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images<const NUMBER extends ImageNumber_Editor_WithBlueVariant, >(entity: EditorEntityImages, name: SimpleImageName_Editor_WithBlueVariant<NUMBER>, number: NUMBER,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, `${name}_0${number}`, GameStyles.SUPER_MARIO_BROS,),                  // index 0
        FileCreator.editorImage(entity, `${name}_plain_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),      // index 1
        FileCreator.editorImage(entity, `${name}_underground_0${number}`, GameStyles.SUPER_MARIO_BROS,),      // index 2
        FileCreator.editorImage(entity, `${name}_water_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),      // index 3
        FileCreator.editorImage(entity, `${name}_desert_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),     // index 4
        FileCreator.editorImage(entity, `${name}_snow_0${number}`, GameStyles.SUPER_MARIO_BROS,),             // index 5
        FileCreator.editorImage(entity, `${name}_athletic_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),   // index 6
        FileCreator.editorImage(entity, `${name}_woods_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),      // index 7
        FileCreator.editorImage(entity, `${name}_hauntedhouse_0${number}`, GameStyles.SUPER_MARIO_BROS,),     // index 8
        FileCreator.editorImage(entity, `${name}_airship_night_0${number}`, GameStyles.SUPER_MARIO_BROS,),    // index 9
        FileCreator.editorImage(entity, `${name}_castle_0${number}`, GameStyles.SUPER_MARIO_BROS,),           // index 10

        FileCreator.editorImage(entity, `${name}_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),                // index 11
        FileCreator.editorImage(entity, `${name}_plain_night_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),    // index 12
        FileCreator.editorImage(entity, `${name}_underground_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),    // index 13
        FileCreator.editorImage(entity, `${name}_water_night_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),    // index 14
        FileCreator.editorImage(entity, `${name}_desert_night_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),   // index 15
        FileCreator.editorImage(entity, `${name}_snow_night_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),     // index 16
        FileCreator.editorImage(entity, `${name}_athletic_night_0${number}`, GameStyles.SUPER_MARIO_BROS_3,), // index 17
        FileCreator.editorImage(entity, `${name}_woods_night)0${number}`, GameStyles.SUPER_MARIO_BROS_3,),    // index 18
        FileCreator.editorImage(entity, `${name}_hauntedhouse_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),   // index 19
        FileCreator.editorImage(entity, `${name}_airship_night_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),  // index 20
        FileCreator.editorImage(entity, `${name}_castle_0${number}`, GameStyles.SUPER_MARIO_BROS_3,),         // index 21

        FileCreator.editorImage(entity, `${name}_0${number}`, GameStyles.SUPER_MARIO_WORLD,),                 // index 22

        FileCreator.editorImage(entity, `${name}_0${number}`, GameStyles.NEW_SUPER_MARIO_BROS_U,),            // index 23
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
 * @param entity The {@link EditorEntityImages} reference
 * @param name The image name
 * @param nightSnowName The image name in the {@link Times.NIGHT night} {@link Themes.SNOW snow}
 */
export function editorInNightSnowInSmbAndSmb3Images(entity: EditorEntityImages, name: ImageName_Editor, nightSnowName: ImageName_Editor,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS,),            // index 0
        FileCreator.editorImage(entity, nightSnowName, GameStyles.SUPER_MARIO_BROS,),   // index 1

        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),          // index 2
        FileCreator.editorImage(entity, nightSnowName, GameStyles.SUPER_MARIO_BROS_3,), // index 3

        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),           // index 4

        FileCreator.editorImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 5

        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),        // index 6
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
 * @param entity The {@link EditorEntityImages} reference
 * @param name The image name
 * @param nightSnowName The image name in the {@link Times.NIGHT night} {@link Themes.SNOW snow}
 */
export function editorInNightSnowInSmb3Images(entity: EditorEntityImages, name: ImageName_Editor, nightSnowName: ImageName_Editor,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS,),            // index 0

        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),          // index 1
        FileCreator.editorImage(entity, nightSnowName, GameStyles.SUPER_MARIO_BROS_3,), // index 2

        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),           // index 3

        FileCreator.editorImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 4

        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_3D_WORLD,),        // index 5
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
 * @param entity The {@link EditorEntityImages} reference
 * @param name The image name
 * @param nightSnowName The image name in the {@link Times.NIGHT night} {@link Themes.SNOW snow}
 */
export function editorInNotSm3dwAndNightSnowInSmbAndSmb3Images(entity: EditorEntityImages, name: ImageName_Editor, nightSnowName: ImageName_Editor,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS,),            // index 0
        FileCreator.editorImage(entity, nightSnowName, GameStyles.SUPER_MARIO_BROS,),   // index 1

        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),          // index 2
        FileCreator.editorImage(entity, nightSnowName, GameStyles.SUPER_MARIO_BROS_3,), // index 3

        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),           // index 4

        FileCreator.editorImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 5
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
 * @param entity The {@link EditorEntityImages} reference
 * @param name The image name
 * @param nightSnowName The image name in the {@link Times.NIGHT night} {@link Themes.SNOW snow}
 */
export function editorInNotSm3dwAndNightSnowInSmb3Images(entity: EditorEntityImages, name: ImageName_Editor, nightSnowName: ImageName_Editor,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS,),            // index 0

        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_BROS_3,),          // index 1
        FileCreator.editorImage(entity, nightSnowName, GameStyles.SUPER_MARIO_BROS_3,), // index 2

        FileCreator.editorImage(entity, name, GameStyles.SUPER_MARIO_WORLD,),           // index 3

        FileCreator.editorImage(entity, name, GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 4
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

export function multipleEditorImages(entity: EditorEntityImages, names: readonly ImageName_Editor[],): EditorImage {
    const size = names.length
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
        images[totalIndex++] = smbImages[index] = FileCreator.editorImage(entity, names[index], GameStyles.SUPER_MARIO_BROS,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = smb3Images[index] = FileCreator.editorImage(entity, names[index], GameStyles.SUPER_MARIO_BROS_3,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = smwImages[index] = FileCreator.editorImage(entity, names[index], GameStyles.SUPER_MARIO_WORLD,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = nsmbuImages[index] = FileCreator.editorImage(entity, names[index], GameStyles.NEW_SUPER_MARIO_BROS_U,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = sm3dwImages[index] = FileCreator.editorImage(entity, names[index], GameStyles.SUPER_MARIO_3D_WORLD,)

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([
        [GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, smbImages,],],),],
        [GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, smb3Images,],],),],
        [GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, smwImages,],],),],
        [GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, nsmbuImages,],],),],
        [GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, sm3dwImages,],],),],
    ],),],],),)
}


export function multipleEditorInSm3dwImages(entity: EditorEntityImages, names: readonly ImageName_Editor[],): EditorImage {
    const size = names.length
    const images = new Array<EditorImageFile>(size,)
    let index = size
    while (index-- > 0)
        images[index] = FileCreator.editorImage(entity, names[index], GameStyles.SUPER_MARIO_3D_WORLD,)

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, images,],],),],],),],],),)
}


export function multipleEditorInNotSm3dwImages(entity: EditorEntityImages, names: readonly ImageName_Editor[],): EditorImage {
    const size = names.length
    const totalSize = size * 4
    const images = new Array<EditorImageFile>(totalSize,)
    const smbImages = new Array<EditorImageFile>(size,)
    const smb3Images = new Array<EditorImageFile>(size,)
    const smwImages = new Array<EditorImageFile>(size,)
    const nsmbuImages = new Array<EditorImageFile>(size,)

    let index = size
    let totalIndex = 0
    while (index-- > 0)
        images[totalIndex++] = smbImages[index] = FileCreator.editorImage(entity, names[index], GameStyles.SUPER_MARIO_BROS,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = smb3Images[index] = FileCreator.editorImage(entity, names[index], GameStyles.SUPER_MARIO_BROS_3,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = smwImages[index] = FileCreator.editorImage(entity, names[index], GameStyles.SUPER_MARIO_WORLD,)
    index = size
    while (index-- > 0)
        images[totalIndex++] = nsmbuImages[index] = FileCreator.editorImage(entity, names[index], GameStyles.NEW_SUPER_MARIO_BROS_U,)

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
 * @param standaloneName The image name that is standalone
 * @param nameWithMushroom The image name that is with a {@link Entities.SUPER_MUSHROOM mushroom}
 */
export function powerUpEditorImages(entity: EditorEntityImages, standaloneName: ImageName_Editor_PowerUp, nameWithMushroom: ImageName_Editor_PowerUp,): PowerUpEditorImage {
    const images = [
        FileCreator.standalonePowerUpEditorImage(entity, standaloneName, GameStyles.SUPER_MARIO_BROS,),           // index 0
        FileCreator.withMushroomPowerUpEditorImage(entity, nameWithMushroom, GameStyles.SUPER_MARIO_BROS,),       // index 1

        FileCreator.standalonePowerUpEditorImage(entity, standaloneName, GameStyles.SUPER_MARIO_BROS_3,),         // index 2
        FileCreator.withMushroomPowerUpEditorImage(entity, nameWithMushroom, GameStyles.SUPER_MARIO_BROS_3,),     // index 3

        FileCreator.standalonePowerUpEditorImage(entity, standaloneName, GameStyles.SUPER_MARIO_WORLD,),          // index 4
        FileCreator.withMushroomPowerUpEditorImage(entity, nameWithMushroom, GameStyles.SUPER_MARIO_WORLD,),      // index 6

        FileCreator.standalonePowerUpEditorImage(entity, standaloneName, GameStyles.NEW_SUPER_MARIO_BROS_U,),     // index 7
        FileCreator.withMushroomPowerUpEditorImage(entity, nameWithMushroom, GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 8

        FileCreator.standalonePowerUpEditorImage(entity, standaloneName, GameStyles.SUPER_MARIO_3D_WORLD,),       // index 9
        FileCreator.withMushroomPowerUpEditorImage(entity, nameWithMushroom, GameStyles.SUPER_MARIO_3D_WORLD,),   // index 10
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
 * @param standaloneName The image name that is standalone
 * @param nameWithMushroom The image name that is with a {@link Entities.SUPER_MUSHROOM mushroom}
 */
export function powerUpEditorInSmbImages(entity: EditorEntityImages, standaloneName: ImageName_Editor_PowerUp, nameWithMushroom: ImageName_Editor_PowerUp,): PowerUpEditorImage {
    const images = FileCreator.powerUpEditorImages(entity, standaloneName, nameWithMushroom, GameStyles.SUPER_MARIO_BROS,)

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_BROS, new Map([[Themes.GROUND, images,],],),],],),],],),)
}

/**
 * Create a simple {@link PowerUpEditorImage} that is in only the {@link GameStyles.SUPER_MARIO_BROS_3 SMB3} {@link GameStyles game style}
 *
 * @param entity The entity reference
 * @param standaloneName The image name that is standalone
 * @param nameWithMushroom The image name that is with a {@link Entities.SUPER_MUSHROOM mushroom}
 */
export function powerUpEditorInSmb3Images(entity: EditorEntityImages, standaloneName: ImageName_Editor_PowerUp, nameWithMushroom: ImageName_Editor_PowerUp,): PowerUpEditorImage {
    const images = FileCreator.powerUpEditorImages(entity, standaloneName, nameWithMushroom, GameStyles.SUPER_MARIO_BROS_3,)


    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_BROS_3, new Map([[Themes.GROUND, images,],],),],],),],],),)
}

/**
 * Create a simple {@link PowerUpEditorImage} that is in only the {@link GameStyles.SUPER_MARIO_WORLD SMW} {@link GameStyles game style}
 *
 * @param entity The entity reference
 * @param standaloneName The image name that is standalone
 * @param nameWithMushroom The image name that is with a {@link Entities.SUPER_MUSHROOM mushroom}
 */
export function powerUpEditorInSmwImages(entity: EditorEntityImages, standaloneName: ImageName_Editor_PowerUp, nameWithMushroom: ImageName_Editor_PowerUp,): PowerUpEditorImage {
    const images = FileCreator.powerUpEditorImages(entity, standaloneName, nameWithMushroom, GameStyles.SUPER_MARIO_WORLD,)


    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_WORLD, new Map([[Themes.GROUND, images,],],),],],),],],),)
}

/**
 * Create a simple {@link PowerUpEditorImage} that is in only the {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU} {@link GameStyles game style}
 *
 * @param entity The entity reference
 * @param standaloneName The image name that is standalone
 * @param nameWithMushroom The image name that is with a {@link Entities.SUPER_MUSHROOM mushroom}
 */
export function powerUpEditorInNsmbuImages(entity: EditorEntityImages, standaloneName: ImageName_Editor_PowerUp, nameWithMushroom: ImageName_Editor_PowerUp,): PowerUpEditorImage {
    const images = FileCreator.powerUpEditorImages(entity, standaloneName, nameWithMushroom, GameStyles.NEW_SUPER_MARIO_BROS_U,)


    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.NEW_SUPER_MARIO_BROS_U, new Map([[Themes.GROUND, images,],],),],],),],],),)
}

/**
 * Create a simple {@link PowerUpEditorImage} that is in only the {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW} {@link GameStyles game style}
 *
 * @param entity The entity reference
 * @param standaloneName The image name that is standalone
 * @param nameWithMushroom The image name that is with a {@link Entities.SUPER_MUSHROOM mushroom}
 */
export function powerUpEditorInSm3dwImages(entity: EditorEntityImages, standaloneName: ImageName_Editor_PowerUp, nameWithMushroom: ImageName_Editor_PowerUp,): PowerUpEditorImage {
    const images = FileCreator.powerUpEditorImages(entity, standaloneName, nameWithMushroom, GameStyles.SUPER_MARIO_3D_WORLD,)


    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, images,],],),],],),],],),)
}

//endregion -------------------- Editor images (power-up) --------------------
//region -------------------- Editor images (predefined) --------------------

/**
 * Create a simple {@link EditorImage} for the {@link EditorEntityImages.GROUND ground},
 * {@link EditorEntityImages.STEEP_SLOPE steep} and {@link EditorEntityImages.GENTLE_SLOPE gentle} slope {@link EditorEntityImages entity}
 *
 * @param entity The {@link EditorEntityImages.GROUND}, {@link EditorEntityImages.STEEP_SLOPE} or {@link EditorEntityImages.GENTLE_SLOPE} {@link EditorEntityImages entity}
 * @param name The image name
 */
export function editorGroundOrSlopeImages(entity: EditorEntityImages, name: SimpleImageName_Editor_GroundOrSlope,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, `${name}_00`, GameStyles.SUPER_MARIO_BROS,),                     // index 0
        FileCreator.editorImage(entity, `${name}_underground_00`, GameStyles.SUPER_MARIO_BROS,),         // index 1
        FileCreator.editorImage(entity, `${name}_water_00`, GameStyles.SUPER_MARIO_BROS,),               // index 2
        FileCreator.editorImage(entity, `${name}_desert_00`, GameStyles.SUPER_MARIO_BROS,),              // index 3
        FileCreator.editorImage(entity, `${name}_snow_00`, GameStyles.SUPER_MARIO_BROS,),                // index 4
        FileCreator.editorImage(entity, `${name}_athletic_00`, GameStyles.SUPER_MARIO_BROS,),            // index 5
        FileCreator.editorImage(entity, `${name}_woods_00`, GameStyles.SUPER_MARIO_BROS,),               // index 6
        FileCreator.editorImage(entity, `${name}_hauntedhouse_00`, GameStyles.SUPER_MARIO_BROS,),        // index 7
        FileCreator.editorImage(entity, `${name}_airship_00`, GameStyles.SUPER_MARIO_BROS,),             // index 8
        FileCreator.editorImage(entity, `${name}_airship_night_00`, GameStyles.SUPER_MARIO_BROS,),       // index 9
        FileCreator.editorImage(entity, `${name}_castle_00`, GameStyles.SUPER_MARIO_BROS,),              // index 10

        FileCreator.editorImage(entity, `${name}_00`, GameStyles.SUPER_MARIO_BROS_3,),                   // index 11
        FileCreator.editorImage(entity, `${name}_water_00`, GameStyles.SUPER_MARIO_BROS_3,),             // index 12
        FileCreator.editorImage(entity, `${name}_underground_00`, GameStyles.SUPER_MARIO_BROS_3,),       // index 13
        FileCreator.editorImage(entity, `${name}_desert_00`, GameStyles.SUPER_MARIO_BROS_3,),            // index 14
        FileCreator.editorImage(entity, `${name}_snow_00`, GameStyles.SUPER_MARIO_BROS_3,),              // index 15
        FileCreator.editorImage(entity, `${name}_snow_night_00`, GameStyles.SUPER_MARIO_BROS_3,),        // index 16
        FileCreator.editorImage(entity, `${name}_athletic_00`, GameStyles.SUPER_MARIO_BROS_3,),          // index 17
        FileCreator.editorImage(entity, `${name}_woods_00`, GameStyles.SUPER_MARIO_BROS_3,),             // index 18
        FileCreator.editorImage(entity, `${name}_hauntedhouse_00`, GameStyles.SUPER_MARIO_BROS_3,),      // index 19
        FileCreator.editorImage(entity, `${name}_airship_00`, GameStyles.SUPER_MARIO_BROS_3,),           // index 20
        FileCreator.editorImage(entity, `${name}_airship_night_00`, GameStyles.SUPER_MARIO_BROS_3,),     // index 21
        FileCreator.editorImage(entity, `${name}_castle_00`, GameStyles.SUPER_MARIO_BROS_3,),            // index 22
        FileCreator.editorImage(entity, `${name}_castle_night_00`, GameStyles.SUPER_MARIO_BROS_3,),      // index 23

        FileCreator.editorImage(entity, `${name}_00`, GameStyles.SUPER_MARIO_WORLD,),                    // index 24
        FileCreator.editorImage(entity, `${name}_underground_00`, GameStyles.SUPER_MARIO_WORLD,),        // index 25
        FileCreator.editorImage(entity, `${name}_water_00`, GameStyles.SUPER_MARIO_WORLD,),              // index 26
        FileCreator.editorImage(entity, `${name}_water_night_00`, GameStyles.SUPER_MARIO_WORLD,),        // index 27
        FileCreator.editorImage(entity, `${name}_desert_00`, GameStyles.SUPER_MARIO_WORLD,),             // index 28
        FileCreator.editorImage(entity, `${name}_snow_00`, GameStyles.SUPER_MARIO_WORLD,),               // index 29
        FileCreator.editorImage(entity, `${name}_snow_night_00`, GameStyles.SUPER_MARIO_WORLD,),         // index 30
        FileCreator.editorImage(entity, `${name}_athletic_00`, GameStyles.SUPER_MARIO_WORLD,),           // index 31
        FileCreator.editorImage(entity, `${name}_woods_00`, GameStyles.SUPER_MARIO_WORLD,),              // index 32
        FileCreator.editorImage(entity, `${name}_hauntedhouse_00`, GameStyles.SUPER_MARIO_WORLD,),       // index 33
        FileCreator.editorImage(entity, `${name}_airship_00`, GameStyles.SUPER_MARIO_WORLD,),            // index 34
        FileCreator.editorImage(entity, `${name}_castle_00`, GameStyles.SUPER_MARIO_WORLD,),             // index 35

        FileCreator.editorImage(entity, `${name}_00`, GameStyles.NEW_SUPER_MARIO_BROS_U,),               // index 36
        FileCreator.editorImage(entity, `${name}_underground_00`, GameStyles.NEW_SUPER_MARIO_BROS_U,),   // index 37
        FileCreator.editorImage(entity, `${name}_water_00`, GameStyles.NEW_SUPER_MARIO_BROS_U,),         // index 38
        FileCreator.editorImage(entity, `${name}_desert_00`, GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 39
        FileCreator.editorImage(entity, `${name}_snow_00`, GameStyles.NEW_SUPER_MARIO_BROS_U,),          // index 40
        FileCreator.editorImage(entity, `${name}_snow_night_00`, GameStyles.NEW_SUPER_MARIO_BROS_U,),    // index 41
        FileCreator.editorImage(entity, `${name}_athletic_00`, GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 42
        FileCreator.editorImage(entity, `${name}_woods_00`, GameStyles.NEW_SUPER_MARIO_BROS_U,),         // index 43
        FileCreator.editorImage(entity, `${name}_hauntedhouse_00`, GameStyles.NEW_SUPER_MARIO_BROS_U,),  // index 44
        FileCreator.editorImage(entity, `${name}_airship_00`, GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 45
        FileCreator.editorImage(entity, `${name}_airship_night_00`, GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 46
        FileCreator.editorImage(entity, `${name}_castle_00`, GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 47

        FileCreator.editorImage(entity, `${name}_00`, GameStyles.SUPER_MARIO_3D_WORLD,),                 // index 48
        FileCreator.editorImage(entity, `${name}_underground_00`, GameStyles.SUPER_MARIO_3D_WORLD,),     // index 49
        FileCreator.editorImage(entity, `${name}_water_00`, GameStyles.SUPER_MARIO_3D_WORLD,),           // index 50
        FileCreator.editorImage(entity, `${name}_desert_00`, GameStyles.SUPER_MARIO_3D_WORLD,),          // index 51
        FileCreator.editorImage(entity, `${name}_snow_00`, GameStyles.SUPER_MARIO_3D_WORLD,),            // index 52
        FileCreator.editorImage(entity, `${name}_athletic_00`, GameStyles.SUPER_MARIO_3D_WORLD,),        // index 53
        FileCreator.editorImage(entity, `${name}_woods_00`, GameStyles.SUPER_MARIO_3D_WORLD,),           // index 54
        FileCreator.editorImage(entity, `${name}_hauntedhouse_00`, GameStyles.SUPER_MARIO_3D_WORLD,),    // index 55
        FileCreator.editorImage(entity, `${name}_airship_00`, GameStyles.SUPER_MARIO_3D_WORLD,),         // index 56
        FileCreator.editorImage(entity, `${name}_castle_00`, GameStyles.SUPER_MARIO_3D_WORLD,),          // index 57
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
 * Create a simple {@link EditorImage} for the {@link EditorEntityImages.PIPE pipe} {@link EditorEntityImages entity}
 *
 * @param entity The {@link EditorEntityImages.PIPE} {@link EditorEntityImages entity}
 */
export function editorPipeImages(entity: EditorEntityImages,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'Dokan_00', GameStyles.SUPER_MARIO_BROS,),              // index 0
        FileCreator.editorImage(entity, 'Dokan_01', GameStyles.SUPER_MARIO_BROS,),              // index 1
        FileCreator.editorImage(entity, 'Dokan_02', GameStyles.SUPER_MARIO_BROS,),              // index 2
        FileCreator.editorImage(entity, 'Dokan_03', GameStyles.SUPER_MARIO_BROS,),              // index 3

        FileCreator.editorImage(entity, 'Dokan_00', GameStyles.SUPER_MARIO_BROS_3,),            // index 4
        FileCreator.editorImage(entity, 'Dokan_01', GameStyles.SUPER_MARIO_BROS_3,),            // index 5
        FileCreator.editorImage(entity, 'Dokan_02', GameStyles.SUPER_MARIO_BROS_3,),            // index 6
        FileCreator.editorImage(entity, 'Dokan_03', GameStyles.SUPER_MARIO_BROS_3,),            // index 7
        FileCreator.editorImage(entity, 'Dokan_snow_night_00', GameStyles.SUPER_MARIO_BROS_3,), // index 8
        FileCreator.editorImage(entity, 'Dokan_snow_night_01', GameStyles.SUPER_MARIO_BROS_3,), // index 9
        FileCreator.editorImage(entity, 'Dokan_snow_night_02', GameStyles.SUPER_MARIO_BROS_3,), // index 10
        FileCreator.editorImage(entity, 'Dokan_snow_night_03', GameStyles.SUPER_MARIO_BROS_3,), // index 11

        FileCreator.editorImage(entity, 'Dokan_00', GameStyles.SUPER_MARIO_WORLD,),             // index 12
        FileCreator.editorImage(entity, 'Dokan_01', GameStyles.SUPER_MARIO_WORLD,),             // index 13
        FileCreator.editorImage(entity, 'Dokan_02', GameStyles.SUPER_MARIO_WORLD,),             // index 14
        FileCreator.editorImage(entity, 'Dokan_03', GameStyles.SUPER_MARIO_WORLD,),             // index 15

        FileCreator.editorImage(entity, 'Dokan_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 16
        FileCreator.editorImage(entity, 'Dokan_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 17
        FileCreator.editorImage(entity, 'Dokan_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 18
        FileCreator.editorImage(entity, 'Dokan_03', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 19

        FileCreator.editorImage(entity, 'Dokan_00', GameStyles.SUPER_MARIO_3D_WORLD,),          // index 20
        FileCreator.editorImage(entity, 'Dokan_01', GameStyles.SUPER_MARIO_3D_WORLD,),          // index 21
        FileCreator.editorImage(entity, 'Dokan_02', GameStyles.SUPER_MARIO_3D_WORLD,),          // index 22
        FileCreator.editorImage(entity, 'Dokan_03', GameStyles.SUPER_MARIO_3D_WORLD,),          // index 23
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
 * Create a simple {@link EditorImage} for the {@link EditorEntityImages.MUSHROOM_PLATFORM "mushroom platform"} {@link EditorEntityImages entity}
 *
 * @param entity The {@link EditorEntityImages.MUSHROOM_PLATFORM} {@link EditorEntityImages entity}
 */
export function editorMushroomPlatformImages(entity: EditorEntityImages,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'GroundMushroom_00', GameStyles.SUPER_MARIO_BROS,),                  // index 0
        FileCreator.editorImage(entity, 'GroundMushroom_01', GameStyles.SUPER_MARIO_BROS,),                  // index 1
        FileCreator.editorImage(entity, 'GroundMushroom_02', GameStyles.SUPER_MARIO_BROS,),                  // index 2
        FileCreator.editorImage(entity, 'GroundMushroom_water_00', GameStyles.SUPER_MARIO_BROS,),            // index 3
        FileCreator.editorImage(entity, 'GroundMushroom_water_01', GameStyles.SUPER_MARIO_BROS,),            // index 4
        FileCreator.editorImage(entity, 'GroundMushroom_water_02', GameStyles.SUPER_MARIO_BROS,),            // index 5
        FileCreator.editorImage(entity, 'GroundMushroom_snow_00', GameStyles.SUPER_MARIO_BROS,),             // index 6
        FileCreator.editorImage(entity, 'GroundMushroom_snow_01', GameStyles.SUPER_MARIO_BROS,),             // index 7
        FileCreator.editorImage(entity, 'GroundMushroom_snow_02', GameStyles.SUPER_MARIO_BROS,),             // index 8
        FileCreator.editorImage(entity, 'GroundMushroom_snow_night_00', GameStyles.SUPER_MARIO_BROS,),       // index 9
        FileCreator.editorImage(entity, 'GroundMushroom_snow_night_01', GameStyles.SUPER_MARIO_BROS,),       // index 10
        FileCreator.editorImage(entity, 'GroundMushroom_snow_night_02', GameStyles.SUPER_MARIO_BROS,),       // index 11
        FileCreator.editorImage(entity, 'GroundMushroom_airship_00', GameStyles.SUPER_MARIO_BROS,),          // index 12
        FileCreator.editorImage(entity, 'GroundMushroom_airship_01', GameStyles.SUPER_MARIO_BROS,),          // index 13
        FileCreator.editorImage(entity, 'GroundMushroom_airship_02', GameStyles.SUPER_MARIO_BROS,),          // index 14

        FileCreator.editorImage(entity, 'GroundMushroom_00', GameStyles.SUPER_MARIO_BROS_3,),                // index 15
        FileCreator.editorImage(entity, 'GroundMushroom_01', GameStyles.SUPER_MARIO_BROS_3,),                // index 16
        FileCreator.editorImage(entity, 'GroundMushroom_02', GameStyles.SUPER_MARIO_BROS_3,),                // index 17
        FileCreator.editorImage(entity, 'GroundMushroom_water_00', GameStyles.SUPER_MARIO_BROS_3,),          // index 18
        FileCreator.editorImage(entity, 'GroundMushroom_water_01', GameStyles.SUPER_MARIO_BROS_3,),          // index 19
        FileCreator.editorImage(entity, 'GroundMushroom_water_02', GameStyles.SUPER_MARIO_BROS_3,),          // index 20
        FileCreator.editorImage(entity, 'GroundMushroom_snow_00', GameStyles.SUPER_MARIO_BROS_3,),           // index 21
        FileCreator.editorImage(entity, 'GroundMushroom_snow_01', GameStyles.SUPER_MARIO_BROS_3,),           // index 22
        FileCreator.editorImage(entity, 'GroundMushroom_snow_02', GameStyles.SUPER_MARIO_BROS_3,),           // index 23
        FileCreator.editorImage(entity, 'GroundMushroom_snow_night_00', GameStyles.SUPER_MARIO_BROS_3,),     // index 24
        FileCreator.editorImage(entity, 'GroundMushroom_snow_night_01', GameStyles.SUPER_MARIO_BROS_3,),     // index 25
        FileCreator.editorImage(entity, 'GroundMushroom_snow_night_02', GameStyles.SUPER_MARIO_BROS_3,),     // index 26
        FileCreator.editorImage(entity, 'GroundMushroom_airship_00', GameStyles.SUPER_MARIO_BROS_3,),        // index 27
        FileCreator.editorImage(entity, 'GroundMushroom_airship_01', GameStyles.SUPER_MARIO_BROS_3,),        // index 28
        FileCreator.editorImage(entity, 'GroundMushroom_airship_02', GameStyles.SUPER_MARIO_BROS_3,),        // index 29

        FileCreator.editorImage(entity, 'GroundMushroom_00', GameStyles.SUPER_MARIO_WORLD,),                 // index 30
        FileCreator.editorImage(entity, 'GroundMushroom_01', GameStyles.SUPER_MARIO_WORLD,),                 // index 31
        FileCreator.editorImage(entity, 'GroundMushroom_02', GameStyles.SUPER_MARIO_WORLD,),                 // index 32
        FileCreator.editorImage(entity, 'GroundMushroom_water_00', GameStyles.SUPER_MARIO_WORLD,),           // index 33
        FileCreator.editorImage(entity, 'GroundMushroom_water_01', GameStyles.SUPER_MARIO_WORLD,),           // index 34
        FileCreator.editorImage(entity, 'GroundMushroom_water_02', GameStyles.SUPER_MARIO_WORLD,),           // index 35
        FileCreator.editorImage(entity, 'GroundMushroom_snow_00', GameStyles.SUPER_MARIO_WORLD,),            // index 36
        FileCreator.editorImage(entity, 'GroundMushroom_snow_01', GameStyles.SUPER_MARIO_WORLD,),            // index 37
        FileCreator.editorImage(entity, 'GroundMushroom_snow_02', GameStyles.SUPER_MARIO_WORLD,),            // index 38
        FileCreator.editorImage(entity, 'GroundMushroom_snow_night_00', GameStyles.SUPER_MARIO_WORLD,),      // index 39
        FileCreator.editorImage(entity, 'GroundMushroom_snow_night_01', GameStyles.SUPER_MARIO_WORLD,),      // index 40
        FileCreator.editorImage(entity, 'GroundMushroom_snow_night_02', GameStyles.SUPER_MARIO_WORLD,),      // index 41
        FileCreator.editorImage(entity, 'GroundMushroom_airship_00', GameStyles.SUPER_MARIO_WORLD,),         // index 42
        FileCreator.editorImage(entity, 'GroundMushroom_airship_01', GameStyles.SUPER_MARIO_WORLD,),         // index 43
        FileCreator.editorImage(entity, 'GroundMushroom_airship_02', GameStyles.SUPER_MARIO_WORLD,),         // index 44

        FileCreator.editorImage(entity, 'GroundMushroom_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),            // index 45
        FileCreator.editorImage(entity, 'GroundMushroom_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),            // index 46
        FileCreator.editorImage(entity, 'GroundMushroom_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),            // index 47
        FileCreator.editorImage(entity, 'GroundMushroom_water_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 48
        FileCreator.editorImage(entity, 'GroundMushroom_water_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 49
        FileCreator.editorImage(entity, 'GroundMushroom_water_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 50
        FileCreator.editorImage(entity, 'GroundMushroom_snow_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 51
        FileCreator.editorImage(entity, 'GroundMushroom_snow_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 52
        FileCreator.editorImage(entity, 'GroundMushroom_snow_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 53
        FileCreator.editorImage(entity, 'GroundMushroom_snow_night_00', GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 54
        FileCreator.editorImage(entity, 'GroundMushroom_snow_night_01', GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 55
        FileCreator.editorImage(entity, 'GroundMushroom_snow_night_02', GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 56
        FileCreator.editorImage(entity, 'GroundMushroom_airship_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),    // index 57
        FileCreator.editorImage(entity, 'GroundMushroom_airship_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),    // index 58
        FileCreator.editorImage(entity, 'GroundMushroom_airship_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),    // index 59
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
 * Create a simple {@link EditorImage} for the {@link EditorEntityImages.SEMISOLID_PLATFORM "semisolid platform"} {@link EditorEntityImages entity}
 *
 * @param entity The {@link EditorEntityImages.SEMISOLID_PLATFORM} {@link EditorEntityImages entity}
 */
export function editorSemisolidPlatformImages(entity: EditorEntityImages,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'GroundBox_00', GameStyles.SUPER_MARIO_BROS,),                    // index 0
        FileCreator.editorImage(entity, 'GroundBox_01', GameStyles.SUPER_MARIO_BROS,),                    // index 1
        FileCreator.editorImage(entity, 'GroundBox_02', GameStyles.SUPER_MARIO_BROS,),                    // index 2
        FileCreator.editorImage(entity, 'GroundBox_underground_00', GameStyles.SUPER_MARIO_BROS,),        // index 3
        FileCreator.editorImage(entity, 'GroundBox_underground_01', GameStyles.SUPER_MARIO_BROS,),        // index 4
        FileCreator.editorImage(entity, 'GroundBox_underground_02', GameStyles.SUPER_MARIO_BROS),         // index 5
        FileCreator.editorImage(entity, 'GroundBox_water_00', GameStyles.SUPER_MARIO_BROS,),              // index 6
        FileCreator.editorImage(entity, 'GroundBox_water_01', GameStyles.SUPER_MARIO_BROS,),              // index 7
        FileCreator.editorImage(entity, 'GroundBox_water_02', GameStyles.SUPER_MARIO_BROS,),              // index 8
        FileCreator.editorImage(entity, 'GroundBox_desert_00', GameStyles.SUPER_MARIO_BROS,),             // index 9
        FileCreator.editorImage(entity, 'GroundBox_desert_01', GameStyles.SUPER_MARIO_BROS,),             // index 10
        FileCreator.editorImage(entity, 'GroundBox_desert_02', GameStyles.SUPER_MARIO_BROS,),             // index 11
        FileCreator.editorImage(entity, 'GroundBox_snow_00', GameStyles.SUPER_MARIO_BROS,),               // index 12
        FileCreator.editorImage(entity, 'GroundBox_snow_01', GameStyles.SUPER_MARIO_BROS,),               // index 13
        FileCreator.editorImage(entity, 'GroundBox_snow_02', GameStyles.SUPER_MARIO_BROS,),               // index 14
        FileCreator.editorImage(entity, 'GroundBox_snow_night_00', GameStyles.SUPER_MARIO_BROS,),         // index 15
        FileCreator.editorImage(entity, 'GroundBox_snow_night_01', GameStyles.SUPER_MARIO_BROS,),         // index 16
        FileCreator.editorImage(entity, 'GroundBox_snow_night_02', GameStyles.SUPER_MARIO_BROS,),         // index 17
        FileCreator.editorImage(entity, 'GroundBox_athletic_00', GameStyles.SUPER_MARIO_BROS,),           // index 18
        FileCreator.editorImage(entity, 'GroundBox_athletic_01', GameStyles.SUPER_MARIO_BROS,),           // index 19
        FileCreator.editorImage(entity, 'GroundBox_athletic_02', GameStyles.SUPER_MARIO_BROS,),           // index 20
        FileCreator.editorImage(entity, 'GroundBox_woods_00', GameStyles.SUPER_MARIO_BROS,),              // index 21
        FileCreator.editorImage(entity, 'GroundBox_woods_01', GameStyles.SUPER_MARIO_BROS,),              // index 22
        FileCreator.editorImage(entity, 'GroundBox_woods_02', GameStyles.SUPER_MARIO_BROS,),              // index 23
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_00', GameStyles.SUPER_MARIO_BROS,),       // index 24
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_01', GameStyles.SUPER_MARIO_BROS,),       // index 25
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_02', GameStyles.SUPER_MARIO_BROS,),       // index 26
        FileCreator.editorImage(entity, 'GroundBox_airship_00', GameStyles.SUPER_MARIO_BROS,),            // index 27
        FileCreator.editorImage(entity, 'GroundBox_airship_01', GameStyles.SUPER_MARIO_BROS,),            // index 28
        FileCreator.editorImage(entity, 'GroundBox_airship_02', GameStyles.SUPER_MARIO_BROS,),            // index 29
        FileCreator.editorImage(entity, 'GroundBox_airship_night_01', GameStyles.SUPER_MARIO_BROS,),      // index 30
        FileCreator.editorImage(entity, 'GroundBox_castle_00', GameStyles.SUPER_MARIO_BROS,),             // index 31
        FileCreator.editorImage(entity, 'GroundBox_castle_01', GameStyles.SUPER_MARIO_BROS,),             // index 32
        FileCreator.editorImage(entity, 'GroundBox_castle_02', GameStyles.SUPER_MARIO_BROS,),             // index 33

        FileCreator.editorImage(entity, 'GroundBox_00', GameStyles.SUPER_MARIO_BROS_3,),                  // index 34
        FileCreator.editorImage(entity, 'GroundBox_01', GameStyles.SUPER_MARIO_BROS_3,),                  // index 35
        FileCreator.editorImage(entity, 'GroundBox_02', GameStyles.SUPER_MARIO_BROS_3,),                  // index 36
        FileCreator.editorImage(entity, 'GroundBox_underground_00', GameStyles.SUPER_MARIO_BROS_3,),      // index 37
        FileCreator.editorImage(entity, 'GroundBox_underground_01', GameStyles.SUPER_MARIO_BROS_3,),      // index 38
        FileCreator.editorImage(entity, 'GroundBox_underground_02', GameStyles.SUPER_MARIO_BROS_3,),      // index 39
        FileCreator.editorImage(entity, 'GroundBox_water_00', GameStyles.SUPER_MARIO_BROS_3,),            // index 40
        FileCreator.editorImage(entity, 'GroundBox_water_01', GameStyles.SUPER_MARIO_BROS_3,),            // index 41
        FileCreator.editorImage(entity, 'GroundBox_water_02', GameStyles.SUPER_MARIO_BROS_3,),            // index 42
        FileCreator.editorImage(entity, 'GroundBox_desert_00', GameStyles.SUPER_MARIO_BROS_3,),           // index 43
        FileCreator.editorImage(entity, 'GroundBox_desert_01', GameStyles.SUPER_MARIO_BROS_3,),           // index 44
        FileCreator.editorImage(entity, 'GroundBox_desert_02', GameStyles.SUPER_MARIO_BROS_3,),           // index 45
        FileCreator.editorImage(entity, 'GroundBox_snow_00', GameStyles.SUPER_MARIO_BROS_3,),             // index 46
        FileCreator.editorImage(entity, 'GroundBox_snow_01', GameStyles.SUPER_MARIO_BROS_3,),             // index 47
        FileCreator.editorImage(entity, 'GroundBox_snow_02', GameStyles.SUPER_MARIO_BROS_3,),             // index 48
        FileCreator.editorImage(entity, 'GroundBox_snow_night_00', GameStyles.SUPER_MARIO_BROS_3,),       // index 49
        FileCreator.editorImage(entity, 'GroundBox_snow_night_01', GameStyles.SUPER_MARIO_BROS_3,),       // index 50
        FileCreator.editorImage(entity, 'GroundBox_snow_night_02', GameStyles.SUPER_MARIO_BROS_3,),       // index 51
        FileCreator.editorImage(entity, 'GroundBox_athletic_00', GameStyles.SUPER_MARIO_BROS_3,),         // index 52
        FileCreator.editorImage(entity, 'GroundBox_athletic_01', GameStyles.SUPER_MARIO_BROS_3,),         // index 53
        FileCreator.editorImage(entity, 'GroundBox_athletic_02', GameStyles.SUPER_MARIO_BROS_3,),         // index 54
        FileCreator.editorImage(entity, 'GroundBox_woods_00', GameStyles.SUPER_MARIO_BROS_3,),            // index 55
        FileCreator.editorImage(entity, 'GroundBox_woods_01', GameStyles.SUPER_MARIO_BROS_3,),            // index 56
        FileCreator.editorImage(entity, 'GroundBox_woods_02', GameStyles.SUPER_MARIO_BROS_3,),            // index 57
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_00', GameStyles.SUPER_MARIO_BROS_3,),     // index 58
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_01', GameStyles.SUPER_MARIO_BROS_3,),     // index 59
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_02', GameStyles.SUPER_MARIO_BROS_3,),     // index 60
        FileCreator.editorImage(entity, 'GroundBox_airship_00', GameStyles.SUPER_MARIO_BROS_3,),          // index 61
        FileCreator.editorImage(entity, 'GroundBox_airship_01', GameStyles.SUPER_MARIO_BROS_3,),          // index 62
        FileCreator.editorImage(entity, 'GroundBox_airship_02', GameStyles.SUPER_MARIO_BROS_3,),          // index 63
        FileCreator.editorImage(entity, 'GroundBox_castle_00', GameStyles.SUPER_MARIO_BROS_3,),           // index 64
        FileCreator.editorImage(entity, 'GroundBox_castle_01', GameStyles.SUPER_MARIO_BROS_3,),           // index 65
        FileCreator.editorImage(entity, 'GroundBox_castle_02', GameStyles.SUPER_MARIO_BROS_3,),           // index 66

        FileCreator.editorImage(entity, 'GroundBox_00', GameStyles.SUPER_MARIO_WORLD,),                   // index 67
        FileCreator.editorImage(entity, 'GroundBox_01', GameStyles.SUPER_MARIO_WORLD,),                   // index 68
        FileCreator.editorImage(entity, 'GroundBox_02', GameStyles.SUPER_MARIO_WORLD,),                   // index 69
        FileCreator.editorImage(entity, 'GroundBox_underground_00', GameStyles.SUPER_MARIO_WORLD,),       // index 70
        FileCreator.editorImage(entity, 'GroundBox_underground_01', GameStyles.SUPER_MARIO_WORLD,),       // index 71
        FileCreator.editorImage(entity, 'GroundBox_underground_02', GameStyles.SUPER_MARIO_WORLD,),       // index 72
        FileCreator.editorImage(entity, 'GroundBox_water_00', GameStyles.SUPER_MARIO_WORLD,),             // index 73
        FileCreator.editorImage(entity, 'GroundBox_water_01', GameStyles.SUPER_MARIO_WORLD,),             // index 74
        FileCreator.editorImage(entity, 'GroundBox_water_02', GameStyles.SUPER_MARIO_WORLD,),             // index 75
        FileCreator.editorImage(entity, 'GroundBox_desert_00', GameStyles.SUPER_MARIO_WORLD,),            // index 76
        FileCreator.editorImage(entity, 'GroundBox_desert_01', GameStyles.SUPER_MARIO_WORLD,),            // index 77
        FileCreator.editorImage(entity, 'GroundBox_desert_02', GameStyles.SUPER_MARIO_WORLD,),            // index 78
        FileCreator.editorImage(entity, 'GroundBox_snow_00', GameStyles.SUPER_MARIO_WORLD,),              // index 79
        FileCreator.editorImage(entity, 'GroundBox_snow_01', GameStyles.SUPER_MARIO_WORLD,),              // index 80
        FileCreator.editorImage(entity, 'GroundBox_snow_02', GameStyles.SUPER_MARIO_WORLD,),              // index 81
        FileCreator.editorImage(entity, 'GroundBox_snow_night_00', GameStyles.SUPER_MARIO_WORLD,),        // index 82
        FileCreator.editorImage(entity, 'GroundBox_snow_night_01', GameStyles.SUPER_MARIO_WORLD,),        // index 83
        FileCreator.editorImage(entity, 'GroundBox_snow_night_02', GameStyles.SUPER_MARIO_WORLD,),        // index 84
        FileCreator.editorImage(entity, 'GroundBox_athletic_00', GameStyles.SUPER_MARIO_WORLD,),          // index 85
        FileCreator.editorImage(entity, 'GroundBox_athletic_01', GameStyles.SUPER_MARIO_WORLD,),          // index 86
        FileCreator.editorImage(entity, 'GroundBox_athletic_02', GameStyles.SUPER_MARIO_WORLD,),          // index 87
        FileCreator.editorImage(entity, 'GroundBox_woods_00', GameStyles.SUPER_MARIO_WORLD,),             // index 88
        FileCreator.editorImage(entity, 'GroundBox_woods_01', GameStyles.SUPER_MARIO_WORLD,),             // index 89
        FileCreator.editorImage(entity, 'GroundBox_woods_02', GameStyles.SUPER_MARIO_WORLD,),             // index 90
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_00', GameStyles.SUPER_MARIO_WORLD,),      // index 91
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_01', GameStyles.SUPER_MARIO_WORLD,),      // index 92
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_02', GameStyles.SUPER_MARIO_WORLD,),      // index 93
        FileCreator.editorImage(entity, 'GroundBox_airship_00', GameStyles.SUPER_MARIO_WORLD,),           // index 94
        FileCreator.editorImage(entity, 'GroundBox_airship_01', GameStyles.SUPER_MARIO_WORLD,),           // index 95
        FileCreator.editorImage(entity, 'GroundBox_airship_02', GameStyles.SUPER_MARIO_WORLD,),           // index 96
        FileCreator.editorImage(entity, 'GroundBox_castle_00', GameStyles.SUPER_MARIO_WORLD,),            // index 97
        FileCreator.editorImage(entity, 'GroundBox_castle_01', GameStyles.SUPER_MARIO_WORLD,),            // index 98
        FileCreator.editorImage(entity, 'GroundBox_castle_02', GameStyles.SUPER_MARIO_WORLD,),            // index 99

        FileCreator.editorImage(entity, 'GroundBox_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),              // index 100
        FileCreator.editorImage(entity, 'GroundBox_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),              // index 101
        FileCreator.editorImage(entity, 'GroundBox_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),              // index 102
        FileCreator.editorImage(entity, 'GroundBox_underground_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),  // index 103
        FileCreator.editorImage(entity, 'GroundBox_underground_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),  // index 104
        FileCreator.editorImage(entity, 'GroundBox_underground_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),  // index 105
        FileCreator.editorImage(entity, 'GroundBox_water_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 106
        FileCreator.editorImage(entity, 'GroundBox_water_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 107
        FileCreator.editorImage(entity, 'GroundBox_water_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 108
        FileCreator.editorImage(entity, 'GroundBox_desert_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 109
        FileCreator.editorImage(entity, 'GroundBox_desert_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 110
        FileCreator.editorImage(entity, 'GroundBox_desert_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 111
        FileCreator.editorImage(entity, 'GroundBox_snow_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),         // index 112
        FileCreator.editorImage(entity, 'GroundBox_snow_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),         // index 113
        FileCreator.editorImage(entity, 'GroundBox_snow_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),         // index 114
        FileCreator.editorImage(entity, 'GroundBox_snow_night_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),   // index 115
        FileCreator.editorImage(entity, 'GroundBox_snow_night_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),   // index 116
        FileCreator.editorImage(entity, 'GroundBox_snow_night_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),   // index 117
        FileCreator.editorImage(entity, 'GroundBox_athletic_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),     // index 118
        FileCreator.editorImage(entity, 'GroundBox_athletic_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),     // index 119
        FileCreator.editorImage(entity, 'GroundBox_athletic_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),     // index 120
        FileCreator.editorImage(entity, 'GroundBox_woods_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 121
        FileCreator.editorImage(entity, 'GroundBox_woods_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 122
        FileCreator.editorImage(entity, 'GroundBox_woods_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 123
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_00', GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 124
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_01', GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 125
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_02', GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 126
        FileCreator.editorImage(entity, 'GroundBox_airship_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 127
        FileCreator.editorImage(entity, 'GroundBox_airship_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 128
        FileCreator.editorImage(entity, 'GroundBox_airship_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 129
        FileCreator.editorImage(entity, 'GroundBox_castle_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 130
        FileCreator.editorImage(entity, 'GroundBox_castle_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 131
        FileCreator.editorImage(entity, 'GroundBox_castle_02', GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 132

        FileCreator.editorImage(entity, 'GroundBox_00', GameStyles.SUPER_MARIO_3D_WORLD,),                // index 133
        FileCreator.editorImage(entity, 'GroundBox_underground_00', GameStyles.SUPER_MARIO_3D_WORLD,),    // index 134
        FileCreator.editorImage(entity, 'GroundBox_water_00', GameStyles.SUPER_MARIO_3D_WORLD,),          // index 135
        FileCreator.editorImage(entity, 'GroundBox_desert_00', GameStyles.SUPER_MARIO_3D_WORLD,),         // index 136
        FileCreator.editorImage(entity, 'GroundBox_snow_00', GameStyles.SUPER_MARIO_3D_WORLD,),           // index 137
        FileCreator.editorImage(entity, 'GroundBox_athletic_00', GameStyles.SUPER_MARIO_3D_WORLD,),       // index 138
        FileCreator.editorImage(entity, 'GroundBox_woods_00', GameStyles.SUPER_MARIO_3D_WORLD,),          // index 139
        FileCreator.editorImage(entity, 'GroundBox_hauntedhouse_00', GameStyles.SUPER_MARIO_3D_WORLD,),   // index 140
        FileCreator.editorImage(entity, 'GroundBox_airship_00', GameStyles.SUPER_MARIO_3D_WORLD,),        // index 141
        FileCreator.editorImage(entity, 'GroundBox_castle_00', GameStyles.SUPER_MARIO_3D_WORLD,),         // index 142
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
 * Create a simple {@link EditorImage} for the {@link EditorEntityImages.BRIDGE bridge} {@link EditorEntityImages entity}
 *
 * @param entity The {@link EditorEntityImages.BRIDGE} {@link EditorEntityImages entity}
 */
export function editorBridgeImages(entity: EditorEntityImages,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'Bridge_00', GameStyles.SUPER_MARIO_BROS,),                    // index 0
        FileCreator.editorImage(entity, 'Bridge_snow_00', GameStyles.SUPER_MARIO_BROS,),               // index 1
        FileCreator.editorImage(entity, 'Bridge_snow_night_00', GameStyles.SUPER_MARIO_BROS,),         // index 2
        FileCreator.editorImage(entity, 'Bridge_hauntedhouse_00', GameStyles.SUPER_MARIO_BROS,),       // index 3
        FileCreator.editorImage(entity, 'Bridge_airship_00', GameStyles.SUPER_MARIO_BROS,),            // index 4
        FileCreator.editorImage(entity, 'Bridge_castle_00', GameStyles.SUPER_MARIO_BROS,),             // index 5

        FileCreator.editorImage(entity, 'Bridge_00', GameStyles.SUPER_MARIO_BROS_3,),                  // index 6
        FileCreator.editorImage(entity, 'Bridge_snow_00', GameStyles.SUPER_MARIO_BROS_3,),             // index 7
        FileCreator.editorImage(entity, 'Bridge_snow_night_00', GameStyles.SUPER_MARIO_BROS_3,),       // index 8

        FileCreator.editorImage(entity, 'Bridge_00', GameStyles.SUPER_MARIO_WORLD,),                   // index 9
        FileCreator.editorImage(entity, 'Bridge_desert_00', GameStyles.SUPER_MARIO_WORLD,),            // index 10
        FileCreator.editorImage(entity, 'Bridge_snow_00', GameStyles.SUPER_MARIO_WORLD,),              // index 11
        FileCreator.editorImage(entity, 'Bridge_snow_night_00', GameStyles.SUPER_MARIO_WORLD,),        // index 12
        FileCreator.editorImage(entity, 'Bridge_athletic_00', GameStyles.SUPER_MARIO_WORLD,),          // index 13
        FileCreator.editorImage(entity, 'Bridge_woods_00', GameStyles.SUPER_MARIO_WORLD,),             // index 14

        FileCreator.editorImage(entity, 'Bridge_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),              // index 15
        FileCreator.editorImage(entity, 'Bridge_underground_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),  // index 16
        FileCreator.editorImage(entity, 'Bridge_water_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 17
        FileCreator.editorImage(entity, 'Bridge_snow_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),         // index 18
        FileCreator.editorImage(entity, 'Bridge_snow_night_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),   // index 19
        FileCreator.editorImage(entity, 'Bridge_woods_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 20
        FileCreator.editorImage(entity, 'Bridge_hauntedhouse_00', GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 21
        FileCreator.editorImage(entity, 'Bridge_airship_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 22
        FileCreator.editorImage(entity, 'Bridge_castle_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 23
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
 * Create a simple {@link EditorImage} for the {@link EditorEntityImages.BRICK_BLOCK "brick block"} {@link EditorEntityImages entity}
 *
 * @param entity The {@link EditorEntityImages.BRICK_BLOCK} {@link EditorEntityImages entity}
 */
export function editorBrickBlockImages(entity: EditorEntityImages,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'RengaBlock_00', GameStyles.SUPER_MARIO_BROS,),              // index 0
        FileCreator.editorImage(entity, 'RengaBlock_underground_00', GameStyles.SUPER_MARIO_BROS,),  // index 1
        FileCreator.editorImage(entity, 'RengaBlock_snow_00', GameStyles.SUPER_MARIO_BROS,),         // index 2
        FileCreator.editorImage(entity, 'RengaBlock_snow_night_00', GameStyles.SUPER_MARIO_BROS,),   // index 3
        FileCreator.editorImage(entity, 'RengaBlock_hauntedhouse_00', GameStyles.SUPER_MARIO_BROS,), // index 4
        FileCreator.editorImage(entity, 'RengaBlock_castle_00', GameStyles.SUPER_MARIO_BROS,),       // index 5

        FileCreator.editorImage(entity, 'RengaBlock_00', GameStyles.SUPER_MARIO_BROS_3,),            // index 6
        FileCreator.editorImage(entity, 'RengaBlock_snow_night_00', GameStyles.SUPER_MARIO_BROS_3,), // index 7

        FileCreator.editorImage(entity, 'RengaBlock_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 8

        FileCreator.editorImage(entity, 'RengaBlock_00', GameStyles.SUPER_MARIO_3D_WORLD,),          // index 9
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
 * Create a simple {@link EditorImage} for the {@link EditorEntityImages.CRISTAL_BLOCK "cristal block"} {@link EditorEntityImages entity}
 *
 * @param entity The {@link EditorEntityImages.CRISTAL_BLOCK} {@link EditorEntityImages entity}
 */
export function editorCristalBlockImages(entity: EditorEntityImages,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'RengaBlock_underground_00', GameStyles.SUPER_MARIO_3D_WORLD,),
        FileCreator.editorImage(entity, 'RengaBlock_woods_00', GameStyles.SUPER_MARIO_3D_WORLD,),
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_3D_WORLD, new Map<Themes, [EditorImageFile,]>([
        [Themes.UNDERGROUND, [images[0],],],
        [Themes.FOREST, [images[1],],],
    ],),],],),],],),)
}

/**
 * Create a simple {@link EditorImage} for the {@link EditorEntityImages.HARD_BLOCK "hard block"} {@link EditorEntityImages entity}
 *
 * @param entity The {@link EditorEntityImages.HARD_BLOCK} {@link EditorEntityImages entity}
 */
export function editorHardBlockImages(entity: EditorEntityImages,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'HardBlock_00', GameStyles.SUPER_MARIO_BROS,),                   // index 0
        FileCreator.editorImage(entity, 'HardBlock_underground_00', GameStyles.SUPER_MARIO_BROS,),       // index 1
        FileCreator.editorImage(entity, 'HardBlock_underground_night_00', GameStyles.SUPER_MARIO_BROS,), // index 2
        FileCreator.editorImage(entity, 'HardBlock_water_00', GameStyles.SUPER_MARIO_BROS,),             // index 3
        FileCreator.editorImage(entity, 'HardBlock_snow_00', GameStyles.SUPER_MARIO_BROS,),              // index 4
        FileCreator.editorImage(entity, 'HardBlock_snow_night_00', GameStyles.SUPER_MARIO_BROS,),        // index 5
        FileCreator.editorImage(entity, 'HardBlock_hauntedhouse_00', GameStyles.SUPER_MARIO_BROS,),      // index 6
        FileCreator.editorImage(entity, 'HardBlock_airship_00', GameStyles.SUPER_MARIO_BROS,),           // index 7
        FileCreator.editorImage(entity, 'HardBlock_castle_00', GameStyles.SUPER_MARIO_BROS,),            // index 8

        FileCreator.editorImage(entity, 'HardBlock_00', GameStyles.SUPER_MARIO_BROS_3,),                 // index 9
        FileCreator.editorImage(entity, 'HardBlock_snow_00', GameStyles.SUPER_MARIO_BROS_3,),            // index 10
        FileCreator.editorImage(entity, 'HardBlock_snow_night_00', GameStyles.SUPER_MARIO_BROS_3,),      // index 11

        FileCreator.editorImage(entity, 'HardBlock_00', GameStyles.SUPER_MARIO_WORLD,),                  // index 12
        FileCreator.editorImage(entity, 'HardBlock_hauntedhouse_00', GameStyles.SUPER_MARIO_WORLD,),     // index 13
        FileCreator.editorImage(entity, 'HardBlock_airship_00', GameStyles.SUPER_MARIO_WORLD,),          // index 14
        FileCreator.editorImage(entity, 'HardBlock_airship_night_00', GameStyles.SUPER_MARIO_WORLD,),    // index 15

        FileCreator.editorImage(entity, 'HardBlock_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),             // index 16
        FileCreator.editorImage(entity, 'HardBlock_underground_00', GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 17
        FileCreator.editorImage(entity, 'HardBlock_water_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 18
        FileCreator.editorImage(entity, 'HardBlock_snow_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 19
        FileCreator.editorImage(entity, 'HardBlock_athletic_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),    // index 20
        FileCreator.editorImage(entity, 'HardBlock_woods_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),       // index 21
        FileCreator.editorImage(entity, 'HardBlock_castle_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),      // index 22
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
 * Create a simple {@link EditorImage} for the {@link EditorEntityImages.CLOUD_BLOCK "cloud block"}  {@link EditorEntityImages entity}
 *
 * @param entity The {@link EditorEntityImages.CLOUD_BLOCK} {@link EditorEntityImages entity}
 */
export function editorCloudBlockImages(entity: EditorEntityImages,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'KumoBlock_00', GameStyles.SUPER_MARIO_BROS,),              // index 0
        FileCreator.editorImage(entity, 'KumoBlock_water_00', GameStyles.SUPER_MARIO_BROS,),        // index 1
        FileCreator.editorImage(entity, 'KumoBlock_snow_night_00', GameStyles.SUPER_MARIO_BROS,),   // index 2

        FileCreator.editorImage(entity, 'KumoBlock_00', GameStyles.SUPER_MARIO_BROS_3,),            // index 3
        FileCreator.editorImage(entity, 'KumoBlock_water_00', GameStyles.SUPER_MARIO_BROS_3,),      // index 4
        FileCreator.editorImage(entity, 'KumoBlock_snow_night_00', GameStyles.SUPER_MARIO_BROS_3,), // index 5

        FileCreator.editorImage(entity, 'KumoBlock_00', GameStyles.SUPER_MARIO_WORLD,),             // index 6
        FileCreator.editorImage(entity, 'KumoBlock_water_00', GameStyles.SUPER_MARIO_WORLD,),       // index 7

        FileCreator.editorImage(entity, 'KumoBlock_00', GameStyles.NEW_SUPER_MARIO_BROS_U,),        // index 8

        FileCreator.editorImage(entity, 'KumoBlock_00', GameStyles.SUPER_MARIO_3D_WORLD,),          // index 9
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
 * Create a simple {@link EditorImage} for the {@link EditorEntityImages.CHEEP_CHEEP "cheep cheep"}  {@link EditorEntityImages entity}
 *
 * @param entity The {@link EditorEntityImages.CHEEP_CHEEP} {@link EditorEntityImages entity}
 */
export function editorCheepCheepImages(entity: EditorEntityImages,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'Pukupuku_00', GameStyles.SUPER_MARIO_BROS,),       // index 0
        FileCreator.editorImage(entity, 'Pukupuku_01', GameStyles.SUPER_MARIO_BROS,),       // index 1

        FileCreator.editorImage(entity, 'Pukupuku_00', GameStyles.SUPER_MARIO_BROS_3,),     // index 2
        FileCreator.editorImage(entity, 'Pukupuku_01', GameStyles.SUPER_MARIO_BROS_3,),     // index 3

        FileCreator.editorImage(entity, 'Pukupuku_01', GameStyles.SUPER_MARIO_WORLD,),      // index 4

        FileCreator.editorImage(entity, 'Pukupuku_01', GameStyles.NEW_SUPER_MARIO_BROS_U,), // index 5

        FileCreator.editorImage(entity, 'Pukupuku_00', GameStyles.SUPER_MARIO_3D_WORLD,),   // index 6
        FileCreator.editorImage(entity, 'Pukupuku_01', GameStyles.SUPER_MARIO_3D_WORLD,),   // index 7
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
 * Create a simple {@link EditorImage} for the {@link EditorEntityImages.SPIKE_BALL "spike ball"}  {@link EditorEntityImages entity}
 *
 * @param entity The {@link EditorEntityImages.SPIKE_BALL} {@link EditorEntityImages entity}
 */
export function editorSpikeBallImages(entity: EditorEntityImages,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'Gabon_01', GameStyles.SUPER_MARIO_BROS,),                  // index 0
        FileCreator.editorImage(entity, 'Gabon_plain_night_01', GameStyles.SUPER_MARIO_BROS,),      // index 1
        FileCreator.editorImage(entity, 'Gabon_underground_01', GameStyles.SUPER_MARIO_BROS,),      // index 2
        FileCreator.editorImage(entity, 'Gabon_water_01', GameStyles.SUPER_MARIO_BROS,),            // index 3
        FileCreator.editorImage(entity, 'Gabon_desert_night_01', GameStyles.SUPER_MARIO_BROS,),     // index 4
        FileCreator.editorImage(entity, 'Gabon_athletic_night_01', GameStyles.SUPER_MARIO_BROS,),   // index 5
        FileCreator.editorImage(entity, 'Gabon_woods_night_01', GameStyles.SUPER_MARIO_BROS,),      // index 6
        FileCreator.editorImage(entity, 'Gabon_hauntedhouse_01', GameStyles.SUPER_MARIO_BROS,),     // index 7
        FileCreator.editorImage(entity, 'Gabon_airship_night_01', GameStyles.SUPER_MARIO_BROS,),    // index 8
        FileCreator.editorImage(entity, 'Gabon_castle_01', GameStyles.SUPER_MARIO_BROS,),           // index 9

        FileCreator.editorImage(entity, 'Gabon_01', GameStyles.SUPER_MARIO_BROS_3,),                // index 10
        FileCreator.editorImage(entity, 'Gabon_plain_night_01', GameStyles.SUPER_MARIO_BROS_3,),    // index 11
        FileCreator.editorImage(entity, 'Gabon_underground_01', GameStyles.SUPER_MARIO_BROS_3,),    // index 12
        FileCreator.editorImage(entity, 'Gabon_water_01', GameStyles.SUPER_MARIO_BROS_3,),          // index 13
        FileCreator.editorImage(entity, 'Gabon_desert_night_01', GameStyles.SUPER_MARIO_BROS_3,),   // index 14
        FileCreator.editorImage(entity, 'Gabon_athletic_night_01', GameStyles.SUPER_MARIO_BROS_3,), // index 15
        FileCreator.editorImage(entity, 'Gabon_woods_night_01', GameStyles.SUPER_MARIO_BROS_3,),    // index 16
        FileCreator.editorImage(entity, 'Gabon_hauntedhouse_01', GameStyles.SUPER_MARIO_BROS_3,),   // index 17
        FileCreator.editorImage(entity, 'Gabon_airship_night_01', GameStyles.SUPER_MARIO_BROS_3,),  // index 18
        FileCreator.editorImage(entity, 'Gabon_castle_01', GameStyles.SUPER_MARIO_BROS_3,),         // index 19

        FileCreator.editorImage(entity, 'Gabon_01', GameStyles.SUPER_MARIO_WORLD,),                 // index 20

        FileCreator.editorImage(entity, 'Gabon_01', GameStyles.NEW_SUPER_MARIO_BROS_U,),            // index 21

        FileCreator.editorImage(entity, 'Gabon_01', GameStyles.SUPER_MARIO_3D_WORLD,),              // index 22
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
 * Create a simple {@link EditorImage} for the {@link EditorEntityImages.TREE tree}  {@link EditorEntityImages entity}
 *
 * @param entity The {@link EditorEntityImages.TREE} {@link EditorEntityImages entity}
 */
export function editorTreeImages(entity: EditorEntityImages,): EditorImage {
    const images = [
        FileCreator.editorImage(entity, 'BellTree_00', GameStyles.SUPER_MARIO_3D_WORLD,),             // index 0
        FileCreator.editorImage(entity, 'BellTree_underground_00', GameStyles.SUPER_MARIO_3D_WORLD,), // index 1
        FileCreator.editorImage(entity, 'BellTree_water_00', GameStyles.SUPER_MARIO_3D_WORLD,),       // index 2
        FileCreator.editorImage(entity, 'BellTree_desert_00', GameStyles.SUPER_MARIO_3D_WORLD,),      // index 3
        FileCreator.editorImage(entity, 'BellTree_snow_00', GameStyles.SUPER_MARIO_3D_WORLD,),        // index 4
        FileCreator.editorImage(entity, 'BellTree_woods_00', GameStyles.SUPER_MARIO_3D_WORLD,),       // index 5
    ] as const

    return new EditorImageContainer(images, new Map([[Times.DAY, new Map([[GameStyles.SUPER_MARIO_3D_WORLD, new Map([[Themes.GROUND, images,],],),],],),],],),)
}

//endregion -------------------- Editor images (predefined) --------------------
