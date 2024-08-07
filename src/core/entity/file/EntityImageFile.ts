import type {ClearConditionEntityImages}    from 'core/entity/ClearConditionEntityImages'
import type {PossibleEnglishName}           from 'core/entity/Entities.types'
import type {UnusedBigMushroomEntityImages} from 'core/entity/UnusedBigMushroomEntityImages'
import type {UnusedEntityImages}            from 'core/entity/UnusedEntityImages'
import type {EditorImageFile}               from 'core/entity/file/EntityImageFile.editor'
import type {InGameImageFile}               from 'core/entity/file/EntityImageFile.inGame'
import type {PossibleAcronym_InFile}        from 'core/gameStyle/GameStyles.types'
import type {ImageFile}                     from 'util/file/image/ImageFile'

/**
 * An {@link ImageFile} made to be related to an {@link Entities}
 *
 * @see EditorImageFile
 * @see GenericEditorImageFile
 * @see PowerUpEditorImageFile
 * @see ClearConditionImageFile
 * @see InGameImageFile
 * @see InGameSMM1ImageFile
 * @see InGameSMM2ImageFile
 * @see UnusedImageFile
 * @see UnusedSmm1ImageFile_BigMushroom
 */
export type EntityImageFile = | EditorImageFile | PossibleClearConditionImageFiles | InGameImageFile | PossibleUnusedEntityImageFiles|PossibleUnusedBigMushroomEntityImageFiles

//region -------------------- clear condition images --------------------

export type ClearConditionImageFile<GAME_STYLE_ACRONYM extends PossibleAcronym_InFile = PossibleAcronym_InFile, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/clear condition/`, `${GAME_STYLE_ACRONYM}_Lyt_M_${FILE_NAME}`, 'tiff', `${NAME} (clear condition)`>

/** The possible {@link ImageFile} that are in a clear condition */
export type PossibleClearConditionImageFiles = ReturnType<typeof ClearConditionEntityImages[| 'COIN' | 'TEN_COIN' | 'THIRTY_COIN' | 'FIFTY_COIN'
                                                                                            | 'SUPER_MUSHROOM' | 'FIRE_FLOWER' | 'SUPERBALL_FLOWER'
                                                                                            | 'MASTER_SWORD' | 'BIG_MUSHROOM' | 'SMB2_MUSHROOM'
                                                                                            | 'SUPER_LEAF' | 'FROG_SUIT' | 'CAPE_FEATHER'
                                                                                            | 'POWER_BALLOON' | 'PROPELLER_MUSHROOM' | 'SUPER_ACORN'
                                                                                            | 'SUPER_BELL' | 'SUPER_HAMMER' | 'BOOMERANG_FLOWER'
                                                                                            | 'CANNON_BOX' | 'PROPELLER_BOX' | 'GOOMBA_MASK'
                                                                                            | 'BULLET_BILL_MASK' | 'RED_POW_BOX' | 'SUPER_STAR'
                                                                                            | 'ONE_UP_MUSHROOM' | 'SHOE' | 'YOSHI_EGG'
                                                                                            | 'GOOMBA' | 'GALOOMBA' | 'GOOMBRAT'
                                                                                            | 'GOOMBUD' | 'GREEN_KOOPA_TROOPA' | 'GREEN_KOOPA_SHELL'
                                                                                            | 'DRY_BONES' | 'DRY_BONES_SHELL' | 'BUZZY_BEETLE'
                                                                                            | 'BUZZY_SHELL' | 'SPINY' | 'SPINY_SHELL'
                                                                                            | 'SPIKE_TOP' | 'SKIPSQUEAK' | 'ANT_TROOPER'
                                                                                            | 'STINGBY' | 'CHEEP_CHEEP' | 'BLURPS'
                                                                                            | 'DEEP_CHEEP' | 'FISH_BONE' | 'BLOOPER'
                                                                                            | 'PORCUPUFFER' | 'WIGGLER' | 'PIRANHA_PLANT'
                                                                                            | 'JUMPING_PIRANHA_PLANT' | 'FIRE_PIRANHA_PLANT' | 'MUNCHER'
                                                                                            | 'PIRANHA_CREEPER' | 'UNCHAINED_CHOMP' | 'SPIKE'
                                                                                            | 'LAKITU' | 'LAKITU_CLOUD' | 'BOO'
                                                                                            | 'PEEPA' | 'BOB_OMB' | 'POKEY'
                                                                                            | 'THWOMP' | 'MONTY_MOLE' | 'ROCKY_WRENCH'
                                                                                            | 'MAGIKOOPA' | 'HAMMER_THROWN_BY_A_YOSHI' | 'SLEDGE_BRO'
                                                                                            | 'LAVA_BUBBLE' | 'MECHAKOOPA' | 'CHARVAARGH'
                                                                                            | 'BUBBLE' | 'BULLET_BILL' | 'BANZAI_BILL'
                                                                                            | 'KOOPA_CLOWN_CAR' | 'JUNIOR_CLOWN_CAR' | 'KOOPA_TROOPA_CAR'
                                                                                            | 'ANGRY_SUN' | 'BOWSER' | 'MEOWSER'
                                                                                            | 'BOWSER_JR' | 'BOOM_BOOM' | 'POM_POM'
                                                                                            | 'LARRY' | 'IGGY' | 'WENDY'
                                                                                            | 'LEMMY' | 'ROY' | 'MORTON'
                                                                                            | 'LUDWIG' | 'SWINGING_CLAW' | 'VINE'
                                                                                            | 'CRATE' | 'TRAMPOLINE' | 'POW_BLOCK'
                                                                                            | 'RED_POW_BLOCK' | 'P_SWITCH' | 'STONE']['image']['get']>

//endregion -------------------- clear condition images --------------------
//region -------------------- unused images --------------------

export type UnusedImageFile<FOLDER_NAME extends string = string, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/unused/${FOLDER_NAME}`, FILE_NAME, 'tiff', `${NAME} (unused)`>

