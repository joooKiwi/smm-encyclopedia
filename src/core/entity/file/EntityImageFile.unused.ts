import type {PossibleAcronym_InFile_SMM1 as PossibleAcronym_InFile_SMM1_GameStyle} from 'core/gameStyle/GameStyles.types'
import type {ImageFile}                                                            from 'util/file/image/ImageFile'
import type {PossibleEnglishName}                                                  from 'core/entity/Entities.types'

export type UnusedImageFile<FOLDER_NAME extends string = string, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/unused/${FOLDER_NAME}`, FILE_NAME, 'tiff', `${NAME} (unused)`>

/**
 * An unused Big Mushroom ({@link Entities.BIG_MUSHROOM_CLASSIC classic} / {@link Entities.BIG_MUSHROOM_MODERN modern}) {@link ImageFile}
 * in {@link GameStyles.SUPER_MARIO_BROS SMB} only for {@link Games.SUPER_MARIO_MAKER_1 SMM1}
 */
export type UnusedSmm1ImageFile_BigMushroom<FOLDER_NAME extends string = string, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/unused/M1 A - Enemy - ${FOLDER_NAME}`, FILE_NAME, 'tiff', `${NAME} (unused Big Mushroom)`>


/**@deprecated Use the {@link ImageFile}, {@link UnusedImageFile} or {@link UnusedSmm1ImageFile_BigMushroom} instead */
export type UnusedSMM1ImageFile = | UnusedSMM1RegularImageFile | UnusedSMM1BigMushroomImageFile

//region -------------------- Unused (regular) --------------------

type UnusedSMM1RegularImageFile = ImageFile<`entity/unused/${PossibleAcronym_InFile_SMM1_GameStyle} - ${ImageName_Unused_SMM1}`, ImageName_UnusedSMM1Regular, 'tiff'>


type ImageName_Unused_SMM1 = | 'Enemy - Necchi' | 'Enemy - Lemmy' | 'Enemy - Wendy' | 'Enemy - Morton' | 'Enemy - KoopaClown'
                             | 'Object Block - Tuta'
                             | 'Object - Goalpole' | 'Object - PSwitch'

type ImageName_UnusedSMM1Regular = | `down_switch_hatena_Alb.00${| 0 | 4}`
                                   | `effect.${| 0 | 1 | 2}`
                                   | 'fire.2'
                                   | `out.${| 0 | 1 | 2 | 3 | 4}`
                                   | 'goalpole.1'
                                   | `wait.${0 | 1 | 2}`
                                   | `weep.${4 | 5 | 6 | 7}`

//endregion -------------------- Unused (regular) --------------------
//region -------------------- Unused (big mushroom) --------------------

type UnusedSMM1BigMushroomImageFile = ImageFile<`entity/unused/M1 A - Enemy - ${SimpleImageName_BigMushroom_Unused_SMM1}`, ImageName_UnusedBigMushroom, 'tiff'>


type SimpleImageName_BigMushroom_Unused_SMM1 = | 'KoopaClown' | 'Kuribo D' | 'Necchi' | `Koopa${| '' | 'Jr'}` | 'SenkanHoudai D'

type ImageName_UnusedBigMushroom = | `anger.${| 4 | 5 | 6 | 7}`
                                   | `blink.${| 4 | 5 | 6 | 7}`
                                   | 'damage.0'
                                   | `fire.${1}`
                                   | 'kutsu'
                                   | 'iron_ball.1'
                                   | `out.${4}`
                                   | 'senkan_houdai_ball'
                                   | `swim.${| 0 | 1}`
                                   | 'tear.1'
                                   | `weep.${| 4 | 5 | 6 | 7}`
                                   | `wait.${| 0 | 2 | 4 | 5 | 6 | 7}`
                                   | `walk.${| 0 | 1}`

//endregion -------------------- Unused (big mushroom) --------------------
