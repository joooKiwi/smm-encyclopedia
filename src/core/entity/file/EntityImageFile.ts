 import type {ClearConditionEntityImages}    from 'core/entity/ClearConditionEntityImages'
import type {EditorEntityImages}            from 'core/entity/EditorEntityImages'
import type {PossibleEnglishName}           from 'core/entity/Entities.types'
import type {InGameEntityImages}            from 'core/entity/InGameEntityImages'
import type {UnusedBigMushroomEntityImages} from 'core/entity/UnusedBigMushroomEntityImages'
import type {UnusedEntityImages}            from 'core/entity/UnusedEntityImages'
import type {GameStyles}                    from 'core/gameStyle/GameStyles'
import type {PossibleAcronym_InFile}        from 'core/gameStyle/GameStyles.types'
import type {ImageFile}                     from 'util/file/image/ImageFile'

/**
 * An {@link ImageFile} made to be related to an {@link Entities}
 *
 * @see EditorImageFile
 * @see ClearConditionImageFile
 * @see InGameImageFile
 * @see UnusedImageFile
 * @see UnusedSmm1ImageFile_BigMushroom
 */
export type EntityImageFile = | EditorImageFile
                              | ClearConditionImageFile
                              | InGameImageFile | InGameSmm1ImageFile_BigMushroom
                              | UnusedImageFile | UnusedSmm1ImageFile_BigMushroom