/** The possible {@link ImageFile} that are unused */
export type PossibleUnusedEntityImageFiles = NonNullable<ReturnType<typeof UnusedEntityImages[| 'STRETCH' | 'KOOPA_CLOWN_CAR' | 'WENDY_PROJECTILE'
                                                                                              | 'LEMMY_PROJECTILE' | 'MORTON_GROUND_PROJECTILE' | 'VINE'
                                                                                              | 'GOAL_POLE' | 'P_SWITCH']['image']['all']['get']>>[number][number]
//endregion -------------------- unused images --------------------
//region -------------------- unused Big Mushroom images --------------------

/**
 * An unused Big Mushroom ({@link Entities.BIG_MUSHROOM_CLASSIC classic} / {@link Entities.BIG_MUSHROOM_MODERN modern}) {@link ImageFile}
 * in {@link GameStyles.SUPER_MARIO_BROS SMB} only for {@link Games.SUPER_MARIO_MAKER_1 SMM1}
 */
export type UnusedSmm1ImageFile_BigMushroom<FOLDER_NAME extends string = string, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/unused/M1 A - Enemy - ${FOLDER_NAME}`, FILE_NAME, 'tiff', `${NAME} (unused Big Mushroom)`>
/** The possible {@link ImageFile} that are unused as a Big Mushroom ({@link Entities.BIG_MUSHROOM_MODERN modern} / {@link Entities.BIG_MUSHROOM_CLASSIC classic}) */
export type PossibleUnusedBigMushroomEntityImageFiles = typeof UnusedBigMushroomEntityImages[| 'GOOMBA' | 'STRETCH' | 'CANNONBALL'
                                                                                             | 'KOOPA_CLOWN_CAR' | 'BOWSER' | 'BOWSER_JR']['image']['all'][number]

//endregion -------------------- unused Big Mushroom images --------------------