export type EditorImageFile<GAME_STYLE extends GameStyles = GameStyles, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/editor`, `${GAME_STYLE['acronymInFile']}_Lyt_P_${FILE_NAME}`, 'tiff', `${NAME} (editor)`>

//region -------------------- possible editor images --------------------

/** The possible {@link ImageFile} that are in the editor */
export type PossibleEditorImageFile = typeof EditorEntityImages[| 'GROUND' | 'STEEP_SLOPE' | 'GENTLE_SLOPE'
                                                                | 'PIPE' | 'CLEAR_PIPE' | 'SPIKE_TRAP'
                                                                | 'JELECTRO' | 'SEA_URCHIN' | 'SPIKE_BLOCK'
                                                                | 'MUSHROOM_PLATFORM' | 'SEMISOLID_PLATFORM' | 'BRIDGE'
                                                                | 'BRICK_BLOCK' | 'CRISTAL_BLOCK' | 'ROTATING_BLOCK'
                                                                | 'HARD_BLOCK' | 'ROCK_BLOCK' | 'QUESTION_MARK_BLOCK'
                                                                | 'HIDDEN_BLOCK' | 'EXCLAMATION_MARK_BLOCK' | 'NOTE_BLOCK'
                                                                | 'MUSIC_BLOCK' | 'DONUT_BLOCK' | 'CLOUD_BLOCK'
                                                                | 'ON_OFF_SWITCH' | 'DOTTED_LINE_BLOCK' | 'P_BLOCK'
                                                                | 'BLINKING_BLOCK' | 'ICE_BLOCK' | 'ICICLE'
                                                                | 'COIN' | 'FROZEN_COIN' | 'TEN_COIN'
                                                                | 'THIRTY_COIN' | 'FIFTY_COIN' | 'PINK_COIN'
                                                                | 'SUPER_MUSHROOM' | 'FIRE_FLOWER' | 'SUPERBALL_FLOWER'
                                                                | 'MASTER_SWORD' | 'BIG_MUSHROOM' | 'SMB2_MUSHROOM'
                                                                | 'SUPER_LEAF' | 'FROG_SUIT' | 'CAPE_FEATHER'
                                                                | 'POWER_BALLOON' | 'PROPELLER_MUSHROOM' | 'SUPER_ACORN'
                                                                | 'SUPER_BELL' | 'SUPER_HAMMER' | 'BOOMERANG_FLOWER'
                                                                | 'CANNON_BOX' | 'PROPELLER_BOX' | 'GOOMBA_MASK'
                                                                | 'BULLET_BILL_MASK' | 'RED_POW_BOX' | 'SUPER_STAR'
                                                                | 'ONE_UP_MUSHROOM' | 'ROTTEN_MUSHROOM' | 'SHOE_GOOMBA'
                                                                | 'STILETTO_GOOMBA' | 'YOSHI_EGG' | 'RED_YOSHI_EGG'
                                                                | 'GOOMBA' | 'GALOOMBA' | 'GOOMBRAT'
                                                                | 'GOOMBUD' | 'GREEN_KOOPA_TROOPA' | 'RED_KOOPA_TROOPA'
                                                                | 'DRY_BONES' | 'DRY_BONES_SHELL' | 'BUZZY_BEETLE'
                                                                | 'BUZZY_SHELL' | 'SPINY' | 'SPINY_SHELL'
                                                                | 'SPIKE_TOP' | 'FAST_SPIKE_TOP' | 'SKIPSQUEAK'
                                                                | 'SPINY_SKIPSQUEAK' | 'ANT_TROOPER' | 'HORNED_ANT_TROOPER'
                                                                | 'STINGBY' | 'CHEEP_CHEEP' | 'BLURPS'
                                                                | 'DEEP_CHEEP' | 'FISH_BONE' | 'BLOOPER'
                                                                | 'BLOOPER_NANNY' | 'PORCUPUFFER' | 'WIGGLER'
                                                                | 'ANGRY_WIGGLER' | 'PIRANHA_PLANT' | 'JUMPING_PIRANHA_PLANT'
                                                                | 'FIRE_PIRANHA_PLANT' | 'MUNCHER' | 'PIRANHA_CREEPER'
                                                                | 'CHAIN_CHOMP' | 'UNCHAINED_CHOMP'
                                                                | 'SPIKE' | 'SPIKE_BALL' | 'SNOWBALL'
                                                                | 'LAKITU' | 'LAKITU_CLOUD' | 'BOO'
                                                                | 'BOO_BUDDIES' | 'PEEPA' | 'BOB_OMB'
                                                                | 'LIT_BOB_OMB' | 'POKEY' | 'SNOW_POKEY'
                                                                | 'THWOMP' | 'MONTY_MOLE' | 'ROCKY_WRENCH'
                                                                | 'MAGIKOOPA' | 'HAMMER_BRO' | 'SLEDGE_BRO'
                                                                | 'FIRE_BRO' | 'HEAVY_FIRE_BRO' | 'LAVA_BUBBLE'
                                                                | 'MECHAKOOPA' | 'BLASTA_MECHAKOOPA' | 'ZAPPA_MECHAKOOPA'
                                                                | 'CHARVAARGH' | 'BULLY' | 'BILL_BLASTER' | 'BULL_EYE_BLASTER'
                                                                | 'BANZAI_BILL' | 'BULL_EYE_BANZAI' | 'CAT_BANZAI_BILL'
                                                                | 'CANNON' | 'RED_CANNON' | 'BURNER'
                                                                | 'FIRE_BAR' | 'SKEWER' | 'KOOPA_CLOWN_CAR'
                                                                | 'JUNIOR_CLOWN_CAR' | 'FIRE_KOOPA_CLOWN_CAR' | 'FIRE_JUNIOR_CLOWN_CAR'
                                                                | 'KOOPA_TROOPA_CAR' | 'GRINDER' | 'ANGRY_SUN'
                                                                | 'MOON' | 'BOWSER' | 'MEOWSER'
                                                                | 'BOWSER_JR' | 'BOOM_BOOM' | 'POM_POM'
                                                                | 'LARRY' | 'IGGY' | 'WENDY'
                                                                | 'LEMMY' | 'ROY' | 'MORTON'
                                                                | 'LUDWIG' | 'BUMPER' | 'SWINGING_CLAW'
                                                                | 'TWISTER' | 'ONE_WAY_WALL' | 'TRACK'
                                                                | 'TRACK_BLOCK' | 'VINE' | 'TREE'
                                                                | 'ARROW_SIGN' | 'CHECKPOINT_FLAG' | 'DASH_BLOCK'
                                                                | 'SNAKE_BLOCK' | 'FAST_SNAKE_BLOCK' | 'CONVEYOR_BELT'
                                                                | 'FAST_CONVEYOR_BELT' | 'MUSHROOM_TRAMPOLINE' | 'ON_OFF_TRAMPOLINE'
                                                                | 'LIFT' | 'FLIMSY_LIFT' | 'CLOUD_LIFT'
                                                                | 'SEESAW' | 'LAVA_LIFT' | 'FAST_LAVA_LIFT'
                                                                | 'CRATE' | 'KEY' | 'CURSED_KEY'
                                                                | 'TRAMPOLINE' | 'HOP_CHOPS' | 'POW_BLOCK'
                                                                | 'RED_POW_BLOCK' | 'P_SWITCH' | 'WARP_DOOR'
                                                                | 'P_WARP_DOOR' | 'KEY_DOOR' | 'WARP_BOX'
                                                                | 'WARP_BOX_WITH_KEY' | 'WING' | 'PARACHUTE']['image']['images'][number]

//endregion -------------------- possible editor images --------------------

//endregion -------------------- editor images --------------------
//region -------------------- clear condition images --------------------

export type ClearConditionImageFile<GAME_STYLE_ACRONYM extends PossibleAcronym_InFile = PossibleAcronym_InFile, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/clear condition/`, `${GAME_STYLE_ACRONYM}_Lyt_M_${FILE_NAME}`, 'tiff', `${NAME} (clear condition)`>

//region -------------------- possible "clear condition" images --------------------

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

//endregion -------------------- possible "clear condition" images --------------------

//endregion -------------------- clear condition images --------------------
//region -------------------- in game images --------------------

export type InGameImageFile<FOLDER_NAME extends string = string, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/in game/${FOLDER_NAME}`, FILE_NAME, 'tiff', `${NAME} (in game)`>

//region -------------------- possible "in game" images --------------------

export type PossibleInGameImageFile = typeof InGameEntityImages[| 'START_BLOCK' | 'WATER' | 'LAVA'
                                                                | 'POISON' | 'EMPTY_BLOCK' | 'SUPERBALL_THROWN_BY_A_PLAYER'
                                                                | 'MYSTERY_MUSHROOM' | 'WEIRD_MUSHROOM' | 'BOMB_THROWN_BY_A_LINK'
                                                                | 'ARROW_THROWN_BY_A_LINK' | 'BIG_MUSHROOM_CLASSIC' | 'BIG_MUSHROOM_MODERN'
                                                                | 'SHOE_GOOMBA' | 'SHOE' | 'STILETTO_GOOMBA'
                                                                | 'STILETTO' | 'YOSHI_EGG' | 'FIRE_THROWN_BY_A_YOSHI'
                                                                | 'POISON_THROWN_BY_A_YOSHI' | 'RED_YOSHI_EGG' | 'BONE_THROWN_BY_A_DRY_BONES'
                                                                | 'WINGED_SPINY_PROJECTILE' | 'SPINY_EGG' | 'BABY_BLOOPER'
                                                                | 'WRENCH_THROWN_BY_A_ROCKY_WRENCH' | 'MAGIKOOPA_PROJECTILE' | 'HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO'
                                                                | 'HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA' | 'FIRE_BAR' | 'FIRE_THROWN_BY_A_BOWSER'
                                                                | 'FALLING_FIRE_THROWN_BY_A_BOWSER' | 'LARRY_WAND'
                                                                | 'LARRY_PROJECTILE' | 'IGGY_WAND' | 'IGGY_PROJECTILE'
                                                                | 'WENDY_WAND' | 'CANDY_RING_THROWN_BY_A_WENDY' | 'LEMMY_WAND'
                                                                | 'MAGIC_BALL_THROWN_BY_A_LEMMY' | 'ROY_WAND' | 'ROY_PROJECTILE'
                                                                | 'MORTON_WAND' | 'MORTON_THROWN_PROJECTILE' | 'MORTON_GROUND_PROJECTILE'
                                                                | 'LUDWIG_WAND' | 'LUDWIG_PROJECTILE' | 'PHANTO'
                                                                | 'AXE' | 'BUBBLE']['image']['images'][number]
export type InGameSmm1ImageFile_BigMushroom<FOLDER_NAME extends string = string, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/in game/M1 A Enemy - ${FOLDER_NAME}`, FILE_NAME, 'tiff', `${NAME} (in game Big Mushroom)`>

//endregion -------------------- possible "in game" images --------------------

//endregion -------------------- in game images --------------------
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
 * in {@link SMB} only for {@link SMM1}
 */
export type UnusedSmm1ImageFile_BigMushroom<FOLDER_NAME extends string = string, FILE_NAME extends string = string, NAME extends PossibleEnglishName = PossibleEnglishName, >
    = ImageFile<`entity/unused/M1 A Enemy - ${FOLDER_NAME}`, FILE_NAME, 'tiff', `${NAME} (unused Big Mushroom)`>

/** The possible {@link ImageFile} that are unused as a Big Mushroom ({@link Entities.BIG_MUSHROOM_MODERN modern} / {@link Entities.BIG_MUSHROOM_CLASSIC classic}) */
export type PossibleUnusedBigMushroomEntityImageFiles = typeof UnusedBigMushroomEntityImages[| 'GOOMBA' | 'STRETCH' | 'CANNONBALL'
                                                                                             | 'KOOPA_CLOWN_CAR' | 'BOWSER' | 'BOWSER_JR']['image']['all'][number]

//endregion -------------------- unused Big Mushroom images --------------------
